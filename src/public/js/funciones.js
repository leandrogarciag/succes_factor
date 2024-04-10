'use stric';

/* Control visual de campos */

// function edito(elemento){
//     $(document).ready(function(){
// 	if ($(elemento).val() === "") {
// 	  $(elemento).css("border-color", "red");
// 	}
// 	else{
//     $(elemento).css("border-color", "#d2d6da");
// 	}});
// };

// function cambio(elemento){
//     $(document).ready(function(){
// 	if ($(elemento).val() === "") {
// 	  $(elemento).css("border-color", "red");
// 	}
// 	else{
//     $(elemento).css("border-color", "#d2d6da");
// 	}});
// };


/* Relleno campos automaticos */
function fechaHoraIngreso(){
				
    n =  new Date();
    //Año
    let anio = n.getFullYear();
    //Mes
    let mes = n.getMonth() + 1;
    //Día
    let dia = n.getDate();
    //Hora
    let horas = n.getHours();
    //Minutos
    let minutos = n.getMinutes();
    //Segundos
    let segundos = n.getSeconds();

    if(mes <10){
        mes = "0"+mes;
    }
    if(dia<10){
        dia = "0"+dia;
    }
    if(horas<10){
        horas = "0"+horas;
    }
    if(minutos<10){
        minutos = "0"+minutos;
    }
    if(segundos <10){
        segundos = "0"+segundos;
    }

    //Lo ordenas a gusto.
    document.getElementById("txtfecha_hora_ingreso").value = dia + "/" + mes + "/" + anio+" "+horas+":"+minutos+":"+segundos;
}


function fechaHoraRegistro(){
				
    n =  new Date();
    //Año
    let anio = n.getFullYear();
    //Mes
    let mes = n.getMonth() + 1;
    //Día
    let dia = n.getDate();
    //Hora
    let horas = n.getHours();
    //Minutos
    let minutos = n.getMinutes();
    //Segundos
    let segundos = n.getSeconds();

    if(mes <10){
        mes = "0"+mes;
    }
    if(dia<10){
        dia = "0"+dia;
    }
    if(horas<10){
        horas = "0"+horas;
    }
    if(minutos<10){
        minutos = "0"+minutos;
    }
    if(segundos <10){
        segundos = "0"+segundos;
    }

    //Lo ordenas a gusto.
    document.getElementById("txtfecha_hora_registro").value = dia + "/" + mes + "/" + anio+" "+horas+":"+minutos+":"+segundos;
}


/*
    Permite ingreso de solo letras
    onkeypress="return soloLetras(event)"
*/

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false;
    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
}

/*
    Permite ingreso de solo números
    onkeypress="return solonumeros(event)"
*/
function solonumeros(evt){
    
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
}


/*
    Permite ingreso de solo números contacto
   onkeypress="return numerosContacto(event)"
*/
function numerosContacto(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[0-9,-]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}


/*
    Permite ingreso de solo números Ip
   onkeypress="return numerosIp(event)"
*/
function numerosIp(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[0-9,-./]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}


/*
    Permite ingreso de solo números - horas
   onkeypress="return numerosHHMMSS(event)"
*/
function numerosHHMMSS(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[0-9,:]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}


/*
    Permite ingreso de solo números - fechas y horas
   onkeypress="return numerosDDMMYYYYHHMMSS(event)"
*/
function numerosDDMMYYYYHHMMSS(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[0-9, /:]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}


/*
    Forza a que el campo solo reciba mayusculas
    onkeyup="mayus(this);"
*/
function mayus(e) {
    e.value = e.value.toUpperCase();
}

/*
    Forza a que el campo solo reciba minusculas
    onkeyup="minus(this);"
*/
function minus(e) {
    e.value = e.value.toLowerCase();
}

/* Modelo Gana */

function modeloGana() {
    let txtcontacto_cliente = document.getElementById('txtcontacto_cliente').value; //Contacto Cliente
    // let txtcargo_parentesco = document.getElementById('txtcargo_parentesco').value; //Cargo o Parentesco
    let txtnum_cont_cliente = document.getElementById('txtnum_cont_cliente').value; //Número Contacto Cliente    
    let txtfalla_solicitud = document.getElementById('txtfalla_solicitud').value; //Falla / Solicitud
    let txtcuenta_enlace = document.getElementById('txtcuenta_enlace').value; //Cuenta o Enlace
    let txtciudad = document.getElementById('txtciudad').value; //Ciudad
    let txtservicio_asociado = document.getElementById('txtservicio_asociado').value; //Servicio Asociado
    let txttecnologia = document.getElementById('txttecnologia').value; //Tecnología
    let txtcmts_redacceso = document.getElementById('txtcmts_redacceso').value; //CMTS / Red Acceso
    let txtnodo_puertos = document.getElementById('txtnodo_puertos').value; //Nodo / Puerto
    let txtterminal_asociada = document.getElementById('txtterminal_asociada').value; //Terminal Asociada
    let txtplantilla = document.getElementById('txtplantilla').value; //Plantilla

    const ModeloGanaClaro = document.querySelectorAll('.modelo-Gana');
            
    // console.log(ModeloGanaClaro.length);

    ModeloGanaClaro.forEach(element => {
        element.classList.remove('d-none');
    });

        document.getElementById('modeloGanaClaro').innerHTML=""+" ♦ En gestión con: "+txtcontacto_cliente+" ♦ "+txtnum_cont_cliente+" ♦ "+txtfalla_solicitud+" ♦ "+txtservicio_asociado+" ♦ "+txttecnologia+" ♦ "+txtcuenta_enlace+" ♦ "+txtciudad+" ♦ "+txtcmts_redacceso+" ♦ "+txtnodo_puertos+" ♦ "+txtterminal_asociada+" ♦ "+txtplantilla;
        document.getElementById('tiempoGestionCaso').innerHTML=""+"Tiempo Gestión";
}


/* Eventos Copiar Plantillas */

/* Copiar Modelo Gana Claro - Paloteo tiempo real */
function copymodeloGanaClaro() {
	var content = document.getElementById('modeloGanaClaro');
    content.select();
    document.execCommand('copy');
	document.getElementById("modeloGanaClaro").style.color = "#2ECC71";
}

/* Copiar Tiempo Gestión - TMO */
function copyfechaHoraDuracionCaso() {
	var content = document.getElementById('tiempoGestionCaso');
    content.select();
    document.execCommand('copy');
	document.getElementById("tiempoGestionCaso").style.color = "#2ECC71";
}


/* Copiar plantillas para Masivas HFC */
/* Copiar plantillas Masiva Sector */
function copytitulo_masiva_sector() {
	var content = document.getElementById('titulo_masiva_sector');
    content.select();
    document.execCommand('copy');
	document.getElementById("titulo_masiva_sector").style.color = "#2ECC71";
}
function copyplantilla_masiva_sector() {
	var content = document.getElementById('plantilla_masiva_sector');
    content.select();
    document.execCommand('copy');
	document.getElementById("plantilla_masiva_sector").style.color = "#2ECC71";
}
/* Copiar plantillas Masiva Matriz */
function copytitulo_masiva_matriz() {
	var content = document.getElementById('titulo_masiva_matriz');
    content.select();
    document.execCommand('copy');
	document.getElementById("titulo_masiva_matriz").style.color = "#2ECC71";
}
function copyplantilla_masiva_matriz() {
	var content = document.getElementById('plantilla_masiva_matriz');
    content.select();
    document.execCommand('copy');
	document.getElementById("plantilla_masiva_matriz").style.color = "#2ECC71";
}
/* Copiar plantillas Masiva Hotel */
function copytitulo_masiva_hotel() {
	var content = document.getElementById('titulo_masiva_hotel');
    content.select();
    document.execCommand('copy');
	document.getElementById("titulo_masiva_hotel").style.color = "#2ECC71";
}
function copyplantilla_masiva_hotel() {
	var content = document.getElementById('plantilla_masiva_hotel');
    content.select();
    document.execCommand('copy');
	document.getElementById("plantilla_masiva_hotel").style.color = "#2ECC71";
}

/* Copiar plantillas Desplazamientos Ordenes de Trabajo */
function copyVisita() {
	var content = document.getElementById('notasVisita');
    content.select();
    document.execCommand('copy');
	document.getElementById("notasVisita").style.color = "#2ECC71";
}
function copyOT() {
	var content = document.getElementById('notasOTRR');
    content.select();
    document.execCommand('copy');
	document.getElementById("notasOTRR").style.color = "#2ECC71";
}

/* Copiar plantillas Desplazamientos Planta Externa */
function copyTituloPlantaExterna() {
	var content = document.getElementById('tituloPlantaExterna');
    content.select();
    document.execCommand('copy');
	document.getElementById("tituloPlantaExterna").style.color = "#2ECC71";
}
function copyNotasPlantaExterna() {
	var content = document.getElementById('notasPlantaExterna');
    content.select();
    document.execCommand('copy');
	document.getElementById("notasPlantaExterna").style.color = "#2ECC71";
}

/* Copiar plantillas Desplazamientos Datos */
function copyTituloMttoDatos() {
	var content = document.getElementById('tituloMttoDatos');
    content.select();
    document.execCommand('copy');
	document.getElementById("tituloMttoDatos").style.color = "#2ECC71";
}
function copyNotasMttoDatos() {
	var content = document.getElementById('notasMttoDatos');
    content.select();
    document.execCommand('copy');
	document.getElementById("notasMttoDatos").style.color = "#2ECC71";
}

/* Copiar plantillas RR */
function copyLogRR() {
	var content = document.getElementById('notaslogRR');
    content.select();
    document.execCommand('copy');
	document.getElementById("notaslogRR").style.color = "#2ECC71";
}
function copyTituloF7RR() {
	var content = document.getElementById('tituloF7RR');
    content.select();
    document.execCommand('copy');
	document.getElementById("tituloF7RR").style.color = "#2ECC71";
}
function copyContenidoF7RR() {
	var content = document.getElementById('notasF7RR');
    content.select();
    document.execCommand('copy');
	document.getElementById("notasF7RR").style.color = "#2ECC71";
}

/* Copiar plantillas CRM Onix */
function copyTituloCRMOnix() {
	var content = document.getElementById('tituloCRMOnix');
    content.select();
    document.execCommand('copy');
	document.getElementById("tituloCRMOnix").style.color = "#2ECC71";
}
function copyNotasCrmOnix() {
	var content = document.getElementById('notasCrmOnix');
    content.select();
    document.execCommand('copy');
	document.getElementById("notasCrmOnix").style.color = "#2ECC71";
}
function copyResumenCRMOnix() {
	var content = document.getElementById('resumenCRMOnix');
    content.select();
    document.execCommand('copy');
	document.getElementById("resumenCRMOnix").style.color = "#2ECC71";
}

/* Copiar plantillas Service Manager */
function copyTituloServiceManager() {
	var content = document.getElementById('tituloServiceManager');
    content.select();
    document.execCommand('copy');
	document.getElementById("tituloServiceManager").style.color = "#2ECC71";
}
function copyNotasServiceManager() {
	var content = document.getElementById('notasServiceManager');
    content.select();
    document.execCommand('copy');
	document.getElementById("notasServiceManager").style.color = "#2ECC71";
}

/* Copiar plantillas Escalamientos */
function copyTituloEscalamiento() {
	var content = document.getElementById('tituloEscalamientos');
    content.select();
    document.execCommand('copy');
	document.getElementById("tituloEscalamientos").style.color = "#2ECC71";
}
function copyDescripcionEscalamiento() {
	var content = document.getElementById('descripcionEscalamientos');
    content.select();
    document.execCommand('copy');
	document.getElementById("descripcionEscalamientos").style.color = "#2ECC71";
}
function copyContenidoEscalamiento() {
	var content = document.getElementById('notasEscalamientos');
    content.select();
    document.execCommand('copy');
	document.getElementById("notasEscalamientos").style.color = "#2ECC71";
}


/* Abrir Links - Aplicativos */
function open_AplicativosPrincipales() { 
    window.open("http://172.18.10.142:8080/mascara/logon.jsf")/*Ingreso a MASCARA*/
    window.open("http://172.18.10.134/diagnosticador/residencial/")/*Ingreso a DIAGNOSTICADOR Residencial*/
    window.open("http://172.18.10.250:8080/diagnosticadorPYMES/login")/*Ingreso a DIAGNOSTICADOR Fibra Optica*/
    window.open("http://172.18.10.146:8077/Principal.asp")/*Ingreso a PDSR*/
    window.open("http://agendamiento.cable.net.co")/*Ingreso a Modulo de Gestion*/ 
    window.open("http://172.18.11.206/CSR/Login.aspx")/*Ingreso a TR69*/ 
    window.open("http://172.31.3.242:3000/login")/*Ingreso a T&D*/
    window.open("http://172.18.10.156/iwaycc/login")/*Ingreso a CCAA*/
    window.open("http://colbtaweb11:4547/AdmEcare/Login.aspx")/*Ingreso a ADMINISTRACION E-Care */
    window.open("https://200.14.253.214/factibilidades/index.php")/*Ingreso a Cobertura FO */
    window.open("https://190.144.215.103/maximo")/*Maximo */
    window.open("https://owa.comcel.com.co/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fowa.comcel.com.co%2fowa%2f")/*Correo Corporativo Interno */
}



// Generación de Claves HFC - MAC  
function claveHFC() {
  
    /*Clave CPE*/
            txt6digimac=document.getElementById('txt6digimac').value;
            /*Generar CPE*/
            document.getElementById('claveCPEHFC').innerHTML=""+"CPE#"+txt6digimac;

}


//Eventos copiar Credenciales Routers
//HFC
function copyclaveCPEHFC() {
	var content = document.getElementById('claveCPEHFC');
    content.select();
    document.execCommand('copy');
	document.getElementById("claveCPEHFC").style.color = "#2ECC71";
}


//Cerrar Modales
function closeMOdal(parametro){
    $('#'+parametro).modal('hide');
}
  
function closeMOdals(parametro){
    $('#'+parametro).modal('hide');
}

//Insertar con funcione desde modal
function submitComent(id_form, id) {   
    let form = document.getElementById(id_form);
    form.onsubmit = function (e) {
        e.preventDefault();
        fntguardar();
        console.log('Llego');
        closeMOdal('agregar_coment_back_' + id);
    }

    async function fntguardar() {
        let strComent = document.getElementById('txtcomentario_back_' + id).value;
        // console.log(strComent);
        // console.log('Guardar datos...');
        if (strComent === "") {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "!Campos Vacios!",
                backdrop: true,
                allowOutsideClick: false
            });
            return;
        }
        else {
            let canal = document.getElementById('txtskill_coment_' + id).value;
            let caso = document.getElementById('txtid_coment_' + id).value;
            let area = document.getElementById('txtarea_gestion_coment_' + id).value;
            let rol = document.getElementById('txtrol_coment_' + id).value;
            let resp = document.getElementById('txtresponsable_gestion_coment_' + id).value;
            let user = document.getElementById('txtusuario_red_coment_' + id).value;
            let coment = document.getElementById('txtcomentario_back_' + id).value;
            let res = await postData("/agregar_coment", {
                skill_coment: canal,
                id_coment: caso,
                area_gestion_coment: area,
                rol_coment: rol,
                responsable_gestion_coment: resp,
                usuario_red_coment: user,
                comentario_back_coment: coment
            });
            if (res.insertId) {
            
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "!Comentario Agregado!",
                    backdrop: true,
                    allowOutsideClick: false,
                });
                document.getElementById('txtcomentario_back_' + id).value = "";
                return;
                
            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "!Error!",
                    text: "No fue posible guardar el comentario!!!.",
                    backdrop: true,
                    allowOutsideClick: false
                  });
            }            
        }        
    }
}

async function deleteLinea(idDelete){
    let res = await postData("/deleteLinea", {id: idDelete });
    if (res.result == 1) {
        document.getElementById('containerLoader').classList.add('hidden');
        Swal.fire({
            position: "center",
            icon: "success",
            title: "!Congratulations!",
            html: `<center>Linea eliminada correctamente.</center>`,
            backdrop: true,
            allowOutsideClick: false,
            showConfirmButton: true,
            showCloseButton: true,
            confirmButtonColor: 'btn btn-success',
            footer: "2022 © RPA Todos los derechos reservados."
        });
        document.getElementById('txtcontactoAutorizado').value = '';
        document.getElementById('txtestado_linea').value = '';
        $('#numerosAutorizados').modal('hide'); // cerrar            
    } else if (res.result == 2) {
        document.getElementById('containerLoader').classList.add('hidden');
        Swal.fire({
            position: "center",
            icon: "error",
            title: "!Error!",
            text: "No fue posible eliminar la linea- Validar con RPA.",
            backdrop: true,
            allowOutsideClick: false,
            confirmButtonColor: '#d33',
            footer: "2022 © RPA Todos los derechos reservados."
        });
    }
}



