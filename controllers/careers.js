const Career = require('../models/career');

// /*new*/
function index(req, res) {
    Career.find({}, function(err, careers) {
        rese.render('careers/index', {
            careers
        })
    })
}

function create(req, res) {
    // //remove whitespace next to comas
    // req.body.characteristics = req.body.characteristics.replace(/\s*,\s*/g, ',');
    // //split if it's not an empty string
    // if (req.body.characteristics) req.body.characteristics = req.body.characteristics.split(',');

    const career = new Career(req.body);

    career.save(function(err) {
        //handle errors
        if(err) return res.render('careers/new');
        console.log(career);
        //redirect right back to new.ejs
        res.redirect('/careers/new');
    });
}

function newCareer(req, res) {
    res.render('careers/new');
}


//Export careers controller (14)
module.exports = {
    index, /*new*/
    new: newCareer,
    create
}



//**-Next we set up the view. views/careers/new.ejs(15)
//**- After setting up the view we need to require it at the top, then export to create under module.exports and then define function after function for new Career(16)
//**- Next...