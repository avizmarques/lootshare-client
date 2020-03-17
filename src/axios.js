import axios from "axios";

const instance = axios.create({
  baseURL: "https://cee5776d-8b4b-4a48-a788-89db6d265aa1.mock.pstmn.io"
});

export default instance;
