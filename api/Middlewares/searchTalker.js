const readFile = require('../helpers/readFile');

const searchTalker = async (req, res) => {
  const { q } = req.query;
  const talkers = await readFile('./talker.json');
  
  const term = q.toLowerCase();
  
  const filteredTalkers = talkers.filter(({ name }) => (name.toLowerCase()).includes(term));
  
  if (!filteredTalkers) return res.status(200).json([]);
  
  if (!q) return res.status(200).json(talkers);

  return res.status(200).json(filteredTalkers);
};

module.exports = searchTalker;