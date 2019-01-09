const User = require('../models/User')

module.exports = async (req, res) => {
  const { id, accessToken, name } = req.body.res

  let exists = null
  try {
    exists = await User.findOne({ id })
    if (exists) {
      res.status(409).json({ message: '이미 존재합니다' })
      return
    }
  } catch (e) {
    console.log(e)
  }

  let user = null
  try {
    user = await new User({ id, accessToken, provider: 'facebook', name })
    await user.save()
    res.status(200)
  } catch (e) {
    console.log(e)
  }

  res.cookie('access_token', accessToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  })
  res.json({ ...user, logged: true })
}
