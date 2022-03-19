const fs = require('fs').promises;

const readFile = async (path) => {
  const data = await fs.readFile(path);
  const file = JSON.parse(data);
  return file;
};

module.exports = readFile;
