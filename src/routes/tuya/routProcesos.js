const router = require("express").Router();
const pool = require("../../database");
const path = require("path");
const fs = require("fs");
const { isLoggedIn } = require("../../lib/auth");
const { spawn } = require("child_process");
const xlsx = require("xlsx");
const fileUpload = require("express-fileupload");
const axios = require('axios');
const file_upload = fileUpload();
const sentences = require('../../queries/main.query');
const { rejects } = require("assert");
const { query } = require("express");

router.post("/cargar", isLoggedIn, file_upload, async (req, res) => {
    if (!req.files || !req.files.archivos_excel) {
        return res.status(400).json({ error: 'No se cargó ningún archivo.' });
    } else {
        const archivo = req.files.archivos_excel;
        const filePath = __dirname + `/${archivo.name}`;

        if (!archivo.name.match(/\.(xlsx|xls)$/i)) {
            return res.status(400).json({ message: 'Formato incorrecto. Por favor, selecciona un archivo Excel válido.' });
        }

        archivo.mv(filePath, async (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            } else {
                try {
                    const workbook = xlsx.readFile(filePath);
                    const sheetName = workbook.SheetNames[0];
                    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
                    // console.log(data)
                    
                    const isValid = await sentences.validateData(data);

                    if (!isValid.isValid) {
                        return res.status(400).json({message: isValid.invalidObjects[0]});
                    }

                    const exitEmpleoyer = await getEmployes(isValid.data)

                    if (exitEmpleoyer) {
                        return res.status(200).json({ message: 'El archivo se ha subido satisfactoriamente.', employes: isValid.data.length});
                    }else{
                        return res.status(500).json({ message: 'Error al cargar el archivo, verifica que sea el apropiado.' });
                    } 

                } catch (err) {
                    console.error('error en carga del excel, debido a: ' + err);
                    res.status(500).json({ error: 'Error en la carga del archivo Excel.' });
                }
            }
        });
    }
});

//Descargar Formato
router.get("/descargarFormato", isLoggedIn, (req, res) => {
    const filePath = path.join(__dirname, "Formato de Campos Nuevo Colaborador.xlsx");
    res.download(filePath);
});

async function getEmployes(data){
    try{
        if(data.length == 0){
            return false
        }
        for (let i = 0; i < data.length; i++) {

            let query = "SELECT USU_CNUMERO_DOCUMENTO FROM tbl_rcontratacion WHERE USU_CNUMERO_DOCUMENTO = ?";
            const ccEmployer = data[i].numerodedocumento              
            const selectPromise = new Promise((resolve, reject) => {
                pool.query(query, ccEmployer, async (error, results) => {
                    if (error) {
                        console.error("Error al ejecutar la consulta:", error);
                        resolve(false);
                    } else {
                        if(!results.length){
                            await insertInfo(data[i])
                        }
                        resolve(results);
                    }
                });
            });
        }
        return true
    } catch (error) {
        console.error(`error en getEmployes debido a: ${error}`);
        return false;
    }
}


async function insertInfo(data) {
    try {
  
        const insertPromises = [];

        if(data.length == 0){
            return false
        }

            const dataInsert = await sentences.prepareData(data);
            const query = "INSERT INTO tbl_rcontratacion SET ?";
            const insertPromise = new Promise((resolve, reject) => {
                pool.query(query, dataInsert, (error, results) => {
                    if (error) {
                        console.error("Error al ejecutar la consulta:", error);
                        resolve(false);
                    } else {
                        console.log("Inserción exitosa:", results);
                        resolve(true);
                    }
                });
            });
            insertPromises.push(insertPromise);
        
        const insertResults = await Promise.all(insertPromises);
        return insertResults.includes(false) ? false : true;
    } catch (error) {
        console.error(`error en insertInfo debido a: ${error}`);
        return false;
    }
}


module.exports = router;
