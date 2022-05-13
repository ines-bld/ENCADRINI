const express = require('express')
const router = express.Router();

const gestionDesComptesController = require('../controllers/gestionDesComptesController');

router.get('/', gestionDesComptesController.view)


module.exports =router;  