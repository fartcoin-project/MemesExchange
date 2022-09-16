'use strict';

$('#id-button-lang-en').on('click', e => {
    utils.setCookie('lang', 'en');
    location.reload(); 
})

$('#id-button-lang-nl').on('click', e => {
    utils.setCookie('lang', 'nl');
    location.reload(); 
})