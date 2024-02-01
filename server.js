const express = require("express");
const bodyParser = require("body-parser"); // Add this line

const data = require("./data");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/generate", (req, res) => {
  res.render("tables", { data: data, rows: req.body.rows, cols: req.body.columns });
});

app.listen(3000, () => console.log("Server running successfully"));
