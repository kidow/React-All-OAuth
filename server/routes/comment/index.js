const comment = require('express').Router()

comment.get('/get', require('./get'))
comment.post('/add', require('./add'))
comment.patch('/update', require('./update'))
comment.delete('/delete', require('./delete'))

module.exports = comment
