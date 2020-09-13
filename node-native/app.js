const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const adminMiddleware = require('./middleware.js');
const productController = require('./product.controller.js')
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/params/:id', (req, res) => {
    const id = req.params;

    res.send(id.id);
})

app.get('/getProduct/:numbersProducts', (req, res) => {
    productController.getAllProduct(req, res);
})

app.get('/v2/params/:id/token/:token', (req, res) => {
    const params = req.params;

    res.send({
        "id": params.id,
        "token": params.token
    });
})

app.get('/ADIOS', (req, res) => {
  res.status(201).send("Created")
})


app.post('/adios', adminMiddleware.isAdmin, (req, res) => {
	console.log(req);
  res.send({
	  "hola": req.body
  })
})

app.put('/adios', (req, res) => {
    console.log(req);
    res.send({
        "hola": req.body
    })
})


app.delete('/adios', (req, res) => {
    console.log(req);
    res.send({
        "hola": req.body
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
