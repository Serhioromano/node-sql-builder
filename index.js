exports.setOptions = function(options)
{
	this.setAdapter(options.adapter);
};

exports.setAdapter = function(adapter)
{
	this.adapter = adapter;
};

exports.select = require('./lib/select');
exports.update = require('./lib/update');
exports.delete = require('./lib/delete');

exports.toString = function(query)
{
	var adp = require('./adapters/' + this.adapter);
	
	adp['render' + query.type](query);
}

//var q = queries.select || (queries.select = require('./adapters/' + this.adapter + '/select'));
