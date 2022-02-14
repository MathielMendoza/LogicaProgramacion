/*
-Dados 2 numeros, indicar cual es el mayor y cual es el menor

Ejemplo
mayorMenor(8,6)

//Devuelve:
El nuemero mayor es: 8
EL numero menor es: 6

-Como hacerlo
*Crear una funcion
*condiciones para ver cual es el mayor
*Devolver el resultado
 */

const biggerNumber = (num1= 0,num2= 0) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "it's not a number!";
    }else{
      return  num1 > num2
            ? { bigger : num1 , smallest : num2 }
            : num1 < num2
                ? { bigger : num2 , smallest : num1 }
                : 'The numbers are the same!';
    }
};
console.table( { biggerNumber : biggerNumber('5',7)});
console.table( { biggerNumber : biggerNumber(5,7)});
console.table( { biggerNumber : biggerNumber(5,5)});