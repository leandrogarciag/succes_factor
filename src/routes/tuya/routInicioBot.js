const router = require("express").Router();
const pool = require('../../database');
const { exec } = require('child_process');
const { spawn } = require("child_process");
const axios = require('axios');

// Ruta /inicioBot mejorada
router.post("/inicioBot", async (req, res) => {
    try {
        const url = 'http://localhost:5090/ejecutar-python';
        axios.post(url)
            .then(response => {
                console.log('Respuesta del servidor:', response.data);
                // Aquí puedes realizar las acciones necesarias con la respuesta del servidor
            })
            .catch(async error => {
                console.error('Error en la solicitud:', error);
                // Aquí puedes manejar el error de la solicitud
            });
    } catch (error) {
        console.error('Error interno del servidor:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports = router; 