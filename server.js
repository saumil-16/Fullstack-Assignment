const express = require("express");
const app = express(); // Initialize express app
const taskRouter = require("./routes/taskRoutes");
const { MONGO_USER, MONGO_PASSWORD } = require("./config/config");

// Update MongoDB URI format with service name 'mongo'
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@mongo:27017/?authSource=admin`;

const mongoose = require("mongoose");

// Use the MONGO_URL variable to connect to MongoDB
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((e) => {
    console.log("Error trying to connect MongoDB:", e);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello World using Express and Docker</h1>");
});

app.use("/api/v1/tasks", taskRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
});
