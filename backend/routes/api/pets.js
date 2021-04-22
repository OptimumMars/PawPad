const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Pet, ToDo, Note } = require('../../db/models');

const router = express.Router();

//Get a specific pet to view
router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const petId = req.params.petId
        const pet = await Pet.findByPk(petId, {
            include: [
                {
                    model: ToDo,
                    as: 'todos'
                },
                {
                    model: Note,
                    as: 'notes'
                }
            ]
        })
        console.log(pet);
        return res.json(pet);
    })
);

module.exports = router
