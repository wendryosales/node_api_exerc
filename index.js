const express = require('express');
const bodyParser = require('body-parser');
const handleRegister = require('./handleRegister');
const handleLogin = require('./handleLogin');

const app = express();

app.use(bodyParser.json());

app.post('/user/register', handleRegister);

app.post('/user/login', handleLogin)

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
