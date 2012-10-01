"use strict";

function Delete(params)
{
	this.type = 'delete';
	this.reset(params);
}

Delete.prototype.reset = function(params) {
	params = params || {};

	this.f = params.from || '';	
	this.w = params.where || [];	
};

Delete.prototype.where = function(w) {
	this.w.push(w);
	return this;
}

Delete.prototype.resetWhere = function(w) {
	this.w = [];
	return this;
}

Delete.prototype.from = function(f) {
	this.f = f;
	return this;
}

module.exports = Delete;