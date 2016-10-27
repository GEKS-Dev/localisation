'use strict';
module.exports = {
    get: function (req, res) {
        res.render('../templates/register');
    },
    post: function (req, res) {
        let name = req.body.inputName;
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
            console.log('Passed');
        }
    }
};