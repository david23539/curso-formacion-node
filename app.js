const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ADIOS', (req, res) => {
  res.send('Bye World!')
})


app.post('/adios', (req, res) => {
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
