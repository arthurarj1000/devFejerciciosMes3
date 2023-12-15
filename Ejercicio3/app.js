// EJERCICIO 1
// Muchas complicaciones para poder conectar el DOM con el script para asì manipularlo.
// Todo para poder mostrar los datos y la actualización de estos en el DOM. 
// Para lo anterior, mejor utilizar REACT.
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento donde deseas mostrar los nombres
    const contenedorDatos = document.getElementById("mostrarDatos");

    // Crear un elemento de lista (ul)
    const lista = document.createElement("ul");

    // Datos de ejemplo (inicializados como strings)
    let datos = ["pollo", "carne", "zanahoria", "papa"];

    // Iterar sobre el array y agregar cada nombre como un elemento de lista (li)
    datos.forEach(dato => {
        const listItem = document.createElement("li");
        listItem.textContent = dato;
        lista.appendChild(listItem);
    });

    // Agregar la lista al contenedor
    contenedorDatos.appendChild(lista);

    // Función para insertar un nuevo dato
    window.insertar = function () {
        let conseguirDato = document.querySelector("input[type='text']");
        let guardarDato = conseguirDato.value.trim(); // Trim para eliminar espacios en blanco al principio y al final

        if (guardarDato !== "") {
            // Solo agregar si el valor no está vacío
            datos.push(guardarDato);

            // Actualizar la lista en el DOM
            const nuevoItem = document.createElement("li");
            nuevoItem.textContent = guardarDato;
            lista.appendChild(nuevoItem);

            // Limpiar el campo de entrada después de agregar
            conseguirDato.value = "";
        } else {
            console.log("Ingrese un valor válido.");
        }
    };
});

// ES MÁS FÁCIL HACERLO CON console.log.