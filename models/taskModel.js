const mongoose = require("mongoose");
const { type } = require("os");

const taskSchema = mongoose.Schema({
  taskTitle : {
    type : String,
    required: [true, "Task title is required"]
  },
  taskDesc : {
    type : String,
    required: [true, "Task desc is required"]
  }
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;