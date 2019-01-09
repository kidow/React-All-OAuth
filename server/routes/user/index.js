const user = require('express').Router()

user.get('/check', require('./check'))
user.post('/logout', require('./logout'))

module.exports = user
