const express = require('express')
const app = express()
const products = require('./src/product_manager')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


/* PETICION GET PARA OBTENER PRODUCTOS */
app.get('/products', async(req, res) => {
    let limit = req.query?.limit
    try {
        let prods = await products.getProducts(limit)
        if (!prods) {
            return res.status(404).send({error: 'not found'})
        }
        return res.status(200).send(prods)
    } catch(error) {
        return res.status(500).send(error.message)
    }
})
//el método getProducts se modificó para que admita un limit

/* PETICION GET PARA OBTENER UN PRODUCTO */
app.get('/products/:id', async(req, res) => { 
    let { id } = req.params 
    try {
        let one = await products.getProductById(Number(id)) 
        if (!one) {
            return res.status(404).send({error: 'not found'})
        }
        return res.status(200).send(one)
    } catch(error) {
        return res.status(500).send(error.message)
    }
})

/* PETICION POST PARA CREAR UN PRODUCTO */
app.post('/products', async(req, res) => {
    let { title,description,price,code,stock,thumbnail } = req.body
    try {
        let prod = await products.addProduct({ title,description,price,code,stock,thumbnail })
        return res.status(200).send(prod)
    } catch(error) {
        return res.status(500).send(error.message)
    }
})

/* PETICION PUT PARA MODIFICAR UN PRODUCTO */
app.put('/products/:id', async(req, res) => {
    let { id } = req.params
    try {
        let prod = await products.updateProduct(Number(id),req.body)
        if (!prod) {
            return res.status(404).send({error: 'not found'})
        }
        return res.status(200).send(prod)
    } catch(error) {
        return res.status(500).send(error.message)
    }
})

/* PETICION DELETE PARA ELIMINAR UN PRODUCTO */
app.delete('/products/:id', async(req, res) => {
    let { id } = req.params
    try {
        let prod = await products.deleteProduct(Number(id))
        if (!prod) {
            return res.status(404).send({error: 'not found'})
        }
        return res.status(200).send(prod)
    } catch(error) {
        return res.status(500).send(error.message)
    }
})






app.set('port',8080)

app.listen(
    app.get('port'),
    () => {console.log('SERVER READY ON PORT: '+app.get('port'))}
)