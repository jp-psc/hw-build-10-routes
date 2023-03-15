const express = require('express');  
const router = express.Router();

const wednesdayController = require('../controllers/wednesdayController.js');

router.get('/', wednesdayController.index);
      



module.exports = router;