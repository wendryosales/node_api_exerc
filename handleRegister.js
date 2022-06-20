const validation = require('./utils/validation');

function handleRegister(req, res) {

  const { username, email, password } = req.body;

  if( username === undefined || username.lenght < 3) return res.status(400).json({message : 'Invalid Data'});
  
  if( validation(email, password) ) {
    return res.status(201).json({"message": "user created"})
  } else {
    return res.status(400).json({message : 'Invalid Data'})
  }

}

module.exports = handleRegister;