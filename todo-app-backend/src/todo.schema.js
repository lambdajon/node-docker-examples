'use strict';

const { Schema, model } = require('mongoose');

const TodoSchema = new Schema({
  title: String,
  content: String
});

module.exports = model('todos', TodoSchema);
