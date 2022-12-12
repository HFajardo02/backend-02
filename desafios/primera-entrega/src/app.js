const express = require('express')

const routerCarrito = require('./src/routes/carrito.route.js')
const routerProductos = require('./src/routes/productos.route.js')


const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)


app.set('port',8080)

app.listen(
    app.get('port'),
    () => {console.log('SERVER READY ON PORT: ' + app.get('port'))}
)