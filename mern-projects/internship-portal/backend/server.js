const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "https://ten-internship-new.vercel.app" }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Ten Internship server says hello");
});

const adminRoutes = require("./src/routes/adminRoutes");
app.use("/admin", adminRoutes);

const recruiterRoutes = require("./src/routes/recruiterRoutes");
app.use("/recruiter", recruiterRoutes);

const studentRoutes = require("./src/routes/studentRoutes");
app.use("/student", studentRoutes);

const miscRoutes = require("./src/routes/miscellaneous.js");
app.use("/misc", miscRoutes);

app.use("*", (req, res) => {
  res.status(404).send("404 - Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running locally on port ${PORT}`);
});

module.exports = app;
