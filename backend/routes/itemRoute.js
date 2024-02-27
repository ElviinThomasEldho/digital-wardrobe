import express from "express";
import { Item } from "../models/itemModel.js";

const router = express.Router()

// Route for save new item
router.post('/', async (request, response) => {
    try {
        if(!request.body.name || !request.body.type || !request.body.image || !request.body.category || !request.body.season) {
            return response.status(400).send({
                message: 'Send all required fields: name, type, image, category, season'
            })
        }

        const newItem = {
            name: request.body.name,
            image: request.body.image,
            type: request.body.type,
            category: request.body.category,
            season: request.body.season,
        }

        const item = await Item.create(newItem);

        return response.status(201).send(item);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//Route for getting All items from database
router.get('/', async (request, response) => {
    try {
        const items = await Item.find({});

        return response.status(200).json({
            count: items.length,
            data: items
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

//Route for getting one item from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const item = await Item.findById(id);

        return response.status(200).json(item);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

//Route for updating a item
router.put('/:id', async (request, response) => {
    try {
        if(!request.body.name || !request.body.type || !request.body.image || !request.body.category || !request.body.season) {
            return response.status(400).send({
                message: 'Send all required fields: name, type, image, category, season'
            })
        }

        const { id } = request.params;

        const result = await Item.findByIdAndUpdate(id, request.body);
        console.log(result);
        if (!result) {
            response.status(404).send({ message: 'Item not found' })
        }

        return response.status(200).json({ message: 'Item updated successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

//Route for getting one item from database by id
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Item.findByIdAndDelete(id);

        if (!result) {
            response.status(404).send({ message: 'Item not found' })
        }

        return response.status(200).json({ message: 'Item deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

export default router;