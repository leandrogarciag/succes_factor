const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//Modulo de conexion a directorio activo
const ActiveDirectory = require("activedirectory2").promiseWrapper;
const pool = require('../database');
const helpers = require('./helpers');
const keys = require('../keys');
var os = require('os');
const { Console } = require('console');


//Test Local Login
passport.use('local.Login', new LocalStrategy ({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) =>{
    const rows = await pool.query('SELECT * FROM tbl_rusuarios WHERE USU_CUSUARIO =?', [username]);
    if (rows.length > 0){       
        //const match = await helpers.encryptPassword('123456789')
        const match = await helpers.encryptPassword(rows[0].USU_CPASSWORD)
        const user = rows[0];
        const estado = user.USU_CESTADO;  
        const validPassword = await helpers.matchPassword(password, match)
        if (validPassword == true && estado == 'Activo' ) {
            done(null, user, req.flash('success', 'Bienvenido ' + user.USU_CUSUARIO));            
        } else if (validPassword == true && user.USU_CESTADO == "Inactivo") {
            done(null, false, req.flash('message', 'El usuario se encuentra Inactivo - Validar con el supervisor'));
        } else if (validPassword == false){
            done(null, false, req.flash('message', 'Contraseña Incorrecta'));
        }
    } else {
        return done(null, false, req.flash('message', 'El usuario ingresado no existe'));
    }
}));

/* Directorio activo */
// passport.use('local.Login', new LocalStrategy({
//     usernameField: 'username',
//     passwordField: 'password',
//     passReqToCallback: true
// }, (req, username, password, done) => {
//     //Declaracion de variables para el directorio  activo
//     var query = "sAMAccountName=" + username;
//     username = username + '@groupcos.com'
//     var username02 = (username.split("@"))[0].toUpperCase();
//     console.log(username02 + " Ejecución de variables")
//     keys.config.username = username
//     keys.config.password = password
//     var ad = new ActiveDirectory(keys.config);
//     console.log("******-( ._.)(._. )( ._.)-******" + keys.config.url)
//     //Valida si el usuario tiene mas de dos intentos
//     var validator = true;
//     for (i = 0; i < array.length; i++) {
//         d = array[i][0];
//         console.log(d)
//         if (d.nombre == username && d.Intentos == "1") {
//             let min = new Date();
//             let minutoss = min.getMinutes();
//             console.log(min);
//             var contador_minutos = ((array[i][1] + 1) - minutoss) + " minutos"
//             if ((array[i][1] + 1 <= minutoss) || (array[i][1] + 1 > 58)) {
//                 delete array[i];
//                 array.splice(i, 1);
//                 contador_minutos = "unos segundos"
//             }
//             validator = false;
//             //Le envia error por exceder los intentos
//             done(null, false, req.flash("message", "Intento Fallido → Por favor espere " + contador_minutos + " antes de volver a intentar"));
//         }
//     }
//     if (validator) {
//         //Valida con el usuario en directorio activo 
//         ad.authenticate(username, password, function async(err, auth) {
//             // console.log(err);
//             console.log(auth);
//             let error = JSON.stringify(err)
//             let split = error.split(",")
//             codigo = split[2]
//             console.log(codigo)
//             if (codigo == " data 775") {
//                 done(null, false, req.flash("message", "Usuario bloqueado en Directorio Activo por favor solicite ayuda con IT"));
//             }
//             else if (auth == false && codigo == " data 52e") {
//                 if (array.length > 0) {
//                     for (i = 0; i < array.length; i++) {
//                         d = array[i][0];
//                         if (d.nombre == username) {
//                             if (d.nombre == username && d.Intentos == 1) {
//                                 d.Intentos = 1;
//                                 let min0 = new Date();
//                                 let minutos = min0.getMinutes();
//                                 array[i][1] = minutos;
//                                 var encontrado = true;
//                                 break;
//                             }
//                             var encontrado = true;
//                             break;
//                         } else {
//                             var encontrado = false;
//                         }
//                     }
//                     if (encontrado) {
//                         console.log(encontrado);
//                     } else {
//                         console.log("Lo agrega por que no lo encontro");
//                         let elemento = { nombre: username, Intentos: 1 };
//                         let min0 = new Date();
//                         let minutos = min0.getMinutes();
//                         array.push([elemento, minutos]);
//                     }
//                 } else {
//                     console.log("Lo Agrega");
//                     let elemento = { nombre: username, Intentos: 1 };
//                     let min0 = new Date();
//                     let minutos = min0.getMinutes();
//                     array.push([elemento, minutos]);
//                 }
//                 done(null, false, req.flash('message', 'Usuario y/o contraseña incorrecta!!!'));
//                 console.log("Autenticacion fallida!");
//             }
//             else if (auth == true) {
//                 console.log('<<------- Usuario en Directorio Activo ------->>');
//                 ad.findUsers(query, true, async (err, users) => {
//                     console.log(users);
//                     var taskId = helpers.obtain(users, "distinguishedName");
//                     if (taskId.grupo) {
//                         try {
//                             let sql = 'SELECT * FROM ' + bdd_name + '.tbl_rusuarios WHERE USU_CUSUARIO = "' + username02 + '";'
//                             console.log('User ' + username02 + ' Autenticado');
//                             const rows = await pool.query(sql);
//                             if (rows.length > 0) {
//                                 const user = rows[0];
//                                 console.log(user);
//                                 const estado = user.USU_CESTADO;
//                                 console.log(estado)
//                                 if (estado == 'Activo') {
//                                     console.log('<<------- Usuario, Contraseña y Estado ------->> OK');
//                                     done(null, user, req.flash('success', 'Bienvenido ' + user.USU_CNOMBRES_APELLIDOS));
//                                 } else if (user.USU_CESTADO == "Inactivo") {
//                                     done(null, false, req.flash('message', 'El usuario se encuentra Inactivo - Validar con el supervisor'));
//                                     console.log('<<------- Usuario ------->> INACTIVO');
//                                 }
//                             } else {
//                                 done(null, false, req.flash('message', 'El usuario ingresado no existe en base de datos!!! Validar con el Admin de la Herramienta'));
//                             }
//                         } catch (e) {
//                             console.error("Hay un error en la autenticación -  passport!" + e);
//                         }
//                     } else {
//                         done(null, false, req.flash("message", "No pertenece a esta campaña !!!"));
//                     }
//                 });
//             }
//         });
//     }
// }));
/* Fin Directorio activo */

//Test Local Registro
// passport.use('local.Registro', new LocalStrategy({
//     usernameField: 'username',
//     passwordField: 'password',
//     passReqToCallback: true
// }, async (req, username, password, done) => {
//     const { documento, fullname,  rol, estado, cargo, responsable_gestion } = req.body;
//     var newUser = {
//         USU_CDOCUMENTO: documento,
//         USU_CNOMBRES_APELLIDOS: fullname,
//         USU_CUSUARIO: username,
//         USU_CPASSWORD: password,
//         USU_CROL: rol,
//         USU_CESTADO: estado,
//         USU_CCARGO: cargo,
//         USU_CRESPONSABLE_GESTION: responsable_gestion
//     };
//     newUser.USU_CPASSWORD = await helpers.encryptPassword(password);
//     const result = await pool.query('INSERT INTO tbl_rusuarios set ?', [newUser]);
//     newUser.id = result.insertId;
//     return done(null, newUser);
// }));


passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser(async (user, done) => {
    done(null, user);
})
