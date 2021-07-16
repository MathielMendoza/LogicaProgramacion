/*
Enunciado:
Dado un numero, mostrar una escalera con escalones de "[-]"
usando el numero para los niveles de la escalera

como hacerlo:
-Funcion que reciba un numero
-Recorrer el numero de escaleras
-En cada iteracion pintar los escalones de ese nivel
-Haciendo un bucle desde 1 hasta el nivel en el que estamos
*/

function escalera(number) {
    let escaleraCompleta = "";
    for (let nivel = 1; nivel <= number; nivel++) {
        let escalones = "";
        for (let escalon = 1; escalon <= nivel; escalon++) {
            escalones += "[-]";
        }
        escaleraCompleta += escalones + '\n';
    }
    return escaleraCompleta;
}

console.log(escalera(10))
