/*
Dado un numero mostrar todos los numeros desde ese
al 0  de 8 en 8
en una lista con guiones donde cada numero debe empezar por c

Como hacerlo:
-Funcion que reciba un numero
-Inicializar variable con encabezado
-Bucle del numero al 0
-Concatenar guion, nº, numero y salto de linea
-Restar 8
Concatenar FIN
 */
function hastaCero(numero){
    let resultado = `--- Del ${numero} al 0 --- \n`;
    while (numero > 0){
        resultado += `- nº ${numero} \n`
        numero -= 8;
    }
    if (numero <= 0){
        resultado += "- nº 0 \n";
    }
    resultado += "---FIN---"
    return resultado;
}

console.log(hastaCero(100))
