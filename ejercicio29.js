/*
Dado un numero, indica si es un numero capicua o no.
Los numeros capicua se leen igual de izquierda a derecha y viceversa

Ejemplos>
isCapicuaNumber(2002); // Devuelve: True
isCapicuaNumber(2014); // Devuelve False

Como hacerlo:
- Crear una funcion que reciba un numero.
- Convertir a string.
- Convertir numero en array de numeros
- Darle la vuelta.
- Unirlo y convertirlo a entero
 */

const isNumber = data => typeof data === 'number' && data >= 0;

const isCapicuaNumber = num => {
    return isNumber(num)
        ? num === parseInt(num.toString().split('').reverse().join(''))
        : `El dato "${num}" ingresado no es un numero valido!`
}
console.log(isCapicuaNumber(2002))
