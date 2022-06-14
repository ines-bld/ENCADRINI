const express = require('express');
const fs = require('fs');
const path = require('path');

const profController = require('../controllers/prof');

const router = express.Router();

router.get('/add-theme', profController.getThemeForm);

router.post('/add-theme', profController.postTheme);

router.get('/edit-theme', (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'views', 'add-theme.html')).pipe(res);
});

router.post('/edit-theme', (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'views', 'add-theme.html')).pipe(res);
});

router.post('/delete-theme', (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'views', 'add-theme.html')).pipe(res);
});

module.exports = router;