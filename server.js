const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World and Github Action 9:14')
})
 
const port = process.env.PORT || 3000;
app.listen(port)