const express = require('express')
const router = express.Router(); 

const fogetPasswordController = require('../controllers/forgetPasswordController')

router.get('/forgottenPassword', fogetPasswordController.viewforget)
router.post('/forgottenPassword', fogetPasswordController.resetsend)

router.get('/enterCode', fogetPasswordController.viewwait)

router.get('/resetPassword', fogetPasswordController.resetview)
router.post('/resetPassword', fogetPasswordController.resetupdate)



module.exports =router;