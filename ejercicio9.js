/*
Enunciado:
Dados 2 arrays, devolver array con solo los elementos comunes entre ambos

Como hacerlo:
-Funcion que reciba dos arrays
-Filtrar array y evaluando una condicion
-Devolver array nuevo
*/

function elementosComunes(arr1,arr2){
    const filtrado = arr1.filter(elem =>{ //filter: recorre cada elemento de arr1
            return arr2.includes(elem); //includes : cada que recorre elem hace una busqueda en arr2
    });
    return filtrado;
}
console.log( elementosComunes([4,5,6,7],[7,8,9,7,5]))//devuelve [5,7]
console.log( elementosComunes(["Gerson","Mathiel","Mendoza","Hernandez"],["Allen","Jafet","Mendoza","Rodriguez","Principe"]))//devuelve [5,7]