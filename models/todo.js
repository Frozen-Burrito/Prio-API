const { Schema, model } = require('mongoose');

const TodoSchema = new Schema({
  title: String,
  complete: false,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('todo', TodoSchema);