const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const mongodbCredentials = require('./credentials/mongodb.json');

const server = express();

mongoose.connect(`mongodb+srv://${mongodbCredentials.user}:${mongodbCredentials.password}@cluster0-fg9nl.mongodb.net/tindev?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);