const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('<h1 style="text-align: center; margin: 50px auto">Welcome to Github Action Demo</h1>')
})
 
const port = process.env.PORT || 3000;
app.listen(port)