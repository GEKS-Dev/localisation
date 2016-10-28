'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
      bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(newUser.password, salt, function (err, hash) {
                newUser.password = hash;
              newUser.save(callback);
          });
      });
};