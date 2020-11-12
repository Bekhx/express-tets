const express = require('express');
const path = require('path');
const app = express();
const router = require('./controllers/cardController')
const PORT = 5500;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'client')));

app.use(`/`, router);

app.listen(PORT, () => console.log(`Server has started at http://localhost:${PORT}`));