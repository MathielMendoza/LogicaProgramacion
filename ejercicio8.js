/*
Enunciado:
Dado un numero entero, inviertelo y devuelve de nuevo el entero

Como hacerlo:
-Funcion que reciba el numero
-Convertir numero en string
-Crear un array por cada letra
-Darle la vuelta
-Unir el array en un string
-Convertir el string en un entero
 */

function invertirNumero(number) {
    let numeroInvertido = parseInt(
        number
            .toString()
            .split('')
            .reverse()
            .join('')
    ) * Math.sign(number)//Math.sign obtiene el simbolo del numero
    console.log(numeroInvertido)
}

invertirNumero(-67)