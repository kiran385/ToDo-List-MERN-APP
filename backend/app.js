const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const todoRoute = require("./routes/todo");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/todo", todoRoute);

mongoose
  .connect("mongodb+srv://22it060:22it060@cluster0.lw6qeph.mongodb.net/")
  .then((res) => {
    console.log("Connected to a Database");
  })
  .then(() => {
    app.listen(port, () => {
      console.log("Server are running in Port 3000");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
