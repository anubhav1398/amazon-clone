import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-6bce5/us-central1/api", //The Api url (cloud function url)
});

export default instance;
