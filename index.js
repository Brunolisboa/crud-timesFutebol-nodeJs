const { json } = require('body-parser');
const { time } = require('console');
const express = require('express');

const server = express();

server.use(express.json());

const times = [ 'Cruzeiro', 'Corinthians', 'Santos', 'Palmeiras', 'Flamengo', 'Atlético-MG', 'São Paulo' ]

// Get By Id
server.get('/times/:index', (req, res) => {
    const { index } = req.params;

    return res.json(times[index]);
});

// GetAll
server.get('/times', (req, res) => {
    return res.json(times);
});

// Create
server.post('/times', (req, res) => {
    const { name } = req.body;
    times.push(name);

    return res.json(times);
});

// Put
server.put('/times/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    times[index] = name;

    return res.json(times);
});

// Delete
server.delete('/times/:index', (req, res) => {
    const { index } = req.params;

    times.splice(index, 1);
    return res.json({ message: "Time deletado com Sucesso" });
});

server.listen(3000);