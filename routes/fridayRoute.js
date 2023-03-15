const express = require('express');  
const router = express.Router();

const fridayController = require('../controllers/fridayController.js');

router.get('/', fridayController.index);
      



module.exports = router;