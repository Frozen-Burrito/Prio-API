const {Todo} = require('../models');

const get_todos = async (req, res) => {
  try {
    const todos = await Todo.find();
  
    return res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      errmsg: error
    });
  }
}

const add_todo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);

    return res.status(201).json({
      success: true,
      data: newTodo
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      errmsg: error
    });
  }
}

const delete_todo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        errmsg: 'There are no todos with this _id'
      });
    }

    await todo.remove();

    return res.status(201).json({
      success: true,
      data: 'Todo deleted'
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      errmsg: error
    });
  }
}

module.exports = {
  get_todos,
  add_todo,
  delete_todo
}