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
const changeTalker = require('./Middlewares/changeTalker');
const deleteTalk = require('./Middlewares/deleteTalk');
const searchTalker = require('./Middlewares/searchTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/login', validateInput, login);

app.get('/talker/search', authorizationMid, searchTalker);

app.get('/talker', getTalker);
app.get('/talker/:id', getTalkerById);

app.use(authorizationMid);

app.delete('/talker/:id', deleteTalk);

app.use(verifyTalkIsEmpty, validateDate, verifyTalk);

app.post('/talker', addTalker);
app.put('/talker/:id', changeTalker);

app.listen(PORT, () => {
  console.log('Online');
});
