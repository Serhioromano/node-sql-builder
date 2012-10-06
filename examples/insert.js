require('colors');

var Insert = require('../index').insert;

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

console.log(query.toString().bold.blue);
