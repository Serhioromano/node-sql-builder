var fs = require('fs');
var util = require('util');

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
	fs.exists(__dirname +  '/adapters/' + this.adapter + '.js', function (exists) {
      if(!exists){
      	util.error('adapter not found');
      	return;
      }
    });
    
	var adp = require('./adapters/' + this.adapter);
	
	return adp['render' + query.type](query);
}