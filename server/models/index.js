const mongoose = require('mongoose')
const { MONGO_URI } = process.env

module.exports = () => {
  mongoose.Promise = Promise
  mongoose.connect(
    MONGO_URI,
    { dbName: 'react-oauth', useCreateIndex: true, useNewUrlParser: true },
    err => {
      if (err) console.log('mongodb err ', err)
      else console.log('mongodb connected.')
    }
  )
}
