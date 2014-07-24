"use strict";
/*global console process require module */

var utils = require('./util');
var _ = require('underscore');
var render = require('./renderer');

function Insert(params)
{
	this.type = 'insert';

	params = params || {};
	params.columns = params.columns || {};
	params.values = params.values || {};

	if(!_.isObject(params.columns))
	{
		console.log("Sql 'insert' query: Can't set column not object");
		process.exit();
	}
	if(!_.isObject(params.values))
	{
		console.log("Sql 'insert' query: Can't set value not object");
		process.exit();
	}

	this.reset(params);

	this.i = params.into || '';
	this.ig = params.ignore || false;
	this.c = params.columns || {};
	this.f = params.values || {};
}


Insert.prototype.reset = function(params) {
	params = params || {};

	this.c = {};
	this.f = {};
	this.i = '';
	this.ig = false;
};


Insert.prototype.ignore = function(ig) {
	this.ig = ig;
	return this;
};

Insert.prototype.into = function(i) {
	this.i = i;
	return this;
};

Insert.prototype.columns = function(c) {
	if(!_.isObject(c))
	{
		console.log("Sql 'insert' query: Can't set column not object");
		process.exit();
	}
	this.c = _.extend(this.c, c);
	return this;
};

Insert.prototype.values = function(f) {
	if(!_.isObject(f))
	{
		console.log("Sql 'insert' query: Can't set value not object");
		process.exit();
	}
	this.f = _.extend(this.f, f);
	return this;
};

Insert.prototype.toString = function(db_type)
{
	return render.toString(this, db_type);
};

module.exports = Insert;