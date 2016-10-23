'use strict';
module.exports = {
    get: function (req, res) {
        res.render('../templates/index', {title: 'Сервис команды переводчиков ГЕКС'});
    }
};
