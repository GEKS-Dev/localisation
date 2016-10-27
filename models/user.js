'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/t-servicedb');
const db = mongoose.connection;

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    translator: {
        type: Boolean
    },
    inspector: {
        type: Boolean
    },
    admin: {
        type: Boolean
    }
});