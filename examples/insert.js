var Insert = require('../index').insert;
var Sql    = require('../index').renderer;

var query = new Insert();

query.into('user');

query.values({
	id: 0,
	name: 'sergey'
});

query.values({
	block: 0,
	password: '123'
});

query.values({
	description: "this is user's \"descritption\"! \n Or ''not? \n Anyway #1 user to test simbols."
});

console.log(Sql.toString(query));
//Sql.toString(query);