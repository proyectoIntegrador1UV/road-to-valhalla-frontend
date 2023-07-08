import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const config = {
  headers: {
    "content-type": "application/json",
  },
};

export const registerQuiz = async (scenario, answers) => {
  const api = apiUrl + "/custom";
  const data = {
    scenario,
    answers
  };
  return axios.post(api, data, config);
};

