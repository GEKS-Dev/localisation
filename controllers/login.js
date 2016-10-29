'use strict';
module.exports = {
    get: function (req, res) {
        res.render('../templates/login', {errors: res.locals.error});
    },
    post: function (req, res) {
        res.redirect('/');
    }
};