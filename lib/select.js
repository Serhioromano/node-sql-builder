"use strict";

function Select(params)
{
	this.type = 'select';

	params = params || {};

	this.s = params.select || [];
	this.f   = params.from   || [];
	this.w  = params.where  || [];
	this.g  = params.group  || [];
	this.o  = params.order  || [];
	this.l   = params.left   || [];
	this.r  = params.right  || [];
	this.j   = params.join   || [];
	this.u  = params.union  || [];
	this.h  = params.having  || [];
	this.limit  = params.limit  || 0;
	this.limitstart  = params.limitstart  || 0;
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

Select.prototype.offset = function(page, per_page) {
	this.limit = per_page;
	this.limitstart = per_page * page;
	return this;
};


module.exports = Select;