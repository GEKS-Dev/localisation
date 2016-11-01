'use strict';

var activeElem = $('[href$="'+ document.location.pathname + '"]');
activeElem.parent().addClass('active');

function onChangeAdminCheck(role, username) {
    console.log(role);
    console.log(username);
}
