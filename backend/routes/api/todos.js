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

        // await todo.save();
    })
)

module.exports = router
