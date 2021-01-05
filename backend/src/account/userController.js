const User = require("./userModel");

exports.registerNewUser = async (req, res) => {
	try {
		let user = new User({
			name: req.body.name,
			phone_number: req.body.phone_number,
			email: req.body.email
		})
		user.password = await user.hashPassword(req.body.password);
		let createdUser = await user.save();
		res.status(200).json({
			msg: "YEAH! User created!",
			data: createdUser
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			error: err
		})
	}
}

exports.loginUser = async (req, res) => {
	const login = {
		email: req.body.email,
		password: req.body.password
	}
	try {
		let user = await User.findOne({
			email: login.email
		});
		//check if user exit
		if (!user) {
			res.status(400).json({
				type: "Not Found",
				msg: "Wrong Login Details"
			})
		}
		let match = await user.compareUserPassword(login.password, user.password);
		if (match) {
			let token = await user.generateJwtToken({
				user
			}, "secret", {
				expiresIn: 604800
			})
			if (token) {
				res.status(200).json({
					success: true,
					token: token,
					userCredentials: user
				})
			}
		} else {
			res.status(400).json({
				type: "Not Found",
				msg: "Wrong Login Details"
			})
		}
	} catch (err) {
		console.log(err)
		res.status(500).json({
			type: "Something Went Wrong",
			msg: err
		})
	}
}

exports.findAll = async (req, res) => {
	const users = await User.find({});
	try {
		res.send(users)
	} catch (err) {
		res.status(500).send(err);
	}
}

exports.findOne = async (req, res) => {
	const id = req.params.id;
	await User.findOne({ '_id': id }, (err, result) => {
		console.log('RESULT', result)
		if (err) {
			console.log(err)
		} else {
			res.status(200).send(result)
		}
	})
}

exports.updateUser = async (req, res) => {
	try {
		const options = { new: true };
		const user = await User.findByIdAndUpdate(req.params.id, req.body, options);
		res.json({ user: user, msg: 'User updated!' });
	} catch (err) {
		res.status(500).json({ err });
	}
}

exports.deleteUser = async (req, res) => {
	try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
}