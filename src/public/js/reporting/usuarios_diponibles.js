/* Autocompletar */
document.addEventListener("DOMContentLoaded", async () => {

    let resultado = await postData("/consultaUsuarios");
    // console.log(resultado);

    const select = document.getElementById("txtusuario_infobip");

    if (resultado != undefined) {
        resultado.forEach((element) => {
            const option = document.createElement('option');
            option.value = element.PKINF_NCODIGO;
            option.textContent = element.INF_CUSUARIO;
            select.appendChild(option);
        });
    } else {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Sin datos';
        select.appendChild(option);
    }
});