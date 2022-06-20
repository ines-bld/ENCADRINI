const express = require('express')
const router = express.Router(); 

const handlerController = require('../controllers/handlerController')
const fogetPasswordController = require('../controllers/forgetPasswordController')
const userController=require('../controllers/RegistrationController')
const themeController=require('../controllers/ThemesController')
const hopeController=require('../controllers/hopeController')
const depotController =require('../controllers/theme')
const encadController=require('../controllers/encadrant')

//another attempt to make login tkhdem
router.post('/authentification', hopeController.authentification)
//router.post('/creation', hopeController.creation)


//dépot
router.get('/get_encadrant',encadController)
router.get('/get_outils',encadController)
router.post('/add-theme/:iduser',depotController)



// router.get('/forgottenPassword', fogetPasswordController.viewforget)
router.post('/forgottenPassword', fogetPasswordController.resetsend)
router.post('/login', userController)
router.post('/create', userController)

// router.get('/enterCode', fogetPasswordController.viewwait)

router.get('/resetPassword', fogetPasswordController.resetview)
router.post('/resetPassword', fogetPasswordController.resetupdate)


router.get('/signin', handlerController.view)


//affichage de mes thèmes et les thèmes valides
router.get('/mesthemes/:iduser', themeController.viewMesThemes)
router.get('/:role/themesValides/:iduser', themeController.viewThemesValides)
router.get('/api/ih/:idtheme', themeController.viewDetailTheme)
router.get('/api/ih/dmesthemes/:idtheme', themeController.deleteTheme)
router.post('/api/ih/mmesthemes/:idtheme', themeController.updateTheme)

module.exports =router;  