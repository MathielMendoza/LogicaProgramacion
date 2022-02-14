/*
DAda una cadena de texto, poner en mayusculas la primer letra
de cada palabra en la cadena y luego devolver la cadena

Ejemplo:
enMayuscula('hola soy victor') //Devuelve: 'Hola Soy Victor'

Como hacerlo:
- Crear una funcion con parametro texto
- Poner la primera letra del string en mayusculas
- Recorrer el string completo
- Devolver el resultado
 */

const upperCaseFirstLetter = (text) => {
      return text
       .toLowerCase()
       .split(' ')
       .map( (word) => { return word[0].toUpperCase() + word.substring(1)} )
       .join(' ');
};
console.log(upperCaseFirstLetter('hola soy gerson mendoza'));
console.log(upperCaseFirstLetter('gerson mathiel mendoza hernandez'));
