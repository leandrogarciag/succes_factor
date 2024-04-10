/*!
 * Biblioteca jQuery JavaScript v3.5.1
 * https://jquery.com/
 *
 * Incluye Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation y otros colaboradores
 * Publicado bajo la licencia MIT
 * https://jquery.org/license
 *
 * Fecha: 2020-05-04T22:49Z
 */
(función(global, fábrica) {

	"uso estricto";

	if ( tipo de módulo === "objeto" && tipo de módulo.exportaciones === "objeto" ) {

		// Para entornos similares a CommonJS y CommonJS donde una `ventana` adecuada
		// está presente, ejecute la fábrica y obtenga jQuery.
		// Para entornos que no tienen una `ventana` con un `documento`
		// (como Node.js), exponer una fábrica como module.exports.
		// Esto acentúa la necesidad de crear una `ventana` real.
		// por ejemplo, var jQuery = require("jquery"))(ventana);
		// Ver boleto #14549 para más información.
		módulo.exportaciones = global.documento?
			fábrica (global, verdadero):
			función( w ) {
				if (!w.documento) {
					throw new Error ("jQuery requiere una ventana con un documento");
				}
				volver fábrica( w );
			};
	} demás {
		fábrica (mundial);
	}

// Pase esto si la ventana aún no está definida
} )( tipo de ventana !== "indefinido" ? ventana : this, function( ventana, noGlobal ) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lanzar excepciones cuando el código no estricto (por ejemplo, ASP.NET 4.5) accede al modo estricto
// argumentos.callee.caller (trac-13335). Pero a partir de jQuery 3.0 (2016), el modo estricto debería ser común
// lo suficiente como para que todos esos intentos estén protegidos en un bloque de prueba.
"uso estricto";

var matriz = [];

var getProto = Objeto.getPrototypeOf;

var segmento = arr.segmento;

var plano = arr.plano ? función (matriz) {
	return arr.flat.call(matriz);
} : función (matriz) {
	return arr.concat.apply( [], matriz );
};


var empujar = arr.empujar;

var indexOf = arr.indexOf;

var clase2tipo = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call(Objeto);

soporte de var = {};

var esFuncion = function esFuncion( obj ) {

      // Soporte: Chrome <=57, Firefox <=52
      // En algunos navegadores, typeof devuelve "función" para elementos HTML <objeto>
      // (es decir, `tipo de documento.createElement( "objeto" ) === "función"`).
      // No queremos clasificar *cualquier* nodo DOM como una función.
      return typeof obj === "función" && typeof obj.nodeType !== "number";
  };


var esVentana = function esVentana( obj ) {
		return obj != null && obj === obj.ventana;
	};


var documento = ventana.documento;



	var atributos de script preservados = {
		tipo: verdadero,
		origen: cierto,
		nonce: cierto,
		noModule: verdadero
	};

	function DOMEval(código, nodo, doc) {
		documento = documento || documento;

		var i, val,
			guión = doc.createElement( "guion" );

		guión.texto = código;
		si (nodo) {
			para (yo en atributos de script preservados) {

				// Soporte: Firefox 64+, Borde 18+
				// Algunos navegadores no admiten la propiedad "nonce" en los scripts.
				// Por otro lado, solo usar `getAttribute` no es suficiente como
				// el atributo `nonce` se restablece a una cadena vacía cada vez que
				// se vuelve conectado al contexto de navegación.
				// Ver https://github.com/whatwg/html/issues/2369
				// Ver https://html.spec.whatwg.org/#nonce-attributes
				// La verificación `node.getAttribute` se agregó por el bien de
				// `jQuery.globalEval` para que pueda falsificar un nodo que no contiene una sola vez
				// a través de un objeto.
				val = nodo[ i ] || nodo.getAttribute && nodo.getAttribute( i );
				si (valor) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


función paraTipo( obj ) {
	si ( obj == nulo ) {
		devuelve obj + "";
	}

	// Soporte: Android <= 2.3 solamente (regexp funcional)
	devuelve el tipo de obj === "objeto" || typeof obj === "función" ?
		class2type[ toString.call( obj ) ] || "objeto" :
		tipo de obj;
}
/* simbolo global */
// Definir este global en .eslintrc.json crearía el peligro de usar el global
// desprotegido en otro lugar, parece más seguro definir global solo para este módulo



variable
	versión = "3.5.1",

	// Definir una copia local de jQuery
	jQuery = función (selector, contexto) {

		// El objeto jQuery es en realidad solo el constructor de inicio 'mejorado'
		// Necesita init si se llama a jQuery (solo permita que se arroje un error si no está incluido)
		devolver jQuery.fn.init nuevo (selector, contexto);
	};

jQuery.fn = jQuery.prototipo = {

	// La versión actual de jQuery que se está utilizando
	jquery: versión,

	constructor: jQuery,

	// La longitud predeterminada de un objeto jQuery es 0
	longitud: 0,

	aArray: function() {
		return rebanada.llamar( esto );
	},

	// Obtener el elemento N en el conjunto de elementos coincidentes O
	// Obtenga todo el conjunto de elementos coincidentes como una matriz limpia
	obtener: función (num) {

		// Devuelve todos los elementos en una matriz limpia
		si ( número == nulo ) {
			return rebanada.llamar( esto );
		}

		// Devuelve solo un elemento del conjunto
		devolver número < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Tome una matriz de elementos y empújela a la pila
	// (devolviendo el nuevo conjunto de elementos coincidentes)
	pushStack: función (elementos) {

		// Construir un nuevo conjunto de elementos emparejados jQuery
		var ret = jQuery.merge( this.constructor(), elems );

		// Agrega el objeto antiguo a la pila (como referencia)
		ret.prevObject = esto;

		// Devuelve el conjunto de elementos recién formado
		volver ret;
	},

	// Ejecutar una devolución de llamada para cada elemento del conjunto coincidente.
	cada: función (devolución de llamada) {
		devuelve jQuery.each (esto, devolución de llamada);
	},

	mapa: función (devolución de llamada) {
		devuelve this.pushStack( jQuery.map( this, function( elem, i ) {
			volver callback.call( elem, i, elem );
		} ) );
	},

	rebanada: función () {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	primero: función() {
		devuelve esto.eq( 0 );
	},

	último: función () {
		devuelve esto.eq( -1 );
	},

	incluso: función () {
		devuelve esto.pushStack( jQuery.grep( esto, función( _elem, i ) {
			retorno ( i + 1 ) % 2;
		} ) );
	},

	Función impar() {
		devuelve esto.pushStack( jQuery.grep( esto, función( _elem, i ) {
			devolver i % 2;
		} ) );
	},

	ecuación: función ( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		devuelve this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	final: función () {
		devolver este.prevObject || este.constructor();
	},

	// Sólo para uso interno.
	// Se comporta como un método de Array, no como un método de jQuery.
	empuja empuja,
	ordenar: arr.ordenar,
	empalme: arr.empalme
};

jQuery.extend = jQuery.fn.extend = función() {
	var opciones, nombre, src, copiar, copyIsArray, clonar,
		objetivo = argumentos[ 0 ] || {},
		yo = 1,
		longitud = argumentos.longitud,
		profundo = falso;

	// Manejar una situación de copia profunda
	if ( tipo de objetivo === "booleano" ) {
		profundo = objetivo;

		// Omite el booleano y el objetivo
		objetivo = argumentos[ i ] || {};
		yo++;
	}

	// Manejar el caso cuando el objetivo es una cadena o algo (posible en copia profunda)
	if ( tipo de objetivo !== "objeto" && !isFunction( objetivo ) ) {
		objetivo = {};
	}

	// Extiende jQuery si solo se pasa un argumento
	si ( i === longitud ) {
		objetivo = esto;
		I--;
	}

	para ( ; i < longitud; i++ ) {

		// Solo tratar con valores no nulos/indefinidos
		if ( ( opciones = argumentos [ i ] ) != nulo ) {

			// Extender el objeto base
			para (nombre en opciones) {
				copiar = opciones[ nombre ];

				// Prevenir la contaminación de Object.prototype
				// Evitar bucle interminable
				if ( nombre === "__proto__" || objetivo === copiar ) {
					Seguir;
				}

				// Recurrencia si estamos fusionando objetos simples o arreglos
				if ( profundo && copiar && ( jQuery.isPlainObject( copiar ) ||
					( copyIsArray = Array.isArray( copiar ) ) ) ) {
					src = destino[nombre];

					// Garantizar el tipo adecuado para el valor de origen
					if ( copyIsArray && !Array.isArray( src ) ) {
						clonar = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clonar = {};
					} demás {
						clonar = src;
					}
					copyIsArray = falso;

					// Nunca muevas los objetos originales, clonalos
					objetivo [nombre] = jQuery.extend (profundo, clonar, copiar);

				// No traiga valores indefinidos
				} else if ( copiar !== indefinido ) {
					objetivo[ nombre ] = copiar;
				}
			}
		}
	}

	// Devuelve el objeto modificado
	objetivo de retorno;
};

jQuery.extender( {

	// Único para cada copia de jQuery en la página
	expando: "jQuery" + ( versión + Math.random() ).replace( /\D/g, "" ),

	// Supongamos que jQuery está listo sin el módulo listo
	está listo: cierto,

	error: función (mensaje) {
		lanzar un nuevo error (mensaje);
	},

	noop: función () {},

	esPlainObject: function( obj ) {
		varproto, Ctor;

		// Detectar negativos obvios
		// Use toString en lugar de jQuery.type para capturar objetos host
		if ( !obj || toString.call( obj ) !== "[objeto Objeto]" ) {
			falso retorno;
		}

		proto = getProto( obj );

		// Los objetos sin prototipo (p. ej., `Object.create(null)`) son sencillos
		si (! proto) {
			devolver verdadero;
		}

		// Los objetos con prototipo son simples si fueron construidos por una función de objeto global
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "función" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: función (objeto) {
		nombre de la variable;

		para (nombre en obj) {
			falso retorno;
		}
		devolver verdadero;
	},

	// Evalúa un script en un contexto proporcionado; vuelve a caer en el global
	// si no se especifica.
	globalEval: función (código, opciones, documento) {
		DOMEval( código, { nonce: opciones && opciones.nonce }, doc );
	},

	cada: función (objeto, devolución de llamada) {
		var longitud, i = 0;

		if (esArrayLike(obj)) {
			longitud = obj.longitud;
			para ( ; i < longitud; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					descanso;
				}
			}
		} demás {
			para (yo en obj) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					descanso;
				}
			}
		}

		devolver objeto;
	},

	// los resultados son solo para uso interno
	hacerArray: function(arr, resultados) {
		var ret = resultados || [];

		if ( arr != null ) {
			if (esArrayLike(Objeto(arr)))) {
				jQuery.merge(ret,
					typeof arr === "cadena" ?
					[arr]: arr
				);
			} demás {
				empujar.llamar( ret, arr );
			}
		}

		volver ret;
	},

	enArray: function( elem, arr, i ) {
		volver arr == nulo ? -1 : indexOf.call( arr, elem, i );
	},

	// Soporte: Android <= 4.0 solo, PhantomJS 1 solo
	// push.apply(_, arraylike) lanza en WebKit antiguo
	combinar: función (primero, segundo) {
		var len = +segundo.longitud,
			j = 0,
			i = primero.longitud;

		para ( ; j < largo; j++ ) {
			primero[ i++ ] = segundo[ j ];
		}

		primero.longitud = i;

		volver primero;
	},

	grep: función (elementos, devolución de llamada, invertir) {
		var devolución de llamada inversa,
			coincidencias = [],
			yo = 0,
			longitud = elementos.longitud,
			callbackExpect = !invertir;

		// Ir a través de la matriz, solo guardando los elementos
		// que pasan la función validadora
		para ( ; i < longitud; i++ ) {
			callbackInverse = !callback( elementos[ i ], i );
			if (devolución de llamada inversa! == devolución de llamada esperada) {
				coincidencias.push( elementos[ i ] );
			}
		}

		partidos de vuelta;
	},

	// arg es solo para uso interno
	mapa: función (elementos, devolución de llamada, arg) {
		var longitud, valor,
			yo = 0,
			ret = [];

		// Ir a través de la matriz, traduciendo cada uno de los elementos a sus nuevos valores
		if (esArrayLike(elementos)) {
			longitud = elementos.longitud;
			para ( ; i < longitud; i++ ) {
				valor = devolución de llamada (elementos [i], i, arg);

				si (valor! = nulo) {
					ret.push( valor );
				}
			}

		// Ir a través de cada clave en el objeto,
		} demás {
			para ( i en elementos ) {
				valor = devolución de llamada (elementos [i], i, arg);

				si (valor! = nulo) {
					ret.push( valor );
				}
			}
		}

		// Aplana cualquier matriz anidada
		volver plano (ret);
	},

	// Un contador GUID global para objetos
	guía: 1,

	// jQuery.support no se usa en Core, pero otros proyectos adjuntan sus
	// propiedades para él, por lo que debe existir.
	soporte soporte
});

if (tipo de Símbolo === "función" ) {
	jQuery.fn[ Símbolo.iterador ] = arr[ Símbolo.iterador ];
}

// Rellenar el mapa class2type
jQuery.each( "Número booleano Función de cadena Matriz Fecha RegExp Objeto Símbolo de error".split( " " ),
función( _i, nombre ) {
	class2type[ "[objeto " + nombre + "]" ] = nombre.toLowerCase();
});

función esArrayLike( obj ) {

	// Soporte: solo iOS 8.2 real (no reproducible en el simulador)
	// Comprobación `in` utilizada para evitar el error JIT (gh-2145)
	// hasOwn no se usa aquí debido a falsos negativos
	// con respecto a la longitud de la lista de nodos en IE
	var longitud = !!obj && "longitud" en obj && obj.longitud,
		tipo = aTipo( obj );

	if ( esFuncion( obj ) || esVentana( obj ) ) {
		falso retorno;
	}

	tipo de retorno === "matriz" || longitud === 0 ||
		tipo de longitud === "número" && longitud > 0 && (longitud - 1) en obj;
}
var Chisporrotear =
/*!
 * Chisporrotea CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation y otros colaboradores
 * Publicado bajo la licencia MIT
 * https://js.foundation/
 *
 * Fecha: 2020-03-14
 */
(función(ventana) {
var yo,
	apoyo,
	expr,
	obtener texto,
	es XML,
	tokenizar,
	compilar,
	Seleccione,
	contexto más externo,
	ordenar entrada,
	tiene duplicado,

	// Vars de documento local
	establecer documento,
	documento,
	docElem,
	documento es HTML,
	rbuggyqsa,
	partidas de rbuggy,
	partidos,
	contiene,

	// Datos específicos de la instancia
	expando = "chisporrotear" + 1 * nueva Fecha(),
	preferidoDoc = ventana.documento,
	dirruns = 0,
	hecho = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compiladorCache = createCache(),
	nonnativeSelectorCache = createCache(),
	Ordenar = función (a, b) {
		si ( un === segundo ) {
			tiene duplicado = verdadero;
		}
		devolver 0;
	},

	// Métodos de instancia
	tienePropiedad = ( {} ).tienePropiedad,
	ar = [],
	pop = arr.pop,
	pushNative = arr.push,
	empujar = arr.empujar,
	rebanada = arr.rebanada,

	// Use un indexOf simplificado ya que es más rápido que el nativo
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = función (lista, elemento) {
		var i = 0,
			len = lista.longitud;
		para ( ; i < len; i++ ) {
			if ( lista[ i ] === elem ) {
				devolver yo;
			}
		}
		devolver -1;
	},

	booleanos = "marcado|seleccionado|asincrónico|enfoque automático|reproducción automática|controles|aplazado|deshabilitado|oculto|" +
		"ismap|bucle|múltiple|abierto|solo lectura|requerido|ámbito",

	// Expresiones regulares

	// http://www.w3.org/TR/css3-selectors/#espacio en blanco
	espacio en blanco = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identificador = "(?:\\\\[\\da-fA-F]{1,6}" + espacios en blanco +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Selectores de atributos: http://www.w3.org/TR/selectors/#attribute-selectors
	atributos = "\\[" + espacio en blanco + "*(" + identificador + ")(?:" + espacio en blanco +

		// Operador (captura 2)
		"*([*^$|!~]?=)" + espacio en blanco +

		// "Los valores de los atributos deben ser identificadores CSS [captura 5]
		// o cadenas [capturar 3 o capturar 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"] )*)\"|(" + identificador + "))|)" +
		espacio en blanco + "*\\]",

	pseudos = ":(" + identificador + ")(?:\\((" +

		// Para reducir la cantidad de selectores que necesitan tokenizar en el prefiltro, prefiera los argumentos:
		// 1. citado (captura 3; captura 4 o captura 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*) \")|" +

		// 2. simple (captura 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + atributos + ")*)|" +

		// 3. cualquier otra cosa (captura 2)
		".*" +
		")\\)|)",

	// Espacio en blanco inicial y final sin escape, capturando algunos caracteres que no son espacios en blanco que preceden a este último
	rwhitespace = new RegExp(espacio en blanco + "+", "g"),
	rtrim = new RegExp( "^" + espacios en blanco + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		espacio en blanco + "+$", "g" ),

	rcoma = new RegExp( "^" + espacio en blanco + "*," + espacio en blanco + "*"),
	rcombinators = new RegExp( "^" + espacio en blanco + "*([>+~]|" + espacio en blanco + ")" + espacio en blanco +
		"*" ),
	rdescend = nueva expresión regular (espacio en blanco + "|>"),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identificador + "$"),

	coincidenciaExpr = {
		"ID": nueva RegExp( "^#(" + identificador + ")" ),
		"CLASE": nueva RegExp( "^\\.(" + identificador + ")" ),
		"ETIQUETA": nueva RegExp( "^(" + identificador + "|[*])" ),
		"ATTR": nueva expresión regular ("^" + atributos),
		"PSEUDO": nueva expresión regular ("^" + pseudos),
		"CHILD": new RegExp( "^:(solo|primero|último|nésimo|enésimo-último)-(hijo|de-tipo)(?:\\(" +
			espacio en blanco + "*(par|impar|(([+-]|)(\\d*)n|)" + espacio en blanco + "*(?:([+-]|)" +
			espacio en blanco + "*(\\d+)|))" + espacio en blanco + "*\\)|)", "i" ),
		"bool": nueva RegExp( "^(?:" + booleanos + ")$", "i" ),

		// Para uso en bibliotecas que implementan .is()
		// Usamos esto para la coincidencia de POS en `select`
		"necesitaContexto": nueva RegExp( "^" + espacio en blanco +
			"*[>+~]|:(par|impar|eq|gt|lt|nésimo|primero|último)(?:\\(" + espacios en blanco +
			"*((?:-\\d)?\\d*)" + espacio en blanco + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:entrada|seleccionar|área de texto|botón)$/i,
	rheader = /^h\d$/i,

	nativo = /^[^{]+\{\s*\[nativo \w/,

	// Selectores de ID o TAG o CLASS fácilmente analizables/recuperables
	rexprrápida = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	hermano = /[+~]/,

	// escapes CSS
	// http://www.w3.org/TR/CSS21/syndata.html#personajes-escapados
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + espacios en blanco + "?|\\\\([^\\r\\n\\f])" , "g")
	funescape = function( escape, nonHex ) {
		var alta = "0x" + escape.slice( 1 ) - 0x10000;

		devolver no hexadecimal?

			// Eliminar el prefijo de barra invertida de una secuencia de escape no hexadecimal
			no hexadecimal:

			// Reemplazar una secuencia de escape hexadecimal con el punto de código Unicode codificado
			// Soporte: IE <=11+
			// Para valores fuera del Plano multilingüe básico (BMP), construya manualmente un
			// par sustituto
			alto < 0 ?
				String.fromCharCode (alto + 0x10000):
				String.fromCharCode (alto >> 10 | 0xD800, alto y 0x3FF | 0xDC00);
	},

	// Serialización de cadenas/identificadores CSS
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if (comoPuntoCode) {

			// U+0000 NULL se convierte en U+FFFD CARÁCTER DE REEMPLAZO
			si ( ch === "\0" ) {
				devuelve "\uFFFD";
			}

			// Los caracteres de control y los números (dependiendo de la posición) se escapan como puntos de código
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Otros caracteres ASCII potencialmente especiales se escapan con barra invertida
		volver "\\" + ch;
	},

	// Usado para iframes
	// Ver establecerDocumento()
	// Eliminar el envoltorio de la función provoca un "Permiso denegado"
	// error en IE
	controlador de descarga = función () {
		establecerDocumento();
	},

	inDisabledFieldset = addCombinator(
		función( elemento ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{dir: "parentNode", siguiente: "leyenda"}
	);

// Optimizar para push.apply( _, NodeList )
tratar {
	empujar.aplicar(
		( arr = slice.call(PreferredDoc.childNodes ) ),
		preferidoDoc.childNodes
	);

	// Soporte: Android<4.0
	// Detectar push.apply que falla silenciosamente
	// eslint-disable-next-line sin expresiones no utilizadas
	arr[PreferredDoc.childNodes.length].nodeType;
} atrapar ( e ) {
	empujar = { aplicar: arr.longitud ?

		// Aproveche el segmento si es posible
		función (objetivo, els) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Soporte: IE<9
		// De lo contrario, agregar directamente
		función (objetivo, els) {
			var j = objetivo.longitud,
				yo = 0;

			// No puedo confiar en NodeList.length
			while ( (objetivo[ j++ ] = els[ i++ ] ) ) {}
			objetivo.longitud = j - 1;
		}
	};
}

función Sizzle (selector, contexto, resultados, semilla) {
	var m, i, elem, nid, partido, grupos, nuevoSelector,
		nuevoContexto = contexto && contexto.documentopropietario,

		// nodeType por defecto es 9, ya que el contexto por defecto es document
		nodeType = contexto? contexto.tipo de nodo: 9;

	resultados = resultados || [];

	// Regreso anticipado de llamadas con selector o contexto inválido
	if (tipode selector !== "cadena" || !selector ||
		tipo de nodo !== 1 && tipo de nodo !== 9 && tipo de nodo !== 11 ) {

		devolver resultados;
	}

	// Intente atajar las operaciones de búsqueda (a diferencia de los filtros) en documentos HTML
	si (! semilla) {
		establecerDocumento( contexto );
		contexto = contexto || documento;

		si (documentoEsHTML) {

			// Si el selector es lo suficientemente simple, intente usar un método DOM "get*By*"
			// (excepto el contexto DocumentFragment, donde los métodos no existen)
			if (tipo de nodo! == 11 && (coincidencia = rquickExpr.exec (selector))) {

				// selector de identificación
				si ( ( m = partido [ 1 ] ) ) {

					// Contexto del documento
					if ( tipo de nodo === 9 ) {
						if ( ( elemento = context.getElementById( m ) ) ) {

							// Soporte: Internet Explorer, Opera, Webkit
							// TODO: identificar versiones
							// getElementById puede hacer coincidir elementos por nombre en lugar de ID
							if ( elem.id === m ) {
								resultados.push( elem );
								devolver resultados;
							}
						} demás {
							devolver resultados;
						}

					// contexto del elemento
					} demás {

						// Soporte: Internet Explorer, Opera, Webkit
						// TODO: identificar versiones
						// getElementById puede hacer coincidir elementos por nombre en lugar de ID
						if ( nuevoContexto && ( elemento = nuevoContexto.getElementById( m ) ) &&
							contiene (contexto, elemento) &&
							elem.id === m ) {

							resultados.push( elem );
							devolver resultados;
						}
					}

				// selector de tipo
				} más si (coincidir [ 2 ] ) {
					push.apply(resultados, context.getElementsByTagName(selector));
					devolver resultados;

				// Selector de clases
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					contexto.getElementsByClassName) {

					push.apply( resultados, context.getElementsByClassName( m ) );
					devolver resultados;
				}
			}

			// Aprovechar querySelectorAll
			si (soporte.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.prueba( selector ) ) &&

				// Soporte: solo IE 8
				// Excluir elementos de objeto
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "objeto" ) ) {

				nuevoSelector = selector;
				nuevoContexto = contexto;

				// qSA considera elementos fuera de una raíz de alcance al evaluar hijo o
				// combinadores descendientes, que no es lo que queremos.
				// En tales casos, evitamos el comportamiento anteponiendo cada selector en el
				// lista con un selector de ID que hace referencia al contexto del ámbito.
				// La técnica también debe usarse cuando se usa un combinador principal
				// como tales selectores no son reconocidos por querySelectorAll.
				// Gracias a Andrew Dupont por esta técnica.
				if ( tipo de nodo === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expandir contexto para selectores hermanos
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						contexto;

					// Podemos usar :scope en lugar del ID hack si el navegador
					// lo admite y si no estamos cambiando el contexto.
					if (nuevoContexto!== contexto || !soporte.ámbito) {

						// Captura el ID de contexto, configurándolo primero si es necesario
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} demás {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefijo cada selector en la lista
					grupos = tokenizar (selector);
					i = grupos.longitud;
					mientras yo-- ) {
						grupos[ i ] = ( nid ? "#" + nid : ":alcance" ) + " " +
							toSelector( grupos[ i ] );
					}
					nuevoSelector = grupos.unirse( "," );
				}

				tratar {
					push.apply(resultados,
						nuevoContexto.querySelectorAll( nuevoSelector )
					);
					devolver resultados;
				} atrapar ( qsaError ) {
					nonnativeSelectorCache(selector, verdadero);
				} por fin {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// Todos los otros
	return select( selector.replace( rtrim, "$1" ), contexto, resultados, semilla );
}

/**
 * Cree cachés de clave-valor de tamaño limitado
 * @returns {function(string, object)} Devuelve los datos del objeto después de almacenarlos en sí mismo con
 * nombre de propiedad la cadena (con sufijo de espacio) y (si el caché es más grande que Expr.cacheLength)
 * borrando la entrada más antigua
 */
función crear caché () {
	var claves = [];

	caché de funciones (clave, valor) {

		// Use (tecla + " ") para evitar la colisión con las propiedades del prototipo nativo (consulte el problema n.º 157)
		if (keys.push( key + " " ) > Expr.cacheLength ) {

			// Mantener solo las entradas más recientes
			borrar caché[ teclas.shift() ];
		}
		return (caché[clave + ""] = valor);
	}
	devolver caché;
}

/**
 * Marcar una función para uso especial de Sizzle
 * @param {Función} fn La función a marcar
 */
función marcarFunción( fn ) {
	fn[ expandir ] = verdadero;
	devolver fn;
}

/**
 * Pruebas de soporte usando un elemento
 * @param {Función} fn Pasó el elemento creado y devuelve un resultado booleano
 */
función afirmar (fn) {
	var el = document.createElement( "fieldset" );

	tratar {
		volver !!fn(el);
	} atrapar ( e ) {
		falso retorno;
	} por fin {

		// Eliminar de su padre por defecto
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// liberar memoria en IE
		el = nulo;
	}
}

/**
 * Agrega el mismo controlador para todos los atributos especificados
 * @param {String} attrs Lista de atributos separados por conductos
 * @param {Function} handler El método que se aplicará
 */
función addHandle (atributos, controlador) {
	var arr = attrs.split( "|" ),
		i = arr.longitud;

	mientras yo-- ) {
		Expr.attrHandle[ arr[ i ] ] = controlador;
	}
}

/**
 * Cheques documento orden de dos hermanos
 * @param {Elemento} a
 * @param {Elemento} b
 * @returns {Number} Devuelve menos de 0 si a precede a b, mayor que 0 si a sigue a b
 */
función siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.ÍndiceFuente - b.ÍndiceFuente;

	// Usar IE sourceIndex si está disponible en ambos nodos
	si (diferencia) {
		diferencia de retorno;
	}

	// Comprobar si b sigue a a
	si ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			si ( cur === segundo ) {
				devolver -1;
			}
		}
	}

	devolver un ? 1 : -1;
}

/**
 * Devuelve una función para usar en pseudos para tipos de entrada
 * @param {String} tipo
 */
función createInputPseudo( tipo ) {
	función de retorno (elemento) {
		var nombre = elem.nodeName.toLowerCase();
		devolver nombre === "entrada" && elem.tipo === tipo;
	};
}

/**
 * Devuelve una función para usar en pseudos para botones
 * @param {String} tipo
 */
función createButtonPseudo( tipo ) {
	función de retorno (elemento) {
		var nombre = elem.nodeName.toLowerCase();
		return ( nombre === "entrada" || nombre === "botón" ) && elem.tipo === tipo;
	};
}

/**
 * Devuelve una función para usar en pseudos para :habilitado/:deshabilitado
 * @param {Boolean} disabled verdadero para :disabled; falso para: habilitado
 */
función createDisabledPseudo(disabled) {

	// Conocido: falsos positivos deshabilitados: conjunto de campo [deshabilitado]> leyenda: nth-of-type (n + 2): can-disable
	función de retorno (elemento) {

		// Solo ciertos elementos pueden coincidir con :habilitado o :deshabilitado
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "formulario" en elem ) {

			// Comprobar la inhabilitación heredada en elementos no inhabilitados relevantes:
			// * enumera los elementos asociados al formulario en un conjunto de campos deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opciones en un grupo de opciones deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos estos elementos tienen una propiedad de "formulario".
			if ( elem.parentNode && elem.disabled === false ) {

				// Los elementos de opción se remiten a un grupo de opciones principal si está presente
				if ( "etiqueta" en elem ) {
					if ( "etiqueta" en elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} demás {
						return elem.deshabilitado === deshabilitado;
					}
				}

				// Soporte: Internet Explorer 6 - 11
				// Use la propiedad de acceso directo isDisabled para verificar si hay ancestros de conjuntos de campos deshabilitados
				volver elem.isDisabled === deshabilitado ||

					// Donde no hay isDisabled, verificar manualmente
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === deshabilitado;
			}

			return elem.deshabilitado === deshabilitado;

		// Intenta eliminar los elementos que no se pueden deshabilitar antes de confiar en la propiedad disabled.
		// Algunas víctimas quedan atrapadas en nuestra red (etiqueta, leyenda, menú, pista), pero no debería
		// incluso existen en ellos, y mucho menos tienen un valor booleano.
		} else if ( "etiqueta" en elem ) {
			return elem.deshabilitado === deshabilitado;
		}

		// Los elementos restantes no están :habilitados ni :deshabilitados
		falso retorno;
	};
}

/**
 * Devuelve una función para usar en pseudos para posicionales
 * @param {Función} fn
 */
función crearPseudoPosicional( fn ) {
	return funciónmarcar(función(argumento) {
		argumento = +argumento;
		return markFunction (función (semilla, coincidencias) {
			var j,
				matchIndexes = fn( [], seed.length, argumento ),
				i = índices de coincidencia.longitud;

			// Coincidencia de elementos encontrados en los índices especificados
			mientras yo-- ) {
				if ( semilla [ ( j = índices de coincidencia [ i ] ) ] ) {
					semilla[ j ] = !(coincidencias[ j ] = semilla[ j ] );
				}
			}
		});
	});
}

/**
 * Comprueba la validez de un nodo como contexto de Sizzle
 * @param {Elemento|Objeto=} contexto
 * @returns {Elemento|Objeto|Booleano} El nodo de entrada si es aceptable, de lo contrario un valor falso
 */
function pruebaContexto(contexto) {
	return context && typeof context.getElementsByTagName !== "indefinido" && context;
}

// Exponer vars de soporte por conveniencia
apoyo = Chisporrotear.apoyo = {};

/**
 * Detecta nodos XML
 * @param {Elemento|Objeto} elem Un elemento o un documento
 * @returns {Boolean} True iff elem es un nodo XML no HTML
 */
isXML = Chisporroteo.isXML = función (elemento) {
	var espacio de nombres = elem.namespaceURI,
		docElem = ( elem.propietarioDocumento || elem ).documentElement;

	// Soporte: IE <=8
	// Asumir HTML cuando documentElement aún no existe, como dentro de la carga de iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( espacio de nombres || docElem && docElem.nodeName || "HTML" );
};

/**
 * Establece variables relacionadas con el documento una vez basadas en el documento actual
 * @param {Elemento|Objeto} [doc] Un elemento u objeto de documento a usar para establecer el documento
 * @returns {Object} Devuelve el documento actual
 */
setDocument = Sizzle.setDocument = función (nodo) {
	var hasCompare, subVentana,
		doc = nodo? nodo.propietarioDocumento || nodo: preferidoDoc;

	// Vuelve temprano si el documento no es válido o ya está seleccionado
	// Soporte: IE 11+, Borde 17 - 18+
	// IE/Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-disable-next-line eqeqeq
	if ( doc == documento || doc.nodeType !== 9 || !doc.documentElement ) {
		documento de devolución;
	}

	// Actualizar variables globales
	documento = doc;
	docElem = documento.documentElement;
	documentIsHTML = !isXML( documento );

	// Soporte: IE 9 - 11+, Edge 12 - 18+
	// Acceder a documentos iframe después de la descarga arroja errores de "permiso denegado" (jQuery #13936)
	// Soporte: IE 11+, Borde 17 - 18+
	// IE/Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-disable-next-line eqeqeq
	if (preferidoDoc != documento &&
		( subVentana = documento.vistapredeterminada ) && subVentana.superior !== subVentana ) {

		// Soporte: IE 11, Borde
		si (subVentana.addEventListener) {
			subWindow.addEventListener( "descargar", unloadHandler, false );

		// Soporte: IE 9 - 10 solamente
		} más si (subVentana.attachEvent) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Soporte: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 solamente, Firefox <=3.6 - 31 solamente,
	// Safari 4 - 5 solamente, Opera <=11.6 - 12.x solamente
	// Los navegadores IE/Edge y anteriores no son compatibles con la pseudoclase :scope.
	// Soporte: solo Safari 6.0
	// Safari 6.0 admite :scope pero es un alias de :root allí.
	soporte.alcance = afirmar (función (el) {
		docElem.appendChild( el ).appendChild( documento.createElement( "div" ) );
		tipo de retorno de el.querySelectorAll !== "indefinido" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	});

	/* Atributos
	-------------------------------------------------- -------------------- */

	// Soporte: IE<8
	// Verificar que getAttribute realmente devuelva atributos y no propiedades
	// (excepto los booleanos de IE8)
	soporte.atributos = afirmar (función (el) {
		el.className = "i";
		return !el.getAttribute( "nombreClase" );
	});

	/* obtenerElemento(s)Por*
	-------------------------------------------------- -------------------- */

	// Comprobar si getElementsByTagName("*") devuelve solo elementos
	support.getElementsByTagName = afirmar (función (el) {
		el.appendChild( documento.createComment( "" ) );
		volver !el.getElementsByTagName( "*" ).longitud;
	});

	// Soporte: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Soporte: IE<10
	// Comprobar si getElementById devuelve elementos por nombre
	// Los métodos rotos getElementById no recogen nombres establecidos mediante programación,
	// así que use una prueba indirecta de getElementsByName
	soporte.getById = afirmar (función (el) {
		docElem.appendChild( el ).id = expando;
		volver !document.getElementsByName || !document.getElementsByName( expando ).longitud;
	});

	// filtro de ID y búsqueda
	if (soporte.getById) {
		Expr.filter[ "ID" ] = función( id ) {
			var attrId = id.replace( runescape, funescape );
			función de retorno (elemento) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = función( id, contexto ) {
			if ( typeof context.getElementById !== "indefinido" && documentIsHTML ) {
				var elem = context.getElementById( id );
				elemento de retorno? [ elemento ] : [];
			}
		};
	} demás {
		Expr.filter[ "ID" ] = función( id ) {
			var attrId = id.replace( runescape, funescape );
			función de retorno (elemento) {
				var node = typeof elem.getAttributeNode !== "indefinido" &&
					elem.getAttributeNode("id");
				devolver nodo && nodo.valor === attrId;
			};
		};

		// Soporte: IE 6 - 7 solamente
		// getElementById no es confiable como atajo de búsqueda
		Expr.find[ "ID" ] = función( id, contexto ) {
			if ( typeof context.getElementById !== "indefinido" && documentIsHTML ) {
				nodo var, yo, elementos,
					elemento = contexto.getElementById( id );

				si ( elemento ) {

					// Verificar el atributo id
					nodo = elem.getAttributeNode( "id" );
					if ( nodo && nodo.valor === id ) {
						retorno [ elemento ];
					}

					// Recurrir a getElementsByName
					elementos = context.getElementsByName( id );
					yo = 0;
					while (( elemento = elementos[ i++ ] ) ) {
						nodo = elem.getAttributeNode( "id" );
						if ( nodo && nodo.valor === id ) {
							retorno [ elemento ];
						}
					}
				}

				regreso [];
			}
		};
	}

	// Etiqueta
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		función (etiqueta, contexto) {
			if ( typeof context.getElementsByTagName !== "indefinido" ) {
				return context.getElementsByTagName(etiqueta);

			// Los nodos DocumentFragment no tienen gEBTN
			} más si (soporte.qsa) {
				return context.querySelectorAll(etiqueta);
			}
		} :

		función (etiqueta, contexto) {
			var elemento,
				tmp = [],
				yo = 0,

				// Por feliz coincidencia, también aparece un gEBTN (roto) en los nodos de DocumentFragment
				resultados = context.getElementsByTagName( etiqueta );

			// Filtrar posibles comentarios
			si ( etiqueta === "*" ) {
				while ( ( elem = resultados[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push(elemento);
					}
				}

				volver tmp;
			}
			devolver resultados;
		};

	// Clase
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "indefinido" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/selector de coincidencias
	-------------------------------------------------- -------------------- */

	// Compatibilidad con QSA y MatchSelector

	//matchSelector(:active) informa falso cuando es verdadero (IE9/Opera 11.5)
	rbuggyCoincidencias = [];

	// qSa(:focus) informa falso cuando es verdadero (Chrome 21)
	// Permitimos esto debido a un error en IE8/9 que arroja un error
	// cada vez que se accede a `document.activeElement` en un iframe
	// Entonces, permitimos que :focus pase a través de QSA todo el tiempo para evitar el error de IE
	// Ver https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Construir la expresión regular de QSA
		// Estrategia Regex adoptada de Diego Perini
		afirmar( función( el ) {

			entrada var;

			// Seleccionar se establece en una cadena vacía a propósito
			// Esto es para probar el tratamiento de IE de no explícitamente
			// establecer un atributo de contenido booleano,
			// ya que su presencia debería ser suficiente
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<seleccionar id='" + expandir + "-\r\\' msallowcapture=''>" +
				"<opción seleccionada=''></opción></seleccionar>";

			// Soporte: IE8, Opera 11-12.16
			// No se debe seleccionar nada cuando las cadenas vacías siguen ^= o $= o *=
			// El atributo de prueba debe ser desconocido en Opera pero "seguro" para WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).longitud ) {
				rbuggyQSA.push( "[*^$]=" + espacios en blanco + "*(?:''|\"\")" );
			}

			// Soporte: IE8
			// Los atributos booleanos y el "valor" no se tratan correctamente
			if ( !el.querySelectorAll( "[seleccionado]" ).longitud ) {
				rbuggyQSA.push( "\\[" + espacio en blanco + "*(?:valor|" + booleanos + ")" );
			}

			// Soporte: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).longitud ) {
				rbuggyQSA.push( "~=" );
			}

			// Soporte: IE 11+, Edge 15 - 18+
			// IE 11/Edge no encuentra elementos en una consulta `[name='']` en algunos casos.
			// Agregar un atributo temporal al documento antes de que funcione la selección
			// alrededor del problema.
			// Curiosamente, IE 10 y anteriores no parecen tener el problema.
			entrada = documento.createElement("entrada");
			input.setAttribute( "nombre", "" );
			el.appendChild (entrada);
			if ( !el.querySelectorAll( "[nombre='']" ).longitud ) {
				rbuggyQSA.push( "\\[" + espacio en blanco + "*nombre" + espacio en blanco + "*=" +
					espacio en blanco + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :marcado debe devolver los elementos de opción seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 arroja un error aquí y no verá pruebas posteriores
			if ( !el.querySelectorAll( ":marcado").longitud ) {
				rbuggyQSA.push( ":comprobado" );
			}

			// Soporte: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// Falla el `selector#id sibling-combinator selector` en la página
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).longitud ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Soporte: Firefox <=3.6 - 5 solamente
			// El antiguo Firefox no muestra un identificador mal escapado.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		});

		afirmar( función( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<seleccionar deshabilitado='deshabilitado'><opción/></seleccionar>";

			// Soporte: aplicaciones nativas de Windows 8
			// Los atributos de tipo y nombre están restringidos durante la asignación de .innerHTML
			var entrada = documento.createElement("entrada");
			input.setAttribute("tipo", "oculto");
			el.appendChild( entrada ).setAttribute( "nombre", "D" );

			// Soporte: IE8
			// Hacer cumplir la distinción entre mayúsculas y minúsculas del atributo de nombre
			if ( el.querySelectorAll( "[nombre=d]" ).longitud ) {
				rbuggyQSA.push( "nombre" + espacio en blanco + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :habilitado/:deshabilitado y elementos ocultos (los elementos ocultos aún están habilitados)
			// IE8 arroja un error aquí y no verá pruebas posteriores
			if ( el.querySelectorAll( ":habilitado").longitud !== 2 ) {
				rbuggyQSA.push( ":habilitado", ":deshabilitado" );
			}

			// Soporte: IE9-11+
			// El selector :disabled de IE no selecciona los elementos secundarios de los conjuntos de campos deshabilitados
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":deshabilitado").longitud !== 2 ) {
				rbuggyQSA.push( ":habilitado", ":deshabilitado" );
			}

			// Soporte: Opera 10 - 11 solamente
			// Opera 10-11 no arroja pseudos inválidos posteriores a la coma
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		});
	}

	if ( ( support.matchesSelector = rnative.test( ( coincidencias = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		afirmar( función( el ) {

			// Comprueba si es posible hacer matchSelector
			// en un nodo desconectado (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// Esto debería fallar con una excepción
			// Gecko no da error, devuelve falso en su lugar
			coincidencias.llamada( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.longitud && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contiene
	-------------------------------------------------- -------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	//El elemento contiene otro
	// Deliberadamente autoexclusivo
	// Como en, un elemento no se contiene a sí mismo
	contiene = tiene Comparar || rnative.test( docElem.contains ) ?
		función( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			devuelve un === aumento || !!( bup && bup.nodeType === 1 && (
				adown.contiene?
					adown.contains(bup):
					a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
			) );
		} :
		función( a, b ) {
			si (b) {
				while ( ( b = b.NodoPadre ) ) {
					si ( segundo === un ) {
						devolver verdadero;
					}
				}
			}
			falso retorno;
		};

	/* Ordenar
	-------------------------------------------------- -------------------- */

	// Clasificación del orden de los documentos
	sortOrder = hasCompare ?
	función( a, b ) {

		// Bandera para eliminación de duplicados
		si ( un === segundo ) {
			tiene duplicado = verdadero;
			devolver 0;
		}

		// Ordenar según la existencia del método si solo una entrada tiene compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		si ( comparar ) {
			volver comparar;
		}

		// Calcular posición si ambas entradas pertenecen al mismo documento
		// Soporte: IE 11+, Borde 17 - 18+
		// IE/Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
		// dos documentos; las comparaciones superficiales funcionan.
		// eslint-disable-next-line eqeqeq
		comparar = ( a.Documentopropietario || a ) == ( b.Documentopropietario || b ) ?
			a.compareDocumentPosition( b ) :

			// De lo contrario, sabemos que están desconectados
			1;

		// Nodos desconectados
		si ( comparar & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === comparar ) ) {

			//Elegir el primer elemento relacionado con nuestro documento preferido
			// Soporte: IE 11+, Borde 17 - 18+
			// IE/Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
			// dos documentos; las comparaciones superficiales funcionan.
			// eslint-disable-next-line eqeqeq
			if ( a == documento || a.propietarioDocumento == preferidoDoc &&
				contiene (preferidoDoc, a)) {
				devolver -1;
			}

			// Soporte: IE 11+, Borde 17 - 18+
			// IE/Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
			// dos documentos; las comparaciones superficiales funcionan.
			// eslint-disable-next-line eqeqeq
			if ( b == documento || b.documentopropietario == documentopreferido &&
				contiene (preferidoDoc, b)) {
				devolver 1;
			}

			// Mantener el orden original
			devolver sortInput?
				( indexOf( ordenarEntrada, a ) - indexOf( ordenarEntrada, b ) ) :
				0;
		}

		volver comparar & 4 ? -1 : 1;
	} :
	función( a, b ) {

		// Salir temprano si los nodos son idénticos
		si ( un === segundo ) {
			tiene duplicado = verdadero;
			devolver 0;
		}

		var cur,
			yo = 0,
			aup = a.parentNode,
			bup = b.NodoPadre,
			ap = [ un ],
			pb = [b];

		// Los nodos sin padres son documentos o están desconectados
		si ( !aup || !bup ) {

			// Soporte: IE 11+, Borde 17 - 18+
			// IE/Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
			// dos documentos; las comparaciones superficiales funcionan.
			/* eslint-desactivar eqeqeq */
			devolver un == documento? -1 :
				b == documento ? 1:
				/* eslint-habilitar eqeqeq */
				aup? -1 :
				bup? 1:
				¿Ordenar entrada?
				( indexOf( ordenarEntrada, a ) - indexOf( ordenarEntrada, b ) ) :
				0;

		// Si los nodos son hermanos, podemos hacer una revisión rápida
		} más si (aup === bup) {
			return siblingCheck( a, b );
		}

		// De lo contrario, necesitamos listas completas de sus antepasados ​​para comparar
		cur = un;
		while ( ( cur = cur.NodoPadre ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.NodoPadre ) ) {
			pb.unshift( cur );
		}

		// Baja por el árbol buscando una discrepancia
		mientras que ( ap[ yo ] === pb[ yo ] ) {
			yo++;
		}

		regreso yo?

			// Hacer una verificación de hermanos si los nodos tienen un ancestro común
			siblingCheck( ap[ i ], bp[ i ] ) :

			// De lo contrario, los nodos en nuestro documento se ordenan primero
			// Soporte: IE 11+, Borde 17 - 18+
			// IE/Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
			// dos documentos; las comparaciones superficiales funcionan.
			/* eslint-desactivar eqeqeq */
			ap[ i ] == preferidoDoc ? -1 :
			bp[ i ] == preferidoDoc ? 1:
			/* eslint-habilitar eqeqeq */
			0;
	};

	documento de devolución;
};

Sizzle.coincidencias = función (expr, elementos) {
	return Sizzle(expr, null, null, elementos);
};

Sizzle.matchesSelector = función (elemento, expr) {
	establecerDocumento( elemento );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.prueba( expr ) ) &&
		( !rbuggyQSA || !rbuggyQSA.prueba( expr ) ) ) {

		tratar {
			var ret = coincidencias.llamada( elem, expr );

			// MatchSelector de IE 9 devuelve falso en nodos desconectados
			if (ret || support.disconnectedMatch ||

				// También se dice que los nodos desconectados están en un documento
				// fragmento en IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				volver ret;
			}
		} atrapar ( e ) {
			nonnativeSelectorCache(expr, true);
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).longitud > 0;
};

Sizzle.contains = función (contexto, elem) {

	// Establecer vars de documento si es necesario
	// Soporte: IE 11+, Borde 17 - 18+
	// IE/Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-disable-next-line eqeqeq
	if (( contexto.documentopropietario || contexto ) != documento ) {
		establecerDocumento( contexto );
	}
	return contiene (contexto, elemento);
};

Sizzle.attr = función (elemento, nombre) {

	// Establecer vars de documento si es necesario
	// Soporte: IE 11+, Borde 17 - 18+
	// IE/Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.documentopropietario || elem ) != documento ) {
		establecerDocumento( elemento );
	}

	var fn = Expr.attrHandle[ nombre.toLowerCase() ],

		// No se deje engañar por las propiedades de Object.prototype (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elemento, nombre, !documentIsHTML ) :
			indefinido;

	valor de retorno! == indefinido?
		valor:
		soporte.atributos || !documentIsHTML ?
			elem.getAttribute(nombre):
			( val = elem.getAttributeNode( nombre ) ) && val.specified ?
				val.valor :
				nulo;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = función (mensaje) {
	throw new Error( "Error de sintaxis, expresión no reconocida: " + msg );
};

/**
 * Clasificación de documentos y eliminación de duplicados.
 * @param {ArrayLike} resultados
 */
Sizzle.uniqueSort = función (resultados) {
	var elemento,
		duplicados = [],
		j = 0,
		yo = 0;

	// A menos que *sepamos* que podemos detectar duplicados, asumir su presencia
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && resultados.slice( 0 );
	resultados.clasificar( ordenOrdenar );

	si ( tiene duplicado ) {
		while ( ( elem = resultados[ i++ ] ) ) {
			if ( elem === resultados[ i ] ) {
				j = duplicados.push( i );
			}
		}
		mientras ( j-- ) {
			resultados. empalme (duplicados [j], 1);
		}
	}

	// Borrar entrada después de ordenar para liberar objetos
	// Ver https://github.com/jquery/sizzle/pull/225
	ordenarEntrada = nulo;

	devolver resultados;
};

/**
 * Función de utilidad para recuperar el valor de texto de una matriz de nodos DOM
 * @param {Arreglo|Elemento} elemento
 */
getText = Chisporrotear.getText = function( elemento ) {
	nodo var,
		ret = "",
		yo = 0,
		nodeType = elem.nodeType;

	si (! tipo de nodo) {

		// Si no hay tipo de nodo, se espera que sea una matriz
		while ( ( nodo = elem[ i++ ] ) ) {

			// No atravesar nodos de comentarios
			ret += obtenerTexto(nodo);
		}
	} else if ( tipo de nodo === 1 || tipo de nodo === 9 || tipo de nodo === 11 ) {

		// Usar contenido de texto para elementos
		// se eliminó el uso de texto interno para mantener la coherencia de las nuevas líneas (jQuery #11153)
		if ( typeof elem.textContent === "cadena" ) {
			volver elem.textContent;
		} demás {

			// Atraviesa sus hijos
			for ( elem = elem.primerHijo; elem; elem = elem.siguienteSibling ) {
				ret += obtenerTexto( elemento );
			}
		}
	} else if ( tipo de nodo === 3 || tipo de nodo === 4 ) {
		volver elem.nodeValue;
	}

	// No incluir comentarios ni nodos de instrucciones de procesamiento

	volver ret;
};

Expr = Sizzle.selectors = {

	// Puede ser ajustado por el usuario
	cachéLongitud: 50,

	createPseudo: marcarFunción,

	partido: partidoExpr,

	manejador de atributos: {},

	encontrar: {},

	relativo: {
		">": {dir: "parentNode", primero: verdadero},
		" ": {dir: "nodopadre"},
		"+": { dir: "hermano anterior", primero: verdadero},
		"~": { dir: "hermano anterior" }
	},

	prefiltro: {
		"ATTR": función (coincidencia) {
			coincidir[1] = coincidir[1].reemplazar(runescape, funescape);

			// Mueve el valor dado para que coincida con [3] ya sea entre comillas o sin comillas
			partido[ 3 ] = ( partido[ 3 ] || partido[ 4 ] ||
				partido[ 5 ] || "" ).reemplazar( runescape, funescape );

			si ( partido [ 2 ] === "~=" ) {
				partido[ 3 ] = " " + partido[ 3 ] + " ";
			}

			return partido.rebanada( 0, 4 );
		},

		"NIÑO": función (coincidencia) {

			/* coincidencias de matchExpr["CHILD"]
				1 tipo (solo|nth|...)
				2 qué (hijo|de-tipo)
				3 argumentos (par|impar|\d*|\d*n([+-]\d+)?|...)
				4 componente xn del argumento xn+y ([+-]?\d*n|)
				5 signo de componente xn
				6 x de componente xn
				7 signo de componente y
				8 y de componente y
			*/
			coincidir[ 1 ] = coincidir[ 1 ].toLowerCase();

			if (coincidencia[ 1 ].segmento( 0, 3 ) === "nth" ) {

				// nth-* requiere argumento
				si ( !coincidir[ 3 ] ) {
					Sizzle.error (coincidencia [0]);
				}

				// parámetros numéricos x e y para Expr.filter.CHILD
				// recuerda que la conversión de falso/verdadero es 0/1 respectivamente
				partido[ 4 ] = +( partido[ 4 ] ?
					partido[ 5 ] + ( partido[ 6 ] || 1 ) :
					2 * ( partido [ 3 ] === "par" || partido [ 3 ] === "impar" ) );
				partido[ 5 ] = +( ( partido[ 7 ] + partido[ 8 ] ) || partido[ 3 ] === "impar" );

				// otros tipos prohíben argumentos
			} más si (coincidencia [ 3 ] ) {
				Sizzle.error (coincidencia [0]);
			}

			partido de vuelta;
		},

		"PSEUDO": función (coincidencia) {
			exceso de var,
				sin comillas = !coincidencia[ 6 ] && coincidencia[ 2 ];

			if (coincidenciaExpr[ "NIÑO"].prueba(coincidencia[ 0 ] ) ) {
				devolver nulo;
			}

			// Aceptar los argumentos citados tal cual
			si ( partido [ 3 ] ) {
				partido[ 2 ] = partido[ 4 ] || partido[ 5 ] || "";

			// Eliminar el exceso de caracteres de los argumentos sin comillas
			} else if ( sin comillas && rpseudo.test( sin comillas ) &&

				// Obtener exceso de tokenize (recursivamente)
				(exceso = tokenizar (sin comillas, verdadero)) &&

				// avanzar al siguiente paréntesis de cierre
				( exceso = sin comillas.indexOf( ")", sin comillas.longitud - exceso ) - sin comillas.longitud ) ) {

				// el exceso es un índice negativo
				partido[ 0 ] = partido[ 0 ].slice( 0, exceso );
				partido[ 2 ] = sin comillas.slice( 0, exceso );
			}

			// Devuelve solo las capturas necesarias para el método de pseudofiltro (tipo y argumento)
			return partido.rebanada( 0, 3 );
		}
	},

	filtro: {

		"ETIQUETA": función (NodeNameSelector) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			devolver nodeNameSelector === "*" ?
				función() {
					devolver verdadero;
				} :
				función( elemento ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASE": función (nombre de clase) {
			var patrón = classCache[ className + " " ];

			patrón de retorno ||
				(patrón = nueva RegExp( "(^|" + espacio en blanco +
					")" + className + "(" + espacios en blanco + "|$)" ) ) && classCache(
						nombreclase, función( elemento ) {
							patrón de retorno.prueba(
								typeof elem.className === "cadena" && elem.className ||
								typeof elem.getAttribute !== "indefinido" &&
									elem.getAttribute( "clase") ||
								""
							);
				});
		},

		"ATTR": función (nombre, operador, verificación) {
			función de retorno (elemento) {
				var resultado = Sizzle.attr( elemento, nombre );

				si (resultado == nulo) {
					operador de retorno === "!=";
				}
				si (! operador) {
					devolver verdadero;
				}

				resultado += "";

				/* eslint-disable max-len */

				operador de retorno === "=" ? resultado === comprobar:
					operador === "!=" ? resultado !== comprobar :
					operador === "^=" ? comprobar && resultado.indexOf( comprobar ) === 0 :
					operador === "*=" ? comprobar && result.indexOf( comprobar ) > -1 :
					operador === "$=" ? verificar && resultado.slice( -verificar.longitud ) === verificar :
					operador === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( comprobar ) > -1 :
					operador === "|=" ? resultado === comprobar || result.slice( 0, check.length + 1 ) === check + "-" :
					falso;
				/* eslint-habilitar max-len */

			};
		},

		"NIÑO": función (tipo, qué, _argumento, primero, último) {
			var simple = type.slice( 0, 3 ) !== "nth",
				adelante = type.slice( -4 ) !== "último",
				ofType = qué === "de tipo";

			volver primero === 1 && último === 0 ?

				// Atajo para :nth-*(n)
				función( elemento ) {
					volver !!elemento.parentNode;
				} :

				función( elemento, _contexto, xml ) {
					var caché, caché único, caché externo, nodo, índice de nodo, inicio,
						dir = simple !== adelante ? "hermano siguiente": "hermano anterior",
						padre = elemento.nodopadre,
						nombre = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diferencia = falso;

					si (padre) {

						// :(primero|último|único)-(hijo|de-tipo)
						si (simple) {
							mientras (dir) {
								nodo = elemento;
								while (( nodo = nodo[ dir ] ) ) {
									si (deTipo?
										node.nodeName.toLowerCase() === nombre:
										nodo.nodeType === 1 ) {

										falso retorno;
									}
								}

								// Dirección inversa para :only-* (si aún no lo hemos hecho)
								start = dir = type === "solo" && !start && "nextSibling";
							}
							devolver verdadero;
						}

						inicio = [adelante? padre.primerhijo : padre.ultimohijo ];

						// non-xml :nth-child(...) almacena datos de caché en `parent`
						if (adelante && useCache) {

							// Busca `elem` de un índice previamente almacenado en caché

							// ...de forma compatible con gzip
							nodo = padre;
							cachéexterior = nodo[ expando ] || ( nodo[ expando ] = {} );

							// Soporte: IE <9 solamente
							// Defiéndete de las propiedades clonadas (jQuery gh-1709)
							uniqueCache = externalCache[ nodo.uniqueID ] ||
								(outerCache[ nodo.uniqueID ] = {} );

							cache = uniqueCache[ tipo ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							nodo = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( nodo = ++índicenodo && nodo && nodo[ dir ] ||

								// Alternativa a la búsqueda de `elem` desde el principio
								(diferencia = índice de nodo = 0) || inicio.pop() ) ) {

								// Cuando se encuentran, almacenan en caché los índices en `parent` y rompen
								if (node.nodeType === 1 && ++diff && nodo === elem) {
									uniqueCache[ tipo ] = [ dirruns, nodeIndex, diff ];
									descanso;
								}
							}

						} demás {

							// Usa el índice de elementos previamente almacenado en caché si está disponible
							si (usar caché) {

								// ...de forma compatible con gzip
								nodo = elemento;
								cachéexterior = nodo[ expando ] || ( nodo[ expando ] = {} );

								// Soporte: IE <9 solamente
								// Defiéndete de las propiedades clonadas (jQuery gh-1709)
								uniqueCache = externalCache[ nodo.uniqueID ] ||
									(outerCache[ nodo.uniqueID ] = {} );

								cache = uniqueCache[ tipo ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diferencia = índice de nodo;
							}

							// xml :nth-child(...)
							// o :nth-last-child(...) o :nth(-last)?-of-type(...)
							si (diferencia === falso) {

								// Usa el mismo bucle que el anterior para buscar `elem` desde el principio
								while ( ( nodo = ++índicenodo && nodo && nodo[ dir ] ||
									(diferencia = índice de nodo = 0) || inicio.pop() ) ) {

									si ((deTipo?
										node.nodeName.toLowerCase() === nombre:
										nodo.tipo de nodo === 1 ) &&
										++diferencia) {

										// Almacenar en caché el índice de cada elemento encontrado
										si (usar caché) {
											cachéexterior = nodo[ expando ] ||
												( nodo[ expando ] = {} );

											// Soporte: IE <9 solamente
											// Defiéndete de las propiedades clonadas (jQuery gh-1709)
											uniqueCache = externalCache[ nodo.uniqueID ] ||
												(outerCache[ nodo.uniqueID ] = {} );

											uniqueCache[ tipo ] = [ dirruns, diff ];
										}

										si (nodo === elemento) {
											descanso;
										}
									}
								}
							}
						}

						// Incorporar el desplazamiento, luego compararlo con el tamaño del ciclo
						diferencia -= último;
						devuelve diferencia === primero || (dif % primero === 0 && diff / primero >= 0 );
					}
				};
		},

		"PSEUDO": función (pseudo, argumento) {

			// los nombres de las pseudoclases no distinguen entre mayúsculas y minúsculas
			// http://www.w3.org/TR/selectors/#pseudo-clases
			// Priorizar por distinción de mayúsculas y minúsculas en caso de que se agreguen pseudos personalizados con letras mayúsculas
			// Recuerda que setFilters hereda de pseudos
			var argumentos,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "pseudo no soportado: " + pseudo );

			// El usuario puede usar createPseudo para indicar que
			// se necesitan argumentos para crear la función de filtro
			// tal como lo hace Chisporroteo
			if (fn[ expandir ] ) {
				devolver fn(argumento);
			}

			// Pero mantenemos soporte para firmas antiguas
			if ( fn.longitud > 1 ) {
				argumentos = [ pseudo, pseudo, "", argumento ];
				devolver Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction (función (semilla, coincidencias) {
						var idx,
							emparejado = fn (semilla, argumento),
							i = emparejado.longitud;
						mientras yo-- ) {
							idx = indexOf(seed, emparejado[i]);
							semilla[ idx ] = !(coincidencias[ idx ] = coincidencias[ i ] );
						}
					}):
					función( elemento ) {
						return fn(elemento, 0, argumentos);
					};
			}

			devolver fn;
		}
	},

	pseudos: {

		// Pseudos potencialmente complejos
		"no": marcarFunción(función(selector) {

			// Recortar el selector pasado a compilar
			// para evitar tratar el inicio y el final
			// espacios como combinadores
			var entrada = [],
				resultados = [],
				comparador = compilar (selector. reemplazar (rtrim, "$ 1"));

			devolver emparejador[ expando ] ?
				markFunction(función(semilla, coincidencias, _contexto, xml) {
					var elemento,
						sin igual = emparejador (semilla, nulo, xml, []),
						i = semilla.longitud;

					// Coincidencia de elementos no coincidentes con `matcher`
					mientras yo-- ) {
						if ( ( elem = sin igual[ i ] ) ) {
							seed[ i ] = !(coincide con[ i ] = elem );
						}
					}
				}):
				función( elemento, _contexto, xml ) {
					entrada[ 0 ] = elemento;
					comparador (entrada, nulo, xml, resultados);

					// No conservar el elemento (problema #299)
					entrada[ 0 ] = nulo;
					volver !resultados.pop();
				};
		} ),

		"tiene": markFunction(función(selector) {
			función de retorno (elemento) {
				return Sizzle( selector, elem ).longitud > 0;
			};
		} ),

		"contiene": markFunction(función(texto) {
			texto = texto.reemplazar( runescape, funescape );
			función de retorno (elemento) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Si un elemento está representado por un selector :lang()
		// se basa únicamente en el valor de idioma del elemento
		// siendo igual al identificador C,
		// o comenzando con el identificador C seguido inmediatamente por "-".
		// La coincidencia de C con el valor de idioma del elemento se realiza sin distinción entre mayúsculas y minúsculas.
		// El identificador C no tiene que ser un nombre de idioma válido".
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction(función(lang) {

			// el valor lang debe ser un identificador válido
			if ( !ridentificador.prueba( idioma || "" ) ) {
				Sizzle.error ("idioma no admitido:" + idioma);
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			función de retorno (elemento) {
				var elemLang;
				hacer {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "idioma") ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				falso retorno;
			};
		} ),

		// Varios
		"objetivo": función (elemento) {
			var hash = ventana.ubicación && ventana.ubicación.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"raíz": función (elemento) {
			return elem === docElem;
		},

		"enfoque": función (elemento) {
			devolver elemento === documento.elementoactivo &&
				( !documento.hasFocus || documento.hasFocus() ) &&
				!!( elem.tipo || elem.href || ~elem.tabIndex );
		},

		// propiedades booleanas
		"habilitado": createDisabledPseudo( falso ),
		"deshabilitado": createDisabledPseudo(verdadero),

		"marcado": función (elemento) {

			// En CSS3, :checked debería devolver tanto los elementos marcados como los seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "opción" && !!elem.selected );
		},

		"seleccionado": función (elemento) {

			// Al acceder a esta propiedad, se selecciona por defecto
			// las opciones en Safari funcionan correctamente
			if ( elem.parentNode ) {
				// eslint-disable-next-line sin expresiones no utilizadas
				elem.parentNode.selectedIndex;
			}

			return elem.seleccionado === verdadero;
		},

		// Contenido
		"vacío": función (elemento) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :vacío es negado por elemento (1) o nodos de contenido (texto: 3; cdata: 4; entidad ref: 5),
			// pero no por otros (comentario: 8; instrucción de procesamiento: 7; etc.)
			// nodeType < 6 funciona porque los atributos (2) no aparecen como hijos
			for ( elem = elem.primerHijo; elem; elem = elem.siguienteSibling ) {
				if ( elem.nodeType < 6 ) {
					falso retorno;
				}
			}
			devolver verdadero;
		},

		"padre": función (elemento) {
			return !Expr.pseudos[ "vacío" ]( elem );
		},

		// Tipos de elementos/entradas
		"encabezado": función (elemento) {
			return rheader.test( elem.nodeName );
		},

		"entrada": función (elemento) {
			return rinputs.test( elem.nodeName );
		},

		"botón": función (elemento) {
			var nombre = elem.nodeName.toLowerCase();
			devolver nombre === "entrada" && elem.type === "botón" || nombre === "botón";
		},

		"texto": función (elemento) {
			atributo var;
			devuelve elem.nodeName.toLowerCase() === "entrada" &&
				elem.tipo === "texto" &&

				// Soporte: IE<8
				// Los nuevos valores de atributos de HTML5 (p. ej., "buscar") aparecen con elem.type === "texto"
				( ( attr = elem.getAttribute( "tipo" ) ) == nulo ||
					attr.toLowerCase() === "texto" );
		},

		// Posición en la colección
		"primero": createPositionalPseudo( function() {
			devolver [0];
		} ),

		"último": createPositionalPseudo( function( _matchIndexes, longitud ) {
			retorno [longitud - 1];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, longitud, argumento ) {
			devolver [ argumento < 0 ? argumento + longitud : argumento ];
		} ),

		"incluso": createPositionalPseudo( function(matchIndexes, length ) {
			var i = 0;
			para ( ; i < longitud; i += 2 ) {
				coincidirÍndices.push( i );
			}
			devolver índices de coincidencia;
		} ),

		"impar": createPositionalPseudo( function(matchIndexes, length ) {
			var i = 1;
			para ( ; i < longitud; i += 2 ) {
				coincidirÍndices.push( i );
			}
			devolver índices de coincidencia;
		} ),

		"lt": createPositionalPseudo( function(matchIndexes, longitud, argumento) {
			var i = argumento < 0 ?
				argumento + longitud:
				argumento > longitud ?
					longitud :
					argumento;
			para ( ; --i >= 0; ) {
				coincidirÍndices.push( i );
			}
			devolver índices de coincidencia;
		} ),

		"gt": createPositionalPseudo( function(matchIndexes, longitud, argumento) {
			var i = argumento < 0 ? argumento + longitud : argumento;
			para ( ; ++i < longitud; ) {
				coincidirÍndices.push( i );
			}
			devolver índices de coincidencia;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Agregar botón/tipo de entrada pseudos
for ( i en { radio: verdadero, casilla de verificación: verdadero, archivo: verdadero, contraseña: verdadero, imagen: verdadero } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for (yo en {enviar: verdadero, restablecer: verdadero}) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// API fácil para crear nuevos setFilters
función establecerFiltros() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = función (selector, parseOnly) {
	var emparejado, partido, fichas, tipo,
		soFar, grupos, prefiltros,
		cacheado = tokenCache[ selector + " " ];

	si (almacenado en caché) {
		volver parseOnly? 0 : cacheado.slice( 0 );
	}

	hasta ahora = selector;
	grupos = [];
	prefiltros = Expr.prefiltro;

	mientras ( hasta ahora ) {

		// Coma y primera ejecución
		if ( !emparejado || (coincidencia = rcomma.exec( hasta ahora ) ) ) {
			si (coincidencia) {

				// No consumir comas finales como válidas
				hasta ahora = hasta ahora.slice( partido[ 0 ].longitud ) || hasta aquí;
			}
			grupos.push(( tokens = [] ) );
		}

		emparejado = falso;

		// Combinadores
		if ( ( partido = rcombinators.exec( hasta ahora ) ) ) {
			emparejado = partido.shift();
			fichas.push( {
				valor: emparejado,

				// Lanzar combinadores descendientes al espacio
				tipo: partido[ 0 ].replace( rtrim, " " )
			});
			tanFar = tanFar.slice(coincidencia.longitud);
		}

		// Filtros
		for (escriba Expr.filter) {
			if ( (coincidencia = matchExpr[ tipo ].exec( hasta ahora ) ) && ( !prefiltros[ tipo ] ||
				(coincidencia = prefiltros[ tipo ](coincidencia) ) ) ) {
				emparejado = partido.shift();
				fichas.push( {
					valor: emparejado,
					tipo: tipo,
					partidos: partido
				});
				tanFar = tanFar.slice(coincidencia.longitud);
			}
		}

		si (! emparejado) {
			descanso;
		}
	}

	// Devuelve la longitud del exceso inválido
	// si solo estamos analizando
	// De lo contrario, arroja un error o devuelve tokens
	volver parseOnly ?
		tanFar.length :
		hasta aquí ?
			Sizzle.error (selector):

			// Almacenar en caché los tokens
			tokenCache( selector, grupos ).slice( 0 );
};

función toSelector (tokens) {
	var i = 0,
		len = fichas.longitud,
		seleccionador = "";
	para ( ; i < len; i++ ) {
		selector += fichas[ i ].valor;
	}
	selector de retorno;
}

function addCombinator(comparador, combinador, base) {
	var dir = combinador.dir,
		skip = combinador.siguiente,
		tecla = saltar || dirección,
		checkNonElements = base && clave === "parentNode",
		hechoNombre = hecho++;

	devolver combinador.primero?

		// Comparar con el ancestro más cercano/elemento precedente
		función (elemento, contexto, xml) {
			while (( elemento = elemento[dirección])) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					devolver el comparador (elemento, contexto, xml);
				}
			}
			falso retorno;
		} :

		// Comprobar con todos los antecesores/elementos precedentes
		función (elemento, contexto, xml) {
			var oldCache, uniqueCache, outsideCache,
				newCache = [dirruns, doneName];

			// No podemos establecer datos arbitrarios en nodos XML, por lo que no se benefician del almacenamiento en caché del combinador
			si ( xml ) {
				while (( elemento = elemento[dirección])) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						si (comparador (elemento, contexto, xml)) {
							devolver verdadero;
						}
					}
				}
			} demás {
				while (( elemento = elemento[dirección])) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						cachéexterior = elem[ expandir ] || ( elem[ expandir ] = {} );

						// Soporte: IE <9 solamente
						// Defiéndete de las propiedades clonadas (jQuery gh-1709)
						uniqueCache = externalCache[ elem.uniqueID ] ||
							(outerCache[ elem.uniqueID ] = {} );

						if ( saltar && saltar === elem.nodeName.toLowerCase() ) {
							elemento = elemento[dirección] || elemento;
						} else if ((oldCache = uniqueCache[ clave ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Asignar a newCache para que los resultados se propaguen hacia atrás a elementos anteriores
							return ( newCache [ 2 ] = oldCache [ 2 ] );
						} demás {

							// Reutilizar newcache para que los resultados se propaguen hacia atrás a elementos anteriores
							UniqueCache[ clave ] = newCache;

							// Una coincidencia significa que hemos terminado; un fallo significa que tenemos que seguir comprobando
							if (( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								devolver verdadero;
							}
						}
					}
				}
			}
			falso retorno;
		};
}

función elementMatcher(emparejadores) {
	devolver emparejadores.longitud > 1 ?
		función (elemento, contexto, xml) {
			var i = emparejadores.longitud;
			mientras yo-- ) {
				if ( !coincidencias[ i ]( elemento, contexto, xml ) ) {
					falso retorno;
				}
			}
			devolver verdadero;
		} :
		emparejadores[ 0 ];
}

function multipleContexts(selector, contextos, resultados) {
	var i = 0,
		len = contextos.longitud;
	para ( ; i < len; i++ ) {
		Sizzle(selector, contextos[ i ], resultados );
	}
	devolver resultados;
}

función condensar (inigualable, mapa, filtro, contexto, xml) {
	var elemento,
		nuevoSin coincidencia = [],
		yo = 0,
		len = sin igual.longitud,
		mapeado = mapa != nulo;

	para ( ; i < len; i++ ) {
		if ( ( elem = sin igual[ i ] ) ) {
			if ( !filtro || filtro( elemento, contexto, xml ) ) {
				newUnmatched.push( elem );
				si (asignado) {
					mapa.push( yo );
				}
			}
		}
	}

	volver nuevoUnmatched;
}

function setMatcher( prefiltro, selector, comparador, postfiltro, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFiltro = setMatcher( postFiltro );
	}
	if (postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction (función (semilla, resultados, contexto, xml) {
		var temp, yo, elemento,
			premapa = [],
			postMapa = [],
			preexistente = resultados.longitud,

			// Obtener elementos iniciales de semilla o contexto
			elementos = semilla || múltiplesContextos(
				seleccionador || "*",
				context.nodeType ? [ contexto ] : contexto,
				[]
			),

			// Prefiltro para obtener la entrada del comparador, conservando un mapa para la sincronización de los resultados iniciales
			matcherIn = prefiltro && ( semilla || !selector ) ?
				condensar (elementos, premapa, prefiltro, contexto, xml):
				elementos,

			MatcherOut = Matcher ?

				// Si tenemos un postFinder, o semilla filtrada, o postFilter no semilla o resultados preexistentes,
				Buscador de publicaciones || ( semilla ? prefiltro : preexistente || postfiltro ) ?

					// ...es necesario un procesamiento intermedio
					[] :

					// ...de lo contrario, use los resultados directamente
					resultados:
				emparejadorEn;

		// Encuentra coincidencias primarias
		si (emparejador) {
			comparador( entrada de coincidencia, salida de coincidencia, contexto, xml );
		}

		// Aplicar filtro posterior
		si (filtro posterior) {
			temp = condensar(matcherOut, postMap);
			postfiltro (temp, [], contexto, xml);

			// Desemparejar los elementos fallidos moviéndolos de nuevo a matcherIn
			i = temp.longitud;
			mientras yo-- ) {
				si ( ( elemento = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		si ( semilla ) {
			if ( posBuscador || prefiltro ) {
				si (postFinder) {

					// Obtener el matcherOut final condensando este intermedio en contextos posteriores al Finder
					temperatura = [];
					i = matcherOut.longitud;
					mientras yo-- ) {
						if (( elem = matcherOut[ i ] ) ) {

							// Restaurar matcherIn ya que elem aún no es una coincidencia final
							temp.push((matcherIn[ i ] = elem ) );
						}
					}
					postFinder(null, (matcherOut = []), temp, xml);
				}

				// Mueva los elementos coincidentes de la semilla a los resultados para mantenerlos sincronizados
				i = matcherOut.longitud;
				mientras yo-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( resultados[ temp ] = elem );
					}
				}
			}

		// Agregar elementos a los resultados, a través de postFinder si está definido
		} demás {
			matcherOut = condensar(
				matcherOut === resultados?
					matcherOut.splice( preexistente, matcherOut.longitud ) :
					emparejadorfuera
			);
			si (postFinder) {
				postFinder(null, resultados, matcherOut, xml);
			} demás {
				push.apply(resultados, matcherOut);
			}
		}
	});
}

función matcherFromTokens (tokens) {
	var checkContext, comparador, j,
		len = fichas.longitud,
		principalRelativo = Expr.relativo[ tokens[ 0 ].tipo ],
		Relativo implícito = Relativo principal || Expr.relativa[ " " ],
		i = pariente principal? 1: 0,

		// El comparador fundamental garantiza que los elementos sean accesibles desde contextos de nivel superior
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, relativo implícito, verdadero),
		MatchAnyContext = addCombinator( function( elem ) {
			return indexOf(checkContext, elem) > -1;
		}, relativo implícito, verdadero),
		emparejadores = [función (elemento, contexto, xml) {
			var ret = ( !leadingRelative && ( xml || context !== externalmostContext ) ) || (
				( checkContext = contexto ).nodeType ?
					matchContext( elemento, contexto, xml ) :
					MatchAnyContext (elemento, contexto, xml));

			// Evite aferrarse al elemento (problema #299)
			comprobarContexto = nulo;
			volver ret;
		} ];

	para ( ; i < len; i++ ) {
		if ( ( comparador = Expr.relative[ tokens[ i ].type ] ) ) {
			emparejadores = [ addCombinator( elementMatcher( emparejadores ), emparejador ) ];
		} demás {
			comparador = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Regreso especial al ver un comparador posicional
			if (comparador[ expando ] ) {

				// Encuentra el siguiente operador relativo (si lo hay) para un manejo adecuado
				j = ++i;
				para ( ; j < largo; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						descanso;
					}
				}
				devolver conjuntoMatcher(
					i > 1 && elementMatcher(emparejadores),
					i > 1 && a Selector(

					// Si el token anterior era un combinador descendiente, inserte un `*` implícito de cualquier elemento
					fichas
						.rebanada( 0, yo - 1 )
						.concat( { valor: tokens[ i - 2 ].tipo === " " ? "*" : "" } )
					).reemplazar( rtrim, "$1"),
					emparejador,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j <len && toSelector(fichas)
				);
			}
			emparejadores.push( emparejador );
		}
	}

	return elementMatcher(coincidencias);
}

función matcherFromGroupMatchers(elementMatchers, setMatchers) {
	var bySet = setMatchers.longitud > 0,
		byElement = elementoMatchers.longitud > 0,
		superMatcher = función (semilla, contexto, xml, resultados, exterior) {
			var elem, j, emparejador,
				recuento emparejado = 0,
				yo = "0",
				sin igual = semilla && [],
				conjuntoMatched = [],
				contextBackup = contexto más externo,

				// Siempre debemos tener elementos semilla o contexto más externo
				elementos = semilla || byElement && Expr.find[ "TAG" ]( "*", más externo),

				// Usar dirruns enteros si este es el comparador más externo
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elementos.longitud;

			si (más exterior) {

				// Soporte: IE 11+, Borde 17 - 18+
				// IE/Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
				// dos documentos; las comparaciones superficiales funcionan.
				// eslint-disable-next-line eqeqeq
				externalmostContext = contexto == documento || contexto || más exterior;
			}

			// Agregar elementos pasando elementMatchers directamente a los resultados
			// Soporte: IE<9, Safari
			// Tolerar propiedades de NodeList (IE: "longitud"; Safari: <número>) elementos coincidentes por ID
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				si (porElemento && elem) {
					j = 0;

					// Soporte: IE 11+, Borde 17 - 18+
					// IE/Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
					// dos documentos; las comparaciones superficiales funcionan.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != documento ) {
						establecerDocumento( elemento );
						xml = !documentoEsHTML;
					}
					while ( (comparador = elementoMatchers[ j++ ] ) ) {
						if (comparador( elemento, contexto || documento, xml ) ) {
							resultados.push( elem );
							descanso;
						}
					}
					si (más exterior) {
						dirruns = dirrunsUnique;
					}
				}

				// Seguimiento de elementos no coincidentes para filtros establecidos
				si (porConjunto) {

					// Habrán pasado por todos los emparejadores posibles
					if ( ( elem = !coincidente && elem ) ) {
						cuentaCoincidencia--;
					}

					// Alarga la matriz para cada elemento, coincida o no
					si ( semilla ) {
						incomparable.push( elem );
					}
				}
			}

			// `i` ahora es el conteo de elementos visitados anteriormente, y se agrega a `matchedCount`
			// hace que este último no sea negativo.
			conteoemparejado += i;

			// Aplicar filtros establecidos a elementos no coincidentes
			// NOTA: Esto se puede omitir si no hay elementos no coincidentes (es decir, `matchedCount`
			// es igual a `i`), a menos que no hayamos visitado _cualquier_ elemento en el ciclo anterior porque tenemos
			// sin emparejadores de elementos ni semillas.
			// Incrementar una cadena inicial "0" `i` permite que `i` siga siendo una cadena solo en ese
			// caso, lo que dará como resultado un "00" `matchedCount` que difiere de `i` pero también es
			// numéricamente cero.
			if ( bySet && i !== cuentacoincidencia ) {
				j = 0;
				while ( (comparador = setMatchers[ j++ ] ) ) {
					matcher (sin coincidencia, setMatched, context, xml);
				}

				si ( semilla ) {

					// Reintegrar coincidencias de elementos para eliminar la necesidad de ordenar
					if (contador de coincidencias > 0) {
						mientras yo-- ) {
							if ( !( no coincidente[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call(resultados);
							}
						}
					}

					// Descartar valores de marcador de posición de índice para obtener solo coincidencias reales
					conjuntoMatched = condensar(setMatched);
				}

				// Agregar coincidencias a los resultados
				push.apply(resultados, setMatched);

				// Las coincidencias de conjuntos sin semilla que suceden a múltiples emparejadores exitosos estipulan la clasificación
				if ( más externo && !seed && setMatched.length > 0 &&
					(matchedCount + setMatchers.longitud) > 1) {

					Sizzle.uniqueSort(resultados);
				}
			}

			// Anula la manipulación de globales por comparadores anidados
			si (más exterior) {
				dirruns = dirrunsUnique;
				contextoexterno = contextBackup;
			}

			volver sin igual;
		};

	volver porSet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Solo para uso interno */ ) {
	var yo,
		establecerMatchers = [],
		emparejadores de elementos = [],
		cacheado = compiladorCache[ selector + " " ];

	si (! en caché) {

		// Genera una función de funciones recursivas que se pueden usar para verificar cada elemento
		si (! partido) {
			coincidencia = tokenizar (selector);
		}
		i = partido.longitud;
		mientras yo-- ) {
			cacheado = matcherFromTokens(coincidir[i]);
			si (almacenado en caché [expandir]) {
				setMatchers.push (en caché);
			} demás {
				elementMatchers.push (almacenado en caché);
			}
		}

		// Almacenar en caché la función compilada
		cacheado = compiladorCache(
			selector,
			matcherFromGroupMatchers(elementMatchers, setMatchers)
		);

		// Guardar selector y tokenización
		caché.selector = selector;
	}
	volver en caché;
};

/**
 * Una función de selección de bajo nivel que funciona con el compilado de Sizzle
 * funciones selectoras
 * @param {String|Function} selector Un selector o un precompilado
 * función de selector construida con Sizzle.compile
 * @param {Elemento} contexto
 * @param {Array} [resultados]
 * @param {Array} [seed] Un conjunto de elementos con los que comparar
 */
seleccionar = Sizzle.select = función (selector, contexto, resultados, semilla) {
	var i, tokens, token, tipo, encontrar,
		compilado = tipo de selector === "función" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	resultados = resultados || [];

	// Intenta minimizar las operaciones si solo hay un selector en la lista y ninguna semilla
	// (el último de los cuales nos garantiza el contexto)
	if (coincidencia.longitud === 1) {

		// Reducir el contexto si el selector compuesto inicial es un ID
		fichas = partido[ 0 ] = partido[ 0 ].slice( 0 );
		if (fichas.longitud > 2 && (ficha = fichas[ 0 ] ).tipo === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.coincidencias[ 0 ]
				.replace( runescape, funescape ), contexto ) || [] )[ 0 ];
			si (! contexto) {
				devolver resultados;

			// Los comparadores precompilados seguirán verificando la ascendencia, así que sube un nivel
			} más si (compilado) {
				contexto = contexto.nodopadre;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Obtener un conjunto de semillas para la coincidencia de derecha a izquierda
		i = matchExpr[ "necesitaContexto" ].prueba(selector) ? 0 : fichas.longitud;
		mientras yo-- ) {
			ficha = fichas[ i ];

			// Abortar si golpeamos un combinador
			if ( Expr.relativo[ ( tipo = token.tipo ) ] ) {
				descanso;
			}
			if ( (buscar = Expr.buscar[tipo])) {

				// Buscar, expandir el contexto para los principales combinadores de hermanos
				si ((semilla = encontrar(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						contexto
				) ) ) {

					// Si la semilla está vacía o no quedan tokens, podemos regresar temprano
					fichas.empalme( i, 1 );
					selector = seed.length && toSelector(tokens);
					si (!selector) {
						push.apply(resultados, semilla);
						devolver resultados;
					}

					descanso;
				}
			}
		}
	}

	// Compilar y ejecutar una función de filtrado si no se proporciona una
	// Proporcione `coincidencia` para evitar la recuperación de tokens si modificamos el selector anterior
	(compilado || compilar(selector, emparejar) )(
		semilla,
		contexto,
		!documentIsHTML,
		resultados,
		!contexto || rsibling.test( selector ) && testContext( context.parentNode ) || contexto
	);
	devolver resultados;
};

// Tareas únicas

// ordenar la estabilidad
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Soporte: Chrome 14-35+
// Siempre asuma duplicados si no se pasan a la función de comparación
support.detectDuplicates = !!hasDuplicate;

// Inicializar contra el documento por defecto
establecerDocumento();

// Soporte: Webkit<537.32 - Safari 6.0.3/Chrome 25 (corregido en Chrome 27)
// Los nodos separados se siguen confusamente *unos a otros*
support.sortDetached = afirmar (función (el) {

	// Debería devolver 1, pero devuelve 4 (siguiente)
	return el.compareDocumentPosition( document.createElement( "fieldset") ) & 1;
});

// Soporte: IE<8
// Prevenir atributo/propiedad "interpolación"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !afirmar( función( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "tipo|href|alto|ancho", función(elemento, nombre, esXML) {
		si (! es XML) {
			return elem.getAttribute( nombre, nombre.toLowerCase() === "tipo" ? 1 : 2 );
		}
	});
}

// Soporte: IE<9
// Usar defaultValue en lugar de getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<entrada/>";
	el.firstChild.setAttribute( "valor", "" );
	return el.firstChild.getAttribute( "valor" ) === "";
} ) ) {
	addHandle( "valor", función( elemento, _nombre, esXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "entrada" ) {
			volver elem.defaultValue;
		}
	});
}

// Soporte: IE<9
// Usa getAttributeNode para buscar valores booleanos cuando getAttribute miente
if ( !afirmar( función( el ) {
	devuelve el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleanos, función( elemento, nombre, esXML ) {
		valor var;
		si (! es XML) {
			devuelve elem[nombre] === verdadero? nombre.toLowerCase() :
				( val = elem.getAttributeNode( nombre ) ) && val.specified ?
					val.valor :
					nulo;
		}
	});
}

volver chisporrotear;

} )( ventana );



jQuery.find = Chisporrotear;
jQuery.expr = Sizzle.selectores;

// Obsoleto
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Chisporrotear.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = función( elemento, dir, hasta ) {
	var coincidente = [],
		truncar = hasta !== indefinido;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncar && jQuery( elem ).is( hasta ) ) {
				descanso;
			}
			emparejado.push( elem );
		}
	}
	retorno emparejado;
};


var hermanos = function( n, elem ) {
	var emparejado = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.NodeType === 1 && n !== elem ) {
			emparejado.push( n );
		}
	}

	retorno emparejado;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nombreNodo( elemento, nombre ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === nombre.toLowerCase();

};
var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>( ?:<\/\1>|)$/i );



// Implementar la funcionalidad idéntica para filtrar y no
función aventar (elementos, calificador, no) {
	if (isFunction(calificador)) {
		return jQuery.grep( elementos, función( elemento, i ) {
			return !!calificador.call( elem, i, elem ) !== no;
		});
	}

	// Elemento único
	if ( calificador.nodeType ) {
		return jQuery.grep(elementos, función(elemento) {
			return ( elem === calificador ) !== no;
		});
	}

	// Arraylike de elementos (jQuery, arguments, Array)
	if (tipo de calificador !== "cadena" ) {
		return jQuery.grep(elementos, función(elemento) {
			return ( indexOf.call( calificador, elem ) > -1 ) !== no;
		});
	}

	// Filtrado directamente para selectores simples y complejos
	return jQuery.filter(calificador, elementos, no);
}

jQuery.filter = función (expr, elementos, no) {
	var elemento = elementos[ 0 ];

	que no ) {
		expr = ":no(" + expr + ")";
	}

	if ( elems.longitud === 1 && elem.nodeType === 1 ) {
		devolver jQuery.find.matchesSelector (elemento, expr)? [ elemento ] : [];
	}

	return jQuery.find.matches(expr, jQuery.grep(elementos, función(elemento) {
		devuelve elem.nodeType === 1;
	} ) );
};

jQuery.fn.extender( {
	encontrar: función (selector) {
		var yo, ret,
			len = esta.longitud,
			yo = esto;

		if (selector de tipo! == "cadena" ) {
			devolver esto.pushStack(jQuery(selector).filter(función() {
				para ( i = 0; i < len; i++ ) {
					if (jQuery.contains(self[i], esto)) {
						devolver verdadero;
					}
				}
			} ) );
		}

		ret = esto.pushStack([]);

		para ( i = 0; i < len; i++ ) {
			jQuery.find(selector, self[i], ret);
		}

		devolver len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filtro: función (selector) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	no: función (selector) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	es: función (selector) {
		volver !!aventar(
			esta,

			// Si este es un selector posicional/relativo, verifique la membresía en el conjunto devuelto
			// entonces $("p:first").is("p:last") no devolverá verdadero para un documento con dos "p".
			typeof selector === "string" && rneedsContext.test(selector) ?
				jQuery(selector):
				seleccionador || [],
			falso
		).longitud;
	}
});


// Inicializar un objeto jQuery


// Una referencia central a la raíz jQuery(document)
var rootjQuery,

	// Una forma sencilla de comprobar cadenas HTML
	// Prioriza #id sobre <tag> para evitar XSS a través de location.hash (#9521)
	// Reconocimiento estricto de HTML (#11290: debe comenzar con <)
	// Atajo simple #id case para velocidad
	rexprrápida = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = función (selector, contexto, raíz) {
		coincidencia var, elem;

		// MANGO: $(""), $(nulo), $(indefinido), $(falso)
		si (!selector) {
			devolver esto;
		}

		// El método init() acepta una raíz alternativa jQuery
		// para que la migración admita jQuery.sub (gh-2101)
		raíz = raíz || rootjQuery;

		// Manejar cadenas HTML
		if (tipo de selector === "cadena" ) {
			si (selector[ 0 ] === "<" &&
				selector[ selector.longitud - 1 ] === ">" &&
				selector.longitud >= 3 ) {

				// Suponga que las cadenas que comienzan y terminan con <> son HTML y omita la verificación de expresiones regulares
				coincidencia = [ nulo, selector, nulo ];

			} demás {
				partido = rquickExpr.exec (selector);
			}

			// Haga coincidir html o asegúrese de que no se especifique contexto para #id
			if (coincidencia && (coincidencia[ 1 ] || !contexto ) ) {

				// MANGO: $(html) -> $(matriz)
				si ( partido [ 1 ] ) {
					contexto = instancia de contexto de jQuery? contexto[ 0 ] : contexto;

					// La opción para ejecutar scripts es verdadera para compatibilidad con versiones anteriores
					// Dejar que se arroje el error intencionalmente si parseHTML no está presente
					jQuery.merge( esto, jQuery.parseHTML(
						partido[ 1 ],
						contexto && context.nodeType ? contexto.propietarioDocumento || contexto : documento,
						cierto
					) );

					// MANGO: $(html, accesorios)
					if ( rsingleTag.test(coincidir[1]) && jQuery.isPlainObject(contexto)) {
						para (coincidencia en contexto) {

							// Las propiedades del contexto se llaman métodos si es posible
							if (isFunction(esta[coincidencia])) {
								este[coincidencia](contexto[coincidencia]);

							// ...y de lo contrario establecer como atributos
							} demás {
								this.attr(coincidencia, contexto[coincidencia]);
							}
						}
					}

					devolver esto;

				// MANGO: $(#id)
				} demás {
					elem = documento.getElementById(coincidir[2]);

					si ( elemento ) {

						// Inyectar el elemento directamente en el objeto jQuery
						este[ 0 ] = elemento;
						esta.longitud = 1;
					}
					devolver esto;
				}

			// MANGO: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return (contexto || root).find(selector);

			// MANGO: $(expr, contexto)
			// (que es equivalente a: $(contexto).find(expr)
			} demás {
				devuelve this.constructor(contexto).find(selector);
			}

		// MANGO: $(DOMElement)
		} más si (selector.nodeType) {
			este[ 0 ] = selector;
			esta.longitud = 1;
			devolver esto;

		// MANGO: $(función)
		// Atajo para documento listo
		} más si (isFunction(selector)) {
			volver root.listo !== indefinido ?
				root.listo (selector):

				// Ejecutar inmediatamente si listo no está presente
				selector (jQuery);
		}

		devuelve jQuery.makeArray(selector, esto);
	};

// Dar a la función init el prototipo de jQuery para una instanciación posterior
init.prototipo = jQuery.fn;

// Inicializar referencia central
rootjQuery = jQuery(documento);


var rparentsprev = /^(?:padres|prev(?:Hasta|Todos))/,

	// Métodos garantizados para producir un conjunto único al comenzar desde un conjunto único
	único garantizado = {
		niños: cierto,
		contenido: verdadero,
		siguiente: cierto,
		anterior: cierto
	};

jQuery.fn.extender( {
	tiene: función (objetivo) {
		var objetivos = jQuery(objetivo, esto),
			l = objetivos.longitud;

		devuelve este filtro (función () {
			var i = 0;
			para ( ; yo < l; i++ ) {
				if (jQuery.contains(this, target[i])) {
					devolver verdadero;
				}
			}
		});
	},

	más cercano: función (selectores, contexto) {
		var cur,
			yo = 0,
			l = esta.longitud,
			emparejado = [],
			objetivos = tipo de selectores! == "cadena" && jQuery (selectores);

		// Los selectores posicionales nunca coinciden, ya que no hay un contexto de _selección_
		if ( !rneedsContext.test(selectores) ) {
			para ( ; yo < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Omitir siempre fragmentos de documentos
					if (cur.nodeType < 11 && (objetivos?
						objetivos.índice( cur ) > -1 :

						// No pase elementos que no sean a Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectores ) ) ) {

						emparejado.push( cur );
						descanso;
					}
				}
			}
		}

		devuelve this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
	},

	// Determinar la posición de un elemento dentro del conjunto
	índice: función (elemento) {

		// Sin argumento, devuelve el índice en el padre
		si (! elemento) {
			return (este[ 0 ] && este[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Índice en el selector
		if (tipo de elemento === "cadena" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Localiza la posición del elemento deseado
		return indexOf.call(esto,

			// Si recibe un objeto jQuery, se usa el primer elemento
			elem.jquery? elemento[ 0 ] : elemento
		);
	},

	agregar: función (selector, contexto) {
		devolver esto.pushStack(
			jQuery.uniqueSort(
				jQuery.merge (esto. obtener (), jQuery (selector, contexto))
			)
		);
	},

	AddBack: función (selector) {
		devolver esto. agregar (selector == nulo?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

función hermano( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	volver cur;
}

jQuery.each( {
	padre: función (elemento) {
		var padre = elem.parentNode;
		volver padre && padre.nodeType !== 11 ? padre: nulo;
	},
	padres: función (elemento) {
		return dir( elem, "NodoPadre" );
	},
	padresHasta: función( elem, _i, hasta ) {
		return dir( elem, "nodopadre", hasta );
	},
	siguiente: función (elemento) {
		return hermano( elem, "siguienteSibling" );
	},
	anterior: función (elemento) {
		return hermano( elem, "anteriorSibling" );
	},
	nextAll: función (elemento) {
		return dir( elem, "siguienteSibling" );
	},
	prevTodo: función (elemento) {
		return dir( elem, "hermanoanterior");
	},
	siguienteHasta: function( elem, _i, hasta ) {
		return dir( elem, "siguienteHermano", hasta );
	},
	prevHasta: function( elem, _i, hasta ) {
		return dir( elem, "hermano anterior", hasta );
	},
	hermanos: function( elem ) {
		return brothers( ( elem.parentNode || {} ).firstChild, elem );
	},
	niños: función (elemento) {
		devolver hermanos( elem.firstChild );
	},
	contenido: función (elemento) {
		if ( elem.contentDocument != null &&

			// Soporte: Internet Explorer 11+
			// Los elementos <object> sin atributo `data` tienen un objeto
			// `contentDocument` con un prototipo `nulo`.
			getProto( elem.contentDocument ) ) {

			volver elem.contentDocument;
		}

		// Compatibilidad: solo IE 9 - 11, solo iOS 7, navegador Android <= 4.3 solamente
		// Tratar el elemento de la plantilla como uno normal en los navegadores que
		// no lo soporte.
		if (nombreNodo( elemento, "plantilla" ) ) {
			elemento = elemento.contenido || elemento;
		}

		devuelve jQuery.merge([], elem.childNodes);
	}
}, función (nombre, fn) {
	jQuery.fn[ nombre ] = función( hasta, selector ) {
		var emparejado = jQuery.map (esto, fn, hasta);

		if ( nombre.slice( -5 ) !== "Hasta" ) {
			selector = hasta;
		}

		if (selector && tipo de selector === "cadena" ) {
			emparejado = jQuery.filter (selector, emparejado);
		}

		if (esta.longitud > 1) {

			// Eliminar duplicados
			if ( ! Garantizado Único [ nombre ] ) {
				jQuery.uniqueSort(emparejado);
			}

			// Orden inverso para padres* y derivados anteriores
			if ( rparentsprev.prueba( nombre ) ) {
				emparejado.reverse();
			}
		}

		devuelve this.pushStack(emparejado);
	};
});
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convertir opciones con formato de cadena en opciones con formato de objeto
función crearOpciones(opciones) {
	var objeto = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		objeto[ bandera ] = verdadero;
	});
	devolver objeto;
}

/*
 * Cree una lista de devolución de llamada usando los siguientes parámetros:
 *
 * opciones: una lista opcional de opciones separadas por espacios que cambiarán cómo
 * la lista de devolución de llamada se comporta como un objeto de opción más tradicional
 *
 * De forma predeterminada, una lista de devolución de llamadas actuará como una lista de devolución de llamadas de eventos y se puede
 * "despedido" varias veces.
 *
 * Opciones posibles:
 *
 * una vez: garantizará que la lista de devolución de llamadas solo se pueda activar una vez (como un diferido)
 *
 * memoria: realizará un seguimiento de los valores anteriores y llamará a cualquier devolución de llamada agregada
 * después de que la lista se haya disparado de inmediato con el último "memorizado"
 * valores (como un diferido)
 *
 * único: garantizará que una devolución de llamada solo se pueda agregar una vez (sin duplicados en la lista)
 *
 * stopOnFalse: interrumpir las llamadas cuando una devolución de llamada devuelve falso
 *
 */
jQuery.Callbacks = función (opciones) {

	// Convertir opciones de formato de cadena a formato de objeto si es necesario
	// (verificamos en caché primero)
	opciones = tipo de opciones === "cadena" ?
		createOptions( opciones ) :
		jQuery.extend({}, opciones);

	var // Marca para saber si la lista se está activando actualmente
		disparo,

		// Valor del último disparo para listas no olvidables
		memoria,

		// Marcar para saber si la lista ya fue disparada
		despedido,

		// Bandera para evitar disparos
		bloqueado,

		// Lista de devolución de llamada real
		lista = [],

		// Cola de datos de ejecución para listas repetibles
		cola = [],

		// Índice de devolución de llamada activa actualmente (modificado por agregar/eliminar según sea necesario)
		índice de disparo = -1,

		// Despedir devoluciones de llamada
		fuego = función() {

			// Hacer cumplir el disparo único
			bloqueado = bloqueado || opciones.una vez;

			// Ejecutar devoluciones de llamada para todas las ejecuciones pendientes,
			// respetando las anulaciones de fireIndex y los cambios en el tiempo de ejecución
			despedido = disparando = verdadero;
			for ( ; cola.longitud; índice de disparo = -1 ) {
				memoria = cola.shift();
				while ( ++índice de disparo < lista.longitud ) {

					// Ejecute la devolución de llamada y verifique la terminación anticipada
					if (lista[ índice de disparo ].apply( memoria[ 0 ], memoria[ 1 ] ) === falso &&
						opciones.stopOnFalse ) {

						// Salta al final y olvida los datos para que .add no se vuelva a disparar
						índiceIncendio = lista.longitud;
						memoria = falso;
					}
				}
			}

			// Olvida los datos si hemos terminado con ellos
			if ( !opciones.memoria ) {
				memoria = falso;
			}

			disparando = falso;

			// Limpiar si hemos terminado de disparar para siempre
			si ( bloqueado ) {

				// Mantener una lista vacía si tenemos datos para futuras llamadas de adición
				si (memoria) {
					lista = [];

				// De lo contrario, este objeto se gasta
				} demás {
					lista = "";
				}
			}
		},

		// Objeto de devolución de llamada real
		uno mismo = {

			// Agregar una devolución de llamada o una colección de devoluciones de llamada a la lista
			añadir: función () {
				si ( lista ) {

					// Si tenemos memoria de una ejecución anterior, debemos disparar después de agregar
					if (memoria && !disparando) {
						índice de disparo = lista.longitud - 1;
						cola.push(memoria);
					}

					(función agregar (argumentos) {
						jQuery. cada uno (argumentos, función (_, argumento) {
							if (esFuncion(arg)) {
								if ( !opciones.unique || !self.has(arg) ) {
									lista.push(arg);
								}
							} else if ( arg && arg.longitud && toType( arg ) !== "cadena" ) {

								// Inspeccionar recursivamente
								añadir (argumento);
							}
						});
					} )( argumentos );

					if (memoria && !disparando) {
						fuego();
					}
				}
				devolver esto;
			},

			// Eliminar una devolución de llamada de la lista
			eliminar: función () {
				jQuery.each( argumentos, función( _, arg ) {
					índice var;
					while ((índice = jQuery.inArray(arg, lista, índice)) > -1) {
						list.splice(índice, 1);

						// Manejar índices de disparo
						if (índice <= índice de disparo) {
							índice de disparo--;
						}
					}
				});
				devolver esto;
			},

			// Comprobar si una devolución de llamada dada está en la lista.
			// Si no se proporciona ningún argumento, devuelve si la lista tiene devoluciones de llamada adjuntas o no.
			tiene: función (fn) {
				devolver fn?
					jQuery.inArray(fn, lista) > -1 :
					lista.longitud > 0;
			},

			// Eliminar todas las devoluciones de llamada de la lista
			vacío: función () {
				si ( lista ) {
					lista = [];
				}
				devolver esto;
			},

			// Deshabilitar .fire y .add
			// Cancelar cualquier ejecución actual/pendiente
			// Borrar todas las devoluciones de llamada y valores
			deshabilitar: función () {
				bloqueado = cola = [];
				lista = memoria = "";
				devolver esto;
			},
			deshabilitado: función () {
				volver !lista;
			},

			// Deshabilitar .fuego
			// También deshabilite .add a menos que tengamos memoria (ya que no tendría efecto)
			// Cancelar cualquier ejecución pendiente
			bloquear: función () {
				bloqueado = cola = [];
				if ( !memoria && !disparando ) {
					lista = memoria = "";
				}
				devolver esto;
			},
			bloqueado: función () {
				volver !!bloqueado;
			},

			// Llamar a todas las devoluciones de llamada con el contexto y los argumentos dados
			fireWith: función (contexto, argumentos) {
				si (! bloqueado) {
					argumentos = argumentos || [];
					argumentos = [ contexto, argumentos.segmento ? argumentos.slice() : argumentos ];
					cola.push( argumentos );
					si (! disparando) {
						fuego();
					}
				}
				devolver esto;
			},

			// Llamar a todas las devoluciones de llamada con los argumentos dados
			fuego: función() {
				self.fireWith(esto, argumentos);
				devolver esto;
			},

			// Para saber si los callbacks ya han sido llamados al menos una vez
			despedido: función () {
				volver !! despedido;
			}
		};

	devolver uno mismo;
};


función Identidad( v ) {
	volver v;
}
Lanzador de funciones (ex) {
	tirar ex;
}

función adoptarValor(valor, resolver, rechazar, noValor) {
	método var;

	tratar {

		// Comprobar primero el aspecto de la promesa para privilegiar el comportamiento síncrono
		if ( valor && esFuncion( ( metodo = valor.promesa ) ) ) {
			método.llamada( valor ).hecho( resolver ).fail(rechazar);

		// Otros theables
		} else if ( valor && esFuncion( ( metodo = valor.entonces ) ) ) {
			method.call(valor, resolver, rechazar);

		// Otros non-thenables
		} demás {

			// Controle los argumentos `resolve` dejando que Array#slice convierta el valor booleano `noValue` en un número entero:
			// * falso: [ valor ].slice( 0 ) => resolver( valor )
			// * verdadero: [ valor ].slice( 1 ) => resolver()
			resolve.apply( indefinido, [ valor ].slice( noValue ) );
		}

	// Para Promesas/A+, convertir excepciones en rechazos
	// Dado que jQuery.when no desenvuelve las funciones, podemos omitir las comprobaciones adicionales que aparecen en
	// Deferred#then para suprimir condicionalmente el rechazo.
	} atrapar ( valor ) {

		// Soporte: solo Android 4.0
		// Funciones de modo estricto invocadas sin .call/.apply obtener contexto de objeto global
		rechazar.aplicar (indefinido, [valor]);
	}
}

jQuery.extender( {

	Diferido: function(func) {
		var tuplas = [

				// acción, agregar oyente, devoluciones de llamada,
				// ... .entonces manejadores, índice de argumento, [estado final]
				[ "notificar", "progreso", jQuery.Callbacks( "memoria"),
					jQuery.Callbacks( "memoria"), 2 ],
				[ "resolver", "hecho", jQuery.Callbacks ("memoria única"),
					jQuery.Callbacks ("memoria única"), 0, "resuelto"],
				[ "rechazar", "fallar", jQuery.Callbacks ("memoria única"),
					jQuery.Callbacks ("memoria única"), 1, "rechazado"]
			],
			estado = "pendiente",
			promesa = {
				función estatal() {
					estado de retorno;
				},
				siempre: función() {
					diferido.hecho( argumentos ).fail( argumentos );
					devolver esto;
				},
				"atrapar": función (fn) {
					volver promesa.entonces(null, fn);
				},

				// Mantener tubería para retrocompatibilidad
				tubería: función (/* fnDone, fnFail, fnProgress */) {
					var fns = argumentos;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuplas, función( _i, tupla ) {

							// Asignar tuplas (progreso, hecho, fallado) a argumentos (hecho, fallado, progreso)
							var fn = isFunction( fns[ tupla[ 4 ] ] ) && fns[ tupla[ 4 ] ];

							// diferido.progreso(función() { vincular a newDefer o newDefer.notify })
							// diferido.hecho(función() { enlazar con newDefer o newDefer.resolve })
							// diferido.fallo(función() { vincular a newDefer o newDefer.reject })
							diferido[ tupla[ 1 ] ]( función() {
								var devuelto = fn && fn.apply(esto, argumentos);
								if ( devuelto && isFunction( devuelto.promesa ) ) {
									devuelto.promesa()
										.progress( newDefer.notify )
										.hecho( nuevoAplazar.resolver )
										.fail( newDefer.reject );
								} demás {
									nuevoAplazar[ tupla[ 0 ] + "Con" ](
										esta,
										fn? [devuelto]: argumentos
									);
								}
							});
						});
						fns = nulo;
					} ).promesa();
				},
				entonces: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					función resolver (profundidad, diferido, controlador, especial) {
						función de retorno() {
							var eso = esto,
								args = argumentos,
								podríaLanzar = función() {
									var volvió, entonces;

									// Soporte: Promises/A+ sección 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignorar los intentos de resolución doble
									if ( profundidad < maxDepth ) {
										regreso;
									}

									devuelto = handler.apply( eso, args );

									// Soporte: Promesas/A+ sección 2.3.1
									// https://promisesaplus.com/#punto-48
									if ( devuelto === diferido.promesa() ) {
										throw new TypeError("Thenable auto-resolución");
									}

									// Soporte: Promises/A+ secciones 2.3.3.1, 3.5
									// https://promisesaplus.com/#punto-54
									// https://promisesaplus.com/#punto-75
									// Recupera `then` solo una vez
									entonces = devuelto &&

										// Soporte: Promesas/A+ sección 2.3.4
										// https://promisesaplus.com/#point-64
										// Solo verifica la capacidad de los objetos y funciones
										( typeof devuelto === "objeto" ||
											typeof devuelto === "función" ) &&
										devuelto.entonces;

									// Manejar un thenable devuelto
									if (esFuncion(entonces)) {

										// Procesadores especiales (notificar) solo esperar la resolución
										si ( especial ) {
											luego llame(
												devuelto,
												resolve(maxDepth, diferido, Identidad, especial),
												resolver (maxDepth, diferido, Lanzador, especial)
											);

										// Los procesadores normales (resolver) también se conectan al progreso
										} demás {

											// ...e ignorar los valores de resolución anteriores
											maxDepth++;

											luego llame(
												devuelto,
												resolve(maxDepth, diferido, Identidad, especial),
												resolve(maxDepth, diferido, Lanzador, especial),
												resolve(maxDepth, diferido, Identidad,
													diferido.notificarCon )
											);
										}

									// Manejar todos los demás valores devueltos
									} demás {

										// Solo los controladores sustitutos pasan el contexto
										// y valores múltiples (comportamiento no especificado)
										if (controlador! == Identidad) {
											eso = indefinido;
											argumentos = [ devuelto ];
										}

										// Procesar los valores
										// El proceso por defecto es resolver
										( especial || diferido.resolveWith )( that, args );
									}
								},

								// Solo los procesadores normales (resolver) capturan y rechazan excepciones
								proceso = especial?
									podría lanzar:
									función() {
										tratar {
											podríaLanzar();
										} atrapar ( e ) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook( e,
													proceso.stackTrace);
											}

											// Soporte: Promises/A+ sección 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorar excepciones posteriores a la resolución
											if ( profundidad + 1 >= maxDepth ) {

												// Solo los controladores sustitutos pasan el contexto
												// y valores múltiples (comportamiento no especificado)
												if (manejador!== Lanzador) {
													eso = indefinido;
													argumentos = [ e ];
												}

												diferido.rechazarCon(eso, argumentos);
											}
										}
									};

							// Soporte: Promises/A+ sección 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Vuelva a resolver las promesas inmediatamente para esquivar el falso rechazo de
							// errores posteriores
							si ( profundidad ) {
								proceso();
							} demás {

								// Llamar a un enlace opcional para registrar la pila, en caso de excepción
								// ya que de lo contrario se pierde cuando la ejecución se vuelve asíncrona
								if (jQuery.Deferred.getStackHook) {
									proceso.stackTrace = jQuery.Deferred.getStackHook();
								}
								ventana.setTimeout(proceso);
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// gestores_de_progreso.add(...)
						tuplas[ 0 ][ 3 ].add(
							resolver(
								0,
								nuevoAplazar,
								esFunción(enProgreso)?
									en progreso :
									Identidad,
								nuevoAplazar.notificarCon
							)
						);

						// manejadores_cumplidos.add(...)
						tuplas[ 1 ][ 3 ].add(
							resolver(
								0,
								nuevoAplazar,
								¿isFunction( onFulfilled ) ?
									en Cumplido:
									Identidad
							)
						);

						// manejadores_rechazados.add(...)
						tuplas[ 2 ][ 3 ].add(
							resolver(
								0,
								nuevoAplazar,
								isFunction( onRejected ) ?
									enRechazado:
									Lanzador
							)
						);
					} ).promesa();
				},

				// Obtener una promesa para este diferido
				// Si se proporciona obj, el aspecto de promesa se agrega al objeto
				promesa: función ( obj ) {
					devolver obj != null ? jQuery.extend(obj, promesa): promesa;
				}
			},
			diferido = {};

		// Agregar métodos específicos de la lista
		jQuery.each( tuplas, función( i, tupla ) {
			var lista = tupla[ 2 ],
				stateString = tupla[ 5 ];

			// promesa.progreso = lista.añadir
			// promesa.hecho = lista.añadir
			// promesa.fallo = lista.añadir
			promesa[ tupla[ 1 ] ] = lista.añadir;

			// Estado del identificador
			si ( cadena de estado ) {
				lista.añadir(
					función() {

						// estado = "resuelto" (es decir, cumplido)
						// estado = "rechazado"
						estado = stateString;
					},

					// devoluciones_llamadas_rechazadas.deshabilitar
					// devoluciones_llamadas_cumplidas.deshabilitar
					tuplas[ 3 - i ][ 2 ].deshabilitar,

					// manejadores_rechazados.disable
					// manejadores_cumplidos.deshabilitar
					tuplas[ 3 - i ][ 3 ].deshabilitar,

					// progreso_devolución de llamada.bloqueo
					tuplas[ 0 ][ 2 ].bloqueo,

					// gestores_de_progreso.bloquear
					tuplas[ 0 ][ 3 ].bloquear
				);
			}

			// manejadores_de_progreso.fuego
			// manipuladores_cumplidos.fuego
			// manipuladores_rechazados.fuego
			list.add( tupla[ 3 ].fuego );

			// diferido.notificar = function() { diferido.notificarCon(...) }
			// diferido.resolve = function() { diferido.resolveWith(...) }
			// diferido.rechazar = function() { diferido.rechazarCon(...) }
			diferido[ tupla[ 0 ] ] = función() {
				diferido[ tupla[ 0 ] + "Con" ]( esto === diferido ? indefinido : esto, argumentos );
				devolver esto;
			};

			// diferido.notificarCon = lista.fuegoCon
			// diferido.resolveWith = list.fireWith
			// diferido.rechazarCon = lista.fuegoCon
			diferido[ tupla[ 0 ] + "Con" ] = lista.fuegoCon;
		});

		// Hacer de lo diferido una promesa
		promesa.promesa( diferido );

		// Llamar a la función dada si la hay
		si ( función ) {
			func.call( diferido, diferido );
		}

		// ¡Todo listo!
		regreso diferido;
	},

	// Ayudante diferido
	cuando: función (valor único) {
		variable

			// recuento de subordinados incompletos
			restantes = argumentos.longitud,

			// recuento de argumentos sin procesar
			yo = restante,

			// datos de cumplimiento subordinados
			resolverContextos = Array( i ),
			resolveValues ​​= slice.call(argumentos),

			// el maestro Diferido
			maestro = jQuery.Deferred(),

			// fábrica de devolución de llamada subordinada
			actualizarFunc = función ( i ) {
				función de retorno (valor) {
					resolveContexts[ i ] = esto;
					resolveValues[ i ] = argumentos.longitud > 1 ? slice.call( argumentos ) : valor;
					si ( !( --restante ) ) {
						master.resolveWith(resolveContexts, resolveValues);
					}
				};
			};

		// Los argumentos únicos y vacíos se adoptan como Promise.resolve
		si ( restante <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!restante );

			// Usa .then() para desenvolver los elementos secundarios (cf. gh-3000)
			if (maestro.estado() === "pendiente" ||
				esFunción( resolverValores[ i ] && resolverValores[ i ].entonces ) ) {

				volver maestro.entonces();
			}
		}

		// Múltiples argumentos se agregan como elementos de la matriz Promise.all
		mientras yo-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		volver maestro.promesa();
	}
});


// Estos suelen indicar un error del programador durante el desarrollo,
// advertir sobre ellos lo antes posible en lugar de tragarlos por defecto.
var rerrorNames = /^(Eval|Interno|Rango|Referencia|Sintaxis|Tipo|URI)Error$/;

jQuery.Deferred.exceptionHook = función (error, pila) {

	// Soporte: IE 8 - 9 solamente
	// La consola existe cuando las herramientas de desarrollo están abiertas, lo que puede suceder en cualquier momento
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Excepción diferida: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = función (error) {
	ventana.setTimeout( function() {
		lanzar error;
	});
};




// El diferido usado en DOM listo
var readyList = jQuery.Deferred();

jQuery.fn.ready = función (fn) {

	ListoLista
		.entonces( fn )

		// Envuelve jQuery.readyException en una función para que la búsqueda
		// ocurre en el momento del manejo de errores en lugar de la devolución de llamada
		// registro.
		.catch( función( error ) {
			jQuery.readyException(error);
		});

	devolver esto;
};

jQuery.extender( {

	// ¿Está el DOM listo para ser utilizado? Se establece en verdadero una vez que ocurre.
	está listo: falso,

	// Un contador para rastrear cuántos elementos esperar antes
	// se dispara el evento ready. Ver #6781
	ListoEspera: 1,

	// Manejar cuando el DOM esté listo
	listo: función (esperar) {

		// Abortar si hay retenciones pendientes o ya estamos listos
		if ( esperar === verdadero ? --jQuery.readyWait : jQuery.isReady ) {
			regreso;
		}

		// Recuerda que el DOM está listo
		jQuery.isReady = verdadero;

		// Si se activa un evento DOM Ready normal, disminuya y espere si es necesario
		if ( espera !== verdadero && --jQuery.readyWait > 0 ) {
			regreso;
		}

		// Si hay funciones enlazadas, ejecutar
		readyList.resolveWith( documento, [ jQuery ] );
	}
});

jQuery.ready.then = readyList.then;

// El controlador de eventos listo y el método de limpieza automática
función completada() {
	document.removeEventListener("DOMContentLoaded", completado);
	window.removeEventListener("cargar", completado);
	jQuery.listo();
}

// Captura casos donde se llama a $(document).ready()
// después de que el evento del navegador ya haya ocurrido.
// Soporte: IE <=9 - 10 solamente
// El IE más antiguo a veces señala "interactivo" demasiado pronto
if (document.readyState === "completo" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Manéjelo de forma asíncrona para permitir que los scripts tengan la oportunidad de retrasar la preparación
	ventana.setTimeout( jQuery.ready );

} demás {

	// Usar la devolución de llamada de evento útil
	document.addEventListener("DOMContentLoaded", completado);

	// Una alternativa a window.onload, que siempre funcionará
	ventana.addEventListener("cargar", completado);
}




// Método multifuncional para obtener y establecer valores de una colección
// El/los valor/es se pueden ejecutar opcionalmente si es una función
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elementos.longitud,
		a granel = clave == nulo;

	// Establece muchos valores
	if ( aTipo( clave ) === "objeto" ) {
		encadenable = verdadero;
		para (i en clave) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Establece un valor
	} else if ( valor !== indefinido ) {
		encadenable = verdadero;

		si (! es Función (valor)) {
			crudo = verdadero;
		}

		si (a granel) {

			// Las operaciones masivas se ejecutan en todo el conjunto
			si ( crudo ) {
				fn.call( elementos, valor );
				fn = nulo;

			// ...excepto cuando se ejecutan valores de función
			} demás {
				a granel = fn;
				fn = función (elemento, _clave, valor) {
					volver a granel. llamada (jQuery (elemento), valor);
				};
			}
		}

		si ( fn ) {
			para ( ; i < len; i++ ) {
				fn(
					elems[ i ], clave, raw ?
					valor :
					value.call( elementos[ i ], i, fn( elementos[ i ], tecla ) )
				);
			}
		}
	}

	si ( encadenable ) {
		elementos de retorno;
	}

	// Obtiene
	si (a granel) {
		return fn.call(elementos);
	}

	volver len? fn( elementos[ 0 ], clave ) : vacíoObtener;
};


// Coincide con la cadena discontinua para camelizar
var rmsPrefix = /^-ms-/,
	rdashAlfa = /-([az])/g;

// Usado por camelCase como callback para replace()
function fcamelCase( _all, letra ) {
	volver letra.toUpperCase();
}

// Convertir guiones a camelCase; utilizado por los módulos css y data
// Soporte: IE <= 9 - 11, Borde 12 - 15
// Microsoft olvidó subir el prefijo de su proveedor (#9572)
function camelCase(cadena) {
	return string.replace( rmsPrefix, "ms-").replace( rdashAlpha, fcamelCase );
}
var acceptData = función (propietario) {

	// Acepta solo:
	// - Nodo
	// - Nodo.ELEMENT_NODE
	// - Nodo.NODO_DOCUMENTO
	// - Objeto
	// - Ningún
	volver propietario.nodeType === 1 || propietario.nodeType === 9 || !( +propietario.tipoNodo );
};




función Datos () {
	this.expando = jQuery.expando + Data.uid++;
}

Datos.uid = 1;

Datos.prototipo = {

	caché: función (propietario) {

		// Comprueba si el objeto propietario ya tiene un caché
		var value = propietario[ this.expando ];

		// Si no, crea uno
		si (! valor) {
			valor = {};

			// Podemos aceptar datos para nodos que no son elementos en navegadores modernos,
			// pero no deberíamos, ver #8335.
			// Siempre devuelve un objeto vacío.
			if (aceptar datos (propietario)) {

				// Si es un nodo poco probable que se transforme en cadenas o se repita
				// usa una asignación simple
				if (propietario.tipoNodo) {
					propietario[ this.expando ] = valor;

				// De lo contrario, asegúrelo en una propiedad no enumerable
				// configurable debe ser verdadero para permitir que la propiedad sea
				// eliminado cuando se eliminan los datos
				} demás {
					Object.defineProperty( propietario, this.expando, {
						valor: valor,
						configurable: verdadero
					});
				}
			}
		}

		valor de retorno;
	},
	conjunto: función (propietario, datos, valor) {
		apoyo var,
			cache = this.cache( propietario );

		// Identificador: [propietario, clave, valor] argumentos
		// Usar siempre la clave camelCase (gh-2257)
		if (tipo de datos === "cadena" ) {
			cache[camelCase(datos)] = valor;

		// Manejador: [propietario, {propiedades}] args
		} demás {

			// Copia las propiedades una por una en el objeto de caché
			para (accesorio en datos) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		devolver caché;
	},
	obtener: función (propietario, clave) {
		tecla de retorno === indefinido?
			this.cache(propietario):

			// Usar siempre la clave camelCase (gh-2257)
			propietario[ this.expando ] && propietario[ this.expando ][ camelCase( key ) ];
	},
	acceso: función (propietario, clave, valor) {

		// En los casos en que:
		//
		// 1. No se especificó ninguna clave
		// 2. Se especificó una clave de cadena, pero no se proporcionó ningún valor
		//
		// Tome la ruta de "lectura" y permita que el método get determine
		// qué valor devolver, respectivamente:
		//
		// 1. Todo el objeto de caché
		// 2. Los datos almacenados en la clave
		//
		si ( clave === indefinido ||
				( ( clave && tipo de clave === "cadena" ) && valor === indefinido ) ) {

			devuelve this.get(propietario, clave);
		}

		// Cuando la clave no es una cadena, o tanto una clave como un valor
		// se especifican, establecen o amplían (objetos existentes) con:
		//
		// 1. Un objeto de propiedades
		// 2. Una clave y un valor
		//
		this.set(propietario, clave, valor);

		// Dado que la ruta "establecida" puede tener dos posibles puntos de entrada
		// devuelve los datos esperados según la ruta que se tomó[*]
		valor de retorno !== indefinido ? valor: clave;
	},
	eliminar: función (propietario, clave) {
		var yo,
			cache = propietario[ this.expando ];

		if (caché === indefinido) {
			regreso;
		}

		si (clave! == indefinido) {

			// Admite matriz o cadena de claves separadas por espacios
			if (Array.isArray(clave)) {

				// Si clave es una matriz de claves...
				// Siempre establecemos claves de camelCase, así que elimínelas.
				clave = clave.mapa(camelCase);
			} demás {
				llave = camelCase( llave );

				// Si existe una clave con espacios, utilícela.
				// De lo contrario, crea una matriz haciendo coincidir espacios que no sean en blanco
				clave = clave en caché?
					[ llave ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = clave.longitud;

			mientras yo-- ) {
				borrar cache[ clave[ i ] ];
			}
		}

		// Elimina el expando si no hay más datos
		if (clave === indefinido || jQuery.isEmptyObject(caché)) {

			// Soporte: Cromo <=35 - 45
			// El rendimiento de Webkit y Blink sufre al eliminar propiedades
			// de los nodos DOM, por lo que debe configurarse como indefinido en su lugar
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (error restringido)
			if (propietario.tipoNodo) {
				propietario[ this.expando ] = indefinido;
			} demás {
				eliminar propietario[ this.expando ];
			}
		}
	},
	hasData: función (propietario) {
		var cache = propietario[ this.expando ];
		devolver caché !== indefinido && !jQuery.isEmptyObject(caché);
	}
};
var dataPriv = nuevos datos ();

var usuario de datos = nuevos datos ();



// Resumen de implementación
//
// 1. Reforzar la superficie API y la compatibilidad semántica con la rama 1.9.x
// 2. Mejorar la mantenibilidad del módulo reduciendo el almacenamiento
// caminos a un solo mecanismo.
// 3. Utilice el mismo mecanismo único para admitir datos "privados" y "de usuario".
// 4. _Nunca_ exponga datos "privados" al código de usuario (TODO: Drop _data, _removeData)
// 5. Evite exponer detalles de implementación en objetos de usuario (por ejemplo, propiedades de expansión)
// 6. Proporcionar un camino claro para la actualización de la implementación a WeakMap en 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiGuión = /[AZ]/g;

función getData(datos) {
	si (datos === "verdadero") {
		devolver verdadero;
	}

	si ( datos === "falso" ) {
		falso retorno;
	}

	si (datos === "null" ) {
		devolver nulo;
	}

	// Solo convierte a un número si no cambia la cadena
	if (datos === +datos + "" ) {
		devolver +datos;
	}

	if ( rbrace.test(datos)) {
		devuelve JSON.parse (datos);
	}

	devolver datos;
}

function dataAttr(elemento, clave, datos) {
	nombre de la variable;

	// Si no se encontró nada internamente, intente recuperar cualquier
	// datos del atributo data-* de HTML5
	if (datos === indefinido && elem.nodeType === 1) {
		nombre = "datos-" + clave.reemplazar( rmultiDash, "-$&" ).toLowerCase();
		datos = elem.getAttribute(nombre);

		if (tipo de datos === "cadena" ) {
			tratar {
				datos = obtener datos (datos);
			} atrapar ( e ) {}

			// Asegurarnos de que configuramos los datos para que no se cambien más tarde
			dataUser.set( elemento, clave, datos );
		} demás {
			datos = indefinido;
		}
	}
	devolver datos;
}

jQuery.extender( {
	hasData: función (elemento) {
		devolver datosUsuario.hasData( elem ) || dataPriv.hasData( elem );
	},

	datos: función (elemento, nombre, datos) {
		return dataUser.access( elemento, nombre, datos );
	},

	removeData: función (elemento, nombre) {
		dataUser.remove( elemento, nombre );
	},

	// TODO: ahora que todas las llamadas a _data y _removeData han sido reemplazadas
	// con llamadas directas a métodos dataPriv, estos pueden quedar obsoletos.
	_datos: función (elemento, nombre, datos) {
		return dataPriv.access( elemento, nombre, datos );
	},

	_removeData: función (elemento, nombre) {
		dataPriv.remove( elemento, nombre );
	}
});

jQuery.fn.extender( {
	datos: función (clave, valor) {
		var i, nombre, datos,
			elemento = este[ 0 ],
			atributos = elem && elem.atributos;

		// Obtiene todos los valores
		si ( clave === indefinido ) {
			if (esta.longitud) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = atributos.longitud;
					mientras yo-- ) {

						// Soporte: solo IE 11
						// Los elementos attrs pueden ser nulos (#14894)
						si ( atributos [ i ] ) {
							nombre = atributos[ i ].nombre;
							if (nombre.indexOf("datos-") === 0) {
								nombre = camelCase( nombre.slice( 5 ) );
								dataAttr(elemento, nombre, datos[nombre]);
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			devolver datos;
		}

		// Establece múltiples valores
		if (tipo de clave === "objeto" ) {
			devuelve esto. cada uno (función () {
				dataUser.set( esto, clave );
			});
		}

		volver acceso (esto, función (valor) {
			var datos;

			// El objeto jQuery que llama (coincidencias de elementos) no está vacío
			// (y por lo tanto tiene un elemento que aparece en este [ 0 ]) y el
			// El parámetro `value` no estaba indefinido. Un objeto jQuery vacío
			// resultará en `indefinido` para elem = this[ 0 ] que será
			// lanza una excepción si se intenta leer un caché de datos.
			if (elemento && valor === indefinido) {

				// Intento de obtener datos del caché
				// La clave siempre será camelCased en Data
				datos = usuario_datos.get( elemento, clave );
				si (datos! == indefinido) {
					devolver datos;
				}

				// Intento de "descubrir" los datos en
				// HTML5 datos personalizados-* atributos
				datos = dataAttr(elemento, clave);
				si (datos! == indefinido) {
					devolver datos;
				}

				// Nos esforzamos mucho, pero los datos no existen.
				regreso;
			}

			// Establecer los datos...
			this.each( función() {

				// Siempre almacenamos la clave camelCased
				dataUser.set (este, clave, valor);
			});
		}, nulo, valor, argumentos.longitud > 1, nulo, verdadero);
	},

	removeData: función (tecla) {
		devuelve esto. cada uno (función () {
			dataUser.remove( esto, clave );
		});
	}
});


jQuery.extender( {
	cola: función (elemento, tipo, datos) {
		var cola;

		si ( elemento ) {
			tipo = ( tipo || "fx" ) + "cola";
			cola = dataPriv.get( elemento, tipo );

			// Acelere la eliminación de la cola saliendo rápidamente si esto es solo una búsqueda
			si (datos) {
				if ( !cola || Array.isArray(datos) ) {
					cola = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} demás {
					cola.push(datos);
				}
			}
			cola de retorno || [];
		}
	},

	sacar de la cola: función (elemento, tipo) {
		tipo = tipo || "fx";

		var cola = jQuery.queue( elemento, tipo ),
			startLength = cola.longitud,
			fn = cola.shift(),
			ganchos = jQuery._queueHooks( elemento, tipo ),
			siguiente = función() {
				jQuery.dequeue( elemento, tipo );
			};

		// Si la cola fx está fuera de la cola, siempre elimine el centinela de progreso
		if ( fn === "en progreso" ) {
			fn = cola.shift();
			longitudInicio--;
		}

		si ( fn ) {

			// Agregue un centinela de progreso para evitar que la cola fx sea
			// sacado automáticamente de la cola
			si ( tipo === "fx" ) {
				cola.unshift("en progreso");
			}

			// Borrar la última función de parada de cola
			eliminar ganchos.stop;
			fn.call( elemento, siguiente, ganchos );
		}

		if ( !startLength && ganchos ) {
			ganchos.vacío.fuego();
		}
	},

	// No público: genera un objeto queueHooks o devuelve el actual
	_queueHooks: función (elemento, tipo) {
		var clave = tipo + "queueHooks";
		devuelve dataPriv.get( elemento, clave ) || dataPriv.acceso( elemento, clave, {
			vacío: jQuery.Callbacks( "memoria única").add( function() {
				dataPriv.remove( elem, [ tipo + "cola", clave ] );
			} )
		});
	}
});

jQuery.fn.extender( {
	cola: función (tipo, datos) {
		setter de var = 2;

		if ( tipo de tipo !== "cadena" ) {
			datos = tipo;
			tipo = "fx";
			setter--;
		}

		if (argumentos.longitud <establecedor) {
			devuelve jQuery.queue (esto [0], tipo);
		}

		devolver datos === indefinido?
			esta :
			this.each( función() {
				var cola = jQuery.queue (esto, tipo, datos);

				// Asegurar un enganche para esta cola
				jQuery._queueHooks( esto, tipo );

				if ( tipo === "fx" && cola[ 0 ] !== "en progreso" ) {
					jQuery.dequeue( esto, tipo );
				}
			});
	},
	sacar de la cola: función (tipo) {
		devuelve esto. cada uno (función () {
			jQuery.dequeue( esto, tipo );
		});
	},
	clearQueue: función (tipo) {
		devuelve this.queue( tipo || "fx", [] );
	},

	// Obtener una promesa resuelta cuando colas de cierto tipo
	// se vacían (fx es el tipo por defecto)
	promesa: función (tipo, obj) {
		var tmp,
			cuenta = 1,
			diferir = jQuery.Deferred(),
			elementos = esto,
			i = esta.longitud,
			resolver = función () {
				si ( !( --cuenta ) ) {
					aplazar.resolveWith( elementos, [ elementos ] );
				}
			};

		if ( tipo de tipo !== "cadena" ) {
			obj = tipo;
			tipo = indefinido;
		}
		tipo = tipo || "fx";

		mientras yo-- ) {
			tmp = dataPriv.get( elementos[ i ], tipo + "queueHooks" );
			si (tmp && tmp.vacío) {
				contar++;
				tmp.empty.add( resolver );
			}
		}
		resolver();
		volver aplazar.promesa( obj );
	}
});
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).fuente;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i" );


var cssExpand = [ "Arriba", "Derecha", "Abajo", "Izquierda" ];

var documentElement = documento.documentElement;



	var isAdjunto = function( elem ) {
			return jQuery.contains( elem.documentopropietario, elem );
		},
		compuesto = { compuesto: verdadero };

	// Soporte: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 solamente
	// Verifique el archivo adjunto a través de los límites del DOM oculto cuando sea posible (gh-3504)
	// Soporte: solo iOS 10.0-10.2
	// Las primeras versiones de iOS 10 admiten `attachShadow` pero no `getRootNode`,
	// lo que lleva a errores. Necesitamos verificar `getRootNode`.
	if (documentElement.getRootNode) {
		está adjunto = función (elemento) {
			devuelve jQuery.contains( elem.documentopropietario, elem ) ||
				elem.getRootNode(compuesto) === elem.ownerDocument;
		};
	}
var estáOcultoDentrodelÁrbol = function( elem, el ) {

		// isHiddenWithinTree podría llamarse desde la función jQuery#filter;
		// en ese caso, el elemento será el segundo argumento
		elemento = el || elemento;

		// El estilo en línea triunfa sobre todo
		return elem.style.display === "ninguno" ||
			elemento.estilo.pantalla === "" &&

			// De lo contrario, verifique el estilo calculado
			// Soporte: Firefox <=43 - 45
			// Los elementos desconectados pueden tener visualización calculada: ninguno, así que primero confirme que elem es
			// en el documento.
			está adjunto (elemento) &&

			jQuery.css( elem, "pantalla" ) === "ninguno";
	};



función ajusteCSS (elemento, apoyo, valorPartes, interpolación) {
	var ajustado, escala,
		iteraciones máximas = 20,
		currentValue = interpolación?
			función() {
				volver interpolación.cur();
			} :
			función() {
				devuelve jQuery.css( elemento, prop, "" );
			},
		inicial = valorActual(),
		unidad = valueParts && valueParts[ 3 ] || (jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Se requiere el cálculo del valor inicial para posibles desajustes de unidades
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unidad !== "px" && +inicial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if (unidadEnInicial && UnidadEnInicial[ 3 ] !== unidad ) {

		// Soporte: Firefox <=54
		// Reducir a la mitad el valor objetivo de la iteración para evitar la interferencia de los límites superiores de CSS (gh-2144)
		inicial = inicial / 2;

		// Unidades de confianza reportadas por jQuery.css
		unidad = unidad || inicialEnUnidad[ 3 ];

		// Aproximación iterativa desde un punto de partida distinto de cero
		inicialEnUnidad = +inicial || 1;

		while (maxIteraciones--) {

			// Evaluar y actualizar nuestra mejor conjetura (duplicar conjeturas que se ponen a cero).
			// Terminar si la escala es igual o cruza 1 (haciendo que el producto viejo*nuevo no sea positivo).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - escala ) * ( 1 - ( escala = valorActual() / inicial || 0.5 ) ) <= 0 ) {
				maxIteraciones = 0;
			}
			inicialEnUnidad = inicialEnUnidad / escala;

		}

		inicialEnUnidad = inicialEnUnidad * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Asegúrese de que actualicemos las propiedades de interpolación más adelante
		valorPartes = valorPartes || [];
	}

	if (valorPartes) {
		inicialEnUnidad = +inicialEnUnidad || +inicial || 0;

		// Aplicar compensación relativa (+=/-=) si se especifica
		ajustado = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valorPartes[ 2 ];
		si (entre) {
			interpolación.unidad = unidad;
			tween.start = initialInUnit;
			tween.end = ajustado;
		}
	}
	retorno ajustado;
}


var defaultDisplayMap = {};

función getDefaultDisplay( elem ) {
	temperatura variable,
		doc = elemento.documentopropietario,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nombreNodo ];

	si (mostrar) {
		pantalla de retorno;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	pantalla = jQuery.css(temp, "pantalla");

	temp.parentNode.removeChild(temp);

	si ( mostrar === "ninguno" ) {
		mostrar = "bloquear";
	}
	defaultDisplayMap[ nodeName ] = mostrar;

	pantalla de retorno;
}

función mostrarOcultar( elementos, mostrar ) {
	pantalla var, elem,
		valores = [],
		índice = 0,
		longitud = elementos.longitud;

	// Determinar el nuevo valor de visualización para los elementos que necesitan cambiar
	for ( ; índice < longitud; índice++ ) {
		elem = elementos[índice];
		if ( !elemento.estilo ) {
			Seguir;
		}

		pantalla = elemento.estilo.pantalla;
		si (mostrar) {

			// Ya que forzamos la visibilidad sobre los elementos ocultos en cascada, una inmediata (y lenta)
			// se requiere verificación en este primer ciclo a menos que tengamos un valor de visualización no vacío (ya sea
			// en línea o a punto de ser restaurado)
			si ( mostrar === "ninguno" ) {
				valores[ índice ] = dataPriv.get( elem, "display" ) || nulo;
				if (!valores[ índice ] ) {
					elemento.estilo.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				valores[ índice ] = getDefaultDisplay( elem );
			}
		} demás {
			if ( mostrar !== "ninguno" ) {
				valores[ índice ] = "ninguno";

				// Recuerda lo que estamos sobrescribiendo
				dataPriv.set( elem, "pantalla", pantalla);
			}
		}
	}

	// Establecer la visualización de los elementos en un segundo bucle para evitar el reflujo constante
	for (índice = 0; índice <longitud; índice++) {
		if (valores[ índice ] != nulo ) {
			elementos[ índice ].style.display = valores[ índice ];
		}
	}

	elementos de retorno;
}

jQuery.fn.extender( {
	mostrar: función () {
		volver mostrarOcultar (esto, verdadero);
	},
	ocultar: función () {
		volver mostrarOcultar(esto);
	},
	alternar: función (estado) {
		if ( tipo de estado === "booleano" ) {
			estado de retorno? esto.mostrar() : esto.ocultar();
		}

		devuelve esto. cada uno (función () {
			if (estáOcultoDentrodelÁrbol(esto)) {
				jQuery( esto ).mostrar();
			} demás {
				jQuery( esto ).hide();
			}
		});
	}
});
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([az][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^módulo$|\/(?:java|ecma)script/i );



( función() {
	var fragmento = documento.createDocumentFragment(),
		div = fragmento.appendChild( documento.createElement( "div" ) ),
		entrada = documento.createElement("entrada");

	// Soporte: Android 4.0 - 4.3 solamente
	// Comprobar estado perdido si el nombre está establecido (#11217)
	// Soporte: Aplicaciones web de Windows (WWA)
	// `name` y `type` deben usar .setAttribute para WWA (#14901)
	input.setAttribute( "tipo", "radio" );
	input.setAttribute("marcado", "marcado");
	input.setAttribute("nombre", "t");

	div.a ppendChild(entrada);

	// Soporte: Android <= 4.1 solamente
	// WebKit anterior no clona el estado marcado correctamente en fragmentos
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Soporte: IE <=11 solamente
	// Asegúrese de que el área de texto (y la casilla de verificación) defaultValue se haya clonado correctamente
	div.innerHTML = "<área de texto>x</área de texto>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Soporte: IE <=9 solamente
	// IE <=9 reemplaza las etiquetas <option> con su contenido cuando se inserta fuera de
	// el elemento seleccionado.
	div.innerHTML = "<opción></opción>";
	support.option = !!div.lastChild;
} )();


// Tenemos que cerrar estas etiquetas para soportar XHTML (#13200)
var envolver mapa = {

	// Los analizadores XHTML no insertan elementos mágicamente en el
	// De la misma manera que lo hacen los analizadores de sopa de etiquetas. Entonces no podemos acortar
	// esto omitiendo <tbody> u otros elementos requeridos.
	cabeza: [ 1, "<tabla>", "</tabla>" ],
	col: [ 2, "<tabla><grupocol>", "</colgrupo></tabla>" ],
	tr: [ 2, "<tabla><tcuerpo>", "</tcuerpo></tabla>" ],
	td: [ 3, "<tabla><tcuerpo><tr>", "</tr></tcuerpo></tabla>" ],

	_predeterminado: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
envolverMapa.th = envolverMapa.td;

// Soporte: IE <=9 solamente
if ( !apoyo.opción ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


función getAll(contexto, etiqueta) {

	// Soporte: IE <=9 - 11 solamente
	// Usar typeof para evitar la invocación de métodos de argumento cero en objetos host (#15151)
	varret;

	if ( typeof context.getElementsByTagName !== "indefinido" ) {
		ret = context.getElementsByTagName( etiqueta || "*" );

	} else if ( typeof context.querySelectorAll !== "indefinido" ) {
		ret = context.querySelectorAll( etiqueta || "*" );

	} demás {
		ret = [];
	}

	if (etiqueta === indefinido || etiqueta && nodeName(contexto, etiqueta)) {
		volver jQuery.merge([contexto], ret);
	}

	volver ret;
}


// Marcar scripts como ya evaluados
función setGlobalEval( elementos, refElements ) {
	var i = 0,
		l = elementos.longitud;

	para ( ; yo < l; i++ ) {
		dataPriv.set(
			elementos[ yo ],
			"evaluación global",
			!refElementos || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elementos, contexto, scripts, selección, ignorado ) {
	var elem, tmp, etiqueta, envoltura, adjunto, j,
		fragmento = contexto.createDocumentFragment(),
		nodos = [],
		yo = 0,
		l = elementos.longitud;

	para ( ; yo < l; i++ ) {
		elemento = elementos[ i ];

		si ( elemento || elemento === 0 ) {

			// Agregar nodos directamente
			if (toType( elem ) === "objeto" ) {

				// Soporte: Android <= 4.0 solo, PhantomJS 1 solo
				// push.apply(_, arraylike) lanza en WebKit antiguo
				jQuery.merge( nodos, elem.nodeType ? [ elem ] : elem );

			// Convertir no html en un nodo de texto
			} else if ( !rhtml.test( elem ) ) {
				nodos.push(contexto.createTextNode(elemento));

			// Convertir html en nodos DOM
			} demás {
				tmp = tmp || fragmento.appendChild( context.createElement( "div" ) );

				// Deserializar una representación estándar
				etiqueta = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				envolver = envolverMapa[ etiqueta ] || envolverMapa._predeterminado;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Desciende a través de envoltorios al contenido correcto
				j = envolver[ 0 ];
				mientras ( j-- ) {
					tmp = tmp.último hijo;
				}

				// Soporte: Android <= 4.0 solo, PhantomJS 1 solo
				// push.apply(_, arraylike) lanza en WebKit antiguo
				jQuery.merge(nodos, tmp.childNodes);

				// Recuerda el contenedor de nivel superior
				tmp = fragmento.primerNiño;

				// Asegurarse de que los nodos creados sean huérfanos (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Quitar el envoltorio del fragmento
	fragmento.textContent = "";

	yo = 0;
	while ( ( elem = nodos[ i++ ] ) ) {

		// Omitir elementos que ya están en la colección de contexto (trac-4087)
		if (selección && jQuery.inArray(elemento, selección) > -1) {
			si ( ignorado ) {
				ignorado.push( elem );
			}
			Seguir;
		}

		adjunto = está adjunto( elem );

		// Agregar al fragmento
		tmp = getAll(fragmento.appendChild( elem ), "script" );

		// Conservar el historial de evaluación del script
		si ( adjunto ) {
			establecerValorGlobal(tmp);
		}

		// Capturar ejecutables
		si (guiones) {
			j = 0;
			while ( ( elemento = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elemento );
				}
			}
		}
	}

	fragmento de retorno;
}


variable
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:ratón|puntero|menú contextual|arrastrar|soltar)|clic/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

función devuelveVerdadero() {
	devolver verdadero;
}

función devolverFalso() {
	falso retorno;
}

// Soporte: IE <= 9 - 11+
// focus() y blur() son asincrónicos, excepto cuando no son operativos.
// Entonces espere que el enfoque sea sincrónico cuando el elemento ya está activo,
// y desenfoque para que sea sincrónico cuando el elemento aún no está activo.
// (el enfoque y el desenfoque siempre están sincronizados en otros navegadores compatibles,
// esto solo define cuando podemos contar con ello).
función expectSync( elemento, tipo ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Soporte: IE <=9 solamente
// Acceder a document.activeElement puede generar resultados inesperados
// https://bugs.jquery.com/ticket/13393
función elementoActivoseguro() {
	tratar {
		volver documento.elementoactivo;
	} atrapar (err) { }
}

función en (elemento, tipos, selector, datos, fn, uno) {
	var origFn, tipo;

	// Los tipos pueden ser un mapa de tipos/controladores
	if (tipo de tipos === "objeto" ) {

		// (tipos-Objeto, selector, datos)
		if (selector de tipo! == "cadena" ) {

			// (tipos-Objeto, datos)
			datos = datos || selector;
			selector = indefinido;
		}
		para (escriba tipos) {
			on( elem, tipo, selector, datos, tipos[ tipo ], uno );
		}
		elemento de retorno;
	}

	if (datos == nulo && fn == nulo) {

		// (tipos, fn)
		fn = selector;
		datos = selector = indefinido;
	} más si (fn == nulo) {
		if (tipo de selector === "cadena" ) {

			// (tipos, selector, fn)
			fn = datos;
			datos = indefinido;
		} demás {

			// (tipos, datos, fn)
			fn = datos;
			datos = selector;
			selector = indefinido;
		}
	}
	si ( fn === falso ) {
		fn = devuelve Falso;
	} si no ( !fn ) {
		elemento de retorno;
	}

	si ( uno === 1 ) {
		origenFn = fn;
		fn = función (evento) {

			// Puede usar un conjunto vacío, ya que el evento contiene la información
			jQuery().off(evento);
			return origFn.apply( esto, argumentos );
		};

		// Use el mismo GUID para que la persona que llama pueda eliminar usando origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( función() {
		jQuery.event.add (esto, tipos, fn, datos, selector);
	});
}

/*
 * Funciones auxiliares para la gestión de eventos: no forman parte de la interfaz pública.
 * Apoyos a la biblioteca addEvent de Dean Edwards para muchas de las ideas.
 */
jQuery.event = {

	globales: {},

	agregar: función (elemento, tipos, controlador, datos, selector) {

		var handleObjIn, eventHandle, tmp,
			eventos, t, handleObj,
			especial, manejadores, tipo, espacios de nombres, origType,
			elemData = dataPriv.get( elem );

		// Solo adjunte eventos a objetos que acepten datos
		si (! aceptar datos (elemento)) {
			regreso;
		}

		// La persona que llama puede pasar un objeto de datos personalizados en lugar del controlador
		if (manejador.manejador) {
			handleObjIn = controlador;
			controlador = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Asegurarse de que los selectores no válidos generen excepciones en el momento de la conexión
		// Evaluar contra documentElement en caso de que elem no sea un nodo de elemento (por ejemplo, documento)
		si (selector) {
			jQuery.find.matchesSelector(documentElement, selector);
		}

		// Asegúrese de que el controlador tenga una ID única, utilizada para encontrarlo/eliminarlo más tarde
		si (! manejador.guid) {
			manejador.guid = jQuery.guid++;
		}

		// Inicia la estructura de eventos del elemento y el controlador principal, si este es el primero
		if ( !( eventos = elemData.events ) ) {
			eventos = elemData.events = Object.create(null);
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Descartar el segundo evento de jQuery.event.trigger() y
				// cuando se llama a un evento después de que se haya descargado una página
				devuelve el tipo de jQuery !== "indefinido" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply (elemento, argumentos): indefinido;
			};
		}

		// Manejar múltiples eventos separados por un espacio
		tipos = ( tipos || "" ).match( rnothtmlwhite ) || [ "" ];
		t = tipos.longitud;
		mientras (t--) {
			tmp = rtypenamespace.exec( tipos[ t ] ) || [];
			tipo = origType = tmp[ 1 ];
			espacios de nombres = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// *Debe* haber un tipo, no adjuntar controladores de espacio de nombres solamente
			si (! tipo) {
				Seguir;
			}

			// Si el evento cambia de tipo, use los controladores de eventos especiales para el tipo cambiado
			especial = jQuery.event.special[ tipo ] || {};

			// Si se define el selector, determina el tipo de API de evento especial; de lo contrario, se da el tipo
			tipo = ( selector ? especial.delegateType : especial.bindType ) || escribe;

			// Actualización especial basada en el tipo de reinicio recién
			especial = jQuery.event.special[ tipo ] || {};

			// handleObj se pasa a todos los controladores de eventos
			handleObj = jQuery.extend( {
				tipo: tipo,
				tipo de origen: tipo de origen,
				datos: datos,
				manipulador: manipulador,
				guid: controlador.guid,
				seleccionador: seleccionador,
				NeedsContext: selector && jQuery.expr.match.needsContext.test(selector),
				espacio de nombres: espacios de nombres.join( "." )
			}, manejarObjEn);

			// Inicia la cola del controlador de eventos si somos los primeros
			if (!(controladores = eventos[tipo])) {
				manejadores = eventos[ tipo ] = [];
				manejadores.delegateCount = 0;

				// Solo use addEventListener si el controlador de eventos especiales devuelve falso
				if ( !configuración.especial ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					si ( elem.addEventListener ) {
						elem.addEventListener( tipo, eventHandle );
					}
				}
			}

			if (especial.añadir) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Agregar a la lista de controladores del elemento, delegados al frente
			si (selector) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} demás {
				manejadores.push( manejaObj );
			}

			// Realizar un seguimiento de los eventos que se han utilizado alguna vez, para la optimización de eventos
			jQuery.event.global[ tipo ] = verdadero;
		}

	},

	// Separar un evento o conjunto de eventos de un elemento
	eliminar: función (elemento, tipos, controlador, selector, mappedTypes) {

		var j, origCount, tmp,
			eventos, t, handleObj,
			especial, manejadores, tipo, espacios de nombres, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( eventos = elemData.events ) ) {
			regreso;
		}

		// Una vez por cada tipo.espacio de nombres en tipos; se puede omitir el tipo
		tipos = ( tipos || "" ).match( rnothtmlwhite ) || [ "" ];
		t = tipos.longitud;
		mientras (t--) {
			tmp = rtypenamespace.exec( tipos[ t ] ) || [];
			tipo = origType = tmp[ 1 ];
			espacios de nombres = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Desvincular todos los eventos (en este espacio de nombres, si se proporciona) para el elemento
			si (! tipo) {
				para (escriba eventos) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				Seguir;
			}

			especial = jQuery.event.special[ tipo ] || {};
			tipo = ( selector ? especial.delegateType : especial.bindType ) || escribe;
			manejadores = eventos[ tipo ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Eliminar eventos coincidentes
			origCount = j = manejadores.longitud;
			mientras ( j-- ) {
				handleObj = manejadores[ j ];

				if ( (tiposmapeados || origType === handleObj.origType ) &&
					( !manejador || manejador.guid === manejaObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					manipuladores.empalme( j, 1 );

					if ( handleObj.selector ) {
						manejadores.delegateCount--;
					}
					if (especial.eliminar) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Eliminar el controlador de eventos genérico si eliminamos algo y no existen más controladores
			// (evita la posibilidad de recurrencia sin fin durante la eliminación de controladores de eventos especiales)
			if ( origCount && !handlers.length ) {
				if ( !especial.desmontaje ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, tipo, elemData.handle );
				}

				borrar eventos[ tipo ];
			}
		}

		// Eliminar datos y el expando si ya no se usa
		if (jQuery.isEmptyObject(eventos)) {
			dataPriv.remove( elem, "manejar eventos" );
		}
	},

	despacho: función (nativeEvent) {

		var i, j, ret, emparejado, handleObj, handlerQueue,
			args = nueva matriz (argumentos.longitud),

			// Hacer un jQuery.Event grabable desde el objeto de evento nativo
			evento = jQuery.event.fix(nativeEvent),

			manejadores = (
					dataPriv.get(esto, "eventos") || Objeto.crear(null)
				)[ evento.tipo ] || [],
			especial = jQuery.event.special[ event.type ] || {};

		// Usar jQuery.Event corregido en lugar del evento nativo (solo lectura)
		argumentos[ 0 ] = evento;

		for ( i = 1; i < argumentos.longitud; i++ ) {
			argumentos[ i ] = argumentos[ i ];
		}

		event.delegateTarget = esto;

		// Llame al enlace preDispatch para el tipo asignado y déjelo salir si lo desea
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			regreso;
		}

		// Determinar los controladores
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Ejecutar delegados primero; es posible que quieran detener la propagación debajo de nosotros
		yo = 0;
		while ( (coincidencia = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = emparejado.elem;

			j = 0;
			while ( ( handleObj = emparejado.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Si el evento tiene un espacio de nombres, cada controlador solo se invoca si es
				// especialmente universal o sus espacios de nombres son un superconjunto de los del evento.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					evento.handleObj = handleObj;
					evento.datos = handleObj.datos;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply(matched.elem, args );

					if ( ret !== indefinido ) {
						if ( (evento.resultado = ret) === falso) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Llamar al gancho postDispatch para el tipo mapeado
		if (especial.postDispatch) {
			special.postDispatch.call(este, evento);
		}

		return evento.resultado;
	},

	manejadores: función (evento, manejadores) {
		var i, handleObj, sel, manejadores emparejados, selectores emparejados,
			manejadorCola = [],
			delegarCount = manejadores.delegateCount,
			cur = evento.objetivo;

		// Buscar controladores de delegados
		if (cuentadelegados &&

			// Soporte: IE <=9
			// Árboles de instancia de SVG de agujero negro <use> (trac-13180)
			cur.nodeType &&

			// Soporte: Firefox <=42
			// Suprimir los clics que infringen las especificaciones que indican un botón de puntero no principal (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Soporte: solo IE 11
			// ...pero no los "clics" de las teclas de flecha de las entradas de radio, que pueden tener un `botón` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== esto; cur = cur.parentNode || esto ) {

				// No marque elementos que no sean (#13208)
				// No procesar clics en elementos deshabilitados (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					manejadores emparejados = [];
					selectores emparejados = {};
					for ( i = 0; i < número de delegados; i++ ) {
						handleObj = manejadores[ i ];

						// No entre en conflicto con las propiedades de Object.prototype (#13203)
						sel = handleObj.selector + " ";

						if (matchedSelectors[ sel ] === indefinido ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, esto ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).longitud;
						}
						if (matchedSelectors[ sel ] ) {
							manejadores emparejados.push( handleObj );
						}
					}
					if ( manejadores coincidentes.longitud ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Agregue los controladores restantes (vinculados directamente)
		cur = esto;
		if (recuento de delegados < handlers.length) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( deleteCount ) } );
		}

		return handlerQueue;
	},

	addProp: función (nombre, gancho) {
		Objeto.defineProperty( jQuery.Event.prototype, nombre, {
			enumerable: cierto,
			configurable: verdadero,

			obtener: isFunction(gancho)?
				función() {
					if (este.eventooriginal) {
							anzuelo de retorno( this.originalEvent );
					}
				} :
				función() {
					if (este.eventooriginal) {
							devuelve este.originalEvent[ nombre ];
					}
				},

			conjunto: función (valor) {
				Objeto.defineProperty(este, nombre, {
					enumerable: cierto,
					configurable: verdadero,
					escribible: cierto,
					valor: valor
				});
			}
		});
	},

	corrección: función (evento original) {
		devolver evento original[ jQuery.expando ] ?
			evento original:
			nuevo jQuery. Evento (originalEvent);
	},

	especial: {
		carga: {

			// Evitar que los eventos image.load activados burbujeen en window.load
			sin burbuja: cierto
		},
		haga clic en: {

			// Utilizar un evento nativo para garantizar el estado correcto de las entradas verificables
			configuración: función (datos) {

				// Para la compresibilidad mutua con _default, reemplace `este` acceso con una var local.
				// `|| data` es un código muerto destinado solo a preservar la variable a través de la minificación.
				var el = esto || datos;

				// Reclamar el primer controlador
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "clic", ... )
					aprovecharNative( el, "clic", returnTrue );
				}

				// Devuelve falso para permitir el procesamiento normal en la persona que llama
				falso retorno;
			},
			disparador: función (datos) {

				// Para la compresibilidad mutua con _default, reemplace `este` acceso con una var local.
				// `|| data` es un código muerto destinado solo a preservar la variable a través de la minificación.
				var el = esto || datos;

				// Forzar la configuración antes de activar un clic
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					apalancamientoNativo( el, "clic" );
				}

				// Devuelve no falso para permitir la propagación normal de la ruta del evento
				devolver verdadero;
			},

			// Para mantener la coherencia entre navegadores, suprima el .click() nativo en los enlaces
			// También evitarlo si actualmente estamos dentro de una pila de eventos nativos apalancados
			_predeterminado: función (evento) {
				var objetivo = evento.objetivo;
				devuelve rcheckableType.test (objetivo.tipo) &&
					target.click && nodeName( target, "input") &&
					dataPriv.get(objetivo, "clic") ||
					nodeName(objetivo, "a");
			}
		},

		antes de descargar: {
			postDispatch: función (evento) {

				// Soporte: Firefox 20+
				// Firefox no alerta si el campo returnValue no está configurado.
				if ( evento.resultado !== indefinido && evento.originalEvent ) {
					evento.originalEvent.returnValue = evento.resultado;
				}
			}
		}
	}
};

// Asegurar la presencia de un detector de eventos que maneje los desencadenados manualmente
// eventos sintéticos interrumpiendo el progreso hasta que se vuelvan a invocar en respuesta a
// eventos *nativos* que dispara directamente, asegurando que los cambios de estado tengan
// ya ocurrió antes de que se invoquen otros oyentes.
función de apalancamientoNativo( el, tipo, expectSync ) {

	// Missing expectSync indica una llamada de activación, que debe forzar la configuración a través de jQuery.event.add
	si (!esperar sincronización) {
		if ( dataPriv.get( el, tipo ) === indefinido ) {
			jQuery.event.add( el, tipo, returnTrue );
		}
		regreso;
	}

	// Registre el controlador como un controlador universal especial para todos los espacios de nombres de eventos
	dataPriv.set( el, tipo, falso );
	jQuery.event.add( el, tipo, {
		espacio de nombres: falso,
		controlador: función (evento) {
			var notAsync, resultado,
				guardado = dataPriv.get( esto, tipo );

			if ( ( event.isTrigger & 1 ) && este[ tipo ] ) {

				// Interrumpir el procesamiento del evento externo sintético .trigger()ed
				// Los datos guardados deberían ser falsos en tales casos, pero podría ser un objeto de captura sobrante
				// desde un controlador nativo asíncrono (gh-4350)
				if ( !salvado.longitud) {

					// Almacenar argumentos para usar cuando se maneja el evento nativo interno
					// Siempre habrá al menos un argumento (un objeto de evento), por lo que esta matriz
					// no se confundirá con un objeto de captura sobrante.
					guardado = slice.call(argumentos);
					dataPriv.set (esto, tipo, guardado);

					// Activar el evento nativo y capturar su resultado
					// Soporte: IE <= 9 - 11+
					// focus() y blur() son asincrónicos
					notAsync = expectSync( esto, tipo );
					este tipo ]();
					resultado = dataPriv.get( esto, tipo );
					if (guardado! == resultado || notAsync) {
						dataPriv.set (esto, tipo, falso);
					} demás {
						resultado = {};
					}
					if ( guardado !== resultado ) {

						// Cancelar el evento sintético externo
						event.stopImmediatePropagation();
						event.preventDefault();
						devolver resultado.valor;
					}

				// Si este es un evento sintético interno para un evento con un sustituto burbujeante
				// (enfoque o desenfoque), supongamos que el sustituto ya se propagó desde la activación del
				// evento nativo y evita que eso vuelva a suceder aquí.
				// Esto técnicamente hace que el orden sea incorrecto para `.trigger()` (en el que el
				// el sustituto burbujeante se propaga *después* de la base no burbujeante), pero eso parece
				// menos malo que la duplicación.
				} else if ( ( jQuery.event.special[ tipo ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// Si este es un evento nativo activado anteriormente, ahora todo está en orden
			// Dispara un evento sintético interno con los argumentos originales
			} else if (guardado.longitud) {

				// ...y capturar el resultado
				dataPriv.set( esto, tipo, {
					valor: jQuery.event.trigger(

						// Soporte: IE <= 9 - 11+
						// Ampliar con el prototipo para restablecer el stopImmediatePropagation() anterior
						jQuery.extend(guardado[0], jQuery.Event.prototype),
						rebanada guardada( 1 ),
						esta
					)
				});

				// Cancelar el manejo del evento nativo
				event.stopImmediatePropagation();
			}
		}
	});
}

jQuery.removeEvent = función (elemento, tipo, identificador) {

	// Este "si" es necesario para objetos simples
	if ( elem.removeEventListener ) {
		elem.removeEventListener(tipo, identificador);
	}
};

jQuery.Event = función (fuente, accesorios) {

	// Permitir instanciación sin la palabra clave 'nueva'
	if ( !( esta instancia de jQuery.Event ) ) {
		devolver nuevo jQuery.Event( src, props );
	}

	// objeto de evento
	if ( src && src.type ) {
		este.originalEvent = src;
		this.type = src.type;

		// Es posible que los eventos que aparecen en el documento se hayan marcado como prevenidos
		// por un controlador más abajo en el árbol; reflejar el valor correcto.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === indefinido &&

				// Soporte: Android <= 2.3 solamente
				src.returnValue === falso?
			volverVerdadero:
			falso retorno;

		// Crear propiedades de destino
		// Soporte: Safari <=6 - 7 solamente
		// El destino no debe ser un nodo de texto (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode:
			src.objetivo;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Tipo de evento
	} demás {
		este.tipo = src;
	}

	// Poner propiedades proporcionadas explícitamente en el objeto de evento
	si (accesorios) {
		jQuery.extend (esto, accesorios);
	}

	// Crea una marca de tiempo si el evento entrante no tiene una
	this.timeStamp = src && src.timeStamp || Fecha.ahora();

	// Marcarlo como fijo
	este[ jQuery.expando ] = verdadero;
};

// jQuery.Event se basa en DOM3 Events según lo especificado por ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Evento.prototipo = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	esSimulado: falso,

	prevenirPredeterminado: función () {
		var e = este.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !esto.esSimulado ) {
			e.preventDefault();
		}
	},
	detener la propagación: función () {
		var e = este.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !esto.esSimulado ) {
			e.detener la propagación();
		}
	},
	detener la propagación inmediata: función () {
		var e = este.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !esto.esSimulado ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Incluye todos los accesorios de eventos comunes, incluidos los accesorios específicos de KeyEvent y MouseEvent
jQuery.each( {
	tecla alt: cierto,
	burbujas: cierto,
	cancelable: cierto,
	Toques cambiados: cierto,
	tecla ctrl: cierto,
	detalle: cierto,
	EventPhase: verdadero,
	metaclave: cierto,
	páginaX: cierto,
	páginaY: cierto,
	shiftKey: cierto,
	vista: cierto,
	"char": cierto,
	código: verdadero,
	charCode: verdadero,
	clave: cierto,
	código clave: verdadero,
	botón: cierto,
	botones: verdadero,
	clienteX: cierto,
	clienteY: cierto,
	compensaciónX: cierto,
	compensación Y: cierto,
	identificador de puntero: verdadero,
	tipo de puntero: verdadero,
	pantallaX: cierto,
	pantallaY: cierto,
	toques objetivo: verdadero,
	aElemento: verdadero,
	toques: cierto,

	cuál: función (evento) {
		botón var = evento.botón;

		// Agregar cuál para eventos clave
		if (evento.que == nulo && rkeyEvent.test(evento.tipo)) {
			volver event.charCode != null ? event.charCode : event.keyCode;
		}

		// Agregue cuál para hacer clic: 1 === izquierda; 2 === medio; 3 === correcto
		if ( !evento.que && botón !== indefinido && rmouseEvent.test( evento.tipo ) ) {
			si (botón & 1) {
				devolver 1;
			}

			si (botón y 2) {
				devolver 3;
			}

			si (botón y 4) {
				devolver 2;
			}

			devolver 0;
		}

		evento de retorno.que;
	}
}, jQuery.event.addProp);

jQuery.each( { foco: "enfocar", desenfoque: "enfocar" }, función (tipo, tipo de delegado) {
	jQuery.event.special[ tipo ] = {

		// Utilizar evento nativo si es posible para que la secuencia de desenfoque/enfoque sea correcta
		configuración: función () {

			// Reclamar el primer controlador
			// dataPriv.set( esto, "enfoque", ... )
			// dataPriv.set( esto, "desenfoque", ... )
			apalancamiento nativo (esto, tipo, expectSync);

			// Devuelve falso para permitir el procesamiento normal en la persona que llama
			falso retorno;
		},
		disparador: función () {

			// Forzar la configuración antes del disparo
			apalancamientoNativo (esto, tipo);

			// Devuelve no falso para permitir la propagación normal de la ruta del evento
			devolver verdadero;
		},

		tipo de delegado: tipo de delegado
	};
});

// Cree eventos de entrada/salida del mouse usando mouseover/out y comprobaciones de tiempo de eventos
// para que la delegación de eventos funcione en jQuery.
// Haz lo mismo para pointerenter/pointerleave y pointerover/pointerout
//
// Soporte: solo Safari 7
// Safari envía mouseenter con demasiada frecuencia; ver:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// para la descripción del error (también existía en versiones anteriores de Chrome).
jQuery.each( {
	mouseenter: "mouse over",
	mouseleave: "ratón fuera",
	punteroenter: "puntero sobre",
	puntero de hoja: "puntero de salida"
}, función (origen, arreglo) {
	jQuery.event.special[ origen ] = {
		tipo de delegado: arreglar,
		tipo de enlace: corregir,

		manejar: función (evento) {
			var ret,
				objetivo = esto,
				relacionado = evento.objetivorelacionado,
				handleObj = evento.handleObj;

			// Para mouseenter/leave, llame al controlador si el relacionado está fuera del objetivo.
			// NB: No hay objetivo relacionado si el mouse salió/entró en la ventana del navegador
			if ( !relacionado || ( relacionado !== objetivo && !jQuery.contains( objetivo, relacionado ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply(esto, argumentos);
				evento.tipo = arreglar;
			}
			volver ret;
		}
	};
});

jQuery.fn.extender( {

	en: función (tipos, selector, datos, fn) {
		return on( esto, tipos, selector, datos, fn );
	},
	uno: función (tipos, selector, datos, fn) {
		return on( esto, tipos, selector, datos, fn, 1 );
	},
	desactivado: función (tipos, selector, fn) {
		var handleObj, tipo;
		if ( tipos && tipos.preventDefault && tipos.handleObj ) {

			// (evento) enviado jQuery.Event
			handleObj = tipos.handleObj;
			jQuery( tipos.delegateTarget ).off(
				handleObj.espacio de nombres?
					handleObj.origType + "." + handleObj.espacio de nombres:
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			devolver esto;
		}
		if (tipo de tipos === "objeto" ) {

			// ( tipos-objeto [, selector] )
			para (escriba tipos) {
				this.off (tipo, selector, tipos [tipo]);
			}
			devolver esto;
		}
		if (selector === falso || tipo de selector === "función" ) {

			// ( tipos [, fn] )
			fn = selector;
			selector = indefinido;
		}
		si ( fn === falso ) {
			fn = devuelve Falso;
		}
		devuelve esto. cada uno (función () {
			jQuery.event.remove( esto, tipos, fn, selector );
		});
	}
});


variable

	// Soporte: IE <= 10 - 11, Edge 12 - 13 solamente
	// En IE/Edge, el uso de grupos de expresiones regulares aquí provoca graves ralentizaciones.
	// Consulte https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<estilo|<enlace/i,

	// marcado="marcado" o marcado
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Preferir un tbody sobre su tabla principal para contener nuevas filas
función manipulaciónObjetivo( elemento, contenido ) {
	if (nombreNodo(elemento, "tabla" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		devuelve jQuery( elem ).children( "tbody" )[ 0 ] || elemento;
	}

	elemento de retorno;
}

// Reemplazar/restaurar el atributo de tipo de los elementos del script para una manipulación DOM segura
función deshabilitarScript (elemento) {
	elem.tipo = ( elem.getAttribute( "tipo" ) !== null ) + "/" + elem.tipo;
	elemento de retorno;
}
función restaurarScript (elemento) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.tipo = elem.tipo.segmento( 5 );
	} demás {
		elem.removeAttribute("tipo");
	}

	elemento de retorno;
}

función clonCopyEvent (origen, destino) {
	var i, l, tipo, pdataOld, udataOld, udataCur, eventos;

	if ( dest.nodeType !== 1 ) {
		regreso;
	}

	// 1. Copiar datos privados: eventos, manejadores, etc.
	if (datosPriv.hasData(src)) {
		pdataOld = dataPriv.get( src );
		eventos = pdataOld.events;

		si ( eventos ) {
			dataPriv.remove( destino, "manejar eventos" );

			para (escriba eventos) {
				for ( i = 0, l = eventos[ tipo ].longitud; i < l; i++ ) {
					jQuery.event.add( destino, tipo, eventos[ tipo ][ i ] );
				}
			}
		}
	}

	// 2. Copiar datos de usuario
	if (usuariodatos.hasData(src)) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		usuario_datos.set( destino, fecha_actual );
	}
}

// Corregir errores de IE, ver pruebas de soporte
función fixInput(origen, destino) {
	var nodeName = dest.nodeName.toLowerCase();

	// No se conserva el estado marcado de una casilla de verificación o botón de radio clonado.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// No se puede devolver la opción seleccionada al estado seleccionado predeterminado al clonar opciones
	} else if (nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

función domManip (colección, argumentos, devolución de llamada, ignorado) {

	// Aplana cualquier matriz anidada
	argumentos = plano (argumentos);

	fragmento var, primero, scripts, hasScripts, nodo, doc,
		yo = 0,
		l = colección.longitud,
		iNoClone = l - 1,
		valor = argumentos[ 0 ],
		valorEsFuncion = esFuncion( valor );

	// No podemos clonar fragmentos de Node que contengan marcado, en WebKit
	si (valorEsFuncion ||
			( l > 1 && tipo de valor === "cadena" &&
				!support.checkClone && rchecked.test( valor ) ) ) {
		return colección.each(función(índice) {
			var self = colección.eq(índice);
			si (valorEsFuncion) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, devolución de llamada, ignorado );
		});
	}

	si (l) {
		fragment = buildFragment( args, colección[ 0 ].propietarioDocumento, falso, colección, ignorado);
		primero = fragmento.primerNiño;

		if (fragmento.childNodes.longitud === 1) {
			fragmento = primero;
		}

		// Solicitar contenido nuevo o interés en elementos ignorados para invocar la devolución de llamada
		if (primero || ignorado) {
			scripts = jQuery.map( getAll(fragmento, "script" ), disabledScript );
			hasScripts = scripts.longitud;

			// Usa el fragmento original para el último elemento
			// en lugar del primero porque puede terminar
			// siendo vaciado incorrectamente en ciertas situaciones (#8070).
			para ( ; yo < l; i++ ) {
				nodo = fragmento;

				if ( i !== iNoClone ) {
					nodo = jQuery.clone(nodo, verdadero, verdadero);

					// Mantener referencias a scripts clonados para restauración posterior
					si (tiene guiones) {

						// Soporte: Android <= 4.0 solo, PhantomJS 1 solo
						// push.apply(_, arraylike) lanza en WebKit antiguo
						jQuery.merge(scripts, getAll(nodo, "script" ) );
					}
				}

				callback.call( colección[ i ], nodo, i );
			}

			si (tiene guiones) {
				doc = guiones[ guiones.longitud - 1 ].propietarioDocumento;

				// Rehabilitar guiones
				jQuery.map(scripts, restoreScript);

				// Evaluar los scripts ejecutables en la primera inserción del documento
				for ( i = 0; i < hasScript; i++ ) {
					nodo = scripts[ i ];
					if ( rscriptType.test( nodo.tipo || "" ) &&
						!dataPriv.access(nodo, "globalEval") &&
						jQuery.contains(doc, nodo)) {

						if ( nodo.src && ( nodo.tipo || "" ).toLowerCase() !== "módulo" ) {

							// Dependencia opcional de AJAX, pero no ejecutará scripts si no está presente
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( nodo.src, {
									nonce: nodo.nonce || nodo.getAttribute("nonce")
								}, Doc );
							}
						} demás {
							DOMEval( nodo.textContent.replace( rcleanScript, "" ), nodo, doc );
						}
					}
				}
			}
		}
	}

	recogida de devolución;
}

función remove( elem, selector, keepData ) {
	nodo var,
		nodos = selector? jQuery.filter (selector, elemento): elemento,
		yo = 0;

	for ( ; ( nodo = nodos[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData(getAll(nodo));
		}

		if ( nodo.parentNode ) {
			if (mantener datos && está adjunto (nodo)) {
				setGlobalEval( getAll( nodo, "script" ) );
			}
			nodo.parentNode.removeChild( nodo );
		}
	}

	elemento de retorno;
}

jQuery.extender( {
	htmlPrefiltro: función (html) {
		devolver html;
	},

	clonar: función (elemento, datos y eventos, datos profundos y eventos) {
		var i, l, srcElements, destElements,
			clonar = elem.cloneNode(verdadero),
			enPágina = está Adjunto( elem );

		// Solucionar problemas de clonación de IE
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elemento ) ) {

			// Evitamos Sizzle aquí por razones de rendimiento: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll(clon);
			srcElements = getAll( elemento );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copia los eventos del original al clon
		si (datos y eventos) {
			si (datos profundos y eventos) {
				srcElements = srcElements || obtenerTodo(elemento);
				Elementosdestino = Elementosdestino || getAll(clonar);

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} demás {
				cloneCopyEvent( elemento, clon );
			}
		}

		// Conservar el historial de evaluación del script
		destElements = getAll(clon, "script");
		if (elementosdestino.longitud > 0) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Devolver el conjunto clonado
		devolver clon;
	},

	cleanData: función (elementos) {
		var datos, elem, tipo,
			especial = jQuery.event.special,
			yo = 0;

		for ( ; ( elem = elems[ i ] ) !== indefinido; i++ ) {
			if (aceptarDatos(elemento)) {
				if ( (datos = elem[ datosPriv.expando ] ) ) {
					si (datos.eventos) {
						para (escriba datos.eventos) {
							if (especial[ tipo ] ) {
								jQuery.event.remove( elemento, tipo );

							// Este es un atajo para evitar la sobrecarga de jQuery.event.remove
							} demás {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Soporte: Cromo <=35 - 45+
					// Asignar undefined en lugar de usar delete, ver Data#remove
					elem[ dataPriv.expando ] = indefinido;
				}
				if ( elem[ usuario_datos.expando ] ) {

					// Soporte: Cromo <=35 - 45+
					// Asignar undefined en lugar de usar delete, ver Data#remove
					elem[ usuario_datos.expando ] = indefinido;
				}
			}
		}
	}
});

jQuery.fn.extender( {
	separar: función (selector) {
		return remove( this, selector, true );
	},

	eliminar: función (selector) {
		return remove(esto, selector);
	},

	texto: función (valor) {
		volver acceso (esto, función (valor) {
			valor de retorno === indefinido?
				jQuery.text(esto):
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = valor;
					}
				});
		}, nulo, valor, argumentos.longitud);
	},

	añadir: función () {
		return domManip( esto, argumentos, función( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var objetivo = objetivo de manipulación (esto, elem);
				destino.appendChild( elem );
			}
		});
	},

	anteponer: función () {
		return domManip( esto, argumentos, función( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var objetivo = objetivo de manipulación (esto, elem);
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	antes: función () {
		return domManip( esto, argumentos, función( elem ) {
			if (este.nodopadre) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	después: función () {
		return domManip( esto, argumentos, función( elem ) {
			if (este.nodopadre) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	vacío: función () {
		var elemento,
			yo = 0;

		for ( ; ( elem = este[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevenir fugas de memoria
				jQuery.cleanData( getAll( elem, false ) );

				// Eliminar los nodos restantes
				elem.textContent = "";
			}
		}

		devolver esto;
	},

	clonar: función (datos y eventos, datos profundos y eventos) {
		datosYEventos = datosYEventos == nulo? falso: datos y eventos;
		deepDataAndEvents = deepDataAndEvents == null ? datos y eventos: datos profundos y eventos;

		devuelve esto.map( function() {
			devuelve jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: función (valor) {
		volver acceso (esto, función (valor) {
			var elem = este[ 0 ] || {},
				yo = 0,
				l = esta.longitud;

			if ( valor === indefinido && elem.nodeType === 1 ) {
				devuelve elem.innerHTML;
			}

			// Ver si podemos tomar un atajo y simplemente usar innerHTML
			if (tipo de valor === "cadena" && !rnoInnerhtml.test(valor) &&
				!wrapMap[ ( rtagName.exec( valor ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				valor = jQuery.htmlPrefiltro( valor );

				tratar {
					para ( ; yo < l; i++ ) {
						elemento = este[ yo ] || {};

						// Eliminar nodos de elementos y evitar fugas de memoria
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = valor;
						}
					}

					elemento = 0;

				// Si usar innerHTML lanza una excepción, use el método alternativo
				} atrapar ( e ) {}
			}

			si ( elemento ) {
				this.empty().append(valor);
			}
		}, nulo, valor, argumentos.longitud);
	},

	reemplazar con: función () {
		var ignorado = [];

		// Realice los cambios, reemplazando cada elemento de contexto no ignorado con el nuevo contenido
		return domManip( esto, argumentos, función( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( esto, ignorado ) < 0 ) {
				jQuery.cleanData(getAll(esto));
				si (padre) {
					padre.reemplazarNiño( elemento, esto );
				}
			}

		// Forzar invocación de devolución de llamada
		}, ignorado);
	}
});

jQuery.each( {
	appendTo: "añadir",
	prependTo: "anteponer",
	insertarAntes: "antes",
	insertDespués: "después",
	reemplazarTodo: "reemplazarCon"
}, función (nombre, original) {
	jQuery.fn[nombre] = función(selector) {
		var elementos,
			ret = [],
			insertar = jQuery(selector),
			último = insertar.longitud - 1,
			yo = 0;

		para ( ; i <= último; i++ ) {
			elementos = i === último ? esto: esto. clonar (verdadero);
			jQuery(insertar[i])[original](elementos);

			// Soporte: Android <= 4.0 solo, PhantomJS 1 solo
			// .get() porque push.apply(_, arraylike) lanza en WebKit antiguo
			empujar.aplicar( ret, elems.get() );
		}

		devuelve esto.pushStack(ret);
	};
});
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[az%]+$", "i" );

var getStyles = función (elemento) {

		// Soporte: IE <=11 solamente, Firefox <=30 (#15098, #14150)
		// IE arroja elementos creados en ventanas emergentes
		// Mientras tanto, FF lanza elementos de marco a través de "defaultView.getComputedStyle"
		var vista = elem.propietarioDocumento.defaultView;

		if ( !ver || !ver.abridor ) {
			vista = ventana;
		}

		volver view.getComputedStyle( elem );
	};

var swap = función (elemento, opciones, devolución de llamada) {
	var ret, nombre,
		viejo = {};

	// Recuerda los valores antiguos e inserta los nuevos
	para (nombre en opciones) {
		viejo[ nombre ] = elem.estilo[ nombre ];
		elem.style[ nombre ] = opciones[ nombre ];
	}

	ret = devolución de llamada. llamada (elemento);

	// Revertir los valores antiguos
	para (nombre en opciones) {
		elem.style[ nombre ] = antiguo[ nombre ];
	}

	volver ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( función() {

	// La ejecución de las pruebas pixelPosition y boxSizingReliable requiere solo un diseño
	// para que se ejecuten al mismo tiempo para guardar el segundo cálculo.
	function calcularEstiloPruebas() {

		// Este es un singleton, necesitamos ejecutarlo solo una vez
		si ( !div ) {
			regreso;
		}

		container.style.cssText = "posición: absoluta; izquierda: -11111px; ancho: 60px;" +
			"margen superior: 1px; relleno: 0; borde: 0";
		div.style.cssText =
			"posición: relativa; visualización: bloque; tamaño de cuadro: cuadro de borde; desbordamiento: desplazamiento;" +
			"margen: automático; borde: 1px; relleno: 1px;" +
			"ancho:60%;parte superior:1%";
		documentElement.appendChild( contenedor ).appendChild( div );

		var divStyle = ventana.getComputedStyle(div);
		pixelPositionVal = divStyle.top !== "1%";

		// Soporte: Android 4.0 - 4.3 solamente, Firefox <=3 - 44
		confiableMarginLeftVal = roundPixelMeasures (divStyle.marginLeft) === 12;

		// Compatibilidad: solo Android 4.0 - 4.3, Safari <= 9.1 - 10.1, iOS <= 7.0 - 9.3
		// Algunos estilos regresan con valores porcentuales, aunque no deberían
		div.estilo.derecho = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Soporte: IE 9 - 11 solamente
		// Detectar informes erróneos de dimensiones de contenido para elementos box-sizing:border-box
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Soporte: solo IE 9
		// Detectar desbordamiento: perplejidad de desplazamiento (gh-3699)
		// Soporte: Cromo <=64
		// No se deje engañar cuando el zoom afecta el ancho de compensación (gh-4029)
		div.style.position = "absoluto";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild(contenedor);

		// Anular el div para que no se almacene en la memoria y
		// también será una señal de que las comprobaciones ya se han realizado
		div = nulo;
	}

	función roundPixelMeasures (medida) {
		return Math.round(parseFloat(medida));
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		confiableTrDimensionsVal, confiableMarginLeftVal,
		contenedor = documento.createElement( "div"),
		div = documento.createElement( "div" );

	// Terminar temprano en entornos limitados (sin navegador)
	if ( !div.estilo ) {
		regreso;
	}

	// Soporte: IE <=9 - 11 solamente
	// El estilo del elemento clonado afecta el elemento fuente clonado (#8908)
	div.style.backgroundClip = "caja de contenido";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "cuadro de contenido";

	jQuery.extender (soporte, {
		tamaño de caja Confiable: función () {
			ComputeStyleTests();
			volver cuadroTamañoReliableVal;
		},
		pixelBoxStyles: función () {
			ComputeStyleTests();
			devolver pixelBoxStylesVal;
		},
		posición del píxel: función () {
			ComputeStyleTests();
			devolver pixelPositionVal;
		},
		margen confiable izquierdo: función () {
			ComputeStyleTests();
			devuelve el Margen Izquierdo Confiable;
		},
		scrollboxSize: function() {
			ComputeStyleTests();
			volver scrollboxSizeVal;
		},

		// Soporte: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge informa erróneamente `getComputedStyle` de las filas de la tabla con ancho/alto
		// establecido en CSS mientras que las propiedades `offset*` reportan valores correctos.
		// El comportamiento en IE 9 es más sutil que en las versiones más nuevas y pasa
		// algunas versiones de esta prueba; ¡Asegúrate de no hacerlo pasar por allí!
		dimensionesTr confiables: función () {
			tabla var, tr, trChild, trStyle;
			if (valor de las dimensiones confiables == nulo) {
				tabla = documento.createElement( "tabla" );
				tr = documento.createElement( "tr" );
				trChild = documento.createElement( "div" );

				table.style.cssText = "posición: absoluta; izquierda: -11111px";
				tr.estilo.altura = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild(tabla)
					.appendChild(tr)
					.appendChild(trChild);

				trStyle = ventana.getComputedStyle( tr );
				confiableTrDimensionsVal = parseInt(trStyle.height) > 3;

				documentElement.removeChild( tabla );
			}
			volver confiableTrDimensionsVal;
		}
	});
} )();


function curCSS( elemento, nombre, computado ) {
	var ancho, minWidth, maxWidth, ret,

		// Soporte: Firefox 51+
		// Recuperando el estilo antes de calcularlo de alguna manera
		// soluciona un problema con la obtención de valores incorrectos
		// en elementos separados
		estilo = elemento.estilo;

	calculado = calculado || obtenerEstilos( elemento );

	// se necesita getPropertyValue para:
	// .css('filtro') (solo IE 9, #12537)
	// .css('--propiedadpersonalizada) (#3144)
	si ( calculado ) {
		ret = calculado.getPropertyValue( nombre ) || computado[ nombre ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elemento, nombre );
		}

		// Un tributo al "increíble truco de Dean Edwards"
		// El navegador de Android devuelve el porcentaje de algunos valores,
		// pero el ancho parece ser confiablemente píxeles.
		// Esto va en contra de la especificación del borrador de CSSOM:
		// https://drafts.csswg.org/cssom/#valores-resueltos
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( nombre ) ) {

			// Recuerda los valores originales
			ancho = estilo.ancho;
			minWidth = estilo.minWidth;
			maxWidth = estilo.maxWidth;

			// Poner los nuevos valores para obtener un valor calculado
			estilo.minWidth = estilo.maxWidth = estilo.width = ret;
			ret = ancho calculado;

			// Revertir los valores cambiados
			estilo.ancho = ancho;
			estilo.minWidth = minWidth;
			estilo.maxWidth = maxWidth;
		}
	}

	volver ret !== indefinido ?

		// Soporte: IE <=9 - 11 solamente
		// IE devuelve el valor de zIndex como un número entero.
		ret + "" :
		retirado;
}


función agregarObtenerEngancheSi( condiciónFn, ganchoFn ) {

	// Defina el enlace, comprobaremos en la primera ejecución si es realmente necesario.
	regreso {
		obtener: función () {
			si (condiciónFn()) {

				// Hook no es necesario (o no es posible usarlo debido
				// a la dependencia faltante), elimínelo.
				eliminar this.get;
				regreso;
			}

			// Gancho necesario; redefínalo para que no se vuelva a ejecutar la prueba de soporte.
			return ( this.get = hookFn ).apply( this, argumentos );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	estilovacío = documento.createElement( "div").estilo,
	proveedorProps = {};

// Devolver una propiedad prefijada por el proveedor o indefinida
función proveedorPropName( nombre ) {

	// Comprobar los nombres prefijados de proveedores
	var capName = nombre[ 0 ].toUpperCase() + nombre.slice( 1 ),
		i = cssPrefixes.longitud;

	mientras yo-- ) {
		nombre = cssPrefixes[ i ] + capName;
		if (nombre en estilo vacío) {
			devolver nombre;
		}
	}
}

// Devuelve un jQuery.cssProps potencialmente asignado o una propiedad prefijada del proveedor
function finalPropName( nombre ) {
	var final = jQuery.cssProps[ nombre ] || proveedorProps[ nombre ];

	si ( final ) {
		retorno definitivo;
	}
	if (nombre en estilo vacío) {
		devolver nombre;
	}
	return propsproveedor[ nombre ] = nombrePropproveedor( nombre ) || nombre;
}


variable

	// Intercambiable si la visualización no es ninguna o comienza con una tabla
	// excepto "table", "table-cell" o "table-caption"
	// Consulte aquí los valores de visualización: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(ninguno|tabla(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = {posición: "absoluto", visibilidad: "oculto", pantalla: "bloque"},
	cssTransformación normal = {
		Espaciado de letras: "0",
		fuentePeso: "400"
	};

función establecerNumeroPositivo( _elemento, valor, restar ) {

	// Cualquier valor relativo (+/-) ya ha sido
	// normalizado en este punto
	var coincidencias = rcssNum.exec(valor);
	partidos de vuelta?

		// Protección contra "restar" indefinido, por ejemplo, cuando se usa como en cssHooks
		Math.max( 0, coincidencias[ 2 ] - ( restar || 0 ) ) + ( coincidencias[ 3 ] || "px" ) :
		valor;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, estilos, computedVal ) {
	var i = dimensión === "ancho" ? 1: 0,
		adicional = 0,
		delta = 0;

	// El ajuste puede no ser necesario
	if (box === (isBorderBox ? "borde" : "contenido" ) ) {
		devolver 0;
	}

	para ( ; yo < 4; yo += 2 ) {

		// Ambos modelos de caja excluyen el margen
		if ( caja === "margen" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// Si llegamos aquí con un cuadro de contenido, estamos buscando "relleno" o "borde" o "margen"
		if ( !isBorderBox ) {

			// Agregar relleno
			delta += jQuery.css( elem, "relleno" + cssExpand[ i ], true, estilos );

			// Para "borde" o "margen", agregar borde
			if ( caja !== "relleno" ) {
				delta += jQuery.css( elem, "borde" + cssExpand[ i ] + "Ancho", verdadero, estilos);

			// Pero aún manténgase al tanto de lo contrario
			} demás {
				extra += jQuery.css( elem, "borde" + cssExpand[ i ] + "Ancho", verdadero, estilos);
			}

		// Si llegamos aquí con un cuadro de borde (contenido + relleno + borde), estamos buscando "contenido" o
		// "relleno" o "margen"
		} demás {

			// Para "contenido", reste el relleno
			if (caja === "contenido" ) {
				delta -= jQuery.css( elem, "relleno" + cssExpand[ i ], true, estilos );
			}

			// Para "contenido" o "relleno", resta el borde
			if ( caja !== "margen" ) {
				delta -= jQuery.css( elem, "borde" + cssExpand[ i ] + "Ancho", verdadero, estilos);
			}
		}
	}

	// Tenga en cuenta el canalón de desplazamiento del cuadro de contenido positivo cuando se solicite al proporcionar el valor calculado
	if ( !isBorderBox && valor calculado >= 0 ) {

		// offsetWidth/offsetHeight es una suma redondeada de contenido, relleno, medianil de desplazamiento y borde
		// Suponiendo un margen de desplazamiento de enteros, restamos el resto y redondeamos hacia abajo
		delta += Math.max( 0, Math.ceil(
			elem[ "desplazamiento" + dimensión[ 0 ].toUpperCase() + dimensión.slice( 1 ) ] -
			valor calculado -
			delta -
			extra-
			0.5

		// Si se desconoce offsetWidth/offsetHeight, entonces no podemos determinar el canal de desplazamiento del cuadro de contenido
		// Usa un cero explícito para evitar NaN (gh-3964)
		) ) || 0;
	}

	delta de retorno;
}

función getWidthOrHeight( elemento, dimensión, extra ) {

	// Empezar con estilo calculado
	var estilos = getStyles( elem ),

		// Para evitar forzar un reflujo, solo obtenga boxSizing si lo necesitamos (gh-4322).
		// Cuadro de contenido falso hasta que sepamos que es necesario para conocer el valor real.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, estilos ) === "borde-box",
		valorEsBorderBox = esBorderBox,

		val = curCSS(elemento, dimensión, estilos),
		offsetProp = "desplazamiento" + dimensión[ 0 ].toUpperCase() + dimensión.slice( 1 );

	// Soporte: Firefox <=54
	// Devolver un valor confuso que no sea de píxel o fingir ignorancia, según corresponda.
	if (rnumnonpx.test(val)) {
		si (! adicional) {
			valor de retorno;
		}
		valor = "auto";
	}


	// Soporte: IE 9 - 11 solamente
	// Use offsetWidth/offsetHeight para cuando el tamaño de la caja no sea confiable.
	// En esos casos, se puede confiar en que el valor calculado sea border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Soporte: Internet Explorer 10 - 11+, Edge 15 - 18+
		// IE/Edge informa erróneamente `getComputedStyle` de las filas de la tabla con ancho/alto
		// establecido en CSS mientras que las propiedades `offset*` reportan valores correctos.
		// Curiosamente, en algunos casos, IE 9 no sufre este problema.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Regresar a offsetWidth/offsetHeight cuando el valor es "auto"
		// Esto sucede para elementos en línea sin una configuración explícita (gh-3571)
		valor === "auto" ||

		// Soporte: Android <= 4.1 - 4.3 solamente
		// También use offsetWidth/offsetHeight para dimensiones en línea mal informadas (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, estilos ) === "en línea") &&

		// Asegúrate de que el elemento esté visible y conectado
		elem.getClientRects().longitud) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Donde esté disponible, offsetWidth/offsetHeight dimensiones aproximadas del cuadro de borde.
		// Cuando no esté disponible (p. ej., SVG), asuma un tamaño de caja poco confiable e interprete el
		// valor recuperado como dimensión del cuadro de contenido.
		valueIsBorderBox = offsetProp in elem;
		if (valorEsBorderBox) {
			val = elemento[ compensaciónProp ];
		}
	}

	// Normalizar "" y auto
	val = parseFloat( val ) || 0;

	// Ajuste para el modelo de caja del elemento
	retorno (val +
		Ajuste del modelo de caja (
			elemento,
			dimensión,
			adicional || ( isBorderBox ? "borde": "contenido"),
			el valor es el cuadro de borde,
			estilos,

			// Proporcione el tamaño calculado actual para solicitar el cálculo del margen de desplazamiento (gh-3589)
			valor
		)
	) + "píxel";
}

jQuery.extender( {

	// Agregue ganchos de propiedad de estilo para anular el valor predeterminado
	// comportamiento de obtener y establecer una propiedad de estilo
	ganchos css: {
		opacidad: {
			obtener: función (elemento, calculado) {
				si ( calculado ) {

					// Siempre debemos recuperar un número de la opacidad
					var ret = curCSS( elem, "opacidad" );
					volver ret === "" ? "1" : retiro;
				}
			}
		}
	},

	// No agregue automáticamente "px" a estas propiedades posiblemente sin unidades
	número css: {
		"animationIterationCount": verdadero,
		"columnCount": cierto,
		"fillOpacity": verdadero,
		"flexGrow": cierto,
		"flexShrink": cierto,
		"fontWeight": cierto,
		"área de cuadrícula": cierto,
		"GridColumn": verdadero,
		"gridColumnEnd": verdadero,
		"gridColumnStart": verdadero,
		"gridRow": cierto,
		"gridRowEnd": verdadero,
		"gridRowStart": verdadero,
		"lineHeight": cierto,
		"opacidad": cierto,
		"orden": cierto,
		"huérfanos": cierto,
		"viudas": cierto,
		"zIndex": verdadero,
		"zoom": cierto
	},

	// Agregue propiedades cuyos nombres desea arreglar antes
	// establecer u obtener el valor
	cssProps: {},

	// Obtener y establecer la propiedad de estilo en un nodo DOM
	estilo: función (elemento, nombre, valor, extra) {

		// No establezca estilos en los nodos de texto y comentarios
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			regreso;
		}

		// Asegúrate de que estamos trabajando con el nombre correcto
		var ret, tipo, ganchos,
			origName = camelCase( nombre ),
			isCustomProp = rcustomProp.test( nombre ),
			estilo = elemento.estilo;

		// Asegúrate de que estamos trabajando con el nombre correcto. nosotros no
		// quiero consultar el valor si es una propiedad personalizada de CSS
		// ya que son definidos por el usuario.
		if ( !isPropiedadPersonalizada ) {
			nombre = finalPropName( origName );
		}

		// Se engancha a la versión con prefijo, luego a la versión sin prefijo
		ganchos = jQuery.cssHooks[ nombre ] || jQuery.cssHooks[ nombreOriginal ];

		// Comprobar si estamos configurando un valor
		if ( valor !== indefinido ) {
			tipo = tipo de valor;

			// Convertir "+=" o "-=" a números relativos (#7345)
			if ( tipo === "cadena" && ( ret = rcssNum.exec( valor ) ) && ret[ 1 ] ) {
				valor = ajustarCSS (elemento, nombre, ret);

				// Corrige el error #9237
				tipo = "numero";
			}

			// Asegúrese de que los valores nulo y NaN no estén establecidos (#7116)
			if ( valor == nulo || valor !== valor ) {
				regreso;
			}

			// Si se pasó un número, agregue la unidad (excepto para ciertas propiedades CSS)
			// La verificación isCustomProp se puede eliminar en jQuery 4.0 cuando solo agregamos automáticamente
			// "px" a unos pocos valores codificados.
			if ( tipo === "número" && !isCustomProp ) {
				valor += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// los accesorios de fondo-* afectan los valores del clon original
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				estilo[ nombre ] = "heredar";
			}

			// Si se proporcionó un enlace, use ese valor; de lo contrario, simplemente establezca el valor especificado
			if ( !ganchos || !( "establecer" en ganchos ) ||
				( valor = ganchos.set( elemento, valor, extra ) ) !== indefinido ) {

				if (esPropiedadPersonalizada) {
					estilo.setProperty(nombre, valor);
				} demás {
					estilo[ nombre ] = valor;
				}
			}

		} demás {

			// Si se proporcionó un gancho, obtenga el valor no calculado de allí
			if ( ganchos && "obtener" en ganchos &&
				( ret = hooks.get( elem, false, extra ) ) !== indefinido ) {

				volver ret;
			}

			// De lo contrario, obtenga el valor del objeto de estilo
			devolver estilo[ nombre ];
		}
	},

	css: función (elemento, nombre, extra, estilos) {
		var val, num, ganchos,
			origName = camelCase( nombre ),
			isCustomProp = rcustomProp.test( nombre );

		// Asegúrate de que estamos trabajando con el nombre correcto. nosotros no
		// quiero modificar el valor si es una propiedad personalizada de CSS
		// ya que son definidos por el usuario.
		if ( !isPropiedadPersonalizada ) {
			nombre = finalPropName( origName );
		}

		// Pruebe el nombre con prefijo seguido del nombre sin prefijo
		ganchos = jQuery.cssHooks[ nombre ] || jQuery.cssHooks[ nombreOriginal ];

		// Si se proporcionó un gancho, obtenga el valor calculado desde allí
		if (ganchos && "obtener" en ganchos) {
			val = hooks.get( elem, true, extra );
		}

		// De lo contrario, si existe una forma de obtener el valor calculado, utilícela
		si (val === indefinido) {
			val = curCSS( elemento, nombre, estilos );
		}

		// Convertir "normal" a valor calculado
		if (val === "normal" && nombre en cssNormalTransform) {
			val = cssNormalTransform[nombre];
		}

		// Hacer numérico si es forzado o se proporcionó un calificador y val parece numérico
		si ( extra === "" || extra ) {
			num = parseFloat(val);
			devuelve extra === verdadero || esFinito(num)? número || 0 : valor;
		}

		valor de retorno;
	}
});

jQuery.each( [ "alto", "ancho" ], función( _i, dimensión ) {
	jQuery.cssHooks[ dimensión ] = {
		obtener: función (elemento, computado, extra) {
			si ( calculado ) {

				// Ciertos elementos pueden tener información de dimensión si los mostramos de forma invisible
				// pero debe tener un estilo de visualización actual que se beneficiaría
				devuelve rdisplayswap.test( jQuery.css( elem, "display") ) &&

					// Soporte: Safari 8+
					// Las columnas de la tabla en Safari tienen offsetWidth y cero distintos de cero
					// getBoundingClientRect().width a menos que se cambie la visualización.
					// Soporte: IE <=11 solamente
					// Ejecutar getBoundingClientRect en un nodo desconectado
					// en IE arroja un error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elemento, dimensión, extra );
						}):
						getWidthOrHeight( elemento, dimensión, extra );
			}
		},

		conjunto: función (elemento, valor, extra) {
			partidos de var,
				estilos = getStyles( elemento ),

				// Solo lea estilos.posición si la prueba tiene posibilidades de fallar
				// para evitar forzar un reflujo.
				scrollboxSizeBuggy = !soporte.scrollboxSize() &&
					estilos.posición === "absoluto",

				// Para evitar forzar un reflujo, solo obtenga boxSizing si lo necesitamos (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, estilos ) === "borde-box",
				restar = extra?
					Ajuste del modelo de caja (
						elemento,
						dimensión,
						extra,
						esBorderBox,
						estilos
					) :
					0;

			// Tenga en cuenta las dimensiones del cuadro de borde no confiables comparando el desplazamiento* con el calculado y
			// fingir un cuadro de contenido para obtener borde y relleno (gh-3699)
			if ( esBorderBox && scrollboxSizeBuggy ) {
				restar -= Math.ceil(
					elem[ "desplazamiento" + dimensión[ 0 ].toUpperCase() + dimensión.slice( 1 ) ] -
					parseFloat (estilos [dimensión]) -
					ajuste de modelo de caja (elemento, dimensión, "borde", falso, estilos) -
					0.5
				);
			}

			// Convertir a píxeles si se necesita un ajuste de valor
			if ( restar && (coincidencias = rcssNum.exec( valor ) ) &&
				(coincide con [3] || "px" ) !== "px" ) {

				elem.estilo[ dimensión ] = valor;
				valor = jQuery.css( elemento, dimensión );
			}

			return setPositiveNumber( elem, value, rest );
		}
	};
});

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	función (elemento, calculado) {
		si ( calculado ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().izquierda -
					swap( elemento, { margen izquierdo: 0 }, función() {
						devuelve elem.getBoundingClientRect().left;
					} )
				) + "píxel";
		}
	}
);

// Estos ganchos son usados ​​por animate para expandir propiedades
jQuery.each( {
	margen: "",
	relleno: "",
	ancho del borde"
}, función (prefijo, sufijo) {
	jQuery.cssHooks[ prefijo + sufijo ] = {
		expandir: función (valor) {
			var i = 0,
				expandido = {},

				// Asume un solo número si no una cadena
				partes = tipo de valor === "cadena" ? valor.split( " " ) : [ valor ];

			para ( ; yo < 4; yo++ ) {
				expandido[ prefijo + cssExpand[ i ] + sufijo ] =
					partes[ yo ] || partes[ i - 2 ] || partes[ 0 ];
			}

			volver ampliado;
		}
	};

	if ( prefijo !== "margen" ) {
		jQuery.cssHooks[ prefijo + sufijo ].set = setPositiveNumber;
	}
});

jQuery.fn.extender( {
	css: función (nombre, valor) {
		volver acceso (esto, función (elemento, nombre, valor) {
			var estilos, len,
				mapa = {},
				yo = 0;

			if (Array.isArray(nombre)) {
				estilos = getStyles( elem );
				len = nombre.longitud;

				para ( ; i < len; i++ ) {
					map[ nombre[ i ] ] = jQuery.css( elem, nombre[ i ], false, estilos );
				}

				volver mapa;
			}

			valor de retorno !== indefinido ?
				jQuery.style (elemento, nombre, valor):
				jQuery.css( elemento, nombre );
		}, nombre, valor, argumentos.longitud > 1 );
	}
});


function Tween( elem, opciones, prop, end, easing ) {
	devuelve el nuevo Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Interpolación;

Interpolación.prototipo = {
	constructor: interpolación,
	init: function( elem, opciones, prop, end, easing, unit ) {
		este.elemento = elemento;
		this.prop = prop;
		this.easing = facilitando || jQuery.easing._default;
		esto.opciones = opciones;
		this.start = this.now = this.cur();
		este.fin = fin;
		esta.unidad = unidad || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: función () {
		var hooks = Tween.propHooks[ this.prop ];

		volver ganchos && ganchos.get ?
			ganchos.obtener(esto):
			Tween.propHooks._default.get(esto);
	},
	ejecutar: función (porcentaje) {
		var aliviado,
			ganchos = Tween.propHooks[ this.prop ];

		if (esta.opciones.duración) {
			this.pos = aliviado = jQuery.easing[ this.easing ](
				porcentaje, esta.opciones.duración * porcentaje, 0, 1, esta.opciones.duración
			);
		} demás {
			this.pos = facilitado = porcentaje;
		}
		esto.ahora = ( este.fin - este.comienzo ) * facilitado + este.comienzo;

		if (este.opciones.paso) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( ganchos && ganchos.set ) {
			ganchos.set( esto );
		} demás {
			Tween.propHooks._default.set( esto );
		}
		devolver esto;
	}
};

Tween.prototipo.init.prototipo = Tween.prototipo;

Interpolación.propHooks = {
	_defecto: {
		obtener: función (interpolación) {
			var resultado;

			// Usa una propiedad en el elemento directamente cuando no es un elemento DOM,
			// o cuando no existe ninguna propiedad de estilo coincidente.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return interpolación.elemento[ interpolación.prop ];
			}

			// Pasar una cadena vacía como tercer parámetro a .css automáticamente
			// intenta un parseFloat y recurre a una cadena si el análisis falla.
			// Los valores simples como "10px" se analizan en Float;
			// los valores complejos como "rotate(1rad)" se devuelven tal cual.
			resultado = jQuery.css( tween.elem, tween.prop, "" );

			// Las cadenas vacías, nulas, indefinidas y "automáticas" se convierten a 0.
			volver !resultado || resultado === "auto" ? 0 : resultado;
		},
		conjunto: función (entre) {

			// Use el gancho de paso para la compatibilidad con la espalda.
			// Usa cssHook si está ahí.
			// Use .style si está disponible y use propiedades sin formato donde estén disponibles.
			if (jQuery.fx.step[interpolación.prop]) {
				jQuery.fx.step[ interpolación.prop ]( interpolación );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ interpolación.prop ] ||
					interpolación.elem.estilo[ finalPropName( interpolación.prop ) ] != null ) ) {
				jQuery.style( interpolación.elemento, interpolación.prop, interpolación.ahora + interpolación.unidad );
			} demás {
				interpolación.elemento[ interpolación.prop ] = interpolación.ahora;
			}
		}
	}
};

// Soporte: IE <=9 solamente
// Enfoque basado en pánico para configurar cosas en nodos desconectados
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	conjunto: función (entre) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			interpolación.elemento[ interpolación.prop ] = interpolación.ahora;
		}
	}
};

jQuery.facilitación = {
	lineal: función( p ) {
		devolver p;
	},
	columpio: función( p ) {
		devuelve 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_predeterminado: "oscilación"
};

jQuery.fx = Tween.prototipo.init;

// Compatibilidad con la espalda <1.8 punto de extensión
jQuery.fx.paso = {};




variable
	fxAhora, en curso,
	rfxtypes = /^(?:alternar|mostrar|ocultar)$/,
	rrun = /ganchosdecola$/;

programación de funciones () {
	si (en progreso) {
		if (document.hidden === false && window.requestAnimationFrame) {
			window.requestAnimationFrame(planificación);
		} demás {
			ventana.setTimeout( horario, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Las animaciones creadas sincrónicamente se ejecutarán sincrónicamente
función crearFxAhora() {
	ventana.setTimeout( function() {
		fxAhora = indefinido;
	});
	return ( fxNow = Fecha.ahora() );
}

// Generar parámetros para crear una animación estándar
función genFx(tipo, incluirAncho) {
	var que,
		yo = 0,
		atributos = { altura: tipo };

	// Si incluimos el ancho, el valor del paso es 1 para hacer todos los valores cssExpand,
	// de lo contrario, el valor del paso es 2 para omitir Izquierda y Derecha
	incluirAncho = incluirAncho ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		cual = cssExpand[ i ];
		atributos[ "margen" + cual ] = atributos[ "relleno" + cual ] = tipo;
	}

	si (incluye ancho) {
		attrs.opacity = attrs.width = tipo;
	}

	atributos de retorno;
}

function createTween( valor, prop, animación ) {
	interpolación var,
		colección = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		índice = 0,
		longitud = colección. longitud;
	for ( ; índice < longitud; índice++ ) {
		if ((interpolación = colección[índice].llamada(animación, apoyo, valor)))) {

			// Terminamos con esta propiedad
			interpolación de retorno;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "ancho" en accesorios || "altura" en accesorios,
		anim = esto,
		origen = {},
		estilo = elem.estilo,
		oculto = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Las animaciones de salto de cola secuestran los ganchos fx
	if ( !opts.cola ) {
		ganchos = jQuery._queueHooks( elem, "fx" );
		if (anzuelos.sin cola == nulo) {
			ganchos.sin cola = 0;
			fuegoviejo = ganchos.vacío.fuego;
			ganchos.vacío.fuego = función() {
				if ( !hooks.unqueued ) {
					viejofuego();
				}
			};
		}
		ganchos.sin cola++;

		anim.siempre( función() {

			// Asegúrese de que se llame al controlador completo antes de que se complete
			anim.siempre( función() {
				ganchos.sin cola--;
				if ( !jQuery.queue( elem, "fx") ).longitud ) {
					ganchos.vacío.fuego();
				}
			});
		});
	}

	// Detectar animaciones mostrar/ocultar
	para (accesorio en accesorios) {
		valor = apoyos[ apoyo ];
		if (rfxtypes.test(valor)) {
			eliminar accesorios[ prop ];
			alternar = alternar || valor === "alternar";
			if ( valor === ( oculto ? "ocultar" : "mostrar" ) ) {

				// Pretende estar oculto si esto es un "espectáculo" y
				// todavía hay datos de un mostrar/ocultar detenido
				if (value === "show" && dataShow && dataShow[ prop ] !== indefinido ) {
					oculto = verdadero;

				// Ignorar todos los demás datos mostrar/ocultar no operativos
				} demás {
					Seguir;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elemento, prop );
		}
	}

	// Rescatar si esto no es operativo como .hide().hide()
	propTween = !jQuery.isEmptyObject( accesorios );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		regreso;
	}

	// Restringir los estilos de "desbordamiento" y "visualización" durante las animaciones de cuadro
	if (isBox && elem.nodeType === 1) {

		// Soporte: IE <= 9 - 11, Borde 12 - 15
		// Registra los 3 atributos de desbordamiento porque IE no infiere la taquigrafía
		// de overflowX y overflowY con valores idénticos y Edge solo refleja
		// el valor overflowX allí.
		opts.overflow = [ estilo.desbordamiento, estilo.desbordamientoX, estilo.desbordamientoY ];

		// Identifique un tipo de visualización, prefiriendo mostrar/ocultar datos antiguos sobre la cascada de CSS
		restoreDisplay = dataShow && dataShow.display;
		if (restoreDisplay == null) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		mostrar = jQuery.css( elem, "mostrar" );
		si ( mostrar === "ninguno" ) {
			si (restaurar pantalla) {
				pantalla = restaurar pantalla;
			} demás {

				// Obtener valor(es) no vacío(s) forzando temporalmente la visibilidad
				mostrarOcultar([elemento], verdadero);
				restaurarPantalla = elemento.estilo.pantalla || restaurarPantalla;
				mostrar = jQuery.css( elem, "mostrar" );
				mostrarOcultar([elemento]);
			}
		}

		// Animar elementos en línea como bloque en línea
		if (display === "en línea" || display === "bloque en línea" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "ninguno" ) {

				// Restaurar el valor de visualización original al final de las animaciones mostrar/ocultar puras
				if ( ! propTween ) {
					anim.hecho( función() {
						estilo.pantalla = restaurarPantalla;
					});
					if (restoreDisplay == null) {
						pantalla = estilo.pantalla;
						restoreDisplay = mostrar === "ninguno" ? "" : monitor;
					}
				}
				style.display = "bloque en línea";
			}
		}
	}

	if (opciones.desbordamiento) {
		estilo.overflow = "oculto";
		anim.siempre( función() {
			estilo.overflow = opciones.overflow[ 0 ];
			estilo.overflowX = opts.overflow[ 1 ];
			estilo.overflowY = opts.overflow[ 2 ];
		});
	}

	// Implementar animaciones mostrar/ocultar
	propTween = falso;
	para (accesorio en orig) {

		// Configuración general para mostrar/ocultar la animación de este elemento
		if ( ! propTween ) {
			si (muestra de datos) {
				if ( "oculto" en dataShow ) {
					oculto = dataShow.hidden;
				}
			} demás {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Almacenar oculto/visible para alternar así que `.stop().toggle()` "revierte"
			si (alternar) {
				dataShow.hidden = !oculto;
			}

			// Mostrar elementos antes de animarlos
			si (oculto) {
				mostrarOcultar([elemento], verdadero);
			}

			/* eslint-disable no-loop-func */

			anim.hecho( función() {

			/* eslint-habilitar función sin bucle */

				// El paso final de una animación "ocultar" en realidad es ocultar el elemento
				si (! oculto) {
					mostrarOcultar([elemento]);
				}
				dataPriv.remove( elem, "fxshow" );
				para (accesorio en orig) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
		}

		// Configuración por propiedad
		propTween = createTween( oculto ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop en dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			si (oculto) {
				propTween.end = propTween.start;
				propTween.inicio = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	índice var, nombre, aceleración, valor, ganchos;

	// camelCase, specialEasing y expand cssHook pass
	para (índice en apoyos) {
		nombre = camelCase( índice );
		flexibilización = flexibilización especial[ nombre ];
		valor = props[índice];
		if (Array.isArray(valor)) {
			aceleración = valor [ 1 ];
			valor = props[ índice ] = valor[ 0 ];
		}

		if ( índice !== nombre ) {
			props[ nombre ] = valor;
			eliminar accesorios [índice];
		}

		ganchos = jQuery.cssHooks[ nombre ];
		if (ganchos && "expandir" en ganchos) {
			valor = anzuelos.expand(valor);
			eliminar accesorios [nombre];

			// No del todo $.extend, esto no sobrescribirá las claves existentes.
			// Reutilizando 'index' porque tenemos el "nombre" correcto
			para (índice en valor) {
				if (!(índice en props)) {
					props[índice] = valor[índice];
					specialEasing[ índice ] = aceleración;
				}
			}
		} demás {
			specialEasing[ nombre ] = aceleración;
		}
	}
}

function Animación (elemento, propiedades, opciones) {
	var resultado,
		detenido,
		índice = 0,
		longitud = Animación.prefiltros.longitud,
		diferido = jQuery.Deferred().always( function() {

			// No hacer coincidir el elemento en el selector animado
			eliminar tick.elem;
		} ),
		tic = función () {
			si (parado) {
				falso retorno;
			}
			var horaActual = fxAhora || crearFxAhora(),
				restante = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Soporte: solo Android 2.3
				// El error de bloqueo arcaico no nos permitirá usar `1 - ( 0.5 || 0 )` (#12497)
				temp = restante / animación.duración || 0,
				porcentaje = 1 - temperatura,
				índice = 0,
				longitud = animación.interpolaciones.longitud;

			for ( ; índice < longitud; índice++ ) {
				animation.tweens[ índice ].run( porcentaje );
			}

			deferred.notifyWith( elem, [animación, porcentaje, restante]);

			// Si hay más que hacer, cede
			if (porcentaje < 1 && longitud) {
				devolución restante;
			}

			// Si se trata de una animación vacía, sintetice una notificación de progreso final
			si (!longitud) {
				deferred.notifyWith( elem, [animación, 1, 0]);
			}

			// Resolver la animación e informar su conclusión
			diferido.resolveWith( elem, [animación]);
			falso retorno;
		},
		animación = diferida.promesa( {
			elemento: elemento,
			accesorios: jQuery.extend ({}, propiedades),
			opciones: jQuery.extend (verdadero, {
				aceleración especial: {},
				aceleración: jQuery.easing._default
			}, opciones),
			Propiedades originales: propiedades,
			Opciones originales: opciones,
			hora de inicio: fxNow || crearFxAhora(),
			duración: opciones.duración,
			preadolescentes: [],
			createTween: función (accesorio, fin) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animación.opts.easing );
				animación.interpolaciones.push(interpolación);
				interpolación de retorno;
			},
			detener: función (ir al final) {
				índice var = 0,

					// Si vamos hasta el final, queremos ejecutar todas las interpolaciones
					// de lo contrario nos saltamos esta parte
					longitud = ir al final ? animación.interpolaciones.longitud: 0;
				si (parado) {
					devolver esto;
				}
				detenido = verdadero;
				for ( ; índice < longitud; índice++ ) {
					animación.interpolaciones[índice].ejecutar(1);
				}

				// Resolver cuando jugamos el último cuadro; de lo contrario, rechazar
				si (ir al final) {
					deferred.notifyWith( elem, [animación, 1, 0]);
					diferido.resolveWith( elem, [animación, gotoEnd]);
				} demás {
					deferred.rejectWith( elem, [animación, gotoEnd]);
				}
				devolver esto;
			}
		} ),
		props = animacion.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; índice < longitud; índice++ ) {
		resultado = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		si ( resultado ) {
			if (esFuncion(resultado.detener)) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					resultado.stop.bind(resultado);
			}
			resultado devuelto;
		}
	}

	jQuery.map(accesorios, createTween, animación);

	if (isFunction(animation.opts.start)) {
		animacion.opts.start.call( elemento, animacion );
	}

	// Adjuntar devoluciones de llamada de opciones
	animación
		.progress( animación.opts.progress )
		.hecho( animación.opts.hecho, animación.opts.completa )
		.fail( animación.opts.fail )
		.siempre (animación.opts.siempre);

	jQuery.fx.temporizador(
		jQuery.extend( marca, {
			elemento: elemento,
			anim: animación,
			cola: animación.opts.cola
		} )
	);

	animación de retorno;
}

jQuery.Animación = jQuery.extend( Animación, {

	interpolaciones: {
		"*": [función( prop, valor ) {
			var tween = this.createTween( prop, value );
			ajustarCSS(interpolación.elem, prop, rcssNum.exec(valor), interpolación);
			interpolación de retorno;
		} ]
	},

	tweener: función (accesorios, devolución de llamada) {
		if (esFunción(accesorios)) {
			devolución de llamada = accesorios;
			apoyos = [ "*" ];
		} demás {
			props = props.match( rnothtmlwhite );
		}

		apoyo var,
			índice = 0,
			longitud = props.longitud;

		for ( ; índice < longitud; índice++ ) {
			prop = accesorios[índice];
			Animación.interpolaciones[ prop ] = Animación.interpolaciones[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefiltros: [ defaultPrefilter ],

	prefiltro: función (devolución de llamada, anteponer) {
		si (anteponer) {
			Animation.prefilters.unshift (devolución de llamada);
		} demás {
			Animation.prefilters.push (devolución de llamada);
		}
	}
});

jQuery.speed = función (velocidad, aceleración, fn) {
	var opt = velocidad && tipo de velocidad === "objeto" ? jQuery.extend ({}, velocidad): {
		completo: fn || !fn && relajación ||
			esFunción(velocidad) && velocidad,
		duración: velocidad,
		relajación: fn && relajación || relajación && !isFunction( relajación ) && relajación
	};

	// Ir al estado final si los efectos están desactivados
	si (jQuery.fx.off) {
		opt.duración = 0;

	} demás {
		if ( typeof opt.duration !== "number" ) {
			if (opt.duration en jQuery.fx.speeds) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} demás {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalizar opt.queue - verdadero/indefinido/nulo -> "fx"
	if ( opt.cola == nulo || opt.cola === verdadero ) {
		opt.cola = "fx";
	}

	// Cola
	opt.antiguo = opt.completo;

	opt.completo = función () {
		if (isFunction(opt.old)) {
			opt.old.call(esto);
		}

		if (opt.cola) {
			jQuery.dequeue( esto, opt.queue );
		}
	};

	volver optar;
};

jQuery.fn.extender( {
	fadeTo: función (velocidad, a, aceleración, devolución de llamada) {

		// Mostrar los elementos ocultos después de establecer la opacidad en 0
		devuelve este filtro (está oculto dentro del árbol). css ("opacidad", 0). mostrar ()

			// Animar al valor especificado
			.end().animate( { opacidad: a }, velocidad, aceleración, devolución de llamada);
	},
	animar: función (accesorio, velocidad, aceleración, devolución de llamada) {
		var vacío = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed (velocidad, aceleración, devolución de llamada),
			hacerAnimación = función() {

				// Operar en una copia de prop para que no se pierda la aceleración por propiedad
				var anim = Animación (esto, jQuery.extend ({}, prop), optall);

				// Animaciones vacías, o el acabado se resuelve inmediatamente
				if ( vacío || dataPriv.get( esto, "terminar") ) {
					anim.stop(verdadero);
				}
			};
			doAnimation.finish = doAnimation;

		volver vacío || optall.cola === falso ?
			this.each( doAnimation ) :
			this.queue(optall.queue, doAnimation);
	},
	detener: función (tipo, clearQueue, gotoEnd) {
		var stopQueue = función (anzuelos) {
			var stop = ganchos.stop;
			eliminar ganchos.stop;
			detener( ir aFin );
		};

		if ( tipo de tipo !== "cadena" ) {
			gotoEnd = clearQueue;
			clearQueue = tipo;
			tipo = indefinido;
		}
		si (borrar cola) {
			this.queue( tipo || "fx", [] );
		}

		devuelve esto. cada uno (función () {
			var dequeue = verdadero,
				índice = tipo != nulo && tipo + "queueHooks",
				temporizadores = jQuery.temporizadores,
				datos = dataPriv.get(esto);

			si ( índice ) {
				if (datos[ índice ] && datos[ índice ].stop ) {
					stopQueue (datos [índice]);
				}
			} demás {
				para (índice en datos) {
					if (datos[índice] && datos[índice].stop && rrun.test(índice)) {
						stopQueue (datos [índice]);
					}
				}
			}

			for ( índice = temporizadores.longitud; índice--; ) {
				if (temporizadores[ índice ].elem === este &&
					( tipo == nulo || temporizadores [ índice ] .cola === tipo ) ) {

					temporizadores[ índice ].anim.stop( gotoEnd );
					quitar cola = falso;
					temporizadores. empalme (índice, 1);
				}
			}

			// Iniciar el siguiente en la cola si el último paso no fue forzado.
			// Los temporizadores llamarán actualmente a sus devoluciones de llamada completas, que
			// se quitará de la cola, pero solo si fueran gotoEnd.
			if (quitar la cola || !gotoEnd) {
				jQuery.dequeue( esto, tipo );
			}
		});
	},
	terminar: función (tipo) {
		si ( tipo !== falso ) {
			tipo = tipo || "fx";
		}
		devuelve esto. cada uno (función () {
			índice var,
				datos = dataPriv.get( esto ),
				cola = datos[ tipo + "cola" ],
				ganchos = datos[ tipo + "queueHooks" ],
				temporizadores = jQuery.temporizadores,
				longitud = cola? cola.longitud: 0;

			// Habilitar bandera de finalización en datos privados
			datos.terminar = verdadero;

			// Vaciar la cola primero
			jQuery.queue( esto, tipo, [] );

			if (anzuelos && anzuelos.stop) {
				hooks.stop.call( esto, verdadero );
			}

			// Busque cualquier animación activa y termínela
			for ( índice = temporizadores.longitud; índice--; ) {
				if (temporizadores[índice].elem === este && temporizadores[índice].cola === tipo) {
					temporizadores[índice].anim.stop(verdadero);
					temporizadores. empalme (índice, 1);
				}
			}

			// Busque animaciones en la cola anterior y termínelas
			for (índice = 0; índice <longitud; índice++) {
				if (cola[índice] && cola[índice].finish) {
					cola[ índice ].finish.call( esto );
				}
			}

			// Desactivar la bandera de llegada
			eliminar datos.finalizar;
		});
	}
});

jQuery.each( [ "alternar", "mostrar", "ocultar" ], función( _i, nombre ) {
	var cssFn = jQuery.fn[ nombre ];
	jQuery.fn[ nombre ] = función (velocidad, aceleración, devolución de llamada) {
		velocidad de retorno == nulo || tipo de velocidad === "booleano" ?
			cssFn.apply (esto, argumentos):
			this.animate (genFx (nombre, verdadero), velocidad, aceleración, devolución de llamada);
	};
});

// Genera accesos directos para animaciones personalizadas
jQuery.each( {
	deslizar hacia abajo: genFx ("mostrar"),
	deslizar hacia arriba: genFx ("ocultar"),
	slideToggle: genFx( "alternar"),
	fadeIn: {opacidad: "mostrar"},
	desvanecimiento: {opacidad: "ocultar"},
	fadeToggle: { opacidad: "alternar" }
}, función (nombre, accesorios) {
	jQuery.fn[ nombre ] = función (velocidad, aceleración, devolución de llamada) {
		devuelve this.animate (accesorios, velocidad, aceleración, devolución de llamada);
	};
});

jQuery.temporizadores = [];
jQuery.fx.tick = función() {
	temporizador variable,
		yo = 0,
		temporizadores = jQuery.temporizadores;

	fxNow = Fecha.ahora();

	for ( ; i < timers.length; i++ ) {
		temporizador = temporizadores[ i ];

		// Ejecute el temporizador y elimínelo de forma segura cuando termine (permitiendo la eliminación externa)
		if ( !temporizador() && temporizadores[ i ] === temporizador ) {
			temporizadores.empalme( i--, 1 );
		}
	}

	if (!temporizadores.longitud) {
		jQuery.fx.stop();
	}
	fxAhora = indefinido;
};

jQuery.fx.timer = función (temporizador) {
	jQuery.timers.push(temporizador);
	jQuery.fx.start();
};

jQuery.fx.intervalo = 13;
jQuery.fx.start = función() {
	si (en progreso) {
		regreso;
	}

	en progreso = verdadero;
	calendario();
};

jQuery.fx.stop = función () {
	en progreso = nulo;
};

jQuery.fx.velocidades = {
	lento: 600,
	rápido: 200,

	// Velocidad por defecto
	_predeterminado: 400
};


// Basado en el complemento de Clint Helfers, con permiso.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = función (tiempo, tipo) {
	tiempo = jQuery.fx? jQuery.fx.velocidades[ tiempo ] || tiempo tiempo;
	tipo = tipo || "fx";

	devuelve esto. cola (tipo, función (siguiente, ganchos) {
		var timeout = window.setTimeout(siguiente, tiempo);
		ganchos.stop = function() {
			ventana.clearTimeout(tiempo de espera);
		};
	});
};


( función() {
	var entrada = documento.createElement("entrada"),
		seleccionar = documento.createElement("seleccionar"),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "casilla de verificación";

	// Soporte: Android <= 4.3 solamente
	// El valor predeterminado para una casilla de verificación debe ser "on"
	support.checkOn = input.value !== "";

	// Soporte: IE <=11 solamente
	// Debe acceder a selectedIndex para seleccionar las opciones predeterminadas
	soporte.optSelected = opt.seleccionado;

	// Soporte: IE <=11 solamente
	// Una entrada pierde su valor después de convertirse en una radio
	entrada = documento.createElement("entrada");
	entrada.valor = "t";
	entrada.tipo = "radio";
	soporte.radioValue = input.value === "t";
} )();


gancho de bool var,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extender( {
	atributo: función (nombre, valor) {
		acceso de retorno (esto, jQuery.attr, nombre, valor, argumentos.longitud > 1);
	},

	removeAttr: función (nombre) {
		devuelve esto. cada uno (función () {
			jQuery.removeAttr(esto, nombre);
		});
	}
});

jQuery.extender( {
	atributo: función (elemento, nombre, valor) {
		var ret, ganchos,
			nType = elem.nodeType;

		// No obtener/establecer atributos en los nodos de texto, comentario y atributo
		if ( nTipo === 3 || nTipo === 8 || nTipo === 2 ) {
			regreso;
		}

		// Regreso a prop cuando los atributos no son compatibles
		if ( typeof elem.getAttribute === "indefinido" ) {
			devuelve jQuery.prop (elemento, nombre, valor);
		}

		// Los ganchos de atributos están determinados por la versión en minúsculas
		// Agarra el gancho necesario si se define uno
		if ( nType !== 1 || !jQuery.isXMLDoc( elemento ) ) {
			ganchos = jQuery.attrHooks[ nombre.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( nombre ) ? boolHook : indefinido );
		}

		if ( valor !== indefinido ) {
			si ( valor === nulo ) {
				jQuery.removeAttr( elemento, nombre );
				regreso;
			}

			if ( ganchos && "establecer" en ganchos &&
				( ret = hooks.set( elemento, valor, nombre ) ) !== indefinido ) {
				volver ret;
			}

			elem.setAttribute(nombre, valor + "");
			valor de retorno;
		}

		if ( ganchos && "obtener" en ganchos && ( ret = ganchos.obtener( elemento, nombre ) ) !== nulo ) {
			volver ret;
		}

		ret = jQuery.find.attr( elemento, nombre );

		// Los atributos inexistentes devuelven nulo, normalizamos a indefinido
		volver ret == nulo? indefinido: ret;
	},

	ganchos de atributos: {
		escribe: {
			conjunto: función (elemento, valor) {
				if ( !support.radioValue && valor === "radio" &&
					nodeName( elemento, "entrada" ) ) {
					var val = elem.value;
					elem.setAttribute("tipo", valor);
					si (valor) {
						elem.valor = val;
					}
					valor de retorno;
				}
			}
		}
	},

	removeAttr: función (elemento, valor) {
		nombre variable,
			yo = 0,

			// Los nombres de los atributos pueden contener caracteres de espacio en blanco que no sean HTML
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = valor && valor.match( rnothtmlwhite );

		if (atributos && elem.nodeType === 1) {
			while ( ( nombre = nombresatributos[ i++ ] ) ) {
				elem.removeAttribute(nombre);
			}
		}
	}
});

// Ganchos para atributos booleanos
gancho bool = {
	conjunto: función (elemento, valor, nombre) {
		si ( valor === falso ) {

			// Eliminar atributos booleanos cuando se establece en falso
			jQuery.removeAttr( elemento, nombre );
		} demás {
			elem.setAttribute( nombre, nombre );
		}
		devolver nombre;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), función( _i, nombre ) {
	var getter = attrHandle[ nombre ] || jQuery.find.attr;

	attrHandle[ nombre ] = función( elemento, nombre, esXML ) {
		var ret manejar,
			minúsculas = nombre.toLowerCase();

		si (! es XML) {

			// Evite un bucle infinito eliminando temporalmente esta función del getter
			handle = atrHandle[ nombre en minúsculas ];
			attrHandle[ nombre en minúsculas ] = ret;
			ret = getter( elemento, nombre, isXML ) != null ?
				nombre en minúsculas:
				nulo;
			attrHandle[ nombre en minúsculas ] = identificador;
		}
		volver ret;
	};
});




var rfocusable = /^(?:entrada|seleccionar|área de texto|botón)$/i,
	rclickable = /^(?:a|área)$/i;

jQuery.fn.extender( {
	prop: función (nombre, valor) {
		acceso de retorno (esto, jQuery.prop, nombre, valor, argumentos.longitud > 1);
	},

	removeProp: función (nombre) {
		devuelve esto. cada uno (función () {
			elimine este [ jQuery.propFix [ nombre ] || nombre ];
		});
	}
});

jQuery.extender( {
	prop: función (elemento, nombre, valor) {
		var ret, ganchos,
			nType = elem.nodeType;

		// No obtener/establecer propiedades en los nodos de texto, comentario y atributo
		if ( nTipo === 3 || nTipo === 8 || nTipo === 2 ) {
			regreso;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elemento ) ) {

			// Corregir nombre y adjuntar ganchos
			nombre = jQuery.propFix[ nombre ] || nombre;
			ganchos = jQuery.propHooks[ nombre ];
		}

		if ( valor !== indefinido ) {
			if ( ganchos && "establecer" en ganchos &&
				( ret = hooks.set( elemento, valor, nombre ) ) !== indefinido ) {
				volver ret;
			}

			return ( elemento[ nombre ] = valor );
		}

		if ( ganchos && "obtener" en ganchos && ( ret = ganchos.obtener( elemento, nombre ) ) !== nulo ) {
			volver ret;
		}

		return elemento[nombre];
	},

	propHooks: {
		índice de tabulación: {
			obtener: función (elemento) {

				// Soporte: IE <=9 - 11 solamente
				// elem.tabIndex no siempre devuelve el
				// valor correcto cuando no se ha establecido explícitamente
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Usa la recuperación de atributos apropiada (#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				si (índice de tabulación) {
					volver parseInt(tabindex, 10);
				}

				Si (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					devolver 0;
				}

				devolver -1;
			}
		}
	},

	propFix: {
		"para": "htmlPara",
		"clase": "nombre de clase"
	}
});

// Soporte: IE <=11 solamente
// Accediendo a la propiedad de índice seleccionado
// obliga al navegador a respetar la configuración seleccionada
// en la opción
// El getter asegura que se seleccione una opción predeterminada
// cuando en un optgroup
// la regla eslint "no-unused-expressions" está deshabilitada para este código
// ya que considera tales accesiones noop
if ( !soporte.optSeleccionado ) {
	jQuery.propHooks.seleccionado = {
		obtener: función (elemento) {

			/* eslint sin expresiones no utilizadas: "off" */

			var padre = elem.parentNode;
			if ( padre && padre.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			devolver nulo;
		},
		conjunto: función (elemento) {

			/* eslint sin expresiones no utilizadas: "off" */

			var padre = elem.parentNode;
			si (padre) {
				parent.selectedIndex;

				if (padre.parentNode) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"índice de tabulación",
	"solo lectura",
	"longitud máxima",
	"espacio entre celdas",
	"relleno celular",
	"intervalo de filas",
	"colSpan",
	"usarMapa",
	"Frontera del marco",
	"contenido Editable"
], función() {
	jQuery.propFix[ esto.toLowerCase() ] = esto;
});




	// Eliminar y colapsar los espacios en blanco de acuerdo con las especificaciones de HTML
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	función quitar y colapsar (valor) {
		var fichas = valor.coincidencia( rnothtmlblanco ) || [];
		volver tokens.join( " " );
	}


función obtenerClase( elemento ) {
	devuelve elem.getAttribute && elem.getAttribute( "clase") || "";
}

función clasesToArray(valor) {
	if (Array.isArray(valor)) {
		valor de retorno;
	}
	if ( tipo de valor === "cadena" ) {
		valor devuelto.coincidencia( rnothtmlwhite ) || [];
	}
	regreso [];
}

jQuery.fn.extender( {
	addClass: función (valor) {
		var clases, elem, cur, curValue, clazz, j, finalValue,
			yo = 0;

		if (esFuncion(valor)) {
			devuelve esto.each( función( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			});
		}

		clases = clasesEnArray(valor);

		if (clases.longitud) {
			while (( elem = esto[ i++ ] ) ) {
				curValue = getClass( elemento );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				si ( cur ) {
					j = 0;
					while (( clazz = clases[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Asignar solo si es diferente para evitar renderizaciones innecesarias.
					finalValue = stripAndCollapse( cur );
					if (valorActual!== ValorFinal) {
						elem.setAttribute( "clase", valorFinal);
					}
				}
			}
		}

		devolver esto;
	},

	removeClass: función (valor) {
		var clases, elem, cur, curValue, clazz, j, finalValue,
			yo = 0;

		if (esFuncion(valor)) {
			devuelve esto.each( función( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			});
		}

		if ( !argumentos.longitud ) {
			devuelve este.attr( "clase", "" );
		}

		clases = clasesEnArray(valor);

		if (clases.longitud) {
			while (( elem = esto[ i++ ] ) ) {
				curValue = getClass( elemento );

				// Esta expresión está aquí para una mejor compresibilidad (ver addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				si ( cur ) {
					j = 0;
					while (( clazz = clases[ j++ ] ) ) {

						// Eliminar *todas* las instancias
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Asignar solo si es diferente para evitar renderizaciones innecesarias.
					finalValue = stripAndCollapse( cur );
					if (valorActual!== ValorFinal) {
						elem.setAttribute( "clase", valorFinal);
					}
				}
			}
		}

		devolver esto;
	},

	toggleClass: función (valor, stateVal) {
		var tipo = tipo de valor,
			isValidValue = tipo === "cadena" || Array.isArray(valor);

		if ( typeof stateVal === "boolean" && isValidValue ) {
			devolver stateVal? this.addClass( valor ) : this.removeClass( valor );
		}

		if (esFuncion(valor)) {
			devuelve esto.each( function( i ) {
				jQuery( esto ).toggleClass(
					value.call( esto, yo, getClass( esto ), stateVal ),
					valor del estado
				);
			});
		}

		devuelve esto. cada uno (función () {
			var className, i, self, classNames;

			if ( es un valor válido ) {

				// Alternar nombres de clases individuales
				yo = 0;
				self = jQuery( esto );
				classNames = classToArray(valor);

				while ( ( nombreClase = nombresClase[ i++ ] ) ) {

					// Comprobar cada className dado, lista separada por espacios
					if (self.hasClass(nombreClase)) {
						self.removeClass(nombreClase);
					} demás {
						self.addClass(nombreClase);
					}
				}

			// Alternar el nombre completo de la clase
			} else if ( valor === indefinido || tipo === "booleano" ) {
				className = getClass( esto );
				si ( nombre de clase ) {

					// Almacenar className si está establecido
					dataPriv.set( this, "__className__", className );
				}

				// Si el elemento tiene un nombre de clase o si se nos pasa `falso`,
				// luego elimine el nombre de clase completo (si había uno, lo anterior lo guardó).
				// De lo contrario, recuperar lo que se guardó previamente (si es que hay algo),
				// recurriendo a la cadena vacía si no se almacenó nada.
				if (este.establecerAtributo) {
					this.setAttribute( "clase",
						nombre de clase || valor === falso?
						"" :
						dataPriv.get( esto, "__className__" ) || ""
					);
				}
			}
		});
	},

	hasClass: función (selector) {
		var className, elem,
			yo = 0;

		className = " " + selector + " ";
		while (( elem = esto[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					devolver verdadero;
			}
		}

		falso retorno;
	}
});




var retorno = /\r/g;

jQuery.fn.extender( {
	val: función (valor) {
		ganchos var, ret, valueIsFunction,
			elemento = este[ 0 ];

		if ( !argumentos.longitud ) {
			si ( elemento ) {
				ganchos = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				si (ganchos &&
					"poner" en ganchos &&
					( ret = hooks.get( elem, "value" ) ) !== indefinido
				) {
					volver ret;
				}

				ret = elem.valor;

				// Manejar los casos de cadenas más comunes
				if ( tipo de ret === "cadena" ) {
					return ret.replace( rreturn, "" );
				}

				// Manejar casos donde el valor es nulo/indefinido o número
				volver ret == nulo? "" : ret;
			}

			regreso;
		}

		valorEsFuncion = esFuncion( valor );

		devuelve esto.each( function( i ) {
			valor var;

			if ( this.nodeType !== 1 ) {
				regreso;
			}

			si (valorEsFuncion) {
				val = value.call( this, i, jQuery( this ).val() );
			} demás {
				valor = valor;
			}

			// Tratar nulo/indefinido como ""; convertir números a cadena
			si (val == nulo) {
				valor = "";

			} else if ( tipo de valor === "número" ) {
				valor += "";

			} más si (Array.isArray(val)) {
				val = jQuery.map( val, función( valor ) {
					valor de retorno == nulo? "" : valor + "";
				});
			}

			ganchos = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// Si el conjunto devuelve indefinido, vuelve a la configuración normal
			if ( !hooks || !( "set" en hooks ) || hooks.set( this, val, "value" ) === indefinido ) {
				este.valor = val;
			}
		});
	}
});

jQuery.extender( {
	valHooks: {
		opción: {
			obtener: función (elemento) {

				var val = jQuery.find.attr( elem, "valor" );
				valor devuelto! = nulo?
					valor:

					// Soporte: IE <=10 - 11 solamente
					// option.text arroja excepciones (#14686, #14858)
					// Eliminar y contraer espacios en blanco
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse(jQuery.text(elemento));
			}
		},
		Seleccione: {
			obtener: función (elemento) {
				valor var, opción, i,
					opciones = elem.opciones,
					índice = elem.índiceseleccionado,
					uno = elem.type === "seleccione uno",
					valores = uno? nulo : [],
					máximo = uno? índice + 1 : opciones.longitud;

				si ( índice < 0 ) {
					i = máx;

				} demás {
					yo = uno? índice : 0;
				}

				// Recorre todas las opciones seleccionadas
				para ( ; i < max; i++ ) {
					opción = opciones[ i ];

					// Soporte: IE <=9 solamente
					// IE8-9 no actualiza lo seleccionado después de restablecer el formulario (#2551)
					if ( ( opción.seleccionada || i === índice ) &&

							// No devolver opciones que están deshabilitadas o en un grupo de opciones deshabilitado
							!opción.deshabilitada &&
							( !opción.parentNode.disabled ||
								!nodeName( opción.parentNode, "optgroup" ) ) ) {

						// Obtener el valor específico para la opción
						valor = jQuery( opción ).val();

						// No necesitamos una matriz para una selección
						si uno ) {
							valor de retorno;
						}

						// Las selecciones múltiples devuelven una matriz
						valores.push(valor);
					}
				}

				valores de retorno;
			},

			conjunto: función (elemento, valor) {
				var optionSet, opción,
					opciones = elem.opciones,
					valores = jQuery.makeArray(valor),
					i = opciones.longitud;

				mientras yo-- ) {
					opción = opciones[ i ];

					/* eslint-disable no-cond-assign */

					if ( opción.seleccionado =
						jQuery.inArray( jQuery.valHooks.option.get( opción ), valores ) > -1
					) {
						conjunto de opciones = verdadero;
					}

					/* eslint-habilitar no-cond-asignar */
				}

				// Obligar a los navegadores a comportarse de manera consistente cuando se establece un valor que no coincide
				if (! conjunto de opciones) {
					elem.selectedIndex = -1;
				}
				valores de retorno;
			}
		}
	}
});

// Getter/setter de radios y casillas de verificación
jQuery.each( [ "radio", "casilla de verificación" ], función() {
	jQuery.valHooks[ esto ] = {
		conjunto: función (elemento, valor) {
			if (Array.isArray(valor)) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !apoyo.checkOn ) {
		jQuery.valHooks[ esto ].get = función( elemento ) {
			devuelve elem.getAttribute("valor") === nulo? "on" : elem.valor;
		};
	}
});




// Devuelve jQuery para la inclusión de solo atributos


support.focusin = "onfocusin" en la ventana;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.detener la propagación();
	};

jQuery.extend( jQuery.evento, {

	disparador: función (evento, datos, elemento, solo manejadores) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elemento || documento],
			tipo = hasOwn.call( evento, "tipo" ) ? event.type : evento,
			espacios de nombres = hasOwn.call( evento, "espacio de nombres") ? event.namespace.split( "." ) : [];

		cur = último elemento = tmp = elemento = elemento || documento;

		// No haga eventos en los nodos de texto y comentarios
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			regreso;
		}

		// enfoque/desenfoque se transforma en enfoque adentro/afuera; asegurarnos de que no los estamos despidiendo en este momento
		if ( rfocusMorph.test( tipo + jQuery.event.triggered ) ) {
			regreso;
		}

		si (tipo.indexOf( "." ) > -1 ) {

			// Disparador con espacio de nombres; crea una expresión regular para que coincida con el tipo de evento en handle()
			espacios de nombres = tipo.split( "." );
			tipo = espacios de nombres.shift();
			espacios de nombres.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// La persona que llama puede pasar un objeto jQuery.Event, un objeto o simplemente una cadena de tipo de evento
		evento = evento[ jQuery.expando ] ?
			evento:
			nuevo jQuery.Event (tipo, tipo de evento === "objeto" && evento);

		// Desencadenar máscara de bits: & 1 para controladores nativos; & 2 para jQuery (siempre cierto)
		event.isTrigger = onlyHandlers ? 2 : 3;
		evento.espacio de nombres = espacios de nombres.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			nulo;

		// Limpiar el evento en caso de que se esté reutilizando
		evento.resultado = indefinido;
		if (!evento.objetivo) {
			evento.objetivo = elemento;
		}

		// Clonar los datos entrantes y anteponer el evento, creando la lista de argumentos del controlador
		datos = datos == nulo?
			[evento]:
			jQuery.makeArray(datos, [evento]);

		// Permitir que los eventos especiales se dibujen fuera de las líneas
		especial = jQuery.event.special[ tipo ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			regreso;
		}

		// Determinar la ruta de propagación de eventos por adelantado, según la especificación de eventos W3C (#9951)
		// Burbuja hasta documento, luego a ventana; busque un propietario globalDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || escribe;
			if (!rfocusMorph.test(tipoburbuja + tipo)) {
				cur = cur.NodoPadre;
			}
			for ( ; cur; cur = cur.NodoPadre ) {
				eventPath.push( cur );
				tmp = corriente;
			}

			// Solo agregue ventana si llegamos al documento (por ejemplo, no obj simple o DOM separado)
			if ( tmp === ( elem.documentopropietario || documento ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || ventana );
			}
		}

		// Controladores de incendios en la ruta del evento
		yo = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			ultimoElemento = cur;
			evento.tipo = i > 1 ?
				Tipo de burbuja:
				especial.bindType || escribe;

			// controlador jQuery
			mango = (
					dataPriv.get( cur, "eventos") || Objeto.crear(null)
				)[ tipo de evento ] &&
				dataPriv.get(cur, "manejador");
			si (manejar) {
				handle.apply( cur, data );
			}

			// Manejador nativo
			handle = tipo de tipo && cur[ tipo de tipo ];
			if (manejar && manejar.aplicar && aceptarDatos( cur ) ) {
				evento.resultado = handle.apply( cur, data );
				if (evento.resultado === falso) {
					event.preventDefault();
				}
			}
		}
		evento.tipo = tipo;

		// Si nadie evitó la acción por defecto, hazlo ahora
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !especial._predeterminado ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				aceptarDatos(elemento)) {

				// Llamar a un método DOM nativo en el destino con el mismo nombre que el evento.
				// No realice acciones predeterminadas en la ventana, ahí es donde deben estar las variables globales (#6170)
				if ( ontype && isFunction( elem[ tipo ] ) && !isWindow( elem ) ) {

					// No volver a activar un evento onFOO cuando llamamos a su método FOO()
					tmp = elem[ontype];

					si (tmp) {
						elem[ontype] = null;
					}

					// Evitar que se vuelva a activar el mismo evento, ya que ya lo mencionamos anteriormente
					jQuery.event.triggered = tipo;

					if ( evento. isPropagationStopped() ) {
						lastElement.addEventListener( tipo, stopPropagationCallback );
					}

					elemento[ tipo ]();

					if ( evento. isPropagationStopped() ) {
						lastElement.removeEventListener( tipo, stopPropagationCallback );
					}

					jQuery.event.triggered = indefinido;

					si (tmp) {
						elem[ontype] = tmp;
					}
				}
			}
		}

		return evento.resultado;
	},

	// Piggyback en un evento de donante para simular uno diferente
	// Usado solo para eventos `focus(in | out)`
	simular: función (tipo, elemento, evento) {
		var e = jQuery.extender(
			nuevo jQuery.Evento(),
			evento,
			{
				tipo: tipo,
				esSimulado: verdadero
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

});

jQuery.fn.extender( {

	disparador: función (tipo, datos) {
		devuelve esto. cada uno (función () {
			jQuery.event.trigger(tipo, datos, esto);
		});
	},
	triggerHandler: función (tipo, datos) {
		var elem = este[ 0 ];
		si ( elemento ) {
			devuelve jQuery.event.trigger (tipo, datos, elem, verdadero);
		}
	}
});


// Soporte: Firefox <=44
// Firefox no tiene eventos de foco (entrada | salida)
// Boleto relacionado - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Soporte: Chrome <= 48 - 49, Safari <= 9.0 - 9.1
// los eventos de enfoque (entrada | salida) se activan después de los eventos de enfoque y desenfoque,
// que es una violación de especificaciones: http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Ticket relacionado: https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !apoyo.focusin ) {
	jQuery.each( { foco: "focusin", desenfoque: "focusout" }, function( orig, fix ) {

		// Adjunte un solo controlador de captura en el documento mientras alguien quiere enfocar/enfocar
		controlador de var = función (evento) {
			jQuery.event.simulate(fix, event.target, jQuery.event.fix(evento));
		};

		jQuery.event.special[ arreglar ] = {
			configuración: función () {

				// Manejar: nodos regulares (a través de `this.ownerDocument`), ventana
				// (a través de `this.document`) & documento (a través de `this`).
				var doc = este.documentopropietario || este.documento || esta,
					adjuntos = dataPriv.access( doc, fix );

				si (! adjunta) {
					doc.addEventListener( origen, controlador, verdadero );
				}
				dataPriv.access( doc, fix, ( adjunta || 0 ) + 1 );
			},
			desmontaje: función () {
				var doc = este.documentopropietario || este.documento || esta,
					adjuntos = dataPriv.access( doc, fix ) - 1;

				si (! adjunta) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, arreglar );

				} demás {
					dataPriv.access (doc, arreglar, adjuntar);
				}
			}
		};
	});
}
var ubicación = ventana.ubicación;

var nonce = { guid: Fecha.ahora() };

var consulta = ( /\?/ );



// Análisis xml entre navegadores
jQuery.parseXML = función (datos) {
	varxml;
	if ( !datos || tipo de datos !== "cadena" ) {
		devolver nulo;
	}

	// Soporte: IE 9 - 11 solamente
	// IE lanza parseFromString con entrada no válida.
	tratar {
		xml = ( nueva ventana.DOMParser() ).parseFromString( datos, "texto/xml" );
	} atrapar ( e ) {
		xml = indefinido;
	}

	if ( !xml || xml.getElementsByTagName( "error de análisis").longitud ) {
		jQuery.error("XML inválido: "+datos);
	}
	devolver xml;
};


variable
	corchete = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:enviar|botón|imagen|restablecer|archivo)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

función buildParams (prefijo, obj, tradicional, agregar) {
	nombre de la variable;

	if (Array.isArray(obj)) {

		// Serializar el elemento de la matriz.
		jQuery.each( obj, función( i, v ) {
			if ( tradicional || rbracket.test( prefijo ) ) {

				// Trata cada elemento de la matriz como un escalar.
				agregar (prefijo, v);

			} demás {

				// El elemento no es escalar (matriz u objeto), codifica su índice numérico.
				buildParams(
					prefijo + "[" + ( tipo de v === "objeto" && v != nulo ? i : "" ) + "]",
					v,
					tradicional,
					agregar
				);
			}
		});

	} else if ( !tradicional && toType( obj ) === "objeto" ) {

		// Serializar elemento de objeto.
		para (nombre en obj) {
			buildParams(prefijo + "[" + nombre + "]", obj[nombre], tradicional, agregar);
		}

	} demás {

		// Serializar elemento escalar.
		agregar (prefijo, objeto);
	}
}

// Serializar una matriz de elementos de formulario o un conjunto de
// clave/valores en una cadena de consulta
jQuery.param = función (a, tradicional) {
	prefijo var,
		s = [],
		agregar = función (clave, valor o función) {

			// Si value es una función, invocarla y usar su valor de retorno
			var valor = esFuncion( valorOrFuncion ) ?
				valor o función ():
				valor o función;

			s[ s.length ] = encodeURIComponent( clave ) + "=" +
				encodeURIComponent( valor == nulo ? "" : valor );
		};

	si (a == nulo) {
		regreso "";
	}

	// Si se pasó una matriz, suponga que es una matriz de elementos de formulario.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serializar los elementos del formulario
		jQuery.each( una, función() {
			add( este.nombre, este.valor );
		});

	} demás {

		// Si es tradicional, codifique la forma "antigua" (la forma 1.3.2 o anterior)
		// lo hizo), de lo contrario, codifique los parámetros recursivamente.
		para ( prefijo en a ) {
			buildParams( prefijo, un[ prefijo ], tradicional, agregar );
		}
	}

	// Devuelve la serialización resultante
	return s.join( "&" );
};

jQuery.fn.extender( {
	serializar: función () {
		devuelve jQuery.param( this.serializeArray() );
	},
	serializarArray: function() {
		devuelve esto.map( function() {

			// Puede agregar propHook para "elementos" para filtrar o agregar elementos de formulario
			var elementos = jQuery.prop(esto, "elementos");
			devolver elementos? jQuery.makeArray( elementos ) : esto;
		} )
		.filtro( función() {
			var tipo = este.tipo;

			// Usa .is( ":disabled" ) para que fieldset[disabled] funcione
			devolver este.nombre && !jQuery( esto ).es( ":deshabilitado" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( tipo ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.mapa( función( _i, elemento ) {
			var val = jQuery( esto ).val();

			si (val == nulo) {
				devolver nulo;
			}

			if (Array.isArray(val)) {
				devuelve jQuery.map(valor, función(valor) {
					return { nombre: elem.name, valor: val.replace( rCRLF, "\r\n" ) };
				});
			}

			return { nombre: elem.name, valor: val.replace( rCRLF, "\r\n" ) };
		} ).obtener();
	}
});


variable
	r20 = /%20/g,
	rash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	encabezados = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: detección de protocolo local
	rlocalProtocol = /^(?:acerca de|aplicación|almacenamiento de aplicaciones|.+-extensión|archivo|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocolo = /^\/\//,

	/* Prefiltros
	 * 1) Son útiles para introducir tipos de datos personalizados (consulte ajax/jsonp.js para ver un ejemplo)
	 2) Estos se denominan:
	 * - ANTES de pedir un transporte
	 * - DESPUÉS de la serialización de parámetros (s.data es una cadena si s.processData es verdadero)
	 * 3) la clave es el tipo de datos
	 * 4) se puede utilizar el símbolo general "*"
	 * 5) la ejecución comenzará con transport dataType y LUEGO continuará hasta "*" si es necesario
	 */
	prefiltros = {},

	/* Transporta enlaces
	 * 1) la clave es el tipo de datos
	 * 2) se puede utilizar el símbolo general "*"
	 * 3) la selección comenzará con transport dataType y LUEGO irá a "*" si es necesario
	 */
	transportes = {},

	// Evite la secuencia de caracteres de comentario-prólogo (#10098); debe apaciguar la pelusa y evadir la compresión
	todos los tipos = "*/".concat( "*" ),

	// Etiqueta ancla para analizar el origen del documento
	originAnchor = document.createElement( "a" );
	originAnchor.href = ubicación.href;

// Base "constructor" para jQuery.ajaxPrefilter y jQuery.ajaxTransport
función agregarAPrefiltrosOTransportes( estructura ) {

	// dataTypeExpression es opcional y por defecto es "*"
	función de retorno (expresión de tipo de datos, función) {

		if ( typeof dataTypeExpression !== "cadena" ) {
			func = expresión de tipo de datos;
			expresiónTipoDatos = "*";
		}

		var tipo de datos,
			yo = 0,
			tipos de datos = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if (esFuncion(func)) {

			// Para cada tipo de datos en la expresión de tipo de datos
			while ( ( tipo de datos = tipos de datos [ i ++ ] ) ) {

				// Anteponer si se solicita
				if ( tipo de datos [ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( estructura[ tipo de datos ] = estructura [ tipo de datos ] || [] ).unshift( func );

				// De lo contrario agregar
				} demás {
					( estructura[ tipo de datos ] = estructura [ tipo de datos ] || [] ).push( func );
				}
			}
		}
	};
}

// Función de inspección básica para prefiltros y transportes
función inspeccionarPrefiltrosOTransportes (estructura, opciones, opciones originales, jqXHR) {

	var inspeccionado = {},
		buscandoTransporte = ( estructura === transportes );

	función inspeccionar (tipo de datos) {
		var seleccionado;
		inspeccionado[ tipo de datos ] = verdadero;
		jQuery.each( estructura[ tipo de datos ] || [], función( _, prefiltroOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory(opciones, opcionesoriginales, jqXHR);
			if ( tipo de tipo de datos o transporte === "cadena" &&
				!buscandoTransporte && !inspeccionado[ tipoDatosOTransporte ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspeccionar (tipo de datos o transporte);
				falso retorno;
			} else if (buscandoTransporte) {
				volver! (seleccionado = dataTypeOrTransport);
			}
		});
		volver seleccionado;
	}

	volver inspeccionar (opciones. tipos de datos [0]) || !inspeccionado[ "*" ] && inspeccionar( "*" );
}

// Una extensión especial para las opciones de ajax
// que toma opciones "planas" (no para extenderse profundamente)
// Corrige #9887
función ajaxExtend (objetivo, src) {
	clave var, profunda,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	para (ingresar src) {
		if ( src[ clave ] !== indefinido ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	si ( profundo ) {
		jQuery.extend (verdadero, objetivo, profundo);
	}

	objetivo de retorno;
}

/* Maneja las respuestas a una solicitud ajax:
 * - encuentra el tipo de datos correcto (media entre el tipo de contenido y el tipo de datos esperado)
 * - devuelve la respuesta correspondiente
 */
función ajaxHandleResponses( s, jqXHR, respuestas ) {

	var ct, tipo, finalDataType, firstDataType,
		contenido = s.contenido,
		dataTypes = s.dataTypes;

	// Elimina el tipo de datos automático y obtiene el tipo de contenido en el proceso
	while ( tipos de datos [ 0 ] === "*" ) {
		tipos de datos.shift();
		si ( ct === indefinido ) {
			ct = s.mimeType || jqXHR.getResponseHeader ("Tipo de contenido");
		}
	}

	// Comprobar si estamos tratando con un tipo de contenido conocido
	si (ct) {
		para (escriba el contenido) {
			if (contenido[ tipo ] && contenido[ tipo ].prueba( ct ) ) {
				tipos de datos.unshift (tipo);
				descanso;
			}
		}
	}

	// Comprobar para ver si tenemos una respuesta para el tipo de datos esperado
	if ( tipos de datos [ 0 ] en las respuestas ) {
		finalDataType = dataTypes[ 0 ];
	} demás {

		// Pruebe los tipos de datos convertibles
		para (escriba las respuestas) {
			if ( !tiposdedatos[ 0 ] || s.converters[ tipo + " " + tipos de datos[ 0 ] ] ) {
				finalDataType = tipo;
				descanso;
			}
			if ( !primerTipoDatos ) {
				primerTipoDatos = tipo;
			}
		}

		// O simplemente usa el primero
		finalDataType = finalDataType || primerTipoDeDatos;
	}

	// Si encontramos un tipo de datos
	// Agregamos el tipo de datos a la lista si es necesario
	// y devolver la respuesta correspondiente
	si (tipo de datos final) {
		if ( tipo de datos final ! == tipos de datos [ 0 ] ) {
			tipos de datos.unshift (tipo de datos final);
		}
		devolver respuestas[ finalDataType ];
	}
}

/* Conversiones en cadena dada la solicitud y la respuesta original
 * También establece los campos de respuestaXXX en la instancia de jqXHR
 */
function ajaxConvert( s, respuesta, jqXHR, esÉxito ) {
	var conv2, actual, conv, tmp, anterior,
		convertidores = {},

		// Trabajar con una copia de dataTypes en caso de que necesitemos modificarlo para la conversión
		dataTypes = s.dataTypes.slice();

	// Crear mapa de convertidores con teclas en minúsculas
	if ( tipos de datos [ 1 ] ) {
		for (conv en s.converters) {
			convertidores[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	actual = tipos de datos.shift();

	// Convertir a cada tipo de datos secuencial
	mientras ( actual ) {

		if ( s.responseFields[ actual ] ) {
			jqXHR[ s.responseFields[ actual ] ] = respuesta;
		}

		// Aplicar el filtro de datos si se proporciona
		if ( !prev && isSuccess && s.dataFilter ) {
			respuesta = s.dataFilter(respuesta, s.dataType);
		}

		anterior = actual;
		actual = tipos de datos.shift();

		si ( actual ) {

			// Solo hay trabajo por hacer si el tipo de datos actual no es automático
			si ( actual === "*" ) {

				actual = anterior;

			// Convierte la respuesta si el tipo de datos anterior no es automático y difiere del actual
			} else if ( anterior !== "*" && anterior !== actual ) {

				// Busca un convertidor directo
				conv = convertidores[ anterior + " " + actual ] || convertidores[ "* " + corriente ];

				// Si no encuentra ninguno, busque un par
				si ( !conv ) {
					para (conv2 en convertidores) {

						// Si conv2 genera corriente
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === actual ) {

							// Si anterior se puede convertir a entrada aceptada
							conv = convertidores[ anterior + " " + tmp[ 0 ] ] ||
								convertidores[ "* " + tmp[ 0 ] ];
							si ( conv ) {

								// Convertidores de equivalencia de condensación
								si ( conv === verdadero ) {
									conv = convertidores[ conv2 ];

								// De lo contrario, inserte el tipo de datos intermedio
								} else if (convertidores[ conv2 ] !== verdadero ) {
									corriente = tmp[ 0 ];
									tipos de datos.unshift( tmp[ 1 ] );
								}
								descanso;
							}
						}
					}
				}

				// Aplicar convertidor (si no es una equivalencia)
				if (conversión! == verdadero) {

					// A menos que se permita que los errores burbujeen, captúrelos y devuélvalos
					if (conv && s.throws) {
						respuesta = conv(respuesta);
					} demás {
						tratar {
							respuesta = conv(respuesta);
						} atrapar ( e ) {
							regreso {
								estado: "error de análisis",
								error: conversión? e: "Sin conversión de" + anterior + "a" + actual
							};
						}
					}
				}
			}
		}
	}

	return { estado: "éxito", datos: respuesta };
}

jQuery.extender( {

	// Contador para almacenar el número de consultas activas
	activo: 0,

	// Caché de encabezado de última modificación para la próxima solicitud
	última modificación: {},
	etiqueta: {},

	Configuración ajax: {
		url: ubicación.href,
		tipo: "OBTENER",
		isLocal: rlocalProtocol.test(ubicación.protocolo),
		mundial: cierto,
		datos de proceso: verdadero,
		asíncrono: verdadero,
		contentType: "aplicación/x-www-form-urlencoded; charset=UTF-8",

		/*
		tiempo de espera: 0,
		datos: nulo,
		tipo de datos: nulo,
		nombre de usuario: nulo,
		contraseña: nula,
		caché: nulo,
		tira: falso,
		tradicional: falso,
		encabezados: {},
		*/

		acepta: {
			"*": todos los tipos,
			texto: "texto/simple",
			html: "texto/html",
			xml: "aplicación/xml, texto/xml",
			json: "aplicación/json, texto/javascript"
		},

		contenido: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		campos de respuesta: {
			xml: "respuestaXML",
			texto: "texto de respuesta",
			json: "respuestaJSON"
		},

		// convertidores de datos
		// Las teclas separan los tipos de origen (o comodín "*") y de destino con un solo espacio
		convertidores: {

			// Convertir cualquier cosa a texto
			"* texto": Cadena,

			// Texto a html (verdadero = sin transformación)
			"texto html": verdadero,

			// Evaluar el texto como una expresión json
			"texto json": JSON.parse,

			// Analizar texto como xml
			"texto xml": jQuery.parseXML
		},

		// Para opciones que no deberían extenderse profundamente:
		// puede agregar sus propias opciones personalizadas aquí si
		// y cuando creas uno que no debería ser
		// profundo extendido (ver ajaxExtend)
		opciones planas: {
			URL: cierto,
			contexto: verdadero
		}
	},

	// Crea un objeto de configuración completo en el destino
	// con ajaxSettings y campos de configuración.
	// Si se omite target, escribe en ajaxSettings.
	ajaxSetup: función (objetivo, configuración) {
		volver a la configuración?

			// Construyendo un objeto de configuración
			ajaxExtend (ajaxExtend (objetivo, jQuery.ajaxSettings), configuración):

			// Extendiendo ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, objetivo);
	},

	ajaxPrefilter: addToPrefiltersOrTransports(prefiltros),
	ajaxTransport: addToPrefiltersOrTransports(transportes),

	// método principal
	ajax: función (url, opciones) {

		// Si la url es un objeto, simular una firma anterior a 1.5
		if ( tipo de url === "objeto" ) {
			opciones = url;
			url = indefinido;
		}

		// Forzar opciones para que sean un objeto
		opciones = opciones || {};

		transporte var,

			// URL sin parámetro anti-caché
			cacheURL,

			// Encabezados de respuesta
			cadena de encabezados de respuesta,
			encabezados de respuesta,

			// identificador de tiempo de espera
			tiempo de espera,

			// URL de limpieza var
			ancla de URL,

			// Estado de la solicitud (se vuelve falso al enviar y verdadero al finalizar)
			terminado,

			// Para saber si se van a despachar eventos globales
			fireglobals,

			// variable de bucle
			I,

			// parte no almacenada en caché de la url
			sin caché,

			// Crea el objeto de opciones final
			s = jQuery.ajaxSetup( {}, opciones ),

			// Contexto de devolución de llamada
			callbackContext = s.context || s,

			// El contexto para eventos globales es callbackContext si es un nodo DOM o una colección jQuery
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery (contexto de devolución de llamada):
					jQuery.event,

			// Diferido
			diferido = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks ("memoria única"),

			// Devoluciones de llamada dependientes del estado
			statusCode = s.statusCode || {},

			// Encabezados (se envían todos a la vez)
			encabezados de solicitud = {},
			nombre de los encabezados de solicitud = {},

			// Mensaje de cancelación predeterminado
			strAbort = "cancelado",

			// Falso xhr
			jqXHR = {
				estado listo: 0,

				// Construye una tabla hash de encabezados si es necesario
				getResponseHeader: función (clave) {
					coincidencia de var;
					si (completado) {
						si (! encabezados de respuesta) {
							encabezados de respuesta = {};
							while ((coincidencia = rheaders.exec(respuestaHeadersString)))) {
								encabezados de respuesta[coincidencia[ 1 ].toLowerCase() + " " ] =
									( encabezados de respuesta [ partido [ 1 ].toLowerCase() + " " ] || [] )
										.concat(coincidir[2]);
							}
						}
						coincidencia = encabezados de respuesta[ clave.toLowerCase() + " " ];
					}
					coincidencia de retorno == nulo? nulo: partido.unirse( ", ");
				},

				// Cadena sin procesar
				getAllResponseHeaders: función () {
					devolución completada? cadena de encabezados de respuesta: nulo;
				},

				// Almacena en caché el encabezado
				setRequestHeader: función (nombre, valor) {
					si (completado == nulo) {
						nombre = requestHeadersNames[ nombre.toLowerCase() ] =
							requestHeadersNames[ nombre.toLowerCase() ] || nombre;
						requestHeaders[ nombre ] = valor;
					}
					devolver esto;
				},

				// Anula el encabezado de tipo de contenido de respuesta
				overrideMimeType: función (tipo) {
					si (completado == nulo) {
						s.mimeType = tipo;
					}
					devolver esto;
				},

				// Devoluciones de llamada dependientes del estado
				código de estado: función (mapa) {
					código variable;
					si ( mapa ) {
						si (completado) {

							// Ejecutar las devoluciones de llamada apropiadas
							jqXHR.siempre( mapa[ jqXHR.status ] );
						} demás {

							// Lazy-add las nuevas devoluciones de llamada de una manera que conserva las antiguas
							para (código en el mapa) {
								statusCode[ código ] = [ statusCode[ código ], map[ código ] ];
							}
						}
					}
					devolver esto;
				},

				// Cancelar la solicitud
				abortar: función (texto de estado) {
					var textofinal = textoestado || strAbortar;
					si ( transporte ) {
						transporte.abortar(textofinal);
					}
					hecho( 0, textofinal);
					devolver esto;
				}
			};

		// Adjuntar diferidos
		promesa.diferida( jqXHR );

		// Agregar protocolo si no se proporciona (los prefiltros podrían esperarlo)
		// Manejar la URL falsa en el objeto de configuración (#10093: coherencia con la firma anterior)
		// También usamos el parámetro url si está disponible
		s.url = ( ( url || s.url || ubicación.href ) + "" )
			.replace( rprotocol, ubicación.protocolo + "//" );

		// Opción de método de alias para escribir según ticket #12004
		s.tipo = opciones.método || opciones.tipo || s.método || tipo s;

		// Extraer la lista de tipos de datos
		s.dataTypes = ( s.dataType || "*").toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// Una solicitud entre dominios está en orden cuando el origen no coincide con el origen actual.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Soporte: IE <=8 - 11, Borde 12 - 15
			// IE arroja una excepción al acceder a la propiedad href si la URL tiene un formato incorrecto,
			// por ejemplo, http://ejemplo.com:80x/
			tratar {
				urlAnchor.href = s.url;

				// Soporte: IE <=8 - 11 solamente
				// La propiedad de host de Anchor no está configurada correctamente cuando s.url es relativa
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocolo + "//" + urlAnchor.host;
			} atrapar ( e ) {

				// Si hay un error al analizar la URL, suponga que es crossDomain,
				// puede ser rechazado por el transporte si no es válido
				s.crossDomain = true;
			}
		}

		// Convertir datos si aún no es una cadena
		if ( s.data && s.processData && typeof s.data !== "cadena" ) {
			s.data = jQuery.param( s.data, s.tradicional );
		}

		// Aplicar prefiltros
		inspectPrefiltersOrTransports( prefiltros, s, opciones, jqXHR );

		// Si la solicitud se abortó dentro de un prefiltro, deténgase allí
		si (completado) {
			volver jqXHR;
		}

		// Podemos disparar eventos globales a partir de ahora si se nos pide
		// No activar eventos si jQuery.event no está definido en un escenario de uso de AMD (#15118)
		fireGlobals = jQuery.event && s.global;

		// Esté atento a un nuevo conjunto de solicitudes
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Mayúsculas el tipo
		s.type = s.type.toUpperCase();

		// Determinar si la solicitud tiene contenido
		s.hasContent = !rnoContent.test( s.type );

		// Guarde la URL en caso de que estemos jugando con If-Modified-Since
		// y/o encabezado If-None-Match más adelante
		// Eliminar hash para simplificar la manipulación de URL
		cacheURL = s.url.replace( rhash, "" );

		// Más opciones de manejo de solicitudes sin contenido
		if ( !s.hasContent ) {

			// Recuerda el hash para que podamos devolverlo
			uncached = s.url.slice( cacheURL.length );

			// Si los datos están disponibles y deben procesarse, agregue los datos a la URL
			if ( s.data && ( s.processData || typeof s.data === "string") ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: eliminar datos para que no se utilicen en un eventual reintento
				eliminar s.datos;
			}

			// Agregue o actualice el parámetro anti-caché si es necesario
			if (en caché === falso) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				sin almacenar en caché = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + (nonce.guid++ ) +
					sin caché;
			}

			// Poner hash y anti-cache en la URL que se solicitará (gh-1732)
			s.url = cacheURL + no almacenado en caché;

		// Cambiar '%20' a '+' si este es el contenido del cuerpo del formulario codificado (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "aplicación/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Establecer el encabezado If-Modified-Since y/o If-None-Match, si está en modo ifModified.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "Si se modificó desde entonces", jQuery.lastModified[ cacheURL ] );
			}
			if (jQuery.etag[URLcaché]) {
				jqXHR.setRequestHeader( "Si-Ninguna-coincidencia", jQuery.etag[ cacheURL ] );
			}
		}

		// Establecer el encabezado correcto, si se envían datos
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Tipo de contenido", s.contentType);
		}

		// Establecer el encabezado Accepts para el servidor, según el tipo de datos
		jqXHR.setRequestHeader(
			"Aceptar",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.acepta[ "*" ]
		);

		// Comprobar la opción de encabezados
		for ( i en s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Permitir encabezados/tipos MIME personalizados y cancelación anticipada
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === falso || completado ) ) {

			// Abortar si no se ha hecho ya y regresar
			volver jqXHR.abort();
		}

		// Abortar ya no es una cancelación
		strAbortar = "abortar";

		// Instalar devoluciones de llamada en diferido
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Obtener transporte
		transporte = inspeccionarPrefiltrosOTransportes( transportes, s, opciones, jqXHR );

		// Si no hay transporte, abortamos automáticamente
		si ( !transporte ) {
			hecho (-1, "Sin transporte");
		} demás {
			jqXHR.readyState = 1;

			// Enviar evento global
			si (fuegoGlobales) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// Si la solicitud se abortó dentro de ajaxSend, deténgase allí
			si (completado) {
				volver jqXHR;
			}

			// Se acabó el tiempo
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = ventana.setTimeout( function() {
					jqXHR.abort("tiempo de espera");
				}, en el tiempo de espera);
			}

			tratar {
				completado = falso;
				transporte.enviar(solicitudHeaders, hecho);
			} atrapar ( e ) {

				// Volver a generar excepciones posteriores a la finalización
				si (completado) {
					tirar e;
				}

				// propagar otros como resultados
				hecho (-1, e);
			}
		}

		// Devolución de llamada para cuando todo esté hecho
		función hecha (estado, nativeStatusText, respuestas, encabezados) {
			var esÉxito, éxito, error, respuesta, modificado,
				textoEstado = textoEstadoNativo;

			// Ignorar invocaciones repetidas
			si (completado) {
				regreso;
			}

			completado = verdadero;

			// Borrar el tiempo de espera si existe
			si (timeoutTimer) {
				ventana.clearTimeout( timeoutTimer );
			}

			// Desreferenciar el transporte para la recolección temprana de basura
			// (no importa cuánto tiempo se use el objeto jqXHR)
			transporte = indefinido;

			// Encabezados de respuesta de caché
			responseHeadersString = encabezados || "";

			// Establecer estado listo
			jqXHR.readyState = estado > 0 ? 4 : 0;

			// Determinar si tiene éxito
			isSuccess = estado >= 200 && estado < 300 || estado === 304;

			// Obtener datos de respuesta
			si ( respuestas ) {
				respuesta = ajaxHandleResponses( s, jqXHR, respuestas );
			}

			// Usar un conversor noop para el script faltante
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "script de texto" ] = function() {};
			}

			// Convierta sin importar qué (de esa manera los campos de respuesta XXX siempre están configurados)
			respuesta = ajaxConvert( s, respuesta, jqXHR, esÉxito );

			// Si tiene éxito, maneja el encadenamiento de tipos
			si ( es éxito ) {

				// Establecer el encabezado If-Modified-Since y/o If-None-Match, si está en modo ifModified.
				if ( s.ifModified ) {
					modificado = jqXHR.getResponseHeader ("Última modificación");
					si (modificado) {
						jQuery.lastModified[ cacheURL ] = modificado;
					}
					modificado = jqXHR.getResponseHeader( "etag" );
					si (modificado) {
						jQuery.etag[ cacheURL ] = modificado;
					}
				}

				// si no hay contenido
				if ( estado === 204 || s.type === "HEAD" ) {
					statusText = "sin contenido";

				// si no se modifica
				} más si ( estado === 304 ) {
					statusText = "no modificado";

				// Si tenemos datos, vamos a convertirlos
				} demás {
					estadoTexto = respuesta.estado;
					éxito = respuesta.datos;
					error = respuesta.error;
					esÉxito = !error;
				}
			} demás {

				// Extraer el error de statusText y normalizar para no abortar
				error = textoestado;
				if (estado || !estadoTexto) {
					estadoTexto = "error";
					si ( estado < 0 ) {
						estado = 0;
					}
				}
			}

			// Establecer datos para el objeto xhr falso
			jqXHR.status = estado;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Éxito/Error
			si ( es éxito ) {
				diferido.resolveWith( callbackContext, [ éxito, statusText, jqXHR ] );
			} demás {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Devoluciones de llamada dependientes del estado
			jqXHR.código de estado (código de estado);
			código de estado = indefinido;

			si (fuegoGlobales) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? éxito: error]);
			}

			// Completo
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			si (fuegoGlobales) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Manejar el contador AJAX global
				if ( !( --jQuery.activo ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		volver jqXHR;
	},

	getJSON: función (url, datos, devolución de llamada) {
		devuelve jQuery.get (url, datos, devolución de llamada, "json");
	},

	getScript: función (url, devolución de llamada) {
		devuelve jQuery.get (url, indefinido, devolución de llamada, "script");
	}
});

jQuery.each( [ "obtener", "publicar" ], función( _i, método ) {
	jQuery[método] = función(url, datos, devolución de llamada, tipo) {

		// Cambiar argumentos si se omitió el argumento de datos
		if (esFuncion(datos)) {
			tipo = tipo || llamar de vuelta;
			devolución de llamada = datos;
			datos = indefinido;
		}

		// La url puede ser un objeto de opciones (que luego debe tener .url)
		devuelve jQuery.ajax( jQuery.extend( {
			URL: URL,
			tipo: método,
			tipo de datos: tipo,
			datos: datos,
			éxito: devolución de llamada
		}, jQuery.isPlainObject(url) && url));
	};
});

jQuery.ajaxPrefilter( función(es) {
	var yo;
	for ( i en s.headers ) {
		if ( i.toLowerCase() === "tipo de contenido" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
});


jQuery._evalUrl = función (url, opciones, documento) {
	devuelve jQuery.ajax( {
		URL: URL,

		// Hacer esto explícito, ya que el usuario puede anularlo a través de ajaxSetup (#11264)
		tipo: "OBTENER",
		tipo de datos: "script",
		caché: cierto,
		asíncrono: falso,
		globales: falso,

		// Solo evalúa la respuesta si es exitosa (gh-4126)
		// dataFilter no se invoca para las respuestas de falla, así que utilícelo en su lugar
		// del convertidor predeterminado es confuso pero funciona.
		convertidores: {
			"script de texto": función () {}
		},
		filtro de datos: función (respuesta) {
			jQuery.globalEval(respuesta, opciones, doc);
		}
	});
};


jQuery.fn.extender( {
	envolverTodo: función (html) {
		envoltura var;

		si ( esto [ 0 ] ) {
			if (esFuncion(html)) {
				html = html.llamar( esto[ 0 ] );
			}

			// Los elementos para envolver el objetivo
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if (este[ 0 ].parentNode ) {
				envolver.insertarAntes( esto[ 0 ] );
			}

			envolver.mapa( función() {
				var elem = esto;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				elemento de retorno;
			} ).append( esto );
		}

		devolver esto;
	},

	envolverInterior: función (html) {
		if (esFuncion(html)) {
			devuelve esto.each( function( i ) {
				jQuery( esto ).wrapInner( html.call( esto, i ) );
			});
		}

		devuelve esto. cada uno (función () {
			var self = jQuery( esto ),
				contenido = self.contenido();

			if (contenido.longitud) {
				contenidos.wrapAll( html );

			} demás {
				self.append(html);
			}
		});
	},

	envolver: función (html) {
		var htmlIsFunction = es función (html);

		devuelve esto.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		});
	},

	desenvolver: función (selector) {
		this.parent( selector ).not( "cuerpo").each( function() {
			jQuery( esto ).replaceWith( esto.childNodes );
		});
		devolver esto;
	}
});


jQuery.expr.pseudos.hidden = función (elemento) {
	volver !jQuery.expr.pseudos.visible(elemento);
};
jQuery.expr.pseudos.visible = función (elemento) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = función () {
	tratar {
		devolver nueva ventana.XMLHttpRequest();
	} atrapar ( e ) {}
};

var xhrEstadoÉxito = {

		// El protocolo de archivo siempre produce el código de estado 0, supongamos 200
		0: 200,

		// Soporte: IE <=9 solamente
		// #1450: a veces IE devuelve 1223 cuando debería ser 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ("withCredentials" en xhrSupported);
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(función(opciones) {
	devolución de llamada var, devolución de llamada de error;

	// Dominio cruzado solo permitido si se admite a través de XMLHttpRequest
	if ( support.cors || xhrSoportado && !opciones.crossDomain ) {
		regreso {
			enviar: función (encabezados, completo) {
				var yo,
					xhr = opciones.xhr();

				xhr.abierto(
					opciones.tipo,
					opciones.url,
					opciones.async,
					opciones.nombre de usuario,
					opciones.contraseña
				);

				// Aplicar campos personalizados si se proporcionan
				if (opciones.xhrFields) {
					for (i en options.xhrFields) {
						xhr[ i ] = opciones.xhrFields[ i ];
					}
				}

				// Anula el tipo mime si es necesario
				if (opciones.mimeType && xhr.overrideMimeType) {
					xhr.overrideMimeType(opciones.mimeType);
				}

				// X-Solicitado-Con encabezado
				// Para solicitudes entre dominios, ya que las condiciones para una verificación previa son
				// similar a un rompecabezas, simplemente nunca lo configuramos para estar seguros.
				// (siempre se puede configurar por solicitud o incluso usando ajaxSetup)
				// Para solicitudes del mismo dominio, no cambiará el encabezado si ya se proporcionó.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Solicitado-Con" ] = "XMLHttpRequest";
				}

				// Establecer encabezados
				para (i en encabezados) {
					xhr.setRequestHeader(i, encabezados[i]);
				}

				// Llamar de vuelta
				devolución de llamada = función (tipo) {
					función de retorno() {
						si (devolución de llamada) {
							devolución de llamada = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = nulo;

							if ( tipo === "abortar" ) {
								xhr.abortar();
							} más si ( tipo === "error" ) {

								// Soporte: IE <=9 solamente
								// En un aborto nativo manual, IE9 lanza
								// errores en cualquier acceso a la propiedad que no sea readyState
								if ( tipo de xhr.status !== "número" ) {
									completo (0, "error");
								} demás {
									completo(

										// Archivo: el protocolo siempre arroja el estado 0; ver #8605, #14207
										xhr.estado,
										xhr.statusText
									);
								}
							} demás {
								completo(
									xhrSuccessStatus[ xhr.status ] || xhr.estado,
									xhr.statusText,

									// Soporte: IE <=9 solamente
									// IE9 no tiene XHR2 pero lanza en binario (trac-11426)
									// Para XHR2 sin texto, deje que la persona que llama lo maneje (gh-2498)
									( xhr.responseType || "texto" ) !== "texto" ||
									typeof xhr.responseText !== "cadena" ?
										{ binario: xhr.response } :
										{ texto: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Escuchar eventos
				xhr.onload = devolución de llamada();
				errorCallback = xhr.onerror = xhr.ontimeout = devolución de llamada ("error");

				// Soporte: solo IE 9
				// Usar onreadystatechange para reemplazar onabort
				// para manejar abortos no detectados
				if ( xhr.onabort !== indefinido ) {
					xhr.onabort = errorCallback;
				} demás {
					xhr.onreadystatechange = función () {

						// Verifique readyState antes de que se agote el tiempo de espera, ya que cambia
						if (xhr. estado listo === 4) {

							// Permitir que onerror sea llamado primero,
							// pero eso no manejará un aborto nativo
							// Además, guarde errorCallback en una variable
							// ya que no se puede acceder a xhr.onerror
							ventana.setTimeout( function() {
								si (devolución de llamada) {
									errorCallback();
								}
							});
						}
					};
				}

				// Crear la devolución de llamada de cancelación
				devolución de llamada = devolución de llamada ("abortar");

				tratar {

					// Envíe la solicitud (esto puede generar una excepción)
					xhr.send(opciones.hasContent && opciones.datos || nulo);
				} atrapar ( e ) {

					// #14683: Solo volver a lanzar si esto aún no ha sido notificado como un error
					si (devolución de llamada) {
						tirar e;
					}
				}
			},

			abortar: función () {
				si (devolución de llamada) {
					llamar de vuelta();
				}
			}
		};
	}
});




// Evitar la ejecución automática de scripts cuando no se proporcionó un tipo de datos explícito (ver gh-2432)
jQuery.ajaxPrefilter( función(es) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
});

// Instalar el tipo de datos del script
jQuery.ajaxSetup( {
	acepta: {
		guión: "texto/javascript, aplicación/javascript, " +
			"aplicación/ecmascript, aplicación/x-ecmascript"
	},
	contenido: {
		secuencia de comandos: /\b(?:java|ecma)secuencia de comandos\b/
	},
	convertidores: {
		"script de texto": función (texto) {
			jQuery.globalEval(texto);
			devolver texto;
		}
	}
});

// Manejar el caso especial de caché y crossDomain
jQuery.ajaxPrefilter( "secuencia de comandos", función(es) {
	if (en caché === indefinido) {
		s.caché = falso;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Vincular etiqueta de secuencia de comandos piratear transporte
jQuery.ajaxTransport( "script", función(s) {

	// Este transporte solo trata con solicitudes de dominio cruzado o forzadas por attrs
	if ( s.crossDomain || s.scriptAttrs ) {
		secuencia de comandos var, devolución de llamada;
		regreso {
			enviar: función (_, completa) {
				secuencia de comandos = jQuery( "<secuencia de comandos>" )
					.attr( s.scriptAttrs || {} )
					.prop( { juego de caracteres: s.scriptCharset, src: s.url } )
					.on( "error de carga", devolución de llamada = función (evt) {
						script.remove();
						devolución de llamada = nulo;
						si (evt) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					});

				// Use la manipulación DOM nativa para evitar nuestro engaño domManip AJAX
				documento.head.appendChild( script[ 0 ] );
			},
			abortar: función () {
				si (devolución de llamada) {
					llamar de vuelta();
				}
			}
		};
	}
});




var retrollamadas = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Configuración jsonp predeterminada
jQuery.ajaxSetup( {
	jsonp: "devolución de llamada",
	jsonpCallback: función () {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		esta [devolución de llamada] = verdadero;
		devolución de llamada;
	}
});

// Detectar, normalizar opciones e instalar devoluciones de llamada para solicitudes jsonp
jQuery.ajaxPrefilter( "json jsonp", función( s, configuración original, jqXHR ) {

	var callbackName, sobrescrito, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"dirección URL":
			typeof s.data === "cadena" &&
				( s.contentType || "" )
					.indexOf( "aplicación/x-www-formulario-urlencodificado" ) === 0 &&
				rjsonp.test( s.datos ) && "datos"
		);

	// Manejar si el tipo de datos esperado es "jsonp" o tenemos un parámetro para establecer
	if ( jsonProp || s. tipos de datos [ 0 ] === "jsonp" ) {

		// Obtenga el nombre de devolución de llamada, recordando el valor preexistente asociado con él
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insertar devolución de llamada en url o datos de formulario
		si ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Usa el convertidor de datos para recuperar json después de la ejecución del script
		s.converters[ "script json" ] = function() {
			si (! contenedor de respuesta) {
				jQuery.error( callbackName + " no fue llamado" );
			}
			return contenedor de respuesta[ 0 ];
		};

		// Forzar tipo de datos json
		s.tipos de datos[ 0 ] = "json";

		// Instalar devolución de llamada
		sobreescrito = ventana[ callbackName ];
		ventana [nombre de devolución de llamada] = función () {
			contenedor de respuesta = argumentos;
		};

		// Función de limpieza (se dispara después de los convertidores)
		jqXHR.siempre( función() {

			// Si el valor anterior no existía, elimínelo
			if ( sobrescrito === indefinido ) {
				jQuery(ventana).removeProp(callbackName);

			// De lo contrario restaurar el valor preexistente
			} demás {
				ventana[ callbackName ] = sobrescrito;
			}

			// Guardar de nuevo como gratis
			if (s[nombre de devolución de llamada]) {

				// Asegúrese de que reutilizar las opciones no estropee las cosas
				s.jsonpCallback = configuración original.jsonpCallback;

				// Guardar el nombre de devolución de llamada para uso futuro
				retrollamadas antiguas.push( nombre de devolución de llamada );
			}

			// Llamar si fue una función y tenemos respuesta
			if (contenedor de respuesta && isFunction(sobreescrito)) {
				sobrescrito( contenedor de respuesta[ 0 ] );
			}

			responseContainer = sobrescrito = indefinido;
		});

		// Delegar al script
		devolver "script";
	}
});




// Soporte: solo Safari 8
// En los documentos de Safari 8 creados a través de document.implementation.createHTMLDocument
// colapsar formas hermanas: la segunda se convierte en hija de la primera.
// Por eso, esta medida de seguridad tiene que ser deshabilitada en Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
soporte.createHTMLDocument = (función() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<formulario></formulario><formulario></formulario>";
	volver cuerpo.childNodes.longitud === 2;
} )();


// El argumento "datos" debe ser una cadena de html
// contexto (opcional): si se especifica, el fragmento se creará en este contexto,
// por defecto es documento
// keepScripts (opcional): si es verdadero, incluirá los scripts pasados ​​en la cadena html
jQuery.parseHTML = función (datos, contexto, keepScripts) {
	if (tipo de datos! == "cadena") {
		regreso [];
	}
	if (tipo de contexto === "booleano" ) {
		keepScripts = contexto;
		contexto = falso;
	}

	var base, analizado, scripts;

	si (! contexto) {

		// Evita que los scripts o los controladores de eventos en línea se ejecuten inmediatamente
		// usando document.implementation
		if (soporte.createHTMLDocument) {
			contexto = documento.implementación.createHTMLDocument( "" );

			// Establecer el href base para el documento creado
			// por lo que cualquier elemento analizado con URL
			// se basan en la URL del documento (gh-2965)
			base = contexto.createElement("base");
			base.href = documento.ubicación.href;
			context.head.appendChild( base );
		} demás {
			contexto = documento;
		}
	}

	analizado = rsingleTag.exec (datos);
	scripts = !keepScripts && [];

	// Etiqueta única
	si (analizado) {
		return [ context.createElement( analizado[ 1 ] ) ];
	}

	analizado = buildFragment([datos], contexto, scripts);

	if (guiones && guiones.longitud) {
		jQuery(scripts).remove();
	}

	volver jQuery.merge([], parsed.childNodes);
};


/**
 * Cargar una url en una página
 */
jQuery.fn.load = función (url, parámetros, devolución de llamada) {
	selector de var, tipo, respuesta,
		yo = esto,
		desactivado = url.indexOf( " " );

	si (apagado > -1) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url. segmento (0, desactivado);
	}

	// Si es una función
	if (isFunction(parámetros)) {

		// Suponemos que es la devolución de llamada
		devolución de llamada = parámetros;
		parámetros = indefinido;

	// De lo contrario, crea una cadena de parámetros
	} else if (params && typeof params === "objeto" ) {
		tipo = "POST";
	}

	// Si tenemos elementos a modificar, realizar la solicitud
	if ( self.longitud > 0 ) {
		jQuery.ajax( {
			URL: URL,

			// Si la variable "tipo" no está definida, se utilizará el método "GET".
			// Hacer explícito el valor de este campo ya que
			// el usuario puede anularlo a través del método ajaxSetup
			tipo: tipo || "OBTENER",
			tipo de datos: "html",
			datos: parámetros
		} ).done( función( textorespuesta ) {

			// Guarda la respuesta para usarla en la devolución de llamada completa
			respuesta = argumentos;

			self.html(selector?

				// Si se especificó un selector, ubique los elementos correctos en un div ficticio
				// Excluir scripts para evitar errores de IE 'Permiso denegado'
				jQuery( "<div>" ).append( jQuery.parseHTML(texto de respuesta) ).find(selector):

				// De lo contrario usa el resultado completo
				texto de respuesta);

		// Si la solicitud tiene éxito, esta función obtiene "datos", "estado", "jqXHR"
		// pero se ignoran porque la respuesta se configuró anteriormente.
		// Si falla, esta función obtiene "jqXHR", "estado", "error"
		}). siempre (devolución de llamada && función (jqXHR, estado) {
			self.each( función() {
				callback.apply( esto, respuesta || [ jqXHR.responseText, estado, jqXHR ] );
			});
		});
	}

	devolver esto;
};




jQuery.expr.pseudos.animated = función (elemento) {
	devuelve jQuery.grep( jQuery.temporizadores, función( fn ) {
		return elem === fn.elem;
	} ).longitud;
};




jQuery.desplazamiento = {
	setOffset: función (elemento, opciones, i) {
		var PosiciónCur, CurLeft, CurCSSTop, CurTop, CurOffset, CurCSSLeft, CalcularPosición,
			posición = jQuery.css( elemento, "posición" ),
			curElem = jQuery( elemento ),
			accesorios = {};

		// Establezca la posición primero, en caso de que la parte superior/izquierda estén configuradas incluso en elementos estáticos
		si ( posición === "estático" ) {
			elem.style.position = "relativo";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "arriba" );
		curCSSLeft = jQuery.css( elem, "izquierda" );
		calcularPosición = (posición === "absoluta" || posición === "fija" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Necesita poder calcular la posición si
		// arriba o izquierda es automático y la posición es absoluta o fija
		si (calcularPosición) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} demás {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if (isFunction(opciones)) {

			// Use jQuery.extend aquí para permitir la modificación del argumento de coordenadas (gh-1848)
			opciones = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if (opciones.superior!= nulo) {
			props.top = ( opciones.top - curOffset.top ) + curTop;
		}
		if (opciones.izquierda!= nulo) {
			props.left = ( opciones.left - curOffset.left ) + curLeft;
		}

		if ( "usando" en opciones) {
			options.using.call( elem, props );

		} demás {
			if ( typeof props.top === "número" ) {
				props.superior += "px";
			}
			if (tipo de props.left === "número" ) {
				accesorios.izquierda += "px";
			}
			curElem.css(accesorios);
		}
	}
};

jQuery.fn.extender( {

	// offset() relaciona el cuadro del borde de un elemento con el origen del documento
	compensación: función (opciones) {

		// Preservar el encadenamiento para setter
		if (argumentos.longitud) {
			opciones de retorno === indefinido?
				esta :
				this.each( function( i ) {
					jQuery.offset.setOffset(esto, opciones, i);
				});
		}

		var rect, ganar,
			elemento = este[ 0 ];

		si (! elemento) {
			regreso;
		}

		// Devolver ceros para elementos desconectados y ocultos (mostrar: ninguno) (gh-2310)
		// Soporte: IE <=11 solamente
		// Ejecutando getBoundingClientRect en un
		// el nodo desconectado en IE arroja un error
		if ( !elem.getClientRects().longitud ) {
			volver {arriba: 0, izquierda: 0};
		}

		// Obtenga la posición relativa al documento agregando el desplazamiento de la ventana gráfica al gBCR relativo a la ventana gráfica
		rect = elem.getBoundingClientRect();
		ganar = elem.propietarioDocumento.defaultView;
		regreso {
			arriba: rect.top + win.pageYOffset,
			izquierda: rect.left + win.pageXOffset
		};
	},

	// position() relaciona el cuadro de margen de un elemento con el cuadro de relleno de su padre desplazado
	// Esto corresponde al comportamiento del posicionamiento absoluto CSS
	posición: función() {
		si ( !esto[ 0 ] ) {
			regreso;
		}

		var offsetParent, offset, doc,
			elemento = este[ 0 ],
			parentOffset = { arriba: 0, izquierda: 0 };

		// posición: los elementos fijos se desplazan desde la ventana gráfica, que en sí misma siempre tiene un desplazamiento cero
		if ( jQuery.css( elem, "posición" ) === "fijo" ) {

			// Asumir position:fixed implica disponibilidad de getBoundingClientRect
			desplazamiento = elem.getBoundingClientRect();

		} demás {
			desplazamiento = esto.desplazamiento();

			// Cuenta para el padre compensado *real*, que puede ser el documento o su elemento raíz
			// cuando se identifica un elemento posicionado estáticamente
			doc = elemento.documentopropietario;
			padre de compensación = elem. padre de compensación || doc.documentElement;
			while ( padre de compensación &&
				( padre de compensación === doc.cuerpo || padre de compensación === doc.documentElement ) &&
				jQuery.css(offsetParent, "posición" ) === "estático" ) {

				padre-desplazamiento = Padre-desplazamiento.NodoPadre;
			}
			if ( padre de compensación && padre de compensación !== elem && padre de compensación.tipo de nodo === 1 ) {

				// Incorporar bordes en su desplazamiento, ya que están fuera de su origen de contenido
				parentOffset = jQuery(offsetParent).offset();
				parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
				parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
			}
		}

		// Resta las compensaciones de los padres y los márgenes de los elementos
		regreso {
			arriba: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			izquierda: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// Este método devolverá documentElement en los siguientes casos:
	// 1) Para el elemento dentro del iframe sin offsetParent, este método devolverá
	// documentElement de la ventana principal
	// 2) Para el elemento oculto o separado
	// 3) Para el cuerpo o el elemento html, es decir, en el caso del nodo html, se devolverá a sí mismo
	//
	// pero esas excepciones nunca se presentaron como casos de uso de la vida real
	// y podría considerarse como resultados más preferibles.
	//
	// Sin embargo, esta lógica no está garantizada y puede cambiar en cualquier momento en el futuro
	padre de compensación: función () {
		devuelve esto.map( function() {
			var offsetParent = this.offsetParent;

			while ( padre de compensación && jQuery.css ( padre de compensación, "posición" ) === "estático" ) {
				padre de compensación = padre de compensación. padre de compensación;
			}

			volver padre de compensación || documentoElemento;
		});
	}
});

// Crear métodos scrollLeft y scrollTop
jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(método, prop) {
	var top = "pageYOffset" === prop;

	jQuery.fn[método] = función(val) {
		volver acceso (esto, función (elemento, método, val) {

			// Combinar documentos y ventanas
			var ganar;
			if (esVentana(elemento)) {
				ganar = elemento;
			} más si ( elem.nodeType === 9 ) {
				ganar = elem.defaultView;
			}

			si (val === indefinido) {
				¿Vuelve a ganar? ganar[ prop ] : elem[ método ];
			}

			si (ganar) {
				ganar.desplazarse hacia(
					!cima ? val : win.pageXOffset,
					cima ? val : win.pageYOffset
				);

			} demás {
				elem[método] = val;
			}
		}, método, valor, argumentos.longitud);
	};
});

// Soporte: Safari <=7 - 9.1, Chrome <=37 - 49
// Agregue los cssHooks superiores/izquierdos usando jQuery.fn.position
// Error de Webkit: https://bugs.webkit.org/show_bug.cgi?id=29084
// Error de parpadeo: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle devuelve el porcentaje cuando se especifica para arriba/izquierda/abajo/derecha;
// en lugar de hacer que el módulo css dependa del módulo de compensación, solo verifíquelo aquí
jQuery.each( [ "arriba", "izquierda" ], function( _i, prop ) {
	jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
		función (elemento, calculado) {
			si ( calculado ) {
				calculado = curCSS( elemento, prop );

				// Si curCSS devuelve un porcentaje, volver a compensar
				devolver rnumnonpx.test (computado)?
					jQuery( elem ).position()[ prop ] + "px" :
					calculado;
			}
		}
	);
});


// Crear métodos de altura interior, anchura interior, altura, anchura, altura exterior y anchura exterior
jQuery.each ({ Altura: "altura", Ancho: "ancho"}, función (nombre, tipo) {
	jQuery.each( { relleno: "interior" + nombre, contenido: tipo, "": "exterior" + nombre},
		function(predeterminadoExtra, funcName) {

		// El margen es solo para la altura exterior, la anchura exterior
		jQuery.fn[ funcName ] = function( margen, valor ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean"),
				adicional = predeterminadoExtra || ( margen === verdadero || valor === verdadero ? "margen" : "borde" );

			volver acceso (esto, función (elemento, tipo, valor) {
				var doc;

				if (esVentana(elemento)) {

					// $(ventana).outerWidth/Height return w/h incluyendo barras de desplazamiento (gh-1729)
					return funcName.indexOf( "exterior") === 0 ?
						elem[ "interno" + nombre ] :
						elem.document.documentElement[ "cliente" + nombre ];
				}

				// Obtener ancho o alto del documento
				if ( elem.nodeType === 9 ) {
					doc = elemento.documentElement;

					// Scroll[Ancho/Alto] o desplazamiento[Ancho/Alto] o cliente[Ancho/Alto],
					// el que sea mayor
					devuelve Matemáticas.max(
						elem.body[ "pergamino" + nombre], doc[ "pergamino" + nombre],
						elem.body[ "desplazamiento" + nombre ], doc[ "desplazamiento" + nombre ],
						doc[ "cliente" + nombre ]
					);
				}

				valor de retorno === indefinido?

					// Obtenga ancho o alto en el elemento, solicitando pero no forzando parseFloat
					jQuery.css (elemento, tipo, adicional):

					// Establecer ancho o alto en el elemento
					jQuery.style (elemento, tipo, valor, extra);
			}, tipo, encadenable? margen: indefinido, encadenable);
		};
	});
});


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxÉxito",
	"ajaxEnviar"
], función (_i, tipo) {
	jQuery.fn[tipo] = función(fn) {
		devuelve this.on( tipo, fn );
	};
});




jQuery.fn.extender( {

	enlazar: función (tipos, datos, fn) {
		devuelve this.on (tipos, nulo, datos, fn);
	},
	desvincular: función (tipos, fn) {
		devuelve esto.off (tipos, nulo, fn);
	},

	delegado: función (selector, tipos, datos, fn) {
		devuelve this.on (tipos, selector, datos, fn);
	},
	delegar: función (selector, tipos, fn) {

		// (espacio de nombres) o (selector, tipos [, fn])
		devolver argumentos.longitud === 1 ?
			this.off(selector, "**" ):
			this.off( tipos, selector || "**", fn );
	},

	pasar el mouse: función (fnOver, fnOut) {
		devuelve esto.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
});

jQuery.each( ("difuminar enfocar enfocaren enfocarfuera redimensionar desplazamiento clic dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave" +
	"cambiar seleccionar enviar tecla abajo presionar tecla arriba menú contextual" ).split( " " ),
	función( _i, nombre ) {

		// Manejar enlace de eventos
		jQuery.fn[nombre] = función(datos, fn) {
			devolver argumentos.longitud > 0 ?
				this.on(nombre, nulo, datos, fn):
				this.trigger(nombre);
		};
	});




// Soporte: Android <= 4.0 solamente
// Asegúrese de recortar BOM y NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Vincular una función a un contexto, opcionalmente aplicando parcialmente cualquier
// argumentos.
// jQuery.proxy está en desuso para promover estándares (específicamente Function#bind)
// Sin embargo, no está programado para su eliminación en el corto plazo
jQuery.proxy = función (fn, contexto) {
	var tmp, argumentos, proxy;

	if (tipo de contexto === "cadena" ) {
		tmp = fn[ contexto ];
		contexto = fn;
		fn = tmp;
	}

	// Verificación rápida para determinar si el objetivo es invocable, en la especificación
	// esto arroja un TypeError, pero solo devolveremos undefined.
	si (! es Función (fn)) {
		volver indefinido;
	}

	// enlace simulado
	args = slice.call(argumentos, 2);
	proxy = función () {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Establezca el GUID del controlador único en el mismo controlador original, para que pueda eliminarse
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	poder de retorno;
};

jQuery.holdReady = función (mantener) {
	si (mantener) {
		jQuery.readyWait++;
	} demás {
		jQuery.listo(verdadero);
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = esFunción;
jQuery.isWindow = esVentana;
jQuery.camelCase = camelCase;
jQuery.tipo = aTipo;

jQuery.ahora = Fecha.ahora;

jQuery.isNumeric = función (obj) {

	// A partir de jQuery 3.0, isNumeric está limitado a
	// cadenas y números (primitivos u objetos)
	// que puede ser forzado a números finitos (gh-2662)
	var tipo = jQuery.type(obj);
	return ( tipo === "número" || tipo === "cadena") &&

		// falsos positivos de conversión numérica parseFloat NaNs ("")
		// ...pero malinterpreta las cadenas de números iniciales, particularmente los literales hexadecimales ("0x...")
		// la resta fuerza infinitos a NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = función (texto) {
	devolver texto == nulo?
		"" :
		( texto + "" ).replace( rtrim, "" );
};



// Regístrese como un módulo AMD con nombre, ya que jQuery se puede concatenar con otros
// archivos que pueden usar define, pero no a través de un script de concatenación adecuado que
// entiende módulos AMD anónimos. Un AMD con nombre es el más seguro y robusto
// forma de registrarse. Se usa jquery en minúsculas porque los nombres de los módulos de AMD son
// derivado de nombres de archivos, y jQuery normalmente se entrega en minúsculas
// Nombre del archivo. Haga esto después de crear el global para que si un módulo AMD quiere
// para llamar a noConflict para ocultar esta versión de jQuery, funcionará.

// Tenga en cuenta que para una máxima portabilidad, las bibliotecas que no son jQuery deben
// se declaran como módulos anónimos y evitan establecer un global si un
// El cargador de AMD está presente. jQuery es un caso especial. Para más información, ver
// https://github.com/jrburke/requirejs/wiki/Actualizando-bibliotecas-existentes#wiki-anon

if ( typeof define === "función" && define.amd ) {
	define( "jquery", [], función() {
		devolver jQuery;
	});
}




variable

	// Mapa sobre jQuery en caso de sobrescritura
	_jQuery = ventana.jQuery,

	// Mapa sobre el $ en caso de sobrescritura
	_$ = ventana.$;

jQuery.noConflict = función (profunda) {
	if (ventana.$ === jQuery) {
		ventana.$ = _$;
	}

	if (profundo && ventana.jQuery === jQuery) {
		ventana.jQuery = _jQuery;
	}

	devolver jQuery;
};

// Exponer identificadores jQuery y $, incluso en AMD
// (#7102#comentario:10, https://github.com/jquery/jquery/pull/557)
// y CommonJS para emuladores de navegador (#13566)
if (tipo de noGlobal === "indefinido" ) {
	ventana.jQuery = ventana.$ = jQuery;
}




devolver jQuery;
});