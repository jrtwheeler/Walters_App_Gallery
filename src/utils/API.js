import axios from "axios";
const BASEURL = "http://api.thewalters.org/v1/objects?";
const KEY = "apikey=9O0bCwuMxTEBqTM1j2rJixcd0w4kuBFdCNCXJyNSGuGhtcS5QUj3gq5ClMaFr9Rm";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getObjects: function () {
     var search = axios.get(BASEURL + KEY);
     console.log(search);
     return search;
  }
}
