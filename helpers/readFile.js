const fs = require('fs').promises;

const readFile = async (path) => {
  const file = await fs.readFile(path).then((f) => JSON.parse(f));
  return file;
};

module.exports = readFile;