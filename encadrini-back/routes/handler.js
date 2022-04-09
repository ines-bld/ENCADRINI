const express = require('express')
const router = express.Router(); 

const handlerController = require('../controllers/handlerController')

router.get('/signin', handlerController.view)

module.exports =router;  