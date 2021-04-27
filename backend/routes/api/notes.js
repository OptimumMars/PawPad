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

//Delete a specific Note
router.delete(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const noteId = req.params.id

        const note = await Note.findByPk(noteId);

        await note.destroy();
    })
)

module.exports = router
