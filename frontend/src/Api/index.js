import axios from "axios";

const ApiClient = axios.create({
    baseURL: "http://localhost:8003/",
    timeout: 2000,
    headers:{
        "Content-Type": "application/json"
    }
})


ApiClient.interceptors.response.use((res)=>{
    return res;
}, (error)=>{
    return error;
})

export default ApiClient;