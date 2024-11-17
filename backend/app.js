const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/health', require('./routes/appleHealth'));
app.use('/weather', require('./routes/weather'));
app.use('/maps', require('./routes/maps'));
app.use('/chat', require('./routes/chat'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
