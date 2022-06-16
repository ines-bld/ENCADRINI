const express = require('express')
const router = express.Router();

const gestionDesComptesController = require('../controllers/gestionDesComptesController');

router.get('/', gestionDesComptesController.view)
router.post('/',gestionDesComptesController.find)
router.get('/viewuser/:id',gestionDesComptesController.viewdetail)
router.get('/edituser/:id',gestionDesComptesController.edit)
router.post('/edituser/:id',gestionDesComptesController.update)


router.get('/desactivate/:id',gestionDesComptesController.desactivate)
router.get('/:id',gestionDesComptesController.delete)



module.exports =router;  