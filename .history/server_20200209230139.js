//  server.js
// const express = require('express')

import express from 'express';

const app = express()

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).send({
        'message': 'Welcome to my first API created with love!'
    });
})


const port = process.env.PORT || 4000;
app.listen(port, () => {
        console.log(`running app on port ${port}`);
    })
    // app.listen(4000)

// console.log('running app on port', 4000);

import Event from './src/controllers/event';

app.post('/api/v1/Events', Event.addPost);
app.get('/api/v1/Events', Event.getAll);