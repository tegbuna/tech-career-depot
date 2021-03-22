///**- Set up router and code first route responsible for entering career choice to save (13)
const express = require('express');
const router = express.Router();

const careersCtrl = require('../controllers/careers');

//GET /careers/new
router.get('/', careersCtrl.index); /*NTS - new from flights demo*/
router.get('/new', careersCtrl.new);
//POST
router.post('/', careersCtrl.create);

module.exports = router;

//**- Next mount and require the router inside of server.js(14)