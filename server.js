'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('views', './templates');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', require('./controllers/home').get);
app.get('/login', require('./controllers/login').get);
app.get('/translate', require('./controllers/translate').get);
app.get('/inspection', require('./controllers/inspection').get);
app.get('/upload', require('./controllers/upload').get);
app.get('/download', require('./controllers/download').get);
app.get('*', function (req, res) {
    res.send("404 - This page not found!!!");
});

app.listen(8000, function () {
    console.log("Server is up on port 8000");
});