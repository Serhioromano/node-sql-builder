## Node SQL Query Builder

This is adapter based SQL query builder. This means that building queries for every DB like MySQL, SQLite is handled by separate adapter. It make this sql query builder highly extendable.

I have tryied to make usage quite strate forward.

### Selects

```js
var Select = require('sql-builder').select;
var Sql    = require('sql-builder').renderer;

// you can assign some query data on construction
var query = new Select({
	group:['time'], 
	having:['t = 1 ASC', 'b = 2 DESC']
});

// You can use chains
query
	.select('u.*')
	.from('users AS u');

query.where("u.name = 'john'");


query.select('a.avatar').join('user_attr AS a ON a.user_id = u.id');

// show 10 items per page and 5th page
query.offset(5, 10);

// render to string through renderer
var sql = Sql.toString(query);
console.log(sql);
```