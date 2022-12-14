const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');
const Todo = new mongoose.model("Todo",todoSchema);

const app = express();
app.use(express.json());
//get all the todos
router.get('/',async (req,res) => {

});

//get a todo by ID
router.get('/:id',async (req,res) => {

});

//post todo
router.post("/",async (req,res) => {

    const newTodo = new Todo(req.body);

    await newTodo.save((err) => {
        if(err){
            res.status(500).json({
                error:"There was a server side error!",
            });
        }
        else{
            res.status(200).json({
                message:"Todo was inserted successfully!",
            });
        }
    })
});

//post multiple todo
router.post('/all',async(req,res) => {
    await Todo.insertMany(req.body,(err) => {
        if(err){
            res.status(500).json({
                error:"There was a server side error!",
            });
        }
        else{
            res.status(200).json({
                message:"Todo was inserted successfully!",
            });
        }
    });
})

//put todo
router.put('/:id',async (req,res) => {

});

//delete todo
router.delete('/:id',async (req,res) => {

});

module.exports = router;

