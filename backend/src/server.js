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
// app.use("/user", userRoutes);
// app.use("/students", studentRoutes);


// define first route
app.get("/", (req, res) => {
    res.send('PORTAL DE ALUNOS')
    console.log("Hello MEAN Soldier...Ready For Battle??");
});
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});