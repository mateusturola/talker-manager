const readFile = require('../helpers/readFile');
const writeFile = require('../helpers/writeFile');

const addTalker = async (req, res) => {
  const { body } = req;
  const talkers = await readFile('./talker.json');
  // console.log('talkers', talkers);
  
  const newUser = {
    ...body,
    id: talkers.length + 1,
  };
  talkers.push(newUser);

  // const users = [...talkers, newUser]; 

  await writeFile('./talker.json', talkers);

  res.status(201).json(newUser);
};

module.exports = addTalker;