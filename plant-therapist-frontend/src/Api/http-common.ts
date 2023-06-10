import axios from "axios";

const endpoint = "http://localhost:3001/"

export default axios.create({
  baseURL: endpoint,
  headers: {
    "Content-Type": "application/json"
  }
})