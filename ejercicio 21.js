/*
Dado una cadena de texto y un numero, recortar el string
mostrando los x primeros caracteres.

Ejemplo:
recortar('Cursos Desarrollo Web',6) //Devuelve: 'Cursos'
-Como hacerlo:
*Crear una funcion con parametros texto y hasta
*Comprobar que los datos son correctos
*Recortar string con substr
*Devolver resultado
 */

const cropText = (text,to) => {
    return (typeof text === 'string' && typeof to === 'number')
        ? text.substring(0,to)
        : 'The data entered isn\'t valid';
};
console.table({cropText_true:cropText('Cursos Desarrollo Web',6)});
console.table({cropText_false:cropText(6,'cursos')});