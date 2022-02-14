/*
Enunciado:
Dada una cadena de texto, darle la vuenta e invertir el orden de sus caracteres,
sin usar metodos propios del lenguaje, solo estructuras de control

Como hacerlo:
-Funcion con parametro "cadena"
-Crear una variable para guardar la cadena invertida
-Bucle que recorrar el string y guarde los caracteres en la variable
*/
const reverseText = (text) => {
    let result = "";
    for (let letter of text) { //for of para obtener el valor del indice
        result = letter + result // concatena la letra nueva al inicio
    }
    return result;
}

//con metodos
const reverseTextMethod = (text) => {
    return text.split('').reverse().join('');
}

console.log("Invertido con estructura de control: " + reverseText("gerson"));
console.log("Invertido con Metodo: " + reverseTextMethod("gerson"));

