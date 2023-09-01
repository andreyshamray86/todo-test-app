import axios from "axios";

export const getTodos = async () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};
