const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Pet, ToDo, Note } = require('../../db/models');

const router = express.Router();

//Get a specific pet to view
router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const petId = req.params.id

        const pet = await Pet.findByPk(petId, {
            include: [
                {
                    model: ToDo,
                },
                {
                    model: Note,
                }
            ]
        })

        return res.json(pet);
    })
);

//Add a new pet
router.post(
    '/new',
    asyncHandler(async (req, res) => {
        const { name, type, userId } = req.body;

        const pet = Pet.create({
            name,
            type,
            userId
        });

        await res.json(pet)
    })
)

//Delete a specific pet
router.delete(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const petId = req.params.id

        const pet = await Pet.findByPk(petId);

        await pet.destroy();
    })
)

module.exports = router
