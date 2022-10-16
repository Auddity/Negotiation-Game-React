// NO LONGER NECESSARY

import axios from "axios";

export default axios.create({
  baseURL: 'https://randomuser.me/api/?results=5&inc=name,picture,nat&noinfo',
  dataType: 'json',
  headers: {
    "content-type": "text/html; charset=utf-8",
    "Access-Control-Allow-Origin": "*"
  }
});

// NO LONGER NECESSARY