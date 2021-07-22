/*
Dada una cadena de texto, devolver cuantas vocales tiene

Como hacerlo:
- crear una funcion que reciba el texto
- Metodo match con expresión regular
- Devolver resultado
 */

function cantidadVocales(texto) {
    let coincidencias = texto.match(/[aeiou]/gi);
    return coincidencias ? coincidencias.length : 0;
}

console.log("Número de vocales:", cantidadVocales("gqwqeeewqw"))