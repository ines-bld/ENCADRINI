const express = require('express')
const router = express.Router(); 

const handlerController = require('../controllers/handlerController')
const fogetPasswordController = require('../controllers/forgetPasswordController')

// router.get('/forgottenPassword', fogetPasswordController.viewforget)
router.post('/forgottenPassword', fogetPasswordController.resetsend)

// router.get('/enterCode', fogetPasswordController.viewwait)

router.get('/resetPassword', fogetPasswordController.resetview)
router.post('/resetPassword', fogetPasswordController.resetupdate)


router.get('/signin', handlerController.view)

module.exports =router;  