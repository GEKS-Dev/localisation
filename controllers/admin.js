'use strict';

const User = require('../models/user');

module.exports = {
    get: function (req, res) {
        User.getAll(function(err, result) {
            if (err) throw err;
            res.render('../templates/admin', {users: result});
        });
    }
};
