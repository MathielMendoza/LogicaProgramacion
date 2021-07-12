/*
Enunciado:
Dada una cadena de texto, comprobar si es un palindromo o no.No tener en cuenta espacios o simbolos raros
Como hacerlo:
-Funcion con parametro "texto"
-Separar el texto en un array de letras
-Darle la vuelta
-Unir el array de letras en un string y comparar con el parametro
*/

function palindromo(texto) {
    let textoInvertido = texto
        .split('')
        .reverse()
        .join('');
    textoInvertido === texto
        ? console.log("True")
        : console.log("False")
    return (textoInvertido === texto)
}

console.log("Es un palindromo? " + palindromo("bob"))
