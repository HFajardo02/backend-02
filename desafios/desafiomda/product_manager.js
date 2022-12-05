const fs = require ('fs')

class ProductManager {

    constructor (path) {
        this.path = path
    }

    read = () => {
        if (fs.existsSync(this.path)) {
            return fs.promises.readFile(this.path, 'utf-8').then (r => JSON.parse(r))
        }

        return[]
    }

    getNextID = list => {
        const count = list.length
        return (count > 0) ? list[count-1].id + 1 : 1
    }

    write = list => {
        return fs.promises.writeFile(this.path, JSON.stringify(list))
    }

    getProducts = async () => {
        const data = await this.read()

        return data
    }

    getProducById = async (id) => {
        const products = await this.getProducts();
    
        const productFound = products.find((product) => product.id === id);
    
        return productFound;
    }

    addProduct = async (obj) => {
        const list = await this.read ()
        const nextID = this.getNextID(list)
        obj.id = nextID

        list.push(obj)

        await this.write(list)
    }

    // updateProduct = async (id, obj) => {
    //     obj.id = id
    //     const list = await this.read()

    //     for (let i = 0; i < list.length; i++) {
    //         if (list[i].id == id){
    //             list[i] = obj
    //             break
    //         }
    //     }

    //     await this.write(list)
    // }

    updateProductIdx = async (id, obj) => {
        obj.id = id
        const list = await this.read()

        const idx = list.findIndex(e => e.id == id)
        if (idx < 0) return

        list[idx] = obj
        
        await this.write(list) 
    }

    
    //Delete Product
    deleteProduct = async (id) => {
        const products = await this.getProducts();
    
        const productIndex = products.findIndex((product) => product.id === id);
    
        if (productIndex === -1) throw new NotFoundError("Producto no encontrado");
    
        const deletedProducts = products.splice(productIndex, 1);
    
        await this.write(products);
    
        return deletedProducts[0];
    }


}

module.exports = ProductManager