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

    await manager.updateProductIdx (4, {

        title: 'Producto4 Act',
        description: 'Descripcion4 Act',
        price: 400,
        thumbnail: 'Thumbnail4 Act',
        code: 'Codido4 Act',
        stock: 400

    })

    //Descomentar para probar borrar producto por ID
    //await manager.deleteProduct (4)

    console.log(await manager.getProducts());

})()
