const express = require('express');
const fs = require('fs');
const path = require('path');

const adminController = require('../controllers/admin');

const router = express.Router();


router.get('/form-dépot', adminController.getThemeForm);

router.post('/form-dépot', adminController.postTheme);




module.exports = router;