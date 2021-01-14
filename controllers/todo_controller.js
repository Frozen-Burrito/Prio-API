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
    })
  }
}

module.exports = {
  get_todos
}