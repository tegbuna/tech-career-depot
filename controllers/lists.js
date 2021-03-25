const List = require('../models/list');

// Create an instance of list model:
const data_science = newList({ name: 'Data Science' });

function create(req, res) {

  const list = newList(req.body);

  list.save(function(err) {
      //handle errors
      if(err) return res.render('careers/lists');
      console.log(list);
      //redirect right back to lists.ejs
      res.redirect('/careers/lists');
  });
}

function newList(req, res) {
  res.render('careers/lists');
}


//Export list controller (14)
module.exports = {
    list,
    newList,
}
