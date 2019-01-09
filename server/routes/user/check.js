module.exports = (req, res) => {
  const token = req.cookies['access_token']
  if (!token) return
  console.log(token)
}
