/*
Enunciado:
Dado un numero imprimir en pantalla su tabla de multiplicar
Como hacerlo:
-Funcion con parametro "numero"
-Variable con texto encabezado
-Bucle del 1 al 10.
-Concatenar a la variable string con multiplicacion y su resultado
*/
function tablaMulti(number){
let result = `# Tabla del ${number} #`;
for (let i = 1; i<= 10;i++){
    let multi = (i*number)
    result += `\n${number} x ${i} = ${multi} `
}
return result;
}

console.log(tablaMulti(8))
