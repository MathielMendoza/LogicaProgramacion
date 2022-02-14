/*
Dado un numero, mostar a cuantos anios, meses y dias equivalen.

Ejemplos:
calcularDias(920)

Equivale a 2 anios, 6 meses y 10 dias

Como hacerlo:
- Crear una funcion con parametro dias
- Divisiones para sacar anios, mese y dias
 */

const calculateDays = (days = 0) => {
    if (typeof days !== 'number' || days <= 0) {
        return `El dato ${days} ingresado no es un numero valido!`
    } else {
        let year = Math.floor(days / 365);
        let month = Math.floor((days % 365) / 30);
        let day = ((days % 365) - (month * 30));
        return `${days} dia(s) es equivalente a ${year} anio(s), ${month} mese(s) y ${day} dia(s)`;
    }
}

console.log(calculateDays(390))