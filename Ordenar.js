//input: 10, 30, 9, 7, 15
//1. Crear una rutina que permita ordenar números (ascendente y descendente). Ejemplo

let array = [10, 30, 9, 7, 15]

let ordernarAsc = (arrNumeros) => {
    return arrNumeros.sort( (a, b) => {
        return a - b;
    });
}

console.log(ordernarAsc(array))

//Crea una función recursiva que sea capaz de encontrar un número dentro de una colección.

const numbers = [1,3,6,90,39,4]

let encontrar = (array, numero) => array.find(e => e == numero)

console.log(encontrar(numbers, 39))

