const Level = require('./levelModel');

exports.create = async (req, res) => {
	const level = await Level(req.body);
	try {
		await level.save();
		res.send(level);
	} catch (err) {
		res.status(500).send(err);
	} finally {
		console.log(level);
	}
};

exports.findAll = async (req, res) => {
	const level = await Level.find({});
	try {
		res.send(level)
	} catch (err) {
		res.status(500).send(err);
	}
}

exports.findOne = async (req, res) => {
	const id = req.params.id;
	await Level.findOne({ '_id': id }, (err, result) => {
		console.log('RESULT', result)
		if (err) {
			console.log(err)
		} else {
			res.status(200).send(result)
		}
	})
}

exports.updateLevel = async (req, res) => {
	
	if (!req.body) {
		return res.status(400).send({
			message: "Student content can not be empty"
		});
	}

	try {
		const options = { new: true };
		const level = await Level.findByIdAndUpdate(req.params.id, req.body, options);
		
		res.json({ level: level, msg: 'Level updated!' });
	} 
	
	catch (err) {
		res.status(500).json({ err });
	}
}

exports.deleteLevel = async (req, res) => {
	try {
		const level = await Level.findByIdAndDelete(req.params.id);
		res.json(level);
	} catch (error) {
		res.status(500).json({ error });
	}
}
