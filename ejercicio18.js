/*
Dado un numero, mostrar todos sus numeros divisores.

Como hacerlo:
- Crear una funcion si un numero es divisor de otro
- Crear funcion para recorrer y mostrar
 */

function divisor(numero,posibleDivisor) {
    if (numero % posibleDivisor === 0){
        return posibleDivisor;
    }
    return 0;
}
function mostrarDivisores(numero){
    for (let i = 1; i<= numero;i++){
        let esDivisor = divisor(numero,i);
            if(esDivisor) console.log(esDivisor)
    }
}
mostrarDivisores(20)