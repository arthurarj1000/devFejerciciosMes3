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
// function almacen(contenedor,cambioViejo,cambioNuevo,){
//     let encontrado=false;
//         while (!encontrado && contenedor.length > 0) {
//                const elemento = contenedor.pop();
//                if (elemento === cambioViejo) {
//                 contenedor.push(cambioNuevo);
//                  encontrado = true;
//                }
//              }

//              contenedor.push(`3`,`2`,`1`);
          
//              return contenedor;
// }

// const contenedorTomar=`5`;
// const contenedores=[`10`,`9`,`8`,`7`,`6`,`5`,`4`,`3`,`2`,`1`];
// console.log(`Quiero el contenedor ${contenedorTomar} del almacén:`, contenedores);
// const muevo=[`4`,`3`,`2`,`1`];
// console.log(`Muevo contenedores:`, muevo);
// const contenedorTome=contenedorTomar;
// console.log(`Tomo y me llevo el contenedor:`, contenedorTome);
// const resultado= almacen(contenedores,contenedorTomar,`4`);
// console.log(`Reordenamos contenedores:`,resultado);

// OTRA MANERA DE HACERLO
// class Almacen {
//     constructor(capacidad) {
//       this.capacidad = capacidad;
//       this.pilaContenedores = [];
//     }
  
//     apilarContenedor(id) {
//       if (this.pilaContenedores.length < this.capacidad) {
//         this.pilaContenedores.push(id);
//         console.log(`Contenedor ${id} apilado.`);
//       } else {
//         console.log('El almacén está lleno, no se puede apilar más contenedores.');
//       }
//     }
  
//     retirarContenedorEspecifico(id) {
//       const pilaTemporal = [];
  
//       while (this.pilaContenedores.length > 0) {
//         const contenedorActual = this.pilaContenedores.pop();
  
//         if (contenedorActual === id) {
//           console.log(`Contenedor ${id} retirado.`);
//           break;
//         } else {
//           pilaTemporal.push(contenedorActual);
//         }
//       }
  
//       // Regresar los contenedores a su lugar original
//       while (pilaTemporal.length > 0) {
//         this.pilaContenedores.push(pilaTemporal.pop());
//       }
//     }
  
//     mostrarPilaContenedores() {
//       console.log('Pila de contenedores:', this.pilaContenedores);
//     }
//   }
  
//   // Ejemplo de uso
//   const almacen = new Almacen(5);
  
//   almacen.apilarContenedor(1);
//   almacen.apilarContenedor(2);
//   almacen.apilarContenedor(3);
//   almacen.apilarContenedor(4);
//   almacen.apilarContenedor(5);
  
//   almacen.mostrarPilaContenedores();
  
//   almacen.retirarContenedorEspecifico(3);
  
//   almacen.mostrarPilaContenedores();
  