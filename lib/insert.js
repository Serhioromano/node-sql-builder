"use strict";

var utils = require('./util');
var _ = require('underscore');

function Insert(params)
{
	this.type = 'insert';
	
	params = params || {};
	params.values = params.values || {};

	if(!_.isObject(params.values))
	{
		console.log("Sql 'insert' query: Can't set value not object");
		process.exit();
	}
	
	this.reset(params);
	
	this.i = params.into || '';		
	this.f = params.values || {};
}


Insert.prototype.reset = function(params) {
	params = params || {};

	this.f = {};	
	this.i = '';		
};



Insert.prototype.into = function(i) {
	this.i = i;
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

module.exports = Insert;