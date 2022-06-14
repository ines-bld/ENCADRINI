const express = require('express');
const path = require('path');
const themesController = require('../controllers/prof');

const router = express.Router();

router.get('/', themesController.getAllThemes);

router.get('/themes/:themeId', themesController.getThemeDetail);

router.get('/error-demo', (req, res, next) => {
    throw new Error('This is to test Error handling in express');
});

module.exports = router;