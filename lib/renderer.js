require('colors');
var fs = require('fs');
var util = require('util');

// TODO: stor process on error
exports.toString = function(query, adapter)
{
	adapter = adapter || 'mysql'; //process.env.npm_package_config_adapter;

	fs.exists(__dirname +  '/adapters/' + adapter + '.js', function (exists) {
		if(!exists){
			util.error('Sql-Builer error: adapter '.red.inverse + adapter.magenta.inverse + ' not found'.red.inverse);
		}
	});

	var adp = require('./adapters/' + adapter);
	
	return adp[query.type](query);
};