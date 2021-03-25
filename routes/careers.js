///**- Set up router and code first route responsible for entering career choice to save (13)
const express = require('express');
const router = express.Router();
const careersCtrl = require('../controllers/careers');

//GET /careers/new
router.get('/', careersCtrl.index); /*NTS - new from flights demo*/
// router.get('/new', careersCtrl.new);
router.get('/dss', careersCtrl.datascience);
router.get('ses', careersCtrl.softwareengineer);
router.get('uxui', careersCtrl.uxui);

   
//POST
router.post('/dss', (req, res) =>{
    res.send(req.body);
});
router.post('/ses', (req, res) =>{
    res.send(req.body);
});
router.post('/uxui', (req, res) =>{
    res.send(req.body)
});

module.exports = router;

//**- Next mount and require the router inside of server.js(14)