const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const adminMiddleware = require('./middleware.js');
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ADIOS', (req, res) => {
  res.send('Bye World!')
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
