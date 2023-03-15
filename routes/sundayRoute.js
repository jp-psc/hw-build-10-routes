const express = require('express');  
const router = express.Router();

const sundayController = require('../controllers/sundayController.js');

router.get('/', sundayController.index);
      



module.exports = router;