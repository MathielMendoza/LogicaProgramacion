/*
Enunciado:
Dados 2 numeros, devolver cuantos números impares hay entre ellos.

Como hacerlo:
-Funcion que reciba los 2 numeros
-Bucle de numero1 al numero2
-condicion, si el resto es distinto a 0 es impar
-aumentar en 1 el contador
-Devolver contador
*/

function impares(num1, num2){
    let contador = 0;
    while (num1 < num2){
        if (num1 % 2 !== 0) contador++
            num1++;
    }
    return contador;
}

console.log("Numeros impares:",impares(1,10))