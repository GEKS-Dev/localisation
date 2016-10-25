'use strict';
module.exports = {
    get: function (req, res) {
        res.render('../templates/login');
    },
    post: function (req, res) {
        res.end('Все получилось!');
    }
};