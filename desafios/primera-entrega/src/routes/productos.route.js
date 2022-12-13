const express = require('express')
const { getProducts, postProduct, putProduct, deleteProduct, deleteAllProducts } = require('../controllers/products.js')


const { Router } = express

const routerProductos = Router()



routerProductos.get('/', getProducts)

routerProductos.post('/', postProduct )

routerProductos.put('/:id', putProduct)

routerProductos.delete('/:id', deleteProduct)

routerProductos.delete('/', deleteAllProducts)



module.exports = routerProductos
