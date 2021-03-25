const express = require('express');
const router = express.Router();
const listsCtrl = require('../controllers/lists');

//GET /careers/list
router.get('/lists', listsCtrl.lists);



//POST
router.post('/lists', (req, res) =>{
    res.send(req.body);
});


module.exports = router;