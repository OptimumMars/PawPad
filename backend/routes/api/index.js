// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const petsRouter = require('./pets.js');
const todosRouter = require('./todos.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/pets', petsRouter);

router.use('/todos', todosRouter);

module.exports = router;
