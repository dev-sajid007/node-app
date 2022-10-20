const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require('./routes/todoHandler');

const app = express();
app.use(express.json());

//database connection with mongoose
mongoose.connect('mongodb://localhost/todos')
.then(() => {
    console.log('Connection Successfull');
})
.catch((err) => console.log(err));

//applicatuin routes
app.use('/todo',todoHandler);


app.listen(3000,() => {
    console.log("Server Start");
});