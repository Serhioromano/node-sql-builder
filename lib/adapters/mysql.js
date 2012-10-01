var _ = require('underscore');
var utils = require('../util');

exports.delete = function(data)
{
	var sql = '';
	
	sql += 'DELETE FROM ' + data.f;

	sql += utils.toString(data.w, 'WHERE', 'AND');

	return sql;
}
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
}
