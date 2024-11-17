import axios from 'axios';

const SAMBANOVA_API_URL = 'https://api.sambanova.ai/v1';
const LOCAL_API_BASE_URL = 'http://localhost:3000';

const sambaNovaClient = axios.create({
    baseURL: SAMBANOVA_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_SAMBANOVA_API_KEY`,
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
        const response = await sambaNovaClient.post('/chat/completions', {
            model: 'Meta-Llama-3.1-405B-Instruct',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: question },
            ],
            max_tokens: 150,
            temperature: 0.7,
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error getting chatbot response from SambaNova:', error);
        throw error;
    }
};
