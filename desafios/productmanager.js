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

}

const manager = new ProductManager()
manager.addProduct("Producto1", "DescProducto1", 100, "Sin imagen", "CodeProducto1", 100)
manager.addProduct("Producto2", "DescProducto2", 200, "Sin imagen", "CodeProducto2", 200)
manager.addProduct("Producto3", "DescProducto3", 300, "Sin imagen", "CodeProducto3", 300)


console.log(manager.products);