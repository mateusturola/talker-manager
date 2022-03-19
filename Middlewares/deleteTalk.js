const readFile = require('../helpers/readFile');
const writeFile = require('../helpers/writeFile');

const deleteTalk = async (req, res) => {
  const { id } = req.params;

  const talkers = await readFile('./talker.json');

  const filterTalkers = talkers.filter((t) => t.id !== parseInt(id, 10));
  
  await writeFile('./talker.json', filterTalkers);

  return res.status(204).send('');
};

module.exports = deleteTalk;