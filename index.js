const express = require('express');
const bodyParser = require('body-parser');
const getTalker = require('./Middlewares/getTalker');
const getTalkerById = require('./Middlewares/getTalkerById');
const { login, validateInput } = require('./Middlewares/login');
const addTalker = require('./Middlewares/addTalker');
const authorizationMid = require('./Middlewares/authorizationMid');
const verifyTalkIsEmpty = require('./Middlewares/verifyTalkIsEmpty');
const verifyTalk = require('./Middlewares/verifyTalk');
const validateDate = require('./Middlewares/validateDate');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/login', validateInput, login);

app.get('/talker', getTalker);
app.get('/talker/:id', getTalkerById);

app.use(authorizationMid);

app.use(verifyTalkIsEmpty, validateDate, verifyTalk);

app.post('/talker', addTalker);

app.listen(PORT, () => {
  console.log('Online');
});
