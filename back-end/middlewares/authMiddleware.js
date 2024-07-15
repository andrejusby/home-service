const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    res.status(401).send({ error: 'Not authenticated' });
    return;
  }

  try {
    const token = authHeader.split('')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.currentUser = payload;
  } catch (err) {
    console.error(err);
    res.status(401).send({ error: 'Not authenticated' });
    return;
  }

  next();
};

module.exports = authMiddleware;
