import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const config = {
    headers: { 
        "content-type": "application/json"
    }
};

export const registerUser = async (username, email, password) => {
  const api = apiUrl + "/auth/local/register";
  const data = {
    username: username,
    email: email,
    password: password,
  };
  return axios.post(api, data, config);
};

export const authUser = async (username, password) => {
  const api = apiUrl + "/auth/local";
  const data = {
    identifier: username,
    password: password,
  };
  return axios.post(api, data, config);
};
