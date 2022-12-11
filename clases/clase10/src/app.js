import  express  from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'


const app = express()

app.engine ('handlebars', handlebars.engine())
app.set('views'.'views')
app.set('view engine', 'handlebars') 

app.get('./', (req, res) => {
    const testUser = {
        name: 'Hector',
        lastname: 'Fajardo'
    }

    res.render('index', testUser) 
})

const server = app.listen(8080, () => console.log('listen on port 8080'))
