const axios = require('axios');

const API_URL = 'https://admindev.inceptia.ai/api/v1';

const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login/`, credentials);
  return response.data;
};

const getBotsList = async (token) => {
  const response = await axios.get(`${API_URL}/clients/`, {
    headers: { authorization: `JWT ${token}` }
  });
  return response.data;
};

const getBotCases = async (token, { bot, from, to }) => {
  const response = await axios.get(`${API_URL}/inbound-case/`, {
    headers: { authorization: `JWT ${token}` },
    params: {
      client: bot,
      local_updated__date__gte: from,
      local_updated__date__lte: to
    }
  });
  return response.data;
};

module.exports = { loginUser, getBotsList, getBotCases };
