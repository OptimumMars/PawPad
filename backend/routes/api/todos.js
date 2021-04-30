const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Pet, ToDo, Note } = require('../../db/models');

const router = express.Router();

//add a new To-Do item
router.post(
    '/new',
    asyncHandler(async (req, res) => {
        const { item, petId } = req.body;

        const todo = ToDo.create({
            item,
            petId
        })

        await res.json(todo)
    })
)

//Delete a specific todo item
router.delete(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const todoId = req.params.id
        console.log('todoId:', todoId)

        const todo = await ToDo.findByPk(todoId);
        console.log('todo:', todo)

        await todo.destroy();
    })
)

//Update the checked status of a todo item
router.put(
    '/:id(\\d+)/check',
    asyncHandler(async (req, res) => {
        console.log("Router.PUT being run")

        const todoId = { where: { id: req.params.id } }
        const checked = { checked: req.body.checked }

        await ToDo.update(checked, todoId)
        console.log("todo has been updated")

        return res.json({
            todoId,
            checked,
        });
    })
)

module.exports = router
