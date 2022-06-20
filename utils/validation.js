function validation(email, password) {
  const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;
  if( !emailRegex.test(email))  return false;
  if( typeof password !== 'number' || password.lenght < 4 || password.lenght > 8 ) {
    return false;
  }
  return true;
}

module.exports = validation;
