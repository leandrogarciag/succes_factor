const express = require('express');
const router = express.Router();
const passport = require('passport');
const { userInfo } = require('os');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

// router.get('/Registro', isNotLoggedIn, (req, res) => {    
//     res.render('auth/Registro');
// });

// router.post('/Registro', passport.authenticate('local.Registro', {
//     successRedirect: '/redirect',
//     failureRedirect: '/Registro',
//     failureFlash: true
// }));

router.get('/Login', isNotLoggedIn, (req, res) => {
    res.render('auth/Login');
});

router.post('/Login', (req, res, next) => {
    passport.authenticate('local.Login', {
    successRedirect: '/estado',
    failureRedirect: '/Login',
    failureFlash: true
    })(req, res, next)
});

/* Vista Estado Usuario - Roles js */
router.get("/estado", (req, res, next) => { 
  try {
    if (req.user.USU_CESTADO === "Activo") {
      res.redirect("/redirect");
    } if (req.user.USU_CESTADO === "Inactivo"){        
      res.redirect("/logout");        
      console.log('El usuario ingresado se encuentra inactivo en la base de datos !!!'); 
    }
  } catch (error) {
    res.render('404');
  }
  }); 

/* Vista - Roles js */
router.get("/redirect", isLoggedIn, (req, res, next) => { 
  try {
    if (req.user.USU_CROL == "Administrador") {
      res.redirect("/adminusuarios");
    }
    else if (req.user.USU_CROL == "Gestor") {
      res.redirect("/gestionBot");
    }
    else {
      res.render('401');
      console.log("Usuario sin rol asignado");
    }
  } catch (error) {
    res.render('404');
  }
  }); 

router.get('/logout', (req, res) =>{
    req.logOut();
    res.redirect('/Login')
})

module.exports = router;