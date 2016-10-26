'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('cookie-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/t-servicedb');
const db = mongoose.connection;


const app = express();
app.set('views', './templates');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
    secret: 'kqjuhdqwiudqweidgqwedilygebdd978263e21978jkdcf78 465 huUOIjkliudyweiudhqjwdlijuw3',
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));

app.use(flash());
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('saccess_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
});

app.get('/', require('./controllers/home').get);
app.get('/register', require('./controllers/register').get);
app.post('/register', require('./controllers/register').post);
app.get('/login', require('./controllers/login').get);
app.post('/login', require('./controllers/login').post);
app.get('/translate', require('./controllers/translate').get);
app.get('/inspection', require('./controllers/inspection').get);
app.get('/upload', require('./controllers/upload').get);
app.get('/download', require('./controllers/download').get);
app.use('*', function (req, res) {
    res.send("404 - This page not found!!!");
});

app.listen(8000, function () {
    console.log("Server is up on port 8000");
});