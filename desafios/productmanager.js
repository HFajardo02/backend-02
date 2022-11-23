class ProductManager {

    constructor () {
        this.products = []
    }

    getProducts = () => {return this.products}

    getProductById = () => {
        const count = this.products.length
        if (count == 0) return 1

        const lastProduct = this.products[count-1]
        const lastID = lastProduct.id
        const nextID = lastID + 1
        // const nextID = (amount > 0) ? this.products[amount - 1].id + 1 : 1; 

        return nextID
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const id = this.getProductById()
    
        const product = {
            id,
            title,          //(nombre del producto)
            description,    //(descripción del producto)
            price,          //(precio)
            thumbnail,      //(ruta de imagen)
            code,           //(código identificador)
            stock           //(número de piezas disponibles)
        }

        this.products.push(product)
    }

    addCode = (productID, code) => {
        const product = this.products.find(product => product.id == productID)
        if(product == undefined) return -1

        if(!product.code.includes(code)) {
            product.code.push(code)
            return 1
        }

        return -1
    }

}

const manager = new ProductManager()
manager.addProduct("Producto1", "DescProducto1", 100, "Sin imagen", "CodeProducto1", 100)
manager.addProduct("Producto2", "DescProducto2", 200, "Sin imagen", "CodeProducto2", 200)
manager.addProduct("Producto3", "DescProducto3", 300, "Sin imagen", "CodeProducto3", 300)

manager.addCode(1, 333)

console.log(manager.products);