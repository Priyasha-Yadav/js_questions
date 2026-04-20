const express = require('express');
const { addTask, getTasks, deleteTask, updateTask } = require('../controller/taskController.js')
const router = express.Router();

router.get('/', getTasks);
router.post('/post-task', addTask);
router.delete('/delete-task/:id', deleteTask);
router.patch('/update-task/:id', updateTask);

module.exports = router;