const axios = require('axios');

const getWeatherData = async () => {
    try {
        const response = await axios.get('https://weatherkit.apple.com/api/v1/weather/current', {
            headers: {
                Authorization: `Bearer ${process.env.WEATHERKIT_API_KEY}`,
            },
        });

        return response.data; // This includes current temperature, conditions, etc.
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw new Error('Failed to fetch weather data.');
    }
};

module.exports = { getWeatherData };
