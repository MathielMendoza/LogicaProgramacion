/*
Enunciado:
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella
La frase y la palabra deben ser parametros de una funcion.\
Como hacerlo:
-Funcion con 2 parametros "frase" y "busqueda"
-Poner string en minusculas y limpiarlo.
-Comprobar si la busqueda esta incluida en la frase
-Crear un array de palabras de la frase
-Mapear esas palabras y hacer un contador de cada una
-Devolver el contador de la busqueda
 */
function coincidencias(frase, busqueda) {
    let textoLimpio = frase.toLowerCase().replace(/[!¡.,-]/gi, '');
    let resultado = 0;
    if (textoLimpio.includes(busqueda)) {
        let palabras = textoLimpio.split(" ");
        let mapa = {};
        for (let palabra of palabras) {
            if (mapa[palabra]) {
                mapa[palabra]++
            } else {
                mapa[palabra] = 1
            }
        }
        // [ 'hola', 'soy', 'gerson', 'mendoza', 'gerson' ]
        // { hola: 1, soy: 1, gerson: 2, mendoza: 1 }
        resultado = mapa[busqueda]
    } else {
        resultado = 0;
    }
    return resultado;
}

console.log("Numero de coincidencias: " + coincidencias("hola soy gerson mendoza, gerson", "gerson"))
