const express = require('express');  
const router = express.Router();

const anydayController = require('../controllers/anydayController.js');

router.get('/', anydayController.index);
      



module.exports = router;