/*
Enunciado:
Dada una cadena de texto, darle la vuenta e invertir el orden de sus caracteres,
sin usar metodos propios del lenguaje, solo estructuras de control

Como hacerlo:
-Funcion con parametro "cadena"
-Crear una variable para guardar la cadena invertida
-Bucle que recorrar el string y guarde los caracteres en la variable
*/
function invertir(texto){
    let invertido ="";
    for (let letra of texto){ //for of para obtener el valor del indice
        invertido = letra + invertido // concatena la letra nueva al inicio
    }
    return invertido;
}

//con metodos
function invertirMetodo(texto){
    return texto.split("").reverse().join('')
}
console.log("Invertido con estructura de control: " +invertir("gerson"));
console.log("Invertido con Metodo: " +invertirMetodo("gerson"));
