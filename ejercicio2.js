/*
Enunciado:
Dada una cadena de texto, comprobar si es un palindromo o no.No tener en cuenta espacios o simbolos raros
Como hacerlo:
-Funcion con parametro "texto"
-Separar el texto en un array de letras
-Darle la vuelta
-Unir el array de letras en un string y comparar con el parametro
*/

const palindrome = (text) => text === text.split('').reverse().join('');
console.log('is it a palindrome? ' + palindrome('bobe'));