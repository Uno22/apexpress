const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('<h2 style="text-align: center">Welcome to Github Action Demo</h2>')
})
 
const port = process.env.PORT || 3000;
app.listen(port)