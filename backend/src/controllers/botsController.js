const { getBotsList, getBotCases } = require('../services/apiService');

const getBots = async (req, res) => {
  try {
    const bots = await getBotsList(req.headers.authorization);
    res.json(bots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCases = async (req, res) => {
  try {
    const cases = await getBotCases(req.headers.authorization, req.query);
    res.json(cases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getBots, getCases };
