// **-Require Mongoose and Define Schema below. (11)
const mongoose = require('mongoose');
//optional sh to te mongoose.Schema class:
const Schema = mongoose.Schema;

// Define Careers schema:
const careerSchema = new Schema ({
    name: {
        type: String
},
    define: { 
        type: String
   },
    description: {
        type: String 
},
    characteristics: {
        type: [String]
},

    stages: {
        tpe: [String]
},
    salary: {
        type: [Number]
},
    resources: {
    type: String
    },

});

/* Note to self: may need to use salary: Schema.Types.Mixed instead of salary: [Number]. */

//**- Next, compile the schema into a model and export it (12)
module.exports = mongoose.model('Career', careerSchema);

// **- Next we need to finish coding out the router and controller modules for our career resource before creating CRUD routes/careers.js (13)
 
