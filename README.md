## Node SQL Query Builder

This is adapter based SQL query builder. This means that building queries for every DB like MySQL, SQLite is handled by separate adapter. It make this sql query builder highly extendable. Right now it only have `mysql` adapter.

## How to use

I have tried to make usage straight forward. These are just few examples. See examples folder for more examples.

### Selects

```js
var Select = require('sql-builder').select;
var Sql    = require('sql-builder').renderer;

// you can assign some query data on construction
var query = new Select({
	group:'time', 
	having:['t = 1 ASC', 'b = 2 DESC']
});

// You can use chains
query
	.select('u.*')
	.from('users AS u');

// put array or string or object
query.where("u.name = 'john'");

// set where to be deleted later
query.select('(SELECT COUNT(*) FROM messages) AS messages)', 'selmsg');

query.select('a.avatar').join('user_attr AS a ON a.user_id = u.id');

// show 10 items per page and 5th page
query.offset(5, 10);

// we decided not to calculate messages
query.resetSelect('selmsg');

// render to string throu renderer
console.log(query.toString());
```

### Delete

```js
var Delete = require('sql-builder').delete;
var Sql    = require('sql-builder').renderer;

// add parametres on cunstruction
var query1 = new Delete({from: 'users', where:["id = 10", "blocked = 0"]});
console.warn(query.toString());

var query2 = new Delete();

// use chanes
query2.from('users').where('id = 10');

// add key to value later can delet by key
query2.where('blocked = 1', 'c1');

// put array
query2.where(['a = 1', 'a = 2']);

// put object
query2.where({test:'my = 2'});

// reset key. If no key all where reseted
query2.resetWhere('c2');

console.warn(query.toString());
```

### Insert

```js
var Insert = require('../index').insert;
var Sql    = require('../index').renderer;

var query = new Insert();

query.into('user');

query.values({
	id: 0,
	name: 'sergey'
});

query.values({
	block: 0,
	password: '123'
});

query.values({
	description: "this is user's \"descritption\"! \n Or ''not? \n Anyway #1 user to test simbols."
});

console.log(query.toString());
```