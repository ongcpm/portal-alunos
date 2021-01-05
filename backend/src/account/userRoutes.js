const express = require("express");
const router = express.Router();
const userController = require("./userController");
const auth = require("../middleware/auth")

router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);

router.get("/users", auth, userController.findAll);
router.get("/:id", auth, userController.findOne)

router.put("/edit/:id", auth, userController.updateUser)

router.delete("/delete/:id", auth, userController.deleteUser)

module.exports = router;