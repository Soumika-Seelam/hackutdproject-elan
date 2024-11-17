import axios from 'axios';

const SAMBANOVA_API_URL = 'https://api.sambanova.com/v1'; // SambaNova Cloud API Base URL
const LOCAL_API_BASE_URL = 'http://localhost:3000'; // Use your backend URL if deployed

const sambaNovaClient = axios.create({
    baseURL: SAMBANOVA_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_SAMBANOVA_API_KEY`, // Replace with your actual API key
    },
});

const apiClient = axios.create({
    baseURL: LOCAL_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchSleepData = async () => {
    try {
        const response = await apiClient.get('/health/sleep');
        return response.data;
    } catch (error) {
        console.error('Error fetching sleep data:', error);
        throw error;
    }
};

export const fetchWeatherData = async () => {
    try {
        const response = await apiClient.get('/weather/current');
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

export const fetchRouteData = async (origin, destination) => {
    try {
        const response = await apiClient.get('/maps/route', {
            params: { origin, destination },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching route data:', error);
        throw error;
    }
};

export const askChatBot = async (question) => {
    try {
        const response = await sambaNovaClient.post('/chat', {
            query: question,
        });
        return response.data;
    } catch (error) {
        console.error('Error getting chatbot response from SambaNova:', error);
        throw error;
    }
};
