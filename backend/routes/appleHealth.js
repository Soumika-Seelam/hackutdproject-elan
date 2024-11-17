const express = require('express');
const { fetchSleepData } = require('../services/appleHealthService');
const router = express.Router();

router.get('/sleep', async (req, res) => {
    try {
        const data = await fetchSleepData();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
