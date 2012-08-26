var query = require('../index');

query.setAdapter('mysql');

var select = query.select.select('*').from('users').where('id = 1').where('block = 0');

query.toString(select);


//select.where('trash = 1');

//console.log(query.toString(select));