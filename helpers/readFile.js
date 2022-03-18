const fs = require('fs').promises

const readFile = async (path) => {
  const file = await fs.readFile(path).then((file) => JSON.parse(file));
  return file
}

module.exports = readFile