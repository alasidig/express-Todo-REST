const express = require('express')
const app = express()
app.use(express.json())
const {getTasks, addTask, getTaskById, updateTask, deleteTask, getObjectOr404} = require("./models/tasksDbController");
// const {getTasks, addTask, getTaskById, updateTask, deleteTask, getObjectOr404} = require("./models/tasksController");

app.get("/", (req,res)=>res.send("Welcome to REST <a href='/tasks'>Click here</a>"))

app.route('/tasks')
    .get(getTasks)
    .post(addTask)
app.route('/tasks/:id')
    .get(getObjectOr404,getTaskById)
    .put(getObjectOr404,updateTask)
    .delete(getObjectOr404,deleteTask)

app.listen(3000, () => {
  console.log('server started');
});
