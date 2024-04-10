"use strict";

const btnInicioBot = document.getElementById("btnInicioBot");

btnInicioBot.addEventListener("click", async () => {
    try {
        console.log("Try: Enviando click")
        const response = await fetch('/inicioBot', { method: 'POST' });
        console.log(response)

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
            btnInicioBot.disabled = true; // Deshabilita el botón solo si la solicitud fue exitosa
        } else {
            console.error('Error en la solicitud al servidor');
            alert('Hubo un error al iniciar el bot. Por favor, inténtalo de nuevo.'); // Mensaje de error para el usuario
        }
    } catch (error) {
        console.error(error);
        alert('Hubo un error inesperado. Por favor, inténtalo de nuevo.'); // Mensaje de error para el usuario
    }
});


