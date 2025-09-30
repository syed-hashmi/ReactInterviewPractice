import axios from "axios";



let instance = axios.create({baseURL:"https://api.restful-api.dev"});
export default instance;