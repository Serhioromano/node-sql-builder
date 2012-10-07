/*globalr process console module require*/
"use strict";

var utils = require('./util');
var render = require('./renderer');

function Delete(params)
{
	this.type = 'delete';
	params = params || {};
	this.reset(params);
	
	utils.store(this.w, params.where);
}

Delete.prototype.reset = function(params) {
	params = params || {};

	this.f = params.from || '';
	this.w = {};
};

Delete.prototype.where = function(w, key) {
	utils.store(this.w, w, key);
	return this;
};

Delete.prototype.resetWhere = function(key) {
	utils.unset(this.w, key);
	return this;
};

Delete.prototype.from = function(f) {
	this.f = f;
	return this;
};

Delete.prototype.toString = function(db_type)
{
	return render.toString(this, db_type);
};

module.exports = Delete;