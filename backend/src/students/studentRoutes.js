const express = require("express");
const router = express.Router();
const studentController = require("./studentController");
const auth = require("../middleware/auth")

router.get("/", auth, studentController.findAll)
router.get("/:id", auth, studentController.findOne)
router.post("/", auth, studentController.create)
router.get("/:id", auth, studentController.delete)
router.patch("/:id", auth, studentController.update)

module.exports = router;