const express = require('express');
const router = express.Router();
const path = require('path');

const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

router.get('/', isLoggedIn, (req, res) => {    
    res.redirect('/redirect');
});

router.get('/error404', (req, res) => {  
    res.render('404'); 
    console.log('Solicitud Incorrecta'); 
});

router.get('/error401', (req, res) => {    
    res.render('401');
    console.log('Error de autenticación');
});

module.exports = router;