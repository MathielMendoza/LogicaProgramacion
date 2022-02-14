/*
Enunciado:
Dado un numero imprimir en pantalla su tabla de multiplicar
Como hacerlo:
-Funcion con parametro "numero"
-Variable con texto encabezado
-Bucle del 1 al 10.
-Concatenar a la variable string con multiplicacion y su resultado
*/

const multiplicationTable = (number= 0) => {
    let result = `# Table of ${number} #`;
    for (let i = 1; i <= 10; i++) {
        result += `\n${number} * ${i} = ${number*i}`
    }
    return result;
}

console.log(multiplicationTable(2))