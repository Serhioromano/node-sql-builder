"use strict";

function Select(params)
{
	this.type = 'select';
	this.reset(params);
}


Select.prototype.select = function(s) {
	this.s.push(s);
	return this;
};

Select.prototype.from = function(f) {
	this.f.push(f);
	return this;
};

Select.prototype.where = function(w) {
	this.w.push(w);
	return this;
};

Select.prototype.group = function(g) {
	this.g.push(g);
	return this;
};

Select.prototype.order = function(o) {
	this.o.push(o);
	return this;
};

Select.prototype.left = function(l) {
	this.l.push(l);
	return this;
};

Select.prototype.right = function(r) {
	this.r.push(r);
	return this;
};

Select.prototype.join = function(j) {
	this.j.push(j);
	return this;
};

Select.prototype.union = function(u) {
	this.u.push(u);
	return this;
};

Select.prototype.having = function(h) {
	this.h.push(h);
	return this;
};
Select.prototype.resetSelect = function(s) {
	this.s = [];
	return this;
};

Select.prototype.resetFrom = function(f) {
	this.f = [];
	return this;
};

Select.prototype.resetWhere = function(w) {
	this.w = [];
	return this;
};

Select.prototype.resetGroup = function(g) {
	this.g = [];
	return this;
};

Select.prototype.resetOrder = function(o) {
	this.o = [];
	return this;
};

Select.prototype.resetLeft = function(l) {
	this.l = [];
	return this;
};

Select.prototype.resetRight = function(r) {
	this.r = [];
	return this;
};

Select.prototype.resetJoin = function(j) {
	this.j = [];
	return this;
};

Select.prototype.resetUnion = function(u) {
	this.u = [];
	return this;
};

Select.prototype.resetHaving = function(h) {
	this.h = [];
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

	this.s = params.select || [];
	this.f = params.from   || [];
	this.w = params.where  || [];
	this.g = params.group  || [];
	this.o = params.order  || [];
	this.l = params.left   || [];
	this.r = params.right  || [];
	this.j = params.join   || [];
	this.u = params.union  || [];
	this.h = params.having || [];
	this.limit  = params.limit  || 0;
	this.limitstart  = params.limitstart  || 0;
}


module.exports = Select;