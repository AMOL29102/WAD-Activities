const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors');
const app = express()
const PORT = 3000

const students = JSON.parse(fs.readFileSync(path.join(__dirname, "students.json"), "utf8"));

app.use(cors());

app.get("/students", (req, res)=>{
    res.status(200).json(students);
})

app.get("/students/:id", (req, res)=>{
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
})

app.listen(PORT, ()=>{
    console.log(`Listing on port ${PORT}`)
})