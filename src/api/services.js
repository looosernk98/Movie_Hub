import axios from "axios"

const BASE_URL = "https://movies-backend-a6m5.onrender.com/api"

export const getApi = async (url, params) => {
    try {
        const response = await axios.get(BASE_URL+ url, {
            params,
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTgxZDE1ZmViNmRlZmU4NmZkYWFmOGEyM2VlMDQwNSIsInN1YiI6IjYxNmE5MjY4NTM4NjZlMDA5M2NhZTBmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EBqIwkJS549JTTvQ4L2d2Bh6eMtwALTE63p7V0rcmGo',
            }
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}
export const postApi = async (url, params, payload) => {
    try {
        const response = await axios.get(BASE_URL+ url, payload,{
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTgxZDE1ZmViNmRlZmU4NmZkYWFmOGEyM2VlMDQwNSIsInN1YiI6IjYxNmE5MjY4NTM4NjZlMDA5M2NhZTBmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EBqIwkJS549JTTvQ4L2d2Bh6eMtwALTE63p7V0rcmGo',
            },
            params,
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}