const express = require('express')

const Characters = require('../characters/characters-model')

const server = express();

server.use(express.json())

server.get('/', (req,res) => {
    res.status(200).json({api:"up"})
})

server.get("characters", (req,res) => {
    Characters.getAll()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(400).json({message:error.message})
    })
})

module.exports = server