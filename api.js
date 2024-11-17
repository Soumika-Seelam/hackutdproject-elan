import axios from 'axios';

// Base URL of your backend
const API_BASE_URL = 'http://localhost:3000'; // Change to your deployed backend URL if in production

// Axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Fetch sleep data
export const fetchSleepData = async () => {
    try {
        const response = await apiClient.get('/health/sleep');
        return response.data;
    } catch (error) {
        console.error('Error fetching sleep data:', error);
        throw error;
    }
};

// Fetch current weather
export const fetchWeatherData = async () => {
    try {
        const response = await apiClient.get('/weather/current');
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

// Fetch route from Google Maps
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

// Get productivity insights from SambaNova
export const askChatBot = async (question) => {
    try {
        const response = await apiClient.post('/chat/ask', { question });
        return response.data;
    } catch (error) {
        console.error('Error getting chatbot response:', error);
        throw error;
    }
};
