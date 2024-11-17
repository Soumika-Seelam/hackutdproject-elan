const express = require('express');
const { getRoute } = require('../services/mapsService');
const router = express.Router();

router.get('/route', async (req, res) => {
    const { origin, destination } = req.query;
    try {
        const data = await getRoute(origin, destination);
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
