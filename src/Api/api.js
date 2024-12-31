import axios from 'axios';

const API_BASE_URL = 'https://your-springboot-api-url.com'; // Replace with your actual API URL

// Example: Fetch all data
export const getData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/endpoint`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

// Example: Submit form data
export const submitForm = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/endpoint`, formData);
        return response.data;
    } catch (error) {
        console.error("Error submitting form:", error);
        throw error;
    }
};
