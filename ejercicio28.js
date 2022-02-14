/*
Dado un numero, devolver su factorial.
El factorial de un numero es la multiplicacion
de todos los numeros hasta llegar a el.

Factorial del 5:
1 x 2 x 3 x 4 x 5

Ejemplo:
factorial(3); Devuelve: 6

Como hacerlo:
- Crear una funcion con el parametro numero
- Bucle del 1 al numero
- Multiplicar el numero anterior con el actual
- Devolver el resultado
 */

const isNumber = data =>  (typeof data === 'number' && data >= 0)

const factorial = (num) => {
    if (isNumber(num)) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return `El factorial de ${num} es: ${result}`;
    } else {
        return `El dato "${num}" ingresado no es un numero valido!`;
    }
}
console.log(factorial(5));
