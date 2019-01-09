const auth = require('express').Router()

auth.post('/:provider(facebook|github|kakao|twitter|github)')

module.exports = auth
