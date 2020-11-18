const express = require("express");
const PORT = process.env.PORT || 4000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("./config/db")(app);

app.use(cors()); // configure cors

//configure body parser
app.use(bodyParser.urlencoded({
    extended: false
}));

//configure body-parser ends here
app.use(bodyParser.json());


app.use(morgan("dev")); // configire morgan

const userRoutes = require("./account/userRoutes"); //bring in our user routes
const studentRoutes = require("./students/studentRoutes");
app.use("/user", userRoutes);
// app.use("/students", studentRoutes);


// define first route
app.get("/", (req, res) => {
    res.send('PORTAL DE ALUNOS')
    console.log("Hello MEAN Soldier...Ready For Battle??");
});

app.get("/user/login", (req, res) => {
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
})

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});