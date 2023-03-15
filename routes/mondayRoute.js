const express = require('express');  
const router = express.Router();

const mondayController = require('../controllers/mondayController.js');

router.get('/', mondayController.index);
      



module.exports = router;