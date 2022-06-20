const validation = require('./utils/validation');
const token = require('./utils/token');

function handleLogin(req, res) {

  const { email, password } = req.body;
  
  if( validation(email, password) ) {
    return res.status(200).json({ "token": token(12) })
  } else {
    return res.status(400).json({message : 'email or password is incorrect'})
  }

}

module.exports = handleLogin;