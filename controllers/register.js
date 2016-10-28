'use strict';
const User = require('../models/user');

module.exports = {
    get: function (req, res) {
        res.render('../templates/register');
    },
    post: function (req, res) {
        let username = req.body.inputName;
        let email = req.body.inputEmail;
        let password = req.body.inputPassword;
        let password2 = req.body.inputRePassword;

        //Валидация
        req.checkBody('inputName', 'Необходимо заполнить имя пользователя').notEmpty();
        req.checkBody('inputEmail', 'Необходимо заполнить электропочту').notEmpty();
        req.checkBody('inputEmail', 'Электропочта заполнена неверно').isEmail();
        req.checkBody('inputPassword', 'Необходимо заполнить пароль').notEmpty();
        req.checkBody('inputRePassword', 'Пароли не совпадают').equals(password2);

        let errors = req.validationErrors();

        if (errors) {
            res.render('../templates/register', {
                errors: errors
            });
        } else {
            let newUser = new User({
                username: username,
                email: email,
                password: password,
                translator: false,
                inspector: false,
                admin: false
            });
            User.createUser(newUser, function(err, user) {
                if (err) throw err;
                console.log(user);
            });

            //req.flash('success_msg', 'Вы зарегистрировались и теперь можете войти');
            res.redirect('/login');
        }
    }
};