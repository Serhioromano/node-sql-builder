
exports.select = function(data)
{
	var sql = '';

	sql += 'SELECT ';
	sql += data.s.join(', ');
	
	sql += '\nFROM ';
	sql += data.f.join(', ');

	if(data.l.length) {
		sql += '\nLEFT JOIN ';
		sql += data.l.join("\nLEFT JOIN ");
	}
	if(data.r.length) {
		sql += '\nRIGHT JOIN ';
		sql += data.r.join("\nRIGHT JOIN ");
	}
	if(data.j.length) {
		sql += '\nJOIN ';
		sql += data.j.join("\nJOIN ");
	}

	if(data.w.length) {
		sql += '\nWHERE ';
		sql += data.w.join('\n\tAND ');
	}

	if(data.g.length) {
		sql += '\nGROUP BY ';
		sql += data.g.join(', ');
	}

	if(data.h.length) {
		sql += '\nHAVING ';
		sql += data.h.join('\n\tAND ');
	}	
	
	if(data.o.length) {
		sql += '\nORDER BY ';
		sql += data.o.join(', ');
	}
	
	if(data.limit) {
		sql += '\nLIMIT ' + data.limitstart + ', ' + data.limit;
	}

	return sql;
}
