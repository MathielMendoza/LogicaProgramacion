/*
Enunciado:
Cuanto es el x por ciento de x numero?

Como hacerlo:
-Funcion con parametros "Porcentaje" y "numero"
-Crear una variable para la operacion del porcentaje
-Devolver string que responda a la pregunta del enunciado
 */

const porcentaje = (porcentaje, numero) => {
    let operacion = (porcentaje * (numero / 100))
    return `El ${porcentaje}% de ${numero} es: ${operacion}`
}
console.log(porcentaje(5, 100))
