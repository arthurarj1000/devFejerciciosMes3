// // EJERCICIO 1
// // Muchas complicaciones para poder conectar el DOM con el script para asì manipularlo.
// // Todo para poder mostrar los datos y la actualización de estos en el DOM. 
// // Para lo anterior, mejor utilizar REACT.
// document.addEventListener("DOMContentLoaded", function () {
//     // Obtener el elemento donde deseas mostrar los nombres
//     const contenedorDatos = document.getElementById("mostrarDatos");

//     // Crear un elemento de lista (ul)
//     const lista = document.createElement("ul");

//     // Datos de ejemplo (inicializados como strings)
//     let datos = ["pollo", "carne", "zanahoria", "papa"];

//     // Iterar sobre el array y agregar cada nombre como un elemento de lista (li)
//     datos.forEach(dato => {
//         const listItem = document.createElement("li");
//         listItem.textContent = dato;
//         lista.appendChild(listItem);
//     });

//     // Agregar la lista al contenedor
//     contenedorDatos.appendChild(lista);

//     // Función para insertar un nuevo dato
//     window.insertar = function () {
//         let conseguirDato = document.querySelector("input[type='text']");
//         let guardarDato = conseguirDato.value.trim();
    
//         if (guardarDato !== "") {
//             // Verificar si el dato ya está en la lista
//             if (!datos.includes(guardarDato)) {
//                 // Solo agregar si el valor no está en la lista
//                 datos.push(guardarDato);
    
//                 // Actualizar la lista en el DOM
//                 const nuevoItem = document.createElement("li");
//                 nuevoItem.textContent = guardarDato;
//                 lista.appendChild(nuevoItem);
    
//                 // Limpiar el campo de entrada después de agregar
//                 conseguirDato.value = "";
//             } else {
//                 console.log("El dato ya está en la lista.");
//             }
//         } else {
//             console.log("Ingrese un valor válido.");
//         }
//     }
// });
// // ES MÁS FÁCIL HACERLO CON console.log.

// EJERCICIO 2
// document.addEventListener("DOMContentLoaded", function () {
//     let arrayRandom = []; // Array vacío para guardar los números random
//     let arrayRandom2 = []; // Array vacío para guardar los números random

//     // Generar 10 números aleatorios y agregarlos al arrayRandom
//     for (let i = 0; i < 10; i++) {
//         const numeroAleatorioEntero = Math.floor(Math.random() * 100) + 1;
//         arrayRandom.push(numeroAleatorioEntero);
//     }
//     for (let i = 0; i < 10; i++) {
//         const numeroAleatorioEntero = Math.floor(Math.random() * 100) + 1;
//         arrayRandom2.push(numeroAleatorioEntero);
//     }


//     //Desde donde empezamos la inserción
//     let indice = arrayRandom[9];
//     let indice2 = arrayRandom2[9];


//     // Generar 10 números incrementados a partir del noveno elemento de arrayRandom
//     for (let i = 0; i < 10; i++) {
//         indice++;
//         arrayRandom.push(indice);
//     }
//     for (let i = 0; i < 10; i++) {
//         indice2++;
//         arrayRandom2.push(indice2);
//     }

//     console.log(arrayRandom); // Imprimir el array que contiene los números random
//     console.log(arrayRandom2); // Imprimir el array que contiene los números random

//     //Array para guardas los NODOS superiores al valor determinado
//     guardarNodosArray=[];
//     guardarNodosArray2=[];


//     for (let i = 0; i < arrayRandom.length; i++) {
//         // Accede a cada elemento del array usando array[i]
//         if(arrayRandom[i]>50){
//             guardarNodosArray.push(arrayRandom[i]);
//             console.log(arrayRandom[i]);
//         }
//     }
//     for (let i = 0; i < arrayRandom2.length; i++) {
//         // Accede a cada elemento del array usando array[i]
//         if(arrayRandom2[i]>80){
//             guardarNodosArray2.push(arrayRandom2[i]);
//             console.log(arrayRandom2[i]);
//         }
//     }


//     // Metodó para crear la lista y mostrar la lista en la página
//     window.mostrarLista = function () {
//         const contenedorLista = document.getElementById("mostrarLista");
//         const listaRandoms = document.createElement("ul");

//         arrayRandom.forEach(dato => {
//             const listItem = document.createElement("li");
//             listItem.textContent = dato;
//             listaRandoms.appendChild(listItem);
//         });

//         contenedorLista.innerHTML = ""; // Limpiar contenido anterior
//         contenedorLista.appendChild(listaRandoms);
//     };
//     mostrarLista(); // Llamada automática al cargar la página

//     window.mostrarLista2 = function () {
//         const contenedorLista2 = document.getElementById("mostrarLista2");
//         const listaRandoms2 = document.createElement("ul");

//         arrayRandom2.forEach(dato => {
//             const listItem = document.createElement("li");
//             listItem.textContent = dato;
//             listaRandoms2.appendChild(listItem);
//         });

//         contenedorLista2.innerHTML = ""; // Limpiar contenido anterior
//         contenedorLista2.appendChild(listaRandoms2);
//     };
//     mostrarLista2(); // Llamada automática al cargar la página
// });


//     // Metodó para que los botones funciones y muestren la lista de los NODOS SUPERIORES AL VALOR DETERMINADO y mostrar la lista en la página
//     window.mostrarNodosSuperiores = function () {
//         const contenedorListaNodos = document.getElementById("mostrarListaNodosSuperiores");
//         const listaNodos = document.createElement("ul");

//         guardarNodosArray.forEach(dato => {
//             const listItem = document.createElement("li");
//             listItem.textContent = dato;
//             listaNodos.appendChild(listItem);
//         });
//         contenedorListaNodos.innerHTML = ""; // Limpiar contenido anterior
//         contenedorListaNodos.appendChild(listaNodos);
//     };
//     window.mostrarNodosSuperiores2 = function () {
//         const contenedorListaNodos2 = document.getElementById("mostrarListaNodosSuperiores2");
//         const listaNodos2 = document.createElement("ul");

//         guardarNodosArray2.forEach(dato => {
//             const listItem = document.createElement("li");
//             listItem.textContent = dato;
//             listaNodos2.appendChild(listItem);
//         });
//         contenedorListaNodos2.innerHTML = ""; // Limpiar contenido anterior
//         contenedorListaNodos2.appendChild(listaNodos2);
//     };