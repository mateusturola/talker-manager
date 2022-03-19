const readFile = require('../helpers/readFile');
const writeFile = require('../helpers/writeFile');

const changeTalker = async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  const talkers = await readFile('./talker.json');
  const filterTalkers = talkers.filter((t) => t.id !== parseInt(id, 10));

  const newUser = {
    ...body,
    id: parseInt(id, 10),
  };

  const changeTalkers = [...filterTalkers, newUser];

  console.log(changeTalkers);

  await writeFile('./talker.json', changeTalkers);

  return res.status(200).json(newUser);
};

module.exports = changeTalker;