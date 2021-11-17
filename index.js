const express = require('express')

const app = express()

app.use('/public/', express.static('./public/'))
app.listen(3000, function () {
  console.log('appp is running at port 3000')
})
