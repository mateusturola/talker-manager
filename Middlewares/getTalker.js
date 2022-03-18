const readFile = require('../helpers/readFile')
const getTalker = async (req, res) => {
  const talkers = await readFile('./talker.json')
  res.status(200).json(talkers)
}

module.exports = getTalker