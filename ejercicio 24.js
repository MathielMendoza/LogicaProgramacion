/*
Dado un array de enteros y un numero, detectar si esa lista
de numeros es una permutacion del 1 al numero aportado.

En este caso una permutacion es una secuencia de numeros
en orden sin que falte ningun numero entre ellos.

Ejemplo:
permutacion([1,2,3,4,5],5) //Devuelve: true
permutacion([1,2,3,5],5)   //Devuelve: false

Como hacelo:
- Crear una funcion con parametros secuencia y numero
- Bucle del 0 al numero.
- Return false si el nuemero actual + 1, no se encuentra
- Si salimos del bucle, devolver true
 */

const permutation = (succession,num) => {
    for (let i = 0; i < num; i++) {
        console.log({number: i + 1},{position:succession.indexOf(i + 1)});
        if (succession.indexOf(i + 1) < 0){
            return false;
        }
    }
    return true;
};
console.table({permutation:permutation([1,2,3,4,5,6],5)});