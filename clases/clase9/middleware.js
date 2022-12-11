import express from 'express'

const app = express ()

app.use (function (req, res, next){
    if (req.query.name == 'maxi')
    
    
    console.log('Time', new Date().toLocaleTimeString())
    next()
})

app.use('/info', (req, res) => {
    res.send('More info')
})

app.use('/', (req, res) => {
    res.send('Ok')
})

app.listen(8080)