// EJERCICIO 1
// function dividirCola(colores) {
//     // Se crean dos colas vacías para almacenar los elementos de índice par e impar.
//     let colaPar = [];
//     let colaImpar = [];

//     // Se recorre la cola original utilizando un bucle for.
//     for (let i = 0; i < colores.length; i++) {
//         // Se verifica si el índice es par o impar usando el operador de módulo (%).
//         if (i % 2 === 0) {
//             // Si el índice es par, se añade el elemento a la colaPar.
//             colaPar.push(colores[i]);
//         } else {
//             // Si el índice es impar, se añade el elemento a la colaImpar.
//             colaImpar.push(colores[i]);
//         }
//     }

//     // Se devuelve un objeto con las dos colas resultantes.
//     return { colaPar, colaImpar };
// }

// // Se define la cola original.
// const colaOriginal = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];

// // Se llama a la función para dividir la cola original.
// const resultado = dividirCola(colaOriginal);

// // Se imprime en la consola el resultado, que son las dos colas resultantes.
// console.log("Cola 1:", resultado.colaPar);
// console.log("Cola 2:", resultado.colaImpar);

// EJERCICIO 2
// function guardia(fila) {
//     return fila.filter(elemento => elemento.ticket);
// }

// function colados(adios){
//     return adios.filter(elemento=>elemento.ticket ==false);
// }

// o

// function colados(adios){
    // return cola.filter(elemento => !elemento.ticket);
// }

// let cola = [ 
//     { user: 'User1', ticket: true },
//     { user: 'User2', ticket: true },
//     { user: 'User3', ticket: false },
//     { user: 'User4', ticket: true },
//     { user: 'User5', ticket: false },
//     { user: 'User6', ticket: false },
//     { user: 'User7', ticket: true },
//     { user: 'User8', ticket: true },
//     { user: 'User9', ticket: true },
//     { user: 'User10', ticket: false },
//     { user: 'User11', ticket: true },
// ];

// console.log(`Cola inicial:`,cola);

// const coladosResultado = colados(cola);
// console.log(`Elementos que fueron retirados de la cola:`,coladosResultado);

// const guardiaResultado = guardia(cola);
// console.log(`Cola final:`,guardiaResultado);

// OTRA FORMA DE HACERLO
// function retirarColados(cola) {
//     const colaInicial = [...cola]; // Copiamos la cola inicial para mostrarla
//     const colaFinal = [];

//     while (cola.length > 0) {
//         const persona = cola.shift(); // Desencolamos el primer elemento

//         if (persona.ticket) {
//             colaFinal.push(persona); // Si tiene ticket, lo volvemos a encolar en la cola final
//         } else {
//             // Si no tiene ticket, se considera como retirado
//             console.log(`Se retiró a ${persona.user} de la cola.`);
//         }
//     }

//     return { colaInicial, colaFinal };
// }

// // Cola proporcionada
// let cola = [ 
//     { user: 'User1', ticket: true },
//     { user: 'User2', ticket: true },
//     { user: 'User3', ticket: false },
//     { user: 'User4', ticket: true },
//     { user: 'User5', ticket: false },
//     { user: 'User6', ticket: false },
//     { user: 'User7', ticket: true },
//     { user: 'User8', ticket: true },
//     { user: 'User9', ticket: true },
//     { user: 'User10', ticket: false },
//     { user: 'User11', ticket: true },
// ];

// console.log('Cola Inicial:', cola);

// const resultado = retirarColados(cola);

// console.log('Cola Final:', resultado.colaFinal);