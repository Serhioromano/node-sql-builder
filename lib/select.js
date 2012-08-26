module.exports = {
  
  type:'select',
  buffer: {},
  
  select: function(s) {
    if(this.buffer.select == undefined)
    {
	    this.buffer.select = [];
    }
    
    if(s instanceof Array)
    {
	    s.every(function(args) { 
	      this.buffer.select.push(args) 
	    });
    }
    else
    {
      this.buffer.select.push(s);
    }
    
    return this;
  },
  
  from: function(f) {
    
    if(this.buffer.from == undefined)
    {
	    this.buffer.from = [];
    }
    
    
    if(f instanceof Array)
    {
	    f.every(function(args) { 
	      this.buffer.from.push(args) 
	    });
    }
    else
    {
      this.buffer.from.push(f);
    }
    
    return this;
  },
  
  where: function(w) {
    
    if(this.buffer.where == undefined)
    {
	    this.buffer.where = [];
    }
    
    
    if(w instanceof Array)
    {
	    w.every(function(args) { 
	      this.buffer.where.push(args) 
	    });
    }
    else
    {
      this.buffer.where.push(w);
    }
    
    return this;
  },
  
  reset: function()
  {
	  this.buffer = {};
  }
};