const readFile = require('../helpers/readFile')

const getTalkeById = async (req, res) => {
  const {id} = req.params
  const talkers = await readFile('./talker.json')
  const talker = talkers.find((t) => t.id === parseInt(id)) 
  if(!talker) return res.status(404).json({ "message": "Pessoa palestrante não encontrada" })
  return res.status(200).json(talker)
}

module.exports = getTalkeById
