var query = require('../index');

query.setAdapter('mysql');

var select = query.select;

select.select('*')
	.from('users')
	.where('id = 1')
	.where('block = 0');

select.where("name = 'sergey'");

console.log(query.toString(select));

select.reset();

select.select('r.id').from('articles AS r').where('ctime > NOW()');

console.log(query.toString(select));
