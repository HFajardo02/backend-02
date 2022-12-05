const ProductManager = require ('./product_manager')

const manager = new ProductManager ('products.json');

(async () => { 
    
    await manager.addProduct({

        title: 'Product1',
        description: 'Description1',
        price: 100,
        thumbnail: 'Thumbnail1',
        code: 'Code1',
        stock: 100

    })

    await manager.updateProductIdx (3, {

        title: 'Producto3 Act',
        description: 'Descripcion3 Act',
        price: 300,
        thumbnail: 'Thumbnail3 Act',
        code: 'Codido3 Act',
        stock: 300

    })

    console.log(await manager.getProducts());

})()
