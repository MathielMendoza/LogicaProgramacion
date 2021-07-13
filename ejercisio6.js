/*
Enunciado:
Dibujar un cuadrado hueco con asteriscos.

Como hacerlo:
-Funcion para crear el lado de arriba y abajo del cuadrado.
-Funcion que haga los lados y el hueco del cuadrado.
-Bucle de 0 al tamaño del lado menos 2 para equilibrar con el lado de arriba y abajo.
-Bucle para pintar los espacios, menos 2 para equilibrar con el asterisco de izq. y derec.
-Ir concatenando en una variable cada linea del cuadrado.
-Mostrar el cuadrado en la funcion principal
*/
function lado(numero) {
    let lado = "";
    for (let i = 0; i < numero; i++) {
        lado += "*"
    }
    return lado;
}

function cuadrado(numero) {
    //lado arriba
    let dibujo = lado(numero) + "\n";
    let contenido = "";
    //filas
    for (let i = 0; i < (numero - 2); i++) {
        contenido = "*";
        //contenido hueco
        for (let x = 0; x < (numero - 2); x++) {
            contenido += " "
        }
        contenido += "*";
        //agregar fila al dibujo
        dibujo += contenido + "\n";
    }
    //lado abajo
    dibujo += lado(numero);
    return dibujo;
}

console.log(cuadrado(3))
