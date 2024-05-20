const { loginUser } = require('../services/apiService');

const login = async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.json(token);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login };
