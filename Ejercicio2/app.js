// EJERCICIO 1
function dividirCola(colores) {
    // Se crean dos colas vacías para almacenar los elementos de índice par e impar.
    let colaPar = [];
    let colaImpar = [];

    // Se recorre la cola original utilizando un bucle for.
    for (let i = 0; i < colores.length; i++) {
        // Se verifica si el índice es par o impar usando el operador de módulo (%).
        if (i % 2 === 0) {
            // Si el índice es par, se añade el elemento a la colaPar.
            colaPar.push(colores[i]);
        } else {
            // Si el índice es impar, se añade el elemento a la colaImpar.
            colaImpar.push(colores[i]);
        }
    }

    // Se devuelve un objeto con las dos colas resultantes.
    return { colaPar, colaImpar };
}

// Se define la cola original.
const colaOriginal = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];

// Se llama a la función para dividir la cola original.
const resultado = dividirCola(colaOriginal);

// Se imprime en la consola el resultado, que son las dos colas resultantes.
console.log("Cola 1:", resultado.colaPar);
console.log("Cola 2:", resultado.colaImpar);

// EJERCICIO 2