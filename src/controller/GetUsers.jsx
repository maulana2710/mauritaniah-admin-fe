import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export default async function GetUsers(params) {
    return axios.get(`${url}users`, { params });
}