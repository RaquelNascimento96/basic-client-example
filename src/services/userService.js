import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5000/",
});

export const validateSession = (accessToken) => {
  return service
    .get(`/user/session/${accessToken}`)
    .then((response) => response.data)
    .catch((err) => err);
};
export const signup = ({ username, email, password }) => {
  return service
    .post("/user/signup", { username, email, password })
    .then((response) => response.data)
    .catch((err) => err);
};

export const login = ({ email, password }) => {
  return service
    .post("/user/login", { email, password })
    .then((response) => response.data)
    .catch((err) => console.log("Im an err", err));
};
