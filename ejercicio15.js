/*
Dada una cadena de texto, devolver el caracter mas usado.

Como haccerlo:
- Crear una funcion que reciba el texto
- Mapear letras en un json
- Recorremos el mapeo
- Hacemos condicion para ver que contador es mayor
 */

function masUsado(texto){
    let mapeoLetras = {};
    let maxRepeticiones = 0;
    let letraMasRepetida = "";
    for (let letra of texto) {
        if(!mapeoLetras[letra]){
            mapeoLetras[letra] = 1;
        }else{
            mapeoLetras[letra]++;
        }
    }
    for (let mapeoLetrasKey in mapeoLetras) {
        if (mapeoLetras[mapeoLetrasKey].toString().trim().length === 1 && mapeoLetras[mapeoLetrasKey] >= maxRepeticiones){
            maxRepeticiones = mapeoLetras[mapeoLetrasKey];
            letraMasRepetida += mapeoLetrasKey;
        }
    }
    return letraMasRepetida;
}

console.log("La letra mas repetida es:", masUsado("anita lava la tina"))