import axios from "axios";

const baseDomain = "https://fakerestapi.azurewebsites.net";
const baseURL = `${baseDomain}`; // Incase of /api/v1;

const httpClient = axios.create({
  baseURL: baseURL,
  headers: {
    // "Authorization": "Bearer xxxxx"
    // "Accept": "application/json charset=UTF-8"
    // "Content-Type": "application/json charset=UTF-8"
  }
});

export default httpClient;
/*
// ALL DEFUALT CONFIGURATION HERE
export default axios.create({
  baseURL,
  headers: {
    // "Authorization": "Bearer xxxxx"
    // "Accept": "application/json charset=UTF-8"
    // "Content-Type": "application/json charset=UTF-8"
  }
});
*/
