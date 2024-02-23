const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session'); // Import express-session
const data = require("./data");
const app = express();
const cors = require("cors");
const studentRouter = require("./api/studentRouter");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true })); // Set up session middleware
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/students", studentRouter);
app.use(cors());

app.get("/generate", (req, res) => {
  const rows = req.session.rows || 10;
  const cols = req.session.cols || 5;
  res.render("tables", { data: data, rows: rows, cols: cols });
});

app.post("/generate", (req, res) => {
  const rows = req.body.rows
  const cols = req.body.columns
  req.session.rows = rows; 
  req.session.cols = cols; 
  res.render("tables", { data: data, rows: rows, cols: cols });
});

app.listen(5000, () => console.log("Server running successfully"));
