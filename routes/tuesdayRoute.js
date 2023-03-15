const express = require('express');  
const router = express.Router();

const tuesdayController = require('../controllers/tuesdayController.js');

router.get('/', tuesdayController.index);
      



module.exports = router;