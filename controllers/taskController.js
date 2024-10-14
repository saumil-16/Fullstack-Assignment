const Task = require("../models/taskModel");

exports.createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({  // Changed status code to 201 for resource creation
      status: "success",
      data: {
        task
      }
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed to create task",
      message: e.message // Optional: include the error message for debugging
    });
  }
};

exports.getAllTask = async (req, res, next) => {
  try {
    const taskList = await Task.find(); // Fetch all tasks
    res.status(200).json({
      status: "success",
      count: taskList.length,
      data: {
        tasks: taskList // Return taskList instead of task
      }
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed to get all tasks",
      message: e.message // Optional: include the error message for debugging
    });
  }
};

exports.getOneTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({  // Handle case when task not found
        status: "fail",
        message: "Task not found"
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        task // Return the single task found
      }
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed to get task",
      message: e.message // Optional: include the error message for debugging
    });
  }
};
