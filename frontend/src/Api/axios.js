import { data } from "autoprefixer";
import ApiClient from "."


const getReq = async (path)=>{
    try {
        const response = await ApiClient.get(path)
        return response;
    } catch (error) {
        console.log(error);
    }
}

const postReq = async (path, data)=>{
    try {
        const response = await ApiClient.post(path, data)
        return response;
    } catch (error) {
        console.log(error);
    }
}


const deleteReq = async (path)=>{
    try {
        const response = await ApiClient.delete(path)
        return response;
    } catch (error) {
        console.log(error);
    }
}


const putReq = async (path, data)=>{
    try {
        const response = await ApiClient.put(path, data)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export {getReq, deleteReq, postReq, putReq}