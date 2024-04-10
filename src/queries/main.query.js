
const insertInfo = require('../routes/tuya/routProcesos')

async function validateData(req) {
    try {
        const expectedKeys = [
            'fechadeingreso', 'empresa', 'motivodelevento', 'plantilla', 'nombres',
            'apellidos', 'trato', 'fechadenacimiento', 'paisdenacimiento',
            'departamentodenacimiento', 'ciudaddenacimiento', 'nombredeusuario',
            'paisdeexpedicion', 'tipodedocumento', 'numerodedocumento', 'esprimario',
            'fechadeexpedicion', 'departamentodeexpedicion', 'ciudaddeexpedicion', 'genero', 'estadocivil',
            'nacionalidad', 'lenguanativa', 'configuracionregionalpredeterminada',
            'mododedesplazamientocasatrabajocasa', 'tipodedireccion',
            'paisregion', 'departamento', 'ciudad', 'estrato', 'tipodevivienda', 'posicion', 'ubicacion', 'perfildetiempos', 'fechafinperiododeprueba',
            'aplicaredmaestra', 'tipodeoperacion', 'canal', 'subcanal', 'gv-region',
            'comision/sincomision', 'departamento_1', 'ciudad_1', 'clasificacionbono',
            'niveldelcargo', 'tipodeposicion', 'eps', 'afp', 'arl', 'cajadecompensacion', 'cesantias', 'tipodecontrato',
            'region', 'esnuevoperfil', 'areadenomina', 'eseligibleparabeneficios',
            'perteneceasindicato', 'fijo/variable', 'pactocolectivo',
            'integralessinfirmapacto', 'estaflexibilizado', 'tipoplanbeneficios',
            'plandebeneficios', 'tiposalario', 'conceptodepago',
            'valor', 'moneda', 'frecuencia'
        ];

        function normalizeString(str) { //2
            return str
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '') // Remover tildes
                .replace(/[^\w\s]/gi, '') // Remover caracteres especiales
                .toLowerCase() // Convertir a minúsculas
                .replace(/\s+/g, ''); // Remover espacio
        }

        const jsonData = req.map(obj => //1
            Object.fromEntries(Object.entries(obj).map(([key, value]) => [normalizeString(key), value]))
        );


        if (!Array.isArray(jsonData)) {//3
            return {
                isValid: false,
                missingKeys: expectedKeys
            };
        }

        const invalidObjects = [];

        for (let i = 0; i < jsonData.length; i++) {//4
            const actualKeys = Object.keys(jsonData[i]);
            const normalizedActualKeys = actualKeys.map(normalizeString);
            var missingKeys = expectedKeys.filter(key => !normalizedActualKeys.includes(normalizeString(key)));

            if (missingKeys.length > 0) {
                invalidObjects.push({
                    index: i,
                    missingKeys: missingKeys
                });
            }
        }

        if (invalidObjects.length > 0) {

            return {
                isValid: false,
                invalidObjects: invalidObjects,
            };
        }

        return {
            isValid: true,
            data: jsonData
        };
    } catch (error) {
        throw error;
    }
}

// Uso de la función
// const isValid = await validateData(req);
// console.log(isValid); // Mostrará true si todos los objetos en el arreglo tienen las claves esperadas, false si no

async function prepareData(req) {

    try {
        const dataToInsert = {
            USU_CFECHA_INGRESO: req['fechadeingreso'],
            USU_CEMPRESA: req.empresa,
            USU_CMOTIVO_EVENTO: req['motivodelevento'],
            USU_CPLANTILLA: req.plantilla,
            USU_CNOMBRES: req.nombres,
            USU_CAPELLIDOS: req.apellidos,
            USU_CTRATO: req.trato,
            USU_CFECHA_NACIMIENTO: req['fechadenacimiento'],
            USU_CPAIS_NACIMIENTO: req['paisdenacimiento'],
            USU_CDEPARTAMENTO_NACIMIENTO: req['departamentodenacimiento'],
            USU_CCIUDAD_NACIMIENTO: req['ciudaddenacimiento'],
            USU_CNOMBRE_USUARIO: req['nombredeusuario'],
            USU_CPAIS_EXPEDICION: req['paisdeexpedicion'],
            USU_CTIPO_DOCUMENTO: req['tipodedocumento'],
            USU_CNUMERO_DOCUMENTO: req['numerodedocumento'],
            USU_CES_PRIMARIO: req['esprimario'],
            USU_CFECHA_EXPEDICION: req['fechadeexpedicion'],
            USU_CDEPARTAMENTO_EXPEDICION: req['departamentodeexpedicion'],
            USU_CCIUDAD_EXPEDICION: req['ciudaddeexpedicion'],
            USU_CGENERO: req['genero'],
            USU_CESTADO_CIVIL: req['estadocivil'],
            USU_CNACIONALIDAD: req.nacionalidad,
            USU_CLENGUA_NATIVA: req['lenguanativa'],
            USU_CCONFIGURACION_REGIONAL_PREDETERMINADA: req['configuracionregionalpredeterminada'],
            USU_CMODO_DESPLAZAMIENTO_CASA_TRABAJO_CASA: req['mododedesplazamientocasatrabajocasa'],
            USU_CTIPO_DIRECCION: req['tipodedireccion'],
            USU_PAIS_REGION: req['paisregion'],
            USU_CDEPARTAMENTO: req.departamento,
            USU_CCIUDAD: req.ciudad,
            USU_CESTRATO: req.estrato,
            USU_CTIPO_VIVIENDA: req['tipodevivienda'],
            USU_CPOSICION: req['posicion'],
            USU_CUBICACION: req['ubicacion'],
            USU_CPERFIL_TIEMPOS: req['perfildetiempos'],
            USU_CFECHA_FIN_PERIODO_PRUEBA: req['fechafinperiododeprueba'],
            USU_CAPLICA_RED_MAESTRA: req['aplicaredmaestra'],
            USU_CTIPO_OPERACION: req['tipodeoperacion'],
            USU_CCANAL: req.canal,
            USU_CSUBCANAL: req.subcanal,
            USU_CGV_REGION: req['gvregion'],
            USU_CCOMISION_SIN_COMISION: req['comisionsincomision'],
            USU_DEPARTAMENTO: req.departamento,
            USU_CIUDAD: req.ciudad,
            USU_CCLASIFICACION_BONO: req['clasificacionbono'],
            USU_CNIVEL_CARGO: req['niveldelcargo'],
            USU_CTIPO_POSICION: req['tipodeposicion'],
            USU_CEPS: req['eps'],
            USU_CAFP: req['afp'],
            USU_CARL: req['arl'],
            USU_CCAJA_COMPENSACION: req['cajadecompensacion'],
            USU_CCESANTIAS: req['cesantias'],
            USU_CTIPO_CONTRATO: req['tipodecontrato'],
            USU_CREGION: req['region'],
            USU_CES_NUEVO_PERFIL: req['esnuevoperfil'],
            USU_CAREA_NOMINA: req['areadenomina'],
            USU_CES_ELEGIBLE_BENEFICIOS: req['eseligibleparabeneficios'],
            USU_CPERTENECE_SINDICATO: req['perteneceasindicato'],
            USU_CFIJO_VARIABLE: req['fijovariable'],
            USU_CPACTO_COLECTIVO: req['pactocolectivo'],
            USU_CINTEGRALES_SIN_FIRMA_PACTO: req['integralessinfirmapacto'],
            USU_CESTA_FLEXIBILIZADO: req['estaflexibilizado'],
            USU_CTIPO_PLAN_BENEFICIOS: req['tipoplanbeneficios'],
            USU_CPLAN_BENEFICIOS: req['plandebeneficios'],
            USU_CTIPO_SALARIO: req['tiposalario'],
            USU_CCONCEPTO_PAGO: req['conceptodepago'],
            USU_CVALOR: req.valor,
            USU_CMONEDA: req.moneda,
            USU_CFRECUENCIA: req.frecuencia,
            USU_CESTADO: "NO_INICIADO"
        }

        return dataToInsert;
    } catch (err) {
        throw err
    }
}
module.exports = {
    prepareData,
    validateData
}
