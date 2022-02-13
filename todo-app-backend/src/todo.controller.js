'use strict';

const TodoModel = require('./todo.schema');

const create = async (req, res) => {
  const data = req.body;
  try {
    const newTodo = await TodoModel.create(data);
    res.send(newTodo);
  } catch (e) {
    console.error(e);
  }
};

const getAll = async (_, res) => {
  try {
    const todos = TodoModel.find().lean();
    res.send({
      msg: 'OK',
      data: todos
    });
  } catch (e) {
    console.error(err);
  }
};

module.exports = {
  create,
  getAll
};
