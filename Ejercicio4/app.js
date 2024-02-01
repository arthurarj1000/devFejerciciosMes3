// EJERCICIO 1
function sonIdenticos(arbolA, arbolB) {
    if (!arbolA && !arbolB) {
        console.log("Los árboles son idénticos.");
        return true; // Ambos árboles son nulos, son idénticos
    }
    if (!arbolA || !arbolB) {
        console.log("Los árboles no son idénticos.");
        return false; // Uno de los árboles es nulo y el otro no, no son idénticos
    }
    if (arbolA.valor === arbolB.valor &&
        sonIdenticos(arbolA.izquierda, arbolB.izquierda) &&
        sonIdenticos(arbolA.derecha, arbolB.derecha)) {
        console.log("Los árboles son idénticos.");
        return true;
    } else {
        console.log("Los árboles no son idénticos.");
        return false;
    }
}

// EJERCICIO 2
function copiarArbol(arbol) {
    if (!arbol) {
        return null;
    }
    let nuevoArbol = {
        valor: arbol.valor,
        izquierda: copiarArbol(arbol.izquierda),
        derecha: copiarArbol(arbol.derecha)
    };
    return nuevoArbol;
}

// EJERCICIO 3
function nodosEnNivel(arbol, nivel) {
    if (!arbol) {
        return [];
    }
    if (nivel === 1) {
        console.log("Valor en nivel " + nivel + ": " + arbol.valor);
        return [arbol.valor];
    }
    let nodos = [];
    nodos = nodos.concat(nodosEnNivel(arbol.izquierda, nivel - 1));
    nodos = nodos.concat(nodosEnNivel(arbol.derecha, nivel - 1));
    return nodos;
}

// EJERCICIO 4
function numeroHojas(arbol) {
    if (!arbol) {
        return 0;
    }
    if (!arbol.izquierda && !arbol.derecha) {
        return 1; // El nodo actual es una hoja
    }
    return numeroHojas(arbol.izquierda) + numeroHojas(arbol.derecha);
}

console.log("Ejemplo de árboles:");
let arbolA = {
    valor: 1,
    izquierda: {
        valor: 2,
        izquierda: null,
        derecha: null
    },
    derecha: {
        valor: 3,
        izquierda: null,
        derecha: null
    }
};

let arbolB = copiarArbol(arbolA);

console.log("Son idénticos:");
sonIdenticos(arbolA, arbolB);

console.log("Nodos en nivel 2:");
nodosEnNivel(arbolA, 2);

console.log("Número de hojas en arbolA:");
console.log(numeroHojas(arbolA));