/*globalr process console module require*/
"use strict";

var utils = require('./util');
var _ = require('underscore');
var render = require('./renderer');

function Update(params)
{
	this.type = 'update';
	
	params = params || {};
	params.set = params.set || {};

	if(!_.isObject(params.set))
	{
		console.log("Sql 'update' query: Set value is not an object");
		process.exit();
	}
	this.reset(params);
	
	this.t = params.table || '';
	this.s = params.set || {};
	this.w = params.where || {};
}


Update.prototype.reset = function(params) {
	params = params || {};

	this.t = '';
	this.s = {};
	this.w = {};
};



Update.prototype.table = function(t) {
	this.t = t;
	return this;
};

Update.prototype.set = function(s) {
	if(!_.isObject(s))
	{
		console.log("Sql 'update' query: Set value is not an object");
		process.exit();
	}
	this.s = _.extend(this.s, s);
	return this;
};

Update.prototype.where = function(w, key) {
	utils.store(this.w, w, key);
	return this;
};

Update.prototype.resetSet = function(key) {
	utils.unset(this.s, key);
	return this;
};

Update.prototype.resetWhere = function(key) {
	utils.unset(this.w, key);
	return this;
};


Update.prototype.toString = function(db_type)
{
	return render.toString(this, db_type);
};

module.exports = Update;