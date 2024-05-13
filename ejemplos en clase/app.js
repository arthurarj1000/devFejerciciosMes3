//SPREAD OPERATOR
function prueba(pelotas, ...tiposDePelotas){
    console.log("Estas son las pelotas" + pelotas);
    console.log(tiposDePelotas);
}

prueba(" que más me gusta", "voley", "dick", "basketball");