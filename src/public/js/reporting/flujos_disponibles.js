/* Autocompletar */

let txtusuario_infobip = document.querySelector("#txtusuario_infobip")


txtusuario_infobip.addEventListener("change", async () => {

    let txtusuario_infobip = document.querySelector("#txtusuario_infobip").value;
    // console.log('User', txtusuario_infobip)

    let resultado = await postData("/consultaFlujo", {usuario: txtusuario_infobip});
    // console.log(resultado);

    const select = document.getElementById("txtflujo_proceso");

    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }    

    if (resultado.length > 0) {
        resultado.forEach((element) => {
            const option = document.createElement('option');
            option.value = element.FLU_CNOMBRE_FLUJO;
            option.textContent = element.FLU_CNOMBRE_FLUJO;
            select.appendChild(option);
        });
    } else {        
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Sin datos';
        select.appendChild(option);
    }
});