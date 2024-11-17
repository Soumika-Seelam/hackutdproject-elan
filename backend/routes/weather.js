const express = require('express');
const { getWeatherData } = require('../services/weatherService');
const router = express.Router();

router.get('/current', async (req, res) => {
    try {
        const data = await getWeatherData();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
