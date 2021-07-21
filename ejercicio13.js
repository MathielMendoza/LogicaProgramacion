/*
Dado un array, dividirlo en tantos sub-arrays
como sea necesario basandonos en un numero que indique su tamaño.

Como hacerlo:
- Crear una funcion que reciba los dos parametros
- Crear un array
- Recorrer array e ir añadiendo sub-arrays
 */

function divideArray(arregloPrincipal,numeroElementos) {
    let arreglos = [];
    for (let elemento of arregloPrincipal) {
       let ultimo = arreglos[arreglos.length - 1];
        if (!ultimo || ultimo.length === numeroElementos){
           arreglos.push([elemento])
       }else{
           ultimo.push(elemento);
        }
    }
    return arreglos
}

console.log(divideArray([7,8,9,10,4,8,9,10,20],4))