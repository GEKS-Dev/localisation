'use strict';

var activeElem = $('[href$="'+ document.location.pathname + '"]');
activeElem.parent().addClass('active');
