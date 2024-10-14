const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

// Ensure getAllTasks matches the function in your controller
router.route("/").get(taskController.getAllTasks).post(taskController.createTask);
router.route("/:id").get(taskController.getOneTask);

module.exports = router;
