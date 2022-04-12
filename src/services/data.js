import axios from "axios"

export const getData = async () => {
    let response = await axios.get(`http://localhost:8080/hrc_test/Fetch`);
    console.log(response.data);
    return response.data;
}