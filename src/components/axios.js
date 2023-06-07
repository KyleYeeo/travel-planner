import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://travel-planner-th2t.onrender.com'
});

export default instance;
