var _ = require('underscore');
var num = 0;

exports.store = function(obj, data, key) {
	
	if(!data)
	{
		return;
	}
	if(_.isString(data))
	{
		key = key || 'key' + num;
		obj[key] = data;
		num++;
	}
	else if(_.isArray(data))
	{
		key = key || 'key';	
		_.each(data, function(val){
			obj[key + num] = val;
			num++;
		});
	}
	else if(_.isObject(data))
	{
		obj = _.extend(obj, data);
	}
	return obj;
}
exports.unset = function(obj, key) {
	if(key)
	{
		delete obj[key];
	}
	else
	{
		var keys = _.keys(obj);
		_.each(keys, function(n){
			delete obj[n];
		});
	}
}
exports.toString = function(obj, what, glue) {
	var vals = _.values(obj);
	
	if(vals.length) {
		return '\n' + what + ' ' + vals.join('\n\t' + glue + ' ');
	}
	return ' ';
}