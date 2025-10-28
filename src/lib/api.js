import axios from "axios";

const API_URL = "http://localhost:3000";
const client = axios.create({
  baseURL: API_URL,
});

export const api = {
  async get(path) {
    //fn body
    const { data } = await client.get(path);
    return data;
  },
  async post(path, body) {
    //fn body
    const { data } = await client.post(path, body);
    return data;
  },
};

// console.log(api.get)

// const fetchAll = async() => {
//     try {
//        const res = await axios.get('http://localhost:3000/personnel')
//   //มาตรฐานชายไทย

//   console.log(res.data)
//     } catch (error) {
//       console.log(error.response.data)
//     }
// }
