import express from "express";
import { Player } from "../models/playerModel.js";

const router = express.Router()

// Route for save new player
router.post('/', async (request, response) => {
    try {
        if(!request.body.firstName || !request.body.lastName || !request.body.image) {
            return response.status(400).send({
                message: 'Send all required fields: firstName, lastName, image'
            })
        }

        const newPlayer = {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            image: request.body.image,
        }

        const player = await Player.create(newPlayer);

        return response.status(201).send(player);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//Route for getting All players from database
router.get('/', async (request, response) => {
    try {
        const players = await Player.find({});

        return response.status(200).json({
            count: players.length,
            data: players
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

//Route for getting one player from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const player = await Player.findById(id);

        return response.status(200).json(player);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

//Route for updating a player
router.put('/:id', async (request, response) => {
    try {
        if(!request.body.firstName || !request.body.lastName || !request.body.image) {
            return response.status(400).send({
                message: 'Send all required fields: firstName, lastName, image'
            })
        }

        const { id } = request.params;

        const result = await Player.findByIdAndUpdate(id, request.body);
        console.log(result);
        if (!result) {
            response.status(404).send({ message: 'Player not found' })
        }

        return response.status(200).json({ message: 'Player updated successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

//Route for getting one player from database by id
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Player.findByIdAndDelete(id);

        if (!result) {
            response.status(404).send({ message: 'Player not found' })
        }

        return response.status(200).json({ message: 'Player deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

export default router;