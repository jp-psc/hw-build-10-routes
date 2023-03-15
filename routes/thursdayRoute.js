const express = require('express');  
const router = express.Router();

const thursdayController = require('../controllers/thursdayController.js');

router.get('/', thursdayController.index);
      



module.exports = router;