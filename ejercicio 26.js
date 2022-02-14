/*
Dado un numero, mostrar su serie de fibonacci.
La serie de fibonacci es un orden de numeros donde
cada numero es la suma de los 2 anteriores.

Ejemplos:
fib(10)[0]
fib(10)[1]

Serie: 0,1,1,2,3,5,8,13,21,34,55
Resultado = 55

Como hacerlo:
- Crear una funcion con parametro numero
- Crear variable con los 2 primeros numeros de la serie
- Bucle desde 2 al numero
- Sumar los 2 anteriores valores al numero actual
- Devolver resultado
 */

const isNumber = data => (typeof data === 'number' && data >= 1)

const fibonacci = (num) => {
    let numRound = Math.round(num);
    let succession = [0, 1];
    if (!isNumber(num)) {
        return `'${num}' it's not a number!`;
    } else {
        for (let i = 2; i <= numRound; i++) {
            succession.push(succession[i - 1] + succession[i - 2]);
        }
    }
    return {Serie: succession, Result: succession[numRound]};

};
//console.log(fibonacci('d'));
console.log(fibonacci(-5));
