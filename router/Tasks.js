const {getAllTasks,createTask,editTask,deleteTask, getTask}= require('../controllers/tasks')
const express=require('express');
router=express.Router();
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').patch(editTask).delete(deleteTask).get(getTask)
module.exports=router