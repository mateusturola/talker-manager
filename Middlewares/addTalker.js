const readFile = require('../helpers/readFile');
const writeFile = require('../helpers/writeFile');

const addTalker = async (req, res) => {
  const { body } = req;
  const talkers = await readFile('./talker.json');
  
  const newUser = {
    ...body,
    id: talkers.length + 1,
  };

  const users = [...talkers, newUser]; 

  await writeFile('./talker.json', users);

  res.status(201).json(newUser);
};

module.exports = addTalker;