const express = require('express');
const { getProductivityInsights } = require('../services/chatService');
const router = express.Router();

router.post('/ask', async (req, res) => {
    const { question } = req.body;
    try {
        const response = await getProductivityInsights(question);
        res.json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
