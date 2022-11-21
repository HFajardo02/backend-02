const originales = [1, 2, 3, 4, 5]

const myMap = (array, callback) => {
    
    const newArray = []
    for (const element of array) {
        const newElement = callback(element)
        newArray.push(newElement)
    }

    return newArray

}

const newArray = myMap(originales, x => x * 2)

console.log(newArray);


Array.prototype.print = function () {
    console.log("Imprimir valores");
}

const miListaGenerada = [1, 2, 3, 4, 5]
const mascotas



Array.prototype.myMap = callback => {
    
    const newArray = []
    for (let i=0; i< this.length; i++) {
        const element = this(i);
        const newElement = callback(element)
        newArray.push(newElement)
    }

    return newArray
}

const miLista = [1, 2, 3, 4, 5]
