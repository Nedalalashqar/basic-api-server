'use strict';

const express = require('express');
const router = express.Router();
const {Food} = require('../models/index');

router.get('/food', getTypeFood);
router.get('/food/:id', getOneTypeFood);
router.post('/food', createTypeFood);
router.put('/food/:id', updateTypeFood);
router.delete('/food/:id', deleteTypeFood);

async function getTypeFood(req, res) {
    let foodType = await Food.findAll();
    res.status(200).json(foodType);
}
async function getOneTypeFood(req, res) {
    const id = parseInt(req.params.id); 
    let foodType = await Food.findOne({ where: {id: id} });
    res.status(200).json(foodType);
}
async function createTypeFood(req, res) {
    let newTypeFood = req.body;
    let foodType = await Food.create(newTypeFood);
    res.status(200).json(foodType);
}
async function updateTypeFood(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let found = await Food.findOne({ where: {id: id} });
    let updateTypeFood = await found.update(obj);
    res.status(200).json(updateTypeFood);
}
async function deleteTypeFood(req,res) {
    let id = parseInt(req.params.id);
    let deleteTypeFood = await Food.destroy({where: {id: id}});
    res.status(204).json(deleteTypeFood);
}

module.exports = router;