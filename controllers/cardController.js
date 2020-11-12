const express = require('express');
const requires = require('../models/cardModel');
const router = express.Router();


router.get('/', (req, res) => requires.getHomePage(req, res));

router.post('/cards/post', (req, res) => requires.postCard(req, res));

router.get('/api/cards/find/:id', (req, res) => requires.findById(req, res));

router.get('/api/cards/show', (req, res) => requires.allUsersList(req, res));

router.delete('/api/cards/remove/:id', (req, res) => requires.deleteById(req, res));

module.exports = router;