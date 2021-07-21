/*
Dado un string y un numero, repetir el string tantas veces
como el numero indique.

Como hacerlo_
- Crear funcion que reciba los dos parametros
- Bucle hasta el numero
- Concatenar string
 */

//Funcion clasica
function repiteme(texto, numeroRepeticiones) {
    let resultado = "";
    for (let i = 0; i < numeroRepeticiones; i++) {
        resultado += texto;
    }
    return resultado;
}

console.log(repiteme("gerson",2))

//Funcion prototipo
String.prototype.repiteme = function (numeroRepeticiones){
    let resultado = "";
    for(let i=0; i<numeroRepeticiones;i++){
        resultado += this;
    }
    return resultado;
}

let dara = ["dara","gerson"];
dara.push(dara[0].repiteme(3))
console.log(dara[0].repiteme(5))
console.log(dara[1].repiteme(5))
