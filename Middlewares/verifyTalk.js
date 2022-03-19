const validateDateFormat = (date) => {
  const validDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  return validDate.test(date);
};

const verifyTalk = (req, res, next) => {
  const { talk: { watchedAt, rate } } = req.body;
  if (!validateDateFormat(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  } 
  const validRate = rate >= 1 && rate <= 5;
  if (!validRate) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

module.exports = verifyTalk;