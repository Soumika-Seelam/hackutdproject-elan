const axios = require('axios');

const getProductivityInsights = async (question) => {
    try {
        const response = await axios.post(
            'https://api.sambanova.ai/analyze',
            { question },
            {
                headers: {
                    Authorization: `Bearer ${process.env.SAMBANOVA_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data; // SambaNova's analysis and insights
    } catch (error) {
        console.error('Error with SambaNova API:', error);
        throw new Error('Failed to get insights from SambaNova.');
    }
};

module.exports = { getProductivityInsights };