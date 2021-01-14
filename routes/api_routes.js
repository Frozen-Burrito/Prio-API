const express = require('express');
const { 
  get_todos,
  add_todo,
  delete_todo
} = require('../controllers/todo_controller');

const router = express.Router();

// GET - /api/v1/todos
router.route('/todos')
  .get(get_todos)
  .post(add_todo);

router.delete('/todos/:id', delete_todo)

module.exports = router;