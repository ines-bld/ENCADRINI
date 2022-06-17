const express = require('express')
const router = express.Router();

const gestionDesThemesController = require('../controllers/gestionDesThemesController');

router.get('/:promo', gestionDesThemesController.view)
router.get('/:promo/viewTheme/:id',gestionDesThemesController.viewdetail)

router.get('/:promo/viewTheme/:id/validation',gestionDesThemesController.viewValidation)
router.get('/:promo/viewTheme/:id/validate',gestionDesThemesController.validate)
router.get('/:promo/viewTheme/:id/refuser',gestionDesThemesController.refuse)

//router.get('/',gestionDesThemesController.delete)


module.exports =router;