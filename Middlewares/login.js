const validateEmailFormat = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

const validateInput = (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  
  if (!validateEmailFormat(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  
  if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });

  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  
  next();
};

const login = (req, res) => {
  const token = Math.random().toString(5).substring(2, 18);
  res.status(200).json({ token });
};

module.exports = { login, validateInput };
