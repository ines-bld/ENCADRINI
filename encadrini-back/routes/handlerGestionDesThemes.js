const express = require('express')
const router = express.Router();

const gestionDesThemesController = require('../controllers/gestionDesThemesController');

router.get('/:promo', gestionDesThemesController.view)
router.get('/:promo/viewTheme/:id',gestionDesThemesController.viewdetail)


//router.get('/',gestionDesThemesController.delete)


module.exports =router;