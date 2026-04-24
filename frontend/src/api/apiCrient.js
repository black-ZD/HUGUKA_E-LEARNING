import axios from 'axios';

const apiClient = axios.create({
  
    baseURL: "https://huguka-e-learning-backend.onrender.com", 
    headers: {
        "Content-Type": "application/json"
    }
});

export default apiClient;
