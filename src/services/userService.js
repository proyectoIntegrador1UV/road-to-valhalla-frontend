import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const token = localStorage.getItem('jwt');
const config = {
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + token
    }
  };
  

export const getUser = async (id) => {
  const api = apiUrl + "/users/" + id;
  return axios.get(api, config);
};

export const updateUser = async (username, email, password, id) => {
  const api = apiUrl + "/users/" + id;
  const data = {
    username: username,
    email: email,
    password: password,
  };
  return axios.put(api, data, config);
};
