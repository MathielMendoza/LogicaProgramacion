/*
Dadas dos cadenas de texto, crear un algoritmo que compruebe
si son anagramas entre si.

Una cadena es un anagrama de otra si usa los mismos caracteres
en la misma cantidad

No tener en cuenta espacios, simbolos raros, puntos, etc

Como hacerlo:

- Crear una funcion para limpiar los textos
- Quitar todo lo que no sea texto
- Poner en minusculas
- Crear array de letras
- Ordenarlo
- Unirlo
- Funcion para comparar las 2 palabras
 */

function limpiarText(texto){
return texto
    .replace(/[^\w]/gi,'')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

function anagramas(texto1, texto2) {
    return limpiarText(texto1) === limpiarText(texto2);
}

console.log(anagramas("sergio....!!,.","gerson,,,"))