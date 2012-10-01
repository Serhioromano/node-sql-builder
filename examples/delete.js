var Delete = require('../index').delete;
var Sql    = require('../index').renderer;

var query1 = new Delete({from: 'users', where:["id = 10", "blocked = 0"]});

var query2 = new Delete();

query2.from('users').where('id = 10');
query2.where('blocked = 1');

console.log(Sql.toString(query1));
console.log(Sql.toString(query2));



