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
	let userCredentials = {
		email: req.body.email,
    password: req.body.password
	}
	
	try {
		const user = await User.findOne({ email: req.body.email });
		// Verifique se o usuário existe
		if (!user) {
			return res.status(404).json({ message: 'Usuário não encontrado' });
		}

		// Se o usuário existir, compare a senha
		const isPasswordValid = await user.compareUserPassword(req.body.password);

		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Senha inválida' });
		}

		// Retornar o sucesso ou token aqui
		let token = await user.generateJwtToken({ user }, "secret", {
			expiresIn: 604800
		})
		if (token) {
			res.status(200).json({
				success: true,
				token: token,
				userCredentials: user
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