require('colors');

var Update = require('../index').update;

var query = new Update();

query.table('user');

query.set({
	'name': 'sergey'
});

query.where('id = 1').where(['block = 0', 'date > NOW()']);

console.log(query.toString().bold.blue);
