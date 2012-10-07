var _ = require('underscore');
var utils = require('../util');

exports.update = function(data)
{
	// TODO: escape strings
	var sql = '';
	var sets = [];

	sql += 'UPDATE ' + data.t;
	_.each(data.s, function(v, k){
		sets.push(k + " = '" + utils.escape_string(v) + "'");
	});
	sql += '\n' + sets.join('`, \n`');
	sql += utils.toString(data.w, 'WHERE', 'AND');

	return sql;

};

exports.insert = function(data)
{
	// TODO: escape strings
	var sql = '';

	var keys = _.keys(data.f);

	for (var i in data.f)
	{
		if(_.isString(data.f[i])) {
			data.f[i] = utils.escape_string(data.f[i]);
		}
	}
	// Array.each(data.f, function(v, k){
	//	if(_.isString(v)) {
	//		console.log(v);
	//		v = utils.escape_string(v);
	//	console.log(v);
	// });

	var vals = _.values(data.f);

	sql += 'INSERT INTO ' + data.i;
	sql += '\n(`' + keys.join('`, \n`') + '`)';
	sql += '\nVALUES ("' + vals.join('", \n"') + '")';

	return sql;

};

exports.delete = function(data)
{
	var sql = '';
	
	sql += 'DELETE FROM ' + data.f;

	sql += utils.toString(data.w, 'WHERE', 'AND');

	return sql;
};

exports.select = function(data)
{
	var sql = '';

	sql += utils.toString(data.s, 'SELECT', ', ');
	sql += utils.toString(data.f, 'FROM', ', ');
	sql += utils.toString(data.l, 'LEFT JOIN', ' ');
	sql += utils.toString(data.r, 'RIGHT JOIN', ' ');
	sql += utils.toString(data.j, 'JOIN', ' ');
	sql += utils.toString(data.w, 'WHERE', 'AND');
	sql += utils.toString(data.g, 'GROUP BY', ', ');
	sql += utils.toString(data.h, 'HAVING', 'AND');
	sql += utils.toString(data.o, 'ORDER BY', ', ');
	
	if(data.limit) {
		sql += '\nLIMIT ' + data.limitstart + ', ' + data.limit;
	}

	return sql;
};
