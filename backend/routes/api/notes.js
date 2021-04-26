const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Pet, ToDo, Note } = require('../../db/models');

const router = express.Router();

//Add a new Note
router.post(
    '/new',
    asyncHandler(async (req, res) => {
        const { title, content, petId } = req.body;

        const note = Note.create({
            title,
            content,
            petId
        });

        await res.json(note)
    })
)

module.exports = router
