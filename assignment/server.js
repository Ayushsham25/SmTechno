import express from "express";
import connectDB from "./config/db.js";
import cors from 'cors';
import Student from "./model/stumodel.js";

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

//  adding student
app.post('/api/students', async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json(student);
});

//  get  students email
app.get('/api/students', async (req, res) => {
  if (req.query.search) {
    const students = await Student.find({ email: req.query.search });
    res.json(students);
  } else {
    const students = await Student.find();
    res.json(students);
  }
});

//  find student
app.get('/api/students/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});


//  Delete 
app.delete('/api/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});


// port
app.listen(5070, () => console.log('Server running on port 5070'));