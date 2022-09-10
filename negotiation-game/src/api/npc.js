import axios from "axios";

export default axios.create({
  baseURL: 'https://randomuser.me/api/?results=5&noinfo',
  dataType: 'json',
  headers: {
    "content-type": "text/html; charset=utf-8",
    "Access-Control-Allow-Origin": "*"
  }
});