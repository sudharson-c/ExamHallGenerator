const express = require("express")
const data = require("./../data")
const studentRouter = express.Router();
const methodOverride = require("method-override")
studentRouter.use(methodOverride('_method'));
studentRouter.get("/",(req,res)=>{
    res.render("students",{students:data})
})

studentRouter.get("/:id",(req,res)=>{
    const studentId = req.params.id;
    data[studentId]["absent"] ? data[studentId]["absent"] = false : data[studentId]["absent"] = true;
    res.redirect("/generate")
})


module.exports = studentRouter