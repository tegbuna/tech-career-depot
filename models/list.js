// **-Require Mongoose and Define Schema below. (11)
const mongoose = require('mongoose');
//optional shortcut mongoose.Schema class:
const Schema = mongoose.Schema;

// Define Careers schema:
const listSchema = new Schema ({
    name: {
        type: String
},

    description: {
        type: String 
},
 

});


//Compile Schema into model and export:
module.exports = mongoose.model('List', listSchema);