const fs = require('fs');

class ProductManager {

    constructor () {
        //this.products = []
        this.path = 
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


// const fs = require('fs');

// class Contenedor {
// 	constructor(filename) {
// 		this.filename = filename;
// 	}

// 	save = async obj => {
// 		const objs = await this.getAll();
// 		try {
// 			let newId;
// 			objs.length === 0
// 				? (newId = 1)
// 				: (newId = objs[objs.length - 1].id + 1);
// 			const newObj = { ...obj, id: newId };
// 			objs.push(newObj);
// 			await this.writeFile(objs);
// 			return newObj.id;
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	getById = async id => {
// 		const objs = await this.getAll();
// 		try {
// 			const obj = objs.find(obj => obj.id === id);
// 			return obj ? obj : null;
// 		} catch (error) {
// 			console.log(error.message);
// 		}
// 	};

// 	getAll = async () => {
// 		try {
// 			const objs = await fs.promises.readFile(this.filename, 'utf-8');
// 			return JSON.parse(objs);
// 		} catch (error) {
// 			if (error.message.includes('no such file or directory')) return [];
// 			else console.log(error.message);
// 		}
// 	};

// 	deleteById = async id => {
// 		let objs = await this.getAll();
// 		try {
// 			objs = objs.filter(obj => obj.id != id);
// 			await this.writeFile(objs);
// 		} catch (error) {
// 			console.log(error.message);
// 		}
// 	};

// 	deleteAll = async () => await this.writeFile([]);

// 	writeFile = async data => {
// 		try {
// 			await fs.promises.writeFile(
// 				this.filename,
// 				JSON.stringify(data, null, 2)
// 			);
// 		} catch (error) {
// 			console.log(error.message);
// 		}
// 	};
// }

// module.exports = Contenedor;