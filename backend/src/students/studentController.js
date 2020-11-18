const Student = require("./studentModel")

exports.create = async (req, res) => {
	const student = await Student(req.body);
	try {
		await student.save();
		res.send(student);
	} catch (err) {
		res.status(500).send(err);
	} finally {
		console.log(student);
	}
};

exports.delete = (req, res) => {
	Student.findByIdAndRemove(req.params.id)
		.then(student => {
			if (!student) {
				return res.status(404).send({
					message: "Student not found with id " + req.params.id
				});
			}
			res.send({ message: "Student deleted successfully!" });
		}).catch(err => {
			if (err.kind === 'ObjectId' || err.name === 'NotFound') {
				return res.status(404).send({
					message: "Student not found with id " + req.params.id
				});
			}
			return res.status(500).send({
				message: "Could not delete student with id " + req.params.id
			});
		});
};

exports.findAll = async (req, res) => {
	const students = await Student.find({});
	try {
		res.send(students)
	} catch (err) {
		res.status(500).send(err);
	}
}

exports.findOne = async (req, res) => {
	const id = req.params.id;
	console.log("ID", id)
	await Student.findOne({'_id': id}, (err, result) => {
		console.log('RESULT', result)
		if (err) {
			console.log(err)
		} else {
			res.status(200).send(result)
		}
	})
}

exports.update = async (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "Student content can not be empty"
		});
	}

	try {
		await Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
			.then(student => {
				if (!student) {
					return res.status(404).send({
						message: "Student not found with id " + req.params.id
					})
				}
				res.send(student);
			}).catch(err => {
				if (err.kind === 'ObjectId') {
					return res.status(404).send({
						message: "Student not found with id " + req.params.id
					});
				}

				return res.status(500).send({
					message: "Error updating student with id " + req.params.id
				});
			})
	} catch (err) {
		res.status(500).send({
			message: "Error updating student with id " + req.params.id
		});
	}
}
