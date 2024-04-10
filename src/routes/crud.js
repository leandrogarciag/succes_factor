const express = require('express');
const router = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');
var Class2 = require("../lib/Class2")


/* Usuario */
router.get('/adminusuarios', isLoggedIn, async (req, res) => {
    try {
        if (req.user.USU_CROL == "Administrador") {
            const users = await pool.query('SELECT * FROM tbl_rusuarios');
            res.render('crud/adminusuarios', {users});
         }  else {
            res.redirect('/redirect');
        } 
    } catch (error) {
        res.render('401');
    }
});

/* Registro Usuario */
router.post('/adminusuarios', isLoggedIn, async (req, res) => {
    const { documento, nombres_apellidos, usuario,password, rol, estado_usuario, cargo, responsable_gestion} = req.body;
    // console.log(req.body);
    const newUser = {        
        USU_CDOCUMENTO: documento,
        USU_CNOMBRES_APELLIDOS: nombres_apellidos,
        USU_CUSUARIO: usuario,
        USU_CPASSWORD: password,
        USU_CROL: rol,
        USU_CESTADO: estado_usuario,
        USU_CCARGO: cargo,
        USU_CRESPONSABLE_GESTION: responsable_gestion
    };
    console.log(newUser);
    await pool.query('INSERT INTO tbl_rusuarios set ?', [newUser]);
    req.flash('success', 'Usuario Registrado Correctamente!!!');
    res.redirect('/adminusuarios');
})


/* Modificar Usuario */
router.post('/adminusuarios/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const { documento, nombres_apellidos, usuario,password, rol, estado_usuario} = req.body;
    console.log(req.body);
    const cargo = req.user.USU_CROL;
    const responsable_gestion = req.user.USU_CNOMBRES_APELLIDOS;
    const newUser = {        
        USU_CDOCUMENTO: documento,
        USU_CNOMBRES_APELLIDOS: nombres_apellidos,
        USU_CUSUARIO: usuario,
        USU_CPASSWORD: password,
        USU_CROL: rol,
        USU_CESTADO: estado_usuario,
        USU_CCARGO: cargo,
        USU_CRESPONSABLE_GESTION: responsable_gestion
    };
    await pool.query('UPDATE tbl_rusuarios set ? WHERE PKUSU_NCODIGO = ?', [newUser,[id]]);
    req.flash('success', 'Usuario Actualizado Correctamente!!!');
    res.redirect('/adminusuarios');
});

router.get('/bot', isLoggedIn, async (req, res) => {
    try {
        if (req.user.USU_CROL == "Administrador") {
            const users = await pool.query('SELECT * FROM tbl_rclarousers');
            res.render('crud/adminBot', {users});
         }  else {
            res.redirect('/redirect');
        } 
    } catch (error) {
        res.render('401');
    }
});

/* Modificar BOT */
router.post('/bot/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const { usuario, contraseña} = req.body;
    console.log(req.body)
    const newBot = {        
        SS_USER: usuario,
        SS_PASSWORD: contraseña
    };
    await pool.query('UPDATE tbl_rclarousers set ? WHERE PKUSU_NCODIGO = ?', [newBot,[id]]);
    req.flash('success', 'Usuario Actualizado Correctamente!!!');
    res.redirect('/bot');
});

// ---------------------------------

module.exports = router;