const express = require("express");
const data = require("./../data");
const studentRouter = express.Router();
const fs = require("fs");
const path = require("path"); // Import the path module for path manipulation
const methodOverride = require("method-override");

studentRouter.use(methodOverride('_method'));

studentRouter.get("/", (req, res) => {
    res.render("students", { students: data, date: req.session.date });
});

studentRouter.get("/:id", (req, res) => {
    const studentId = req.params.id;
    data[studentId]["absent"] = !data[studentId]["absent"]; // Toggle absent status

    const filePath = path.resolve(__dirname, "./../data.js");
    fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(data, null, 4)};`);

    res.redirect("/generate");
});

module.exports = studentRouter;
