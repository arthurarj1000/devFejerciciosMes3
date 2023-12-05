// EJERCICIO 1
// function obtenerElementos(pila, cantidad) {
//     if (!Array.isArray(pila) || typeof cantidad !== 'number' || cantidad < 0) {
//         // Verifica que la entrada sea válida
//         console.log('Entrada no válida');
//         return [];
//     }

//     // Utiliza el método slice para obtener la cantidad de elementos especificada
//     return pila.slice(0, cantidad);
// }

// // Ejemplo de uso
// const miPila = ['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'];
// const resultado = obtenerElementos(miPila, 4);
// console.log(resultado);

// EJERCICIO 2
// function reemplazar(pila,numberNuevo,numberViejo){
//     let encontrado = false;

//     while (!encontrado && pila.length > 0) {
//       const elemento = pila.pop();
//       if (elemento === numberViejo) {
//         pila.push(numberNuevo);
//         encontrado = true;
//       }
//     }
  
//     return pila;
//   }
  
//   // Ejemplo de uso
//   const resultado = reemplazar([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2);
//   console.log(resultado);

// EJERCICIO 3 
// function trayecto(pueblos){
//     return pueblos;
// }
// const ida=[`Pueblo Origen`,`Pueblo 1`,`Pueblo 2`, `Pueblo Destino`];
// const resultado1= trayecto(ida);
// console.log(`Recorrido de ida:`, resultado1);

// const vuelta=[`Pueblo Destino`,`Pueblo 2`,`Pueblo 1`, `Pueblo Origen`];
// const resultado2= trayecto(vuelta);
// console.log(`Reacorrido de vuelta:`, resultado2);

// OTRA MANERA DE HACERLO, con la posibilidad de cambiar el nombre de los requerimientos, o modficiar el nombre de los destinos segun sea el caso
// function recorridoIda(origen,destino) {
//     let pueblos = [origen, "Pueblo 1", "Pueblo 2", destino];
//     console.log("Recorrido de ida:");
//     console.log(pueblos.join(" → "));
//   }
  
//   function recorridoVuelta(destino,origen) {
//     let pueblos = [destino, "Pueblo 2", "Pueblo 1", origen];
//     console.log("Recorrido de vuelta:");
//     console.log(pueblos.join(" → "));
//   }
  
//   // Llamamos a las funciones con el destino específico
//   recorridoIda(`Mi casa`,"Su casa");
//   recorridoVuelta("Su casa", `Mi casa`);

// EJERCICIO 4
  