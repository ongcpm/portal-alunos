const express = require("express");
const router = express.Router();
const levelController = require("./levelController");
const auth = require("../middleware/auth")

router.post("/create", auth, levelController.create);
router.get("/", auth, levelController.findAll);
router.get("/:id", auth, levelController.findOne);

router.put("/edit/:id", auth, levelController.updateLevel)

router.delete("/delete/:id", auth, levelController.deleteLevel)


module.exports = router; 