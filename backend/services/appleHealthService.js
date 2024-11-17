const axios = require('axios');

const fetchSleepData = async () => {
    try {
        const response = await axios.get('https://api.apple.com/health/sleep', {
            headers: {
                Authorization: `Bearer ${process.env.APPLE_HEALTH_API_KEY}`,
            },
        });

        return response.data; // This includes sleep stages and other data
    } catch (error) {
        console.error('Error fetching sleep data:', error);
        throw new Error('Failed to fetch sleep data.');
    }
};

module.exports = { fetchSleepData };
