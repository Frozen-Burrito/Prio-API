const express = require('express');
const { 
  get_todos
} = require('../controllers/todo_controller');

const router = express.Router();

// GET - /api/v1/todos
router.get('/todos', get_todos);

module.exports = router;