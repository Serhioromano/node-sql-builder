var Delete = require('../index').delete;
var Sql    = require('../index').renderer;

// add parametres on cunstruction
var query1 = new Delete({from: 'users', where:["id = 10", "blocked = 0"]});
console.warn(Sql.toString(query1));

var query2 = new Delete();

// use chanes
query2.from('users').where('id = 10');

// add key to value later can delet by key
query2.where('blocked = 1', 'c1');

// put array
query2.where(['a = 1', 'a = 2']);

// put object
query2.where({test:'my = 2'});

// reset key. If no key all where reseted
query2.resetWhere('c2');

console.warn(Sql.toString(query2));



