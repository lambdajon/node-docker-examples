'use strict';

const { Router } = require('express');
const todoController = require('./todo.controller');

const router = Router({ mergeParams: true });

router.get('/status', (_, res) => res.send('OK'));

router.route('/todos').post(todoController.create).get(todoController.getAll);

module.exports = router;
