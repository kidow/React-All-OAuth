const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', require('./routes'))

app.listen(4000, () => {
  console.log('App listening on port 4000!')
})
