const express = require('express');

const route = express.Router();

const getTalker = require('../Middlewares/getTalker');
const getTalkerById = require('../Middlewares/getTalkerById');
const addTalker = require('../Middlewares/addTalker');
const authorizationMid = require('../Middlewares/authorizationMid');
const verifyTalkIsEmpty = require('../Middlewares/verifyTalkIsEmpty');
const verifyTalk = require('../Middlewares/verifyTalk');
const validateDate = require('../Middlewares/validateDate');
const changeTalker = require('../Middlewares/changeTalker');
const deleteTalk = require('../Middlewares/deleteTalk');
const searchTalker = require('../Middlewares/searchTalker');

route.get('/search', authorizationMid, searchTalker);

route.get('/:id', getTalkerById);
route.get('/', getTalker);

route.use(authorizationMid);

route.delete('/:id', deleteTalk);

route.use(verifyTalkIsEmpty, validateDate, verifyTalk);

route.post('/', addTalker);

route.put('/:id', changeTalker);

module.exports = route;
