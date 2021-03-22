// Setup routes and controllers actions for root routes 
// **- Start with routes/index.js (1)
const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.index);
module.exports = router;

//**- Next go to controllers/index.js (2)


