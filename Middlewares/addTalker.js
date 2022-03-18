const fs = require('fs').promises;
const readFile = require('../helpers/readFile');

const validateDateFormat = (date) => {
  const validDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  return validDate.test(date);
};

const verifyTalkIsEmpty = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }

  const { watchedAt, rate } = talk;
  if (!watchedAt || !rate) {
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  next();
};

const verifyTalk = (req, res, next) => {
  const { talk: { watchedAt, rate } } = req.body;
  if (!validateDateFormat(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  } 
  const validRate = rate >= 1 && rate <= 5;
  if (!validRate) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

const validateDate = (req, res, next) => {
  const { name, age } = req.body;

  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const addTalker = async (req, res) => {
  const { body } = req;
  const talkers = await readFile('./talker.json');
  
  const newUser = {
    ...body,
    id: talkers.length + 1,
  };
  const users = [...talkers, newUser]; 

  await fs.writeFile('./talker.json', JSON.stringify(users));

  res.status(201).json(newUser);
};

module.exports = { addTalker, verifyTalk, validateDate, verifyTalkIsEmpty };