// **-Set up routes and controller actions for our root routes - routes/index.js was setup first. (3)
module.exports = {
    index
};

function index(req, res) {
    res.render('index');
}

// **- Next we require and mount our index router inside of server.js (4)