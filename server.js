'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('views', './templates');
app.set('view engine', 'pug');

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', require('./controllers/home'));
app.get('*', function (req, res) {
    res.send("404 - This page not found!!!");
});

app.listen(8000, function () {
    console.log("Server is up on port 8000");
});