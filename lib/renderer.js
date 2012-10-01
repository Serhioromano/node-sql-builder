var fs = require('fs');
var util = require('util');


exports.toString = function(query, adapter)
{
	adapter = adapter || 'mysql';

	fs.exists(__dirname +  '/adapters/' + adapter + '.js', function (exists) {
      if(!exists){
      	util.error('adapter not found');
      	return;
      }
    });
    
	var adp = require('./adapters/' + adapter);
	
	return adp[query.type](query);
}