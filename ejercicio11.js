/*
Enunciado:
Dado un texto y una busqueda, censurar todas las coincidencias
de la busqueda en el texto con [-CENSURADO-]

Como hacerlo:
-Funcion que reciba un texto y una busqueda
-Condiciones en el caso de que algun parametro de false
-Remplazar la busqueda por [-CENSURADO-] en el texto
 */

function censurado(texto=false,busqueda=false){
    let resultado = "";
    if (!texto && !busqueda){
        resultado = "No puedes leer el texto y la busqueda";
    }else if(!texto && busqueda){
        resultado = "No puedes leer texto";
    }else if(texto && !busqueda){
        resultado = "No puedes hacer la busqueda";
    }else if (texto && busqueda){
        resultado = texto.replace(new RegExp(busqueda,'gi'),"[-CENSURADO-]")
    }
    return resultado;
}

console.log(censurado("hola78 holamanola holacarabola soy gerson","hola"));
