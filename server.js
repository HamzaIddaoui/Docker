const express = require('express')
const app = express()
const port = process.env.port || 3030
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/customers', require('./routes/customersRoutes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})