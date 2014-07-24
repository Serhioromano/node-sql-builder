var _ = require('underscore');
var utils = require('../util');

exports.update = function(data)
{
	// TODO: escape strings
	var sql = '';
	var sets = [];

	sql += 'UPDATE ' + data.t;
	_.each(data.s, function(v, k){
		if(_.isString(v)) {
			sets.push("`" + k + "` = '" + utils.escape_string(v) + "'");
		}
		if(_.isNumber(v)) {
			sets.push("`" + k + "` = " + v);
		}
		else if (_.isBoolean(v)) {
			sets.push("`" + k + "` = " + (+ v));
		}
	});
	sql += '\nSET\n' + sets.join(', \n');
	sql += utils.toString(data.w, 'WHERE', 'AND');

	return sql;

};

exports.insert = function(data)
{
	function _vals () {
		function prep (v) {
			if(_.isString(v)) {
				return "'" + utils.escape_string(v) + "'";
			}
			if(_.isNumber(v)) {
				return v;
			}
			else if (_.isBoolean(v)) {
				return (+ v);
			}
		}

		var vals = _.values(data.f).map(function (v) {
			if (_.isArray(v)) {
				v = v.map(function (dv) {
					return prep(dv);
				})
				return v;
			}
			else {
				return prep(v);
			}
		});

		return '(' + ((!_.isArray(vals[0])) ? vals : vals.join("), \n(")) + ')';
	}

	var sql = '';
	sql += 'INSERT ' + ((data.ig) ? 'IGNORE ' : '' ) + 'INTO ' + data.i;
	sql += '\n(`' + ((_.isEmpty(data.c)) ? _.keys(data.f).join('`, \n`') : _.values(data.c).join('`, \n`')) + '`)';
	sql += '\nVALUES ' + _vals();

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

	sql += utils.toString(data.s, 'SELECT' + utils.toString(data.opt, ' ', ' '), ', ');
	sql += utils.toString(data.f, 'FROM', ', ');
	sql += utils.toString(data.l, 'LEFT JOIN', ' ', true);
	sql += utils.toString(data.r, 'RIGHT JOIN', ' ', true);
	sql += utils.toString(data.j, 'JOIN', ' ', true);
	sql += utils.toString(data.w, 'WHERE', 'AND');
	sql += utils.toString(data.g, 'GROUP BY', ', ');
	sql += utils.toString(data.h, 'HAVING', 'AND');
	sql += utils.toString(data.o, 'ORDER BY', ', ');

	if(data.limit) {
		sql += ' LIMIT ' + data.limitstart + ', ' + data.limit;
	}

	return sql;
};
