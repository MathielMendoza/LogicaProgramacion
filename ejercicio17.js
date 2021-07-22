/*
Dado un numero, mostrar los numeros del 1 hasta el numero.
para multiplos de 3 imprimir "buzz",
para multiplos de 5 imprimir "lightyear",
para multiplos de 3 y 5 imprimir "buzzLightyear"

como hacerlo:
- Crear una funcion que reciba el numero.
- Condiciones numero actual multiplo de 3 o 5
- Crear funcion para recorrer y mostrar
- Bucle del 1 al numero
 */

function buzz(numero) {
    let resultado = "";
    if (numero % 3 === 0 && numero % 5 === 0) {
        resultado = "BuzzLightyear";
    } else if (numero % 3 === 0) {
        resultado = "buzz"
    } else if (numero % 5 === 0) {
        resultado = "lighyear"
    } else {
        return numero;
    }
    return resultado;
}

function imprimir(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(buzz(i))
    }
}

imprimir(15)