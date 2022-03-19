const fs = require('fs').promises;

const writeFile = async (path, item) => {
  const write = await fs.writeFile(path, JSON.stringify(item));
  return write;
};

module.exports = writeFile;