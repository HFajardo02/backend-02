const { response } = require('express')

const ProductosDaoMemoria = require('../daos/ProductosDaoMemoria.js')

const productosDaoArchivo = new ProductosDaoMemoria()


const getProducts = async (req, res = response) => {
    const productos = await productosDaoArchivo.getAll()
    
    res.json({
        productos
    })
}

const getProductById = async (req, res = response) => {
    const { id } = req.params
    const producto = await productosDaoArchivo.getById(id)
    res.json({
        producto
    })
}

const postProduct = async (req, res = response) => {
    const { title, price, thumbnail } = req.body
    if (title && price && thumbnail) {
        const producto = await productosDaoArchivo.save({ title, price, thumbnail })
        res.json({
            msg: 'Producto Guardado',
            producto
        })
    }   
}

// put product
const putProduct = async (req, res = response) => {
    const id  = parseInt(req.params.id)
    const { title, price, thumbnail } = req.body
    if (title && price && thumbnail) {
        const producto = await productosDaoArchivo.updeteById({ id, title, price, thumbnail })
        res.json({
            msg: 'producto actualizado',
            producto
        })
    }
}

// delete product
const deleteProduct = async (req, res = response) => {
    const id  = parseInt(req.params.id)
    const producto = await productosDaoArchivo.deleteById(id)
    res.json({
        msg: 'producto eliminado',
        producto
    })
}

// delete all products
const deleteAllProducts = async (req, res = response) => {
    const productos = await productosDaoArchivo.deleteAll()
    res.json({
        msg: 'todos los productos eliminados',
        productos
    })
}




module.exports = {
    getProducts,
    getProductById,
    postProduct,
    putProduct,
    deleteProduct,
    deleteAllProducts
}
