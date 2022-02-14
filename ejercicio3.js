/*
Enunciado:
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella
La frase y la palabra deben ser parametros de una funcion.\
Como hacerlo:
-Funcion con 2 parametros "frase" y "busqueda"
-Poner string en minusculas y limpiarlo.
-Comprobar si la busqueda esta incluida en la frase
-Crear un array de palabras de la frase
-Mapear esas palabras y hacer un contador de cada una
-Devolver el contador de la busqueda
 */

const findWordInText = (sentence = '', search = '') => {
    let lowerCaseText = sentence.toLowerCase().replace(/[!¡.,-]/gi, ''); //Clean Text
    let result = 0;
    if (lowerCaseText.includes(search)) {
        let words = lowerCaseText.split(' ');

        for (let word of words) {
            word === search ? result++ : '';
            //console.log(word, ' : ' ,word === search)
        }
        /*
        let wordCounterCollection = {};
        for (let word of words) {
            wordCounterCollection[word] ? wordCounterCollection[word]++ : wordCounterCollection[word] = 1;
            result = wordCounterCollection[search];
        }*/
    } else {
        result = 0;
    }
    return result;
}
let text = 'En muchas partes del cuerpo como son las manos, las orejas o los pies, están representados todos los órganos y partes del cuerpo. Incidiendo sobre estas zonas se pueden crear arcos reflejos que actúen directamente sobre cualquier órgano del cuerpo y que solucionen cualgquier anomalía que exista.';
let word = 'cuerpo';
console.log(`Total number of matches for the word "${word}" : ` + findWordInText(`${text}`, `${word}`))