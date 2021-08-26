/*
Dado un array de objetos de peliculas (titulo, director, vista)
mostrar las peliculas indicando cual has visto y cual no

Como hacerlo:
- Crear un array de objetos
- Crear funcion para recorrer y mostar
 */


function misPeliculas(peliculas){
    for (const pelicula of peliculas) {
        let paraMostrar = `"${pelicula.titulo} de ${pelicula.director}"`;
            if(pelicula.vista){
                console.log("Ya has visto:", paraMostrar)
        }else  {
                console.log("Te falta por ver:", paraMostrar)
            }
    }
    return peliculas;
}

const colecionPeliculas = [
    {
        titulo: "El señor de los anillo",
        director: "Peter Jackson",
        vista:true
    },{
        titulo: "La liga de la justicia",
        director: "Zack Snyder",
        vista:false
    },{
        titulo: "Los vengadores: EndGame",
        director: "Joe Ruso",
        vista:true
    },{
        titulo: "Superman",
        director: "Zack Snyder",
        vista:false
    }
];

console.log(misPeliculas(colecionPeliculas))