const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/comment', require('./comment'))
router.use('/user', require('./user'))

module.exports = router
