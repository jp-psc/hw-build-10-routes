const express = require('express');  
const router = express.Router();

const saturdayController = require('../controllers/saturdayController.js');

router.get('/', saturdayController.index);
      



module.exports = router;