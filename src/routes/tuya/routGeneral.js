const router = require("express").Router();
const pool = require('../../database');
const { isLoggedIn } = require("../../lib/auth");
const xlsx = require("xlsx");
const path = require('path');



/* Bot */
router.get('/gestionBot', isLoggedIn, async (req, res) => {
    try {
        if (req.user.USU_CROL == "Administrador" || req.user.USU_CROL == "Gestor") {
            res.render('crud/gestionBot');
         }  else {
            res.redirect('/redirect');
        } 
    } catch (error) {
        res.render('401');
    }
});

// ---------------------------------

/* Status */
router.get('/status', isLoggedIn, async (req, res) => {
    try {
        if (req.user.USU_CROL == "Administrador" || req.user.USU_CROL == "Gestor") {
            const users = await pool.query('SELECT * FROM tbl_rcontratacion ORDER BY USU_CFECHA_GESTION DESC');
            res.render('tuya/status', {users});
         }  else {
            res.redirect('/redirect');
        } 
    } catch (error) {
        res.render('401');
    }
});

router.get('/logsSystem', isLoggedIn, async (req, res) => {
    try {
        if (req.user.USU_CROL == "Administrador" || req.user.USU_CROL == "Gestor") {
            const logs = await pool.query('SELECT * FROM tbl_rlog_detalle ORDER BY LOG_CFECHA_REGISTRO DESC');
            res.render('tuya/logs', {logs});
         }  else {
            res.redirect('/redirect');
        } 
    } catch (error) {
        res.render('401');
    }
});

// router.get('/status:id', isLoggedIn, async (req, res) => {
//     try {
//         if (req.user.USU_CROL == "Administrador" || req.user.USU_CROL == "Gestor") {
//             const responsable_gestion = req.user.USU_CNOMBRES_APELLIDOS;
//             await pool.query('UPDATE tbl_rusuarios set ? WHERE PKUSU_NCODIGO = ?', [responsable_gestion,[id]])
//             res.render('tuya/status', {users});
//          }  else {
//             res.redirect('/redirect');
//         } 
//     } catch (error) {
//         res.render('401');
//     }
// });

// Usuarios Infobip
router.post('/consultaUsuarios', isLoggedIn, async (req, res) => {
    try {
        const consulta = await pool.query('SELECT * FROM tbl_rinfobip_users WHERE INF_CESTADO = "Activo";');
        res.json(consulta);
    } catch (error) {
        console.log(error);
    }
});

// Flujos
router.post('/consultaFlujo', isLoggedIn, async (req, res) => {
    try {
        const usuario = req.body.usuario
        const sql = "SELECT * FROM tbl_rflujos WHERE FKFLU_NINF_NCODIGO = '" + usuario + "' AND FLU_CESTADO = 'Activo';"
        console.log(sql);
        const consulta = await pool.query(sql);
        res.json(consulta);
    } catch (error) {
        console.log(error);
    }
});

// Procesos
router.post('/consultaEjecucion', isLoggedIn, async (req, res) => {
    try {
        const sql = "SELECT * FROM tbl_status WHERE STA_CESTADO = 'En ejecución';"
        const consulta = await pool.query(sql);
        console.log(consulta);
        res.json(consulta);
    } catch (error) {
        console.log(error);
    }
});

router.get("/descargarStatus", isLoggedIn, async (req, res) => {
    const status = await pool.query('SELECT PKUSU_NCODIGO as "ID", USU_CNOMBRES as "NOMBRES", USU_CAPELLIDOS as "APELLIDOS", USU_CNUMERO_DOCUMENTO as "IDENTIFICACIÓN", USU_CESTADO as "ESTADO DEL REGISTRO", USU_CFECHA_GESTION as "FECHA REGISTRO" FROM tbl_rcontratacion ORDER BY USU_CFECHA_GESTION DESC');
    
    // Convertir los datos de 'status' a un formato Excel
    const ws = xlsx.utils.json_to_sheet(status);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Status");
    
    const tempFilePath = path.join(__dirname, "tempStatus.xlsx");
    xlsx.writeFile(wb, tempFilePath);
    res.download(tempFilePath, "Status.xlsx");
});


module.exports = router;