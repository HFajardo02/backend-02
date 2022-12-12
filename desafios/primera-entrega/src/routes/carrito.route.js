const { Router } = require("express")
const { getCart, postCart, putCart, deleteCart } = require("../controllers/carts")

const routerCarrito = Router()


routerCarrito.get('/', getCart)
routerCarrito.post('/', postCart)
routerCarrito.put('/', putCart)
routerCarrito.delete('/', deleteCart)

module.exports = routerCarrito
