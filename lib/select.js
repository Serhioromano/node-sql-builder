/*globalr process console modules require*/
"use strict";

var utils = require('./util');
var render = require('./renderer');

function Select(params)
{
	this.type = 'select';
	params = params || {};
	this.reset(params);
	
	utils.store(this.s, params.select);
	utils.store(this.f, params.from);
	utils.store(this.w, params.where);
	utils.store(this.g, params.group);
	utils.store(this.o, params.order);
	utils.store(this.l, params.left);
	utils.store(this.r, params.right);
	utils.store(this.j, params.join);
	utils.store(this.u, params.union);
	utils.store(this.h, params.having);

}


Select.prototype.select = function(s, key) {
	utils.store(this.s, s, key);
	return this;
};

Select.prototype.from = function(f, key) {
	utils.store(this.f, f, key);
	return this;
};

Select.prototype.where = function(w, key) {
	utils.store(this.w, w, key);
	return this;
};

Select.prototype.group = function(g, key) {
	utils.store(this.g, g, key);
	return this;
};

Select.prototype.order = function(o, key) {
	utils.store(this.o, o, key);
	return this;
};

Select.prototype.left = function(l, key) {
	utils.store(this.l, l, key);
	return this;
};

Select.prototype.right = function(r, key) {
	utils.store(this.r, r, key);
	return this;
};

Select.prototype.join = function(j, key) {
	utils.store(this.j, j, key);
	return this;
};

Select.prototype.union = function(u, key) {
	utils.store(this.u, u, key);
	return this;
};

Select.prototype.having = function(h, key) {
	utils.store(this.h, h, key);
	return this;
};
Select.prototype.resetSelect = function(key) {
	utils.unset(this.s, key);
	return this;
};

Select.prototype.resetFrom = function(key) {
	utils.unset(this.f, key);
	return this;
};

Select.prototype.resetWhere = function(key) {
	utils.unset(this.w, key);
	return this;
};

Select.prototype.resetGroup = function(key) {
	utils.unset(this.g, key);
	return this;
};

Select.prototype.resetOrder = function(key) {
	utils.unset(this.o, key);
	return this;
};

Select.prototype.resetLeft = function(key) {
	utils.unset(this.l, key);
	return this;
};

Select.prototype.resetRight = function(key) {
	utils.unset(this.r, key);
	return this;
};

Select.prototype.resetJoin = function(key) {
	utils.unset(this.j, key);
	return this;
};

Select.prototype.resetUnion = function(key) {
	utils.unset(this.u, key);
	return this;
};

Select.prototype.resetHaving = function(key) {
	utils.unset(this.h, key);
	return this;
};

Select.prototype.offset = function(page, per_page) {
	this.limit = per_page;
	this.limitstart = per_page * page;
	return this;
};

Select.prototype.reset = function(params)
{
	params = params || {};

	this.s = {};
	this.f = {};
	this.w = {};
	this.g = {};
	this.o = {};
	this.l = {};
	this.r = {};
	this.j = {};
	this.u = {};
	this.h = {};

	this.limit  = params.limit  || 0;
	this.limitstart  = params.limitstart  || 0;
};

Select.prototype.toString = function(db_type)
{
	return render.toString(this, db_type);
};

module.exports = Select;