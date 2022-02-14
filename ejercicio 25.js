/*
Dado un string, ponerlo completo en mayusculas o
minusculas por defecto en el string.
si hay mas mayusculas poner todas las letras en mayus.
si hay mas minusculas poner todas las letras en minus.

Ejemplos:
mayusMinus('JOAQuin') // Devuelve: JOAQUIN
mayusMinus('Victor') //Devuelve: victor

Como hacerlo:
- Crear una funcion con parametro texto
- Crear 2 contenedores para mayus y minus.
- Recorrer el texto y comprobar si
las letras que vamos recorriendo con mayus.
- Aumentar contadores
- Convertir a mayus o minus y devolver resultado.
*/

const upperCaseOrLowerCase = (text='') => {
    let uprCase =0;
    let lwrCase = 0;
    let num = 0;
    let other = 0;
    for (let textElement of text) {
        (/[A-Z]/.test(textElement))
            ? uprCase++
            : (/[a-z]/).test(textElement)
                ? lwrCase++
                : (/^[0-9]+$/).test(textElement)
                    ? num++
                    : other++;
    }
    return (uprCase > lwrCase)
        ? {Text:text.toUpperCase(),UpperCase:uprCase,LowerCase:lwrCase,Number:num,Other:other}
        : {Text:text.toLowerCase(),UpperCase:uprCase,LowerCase:lwrCase,Number:num,Other:other};
};
console.log(upperCaseOrLowerCase('gerson MENDOZA 123 @*?><'));
console.log(upperCaseOrLowerCase('gerson meNDOZA 123.3 @*?><'));


