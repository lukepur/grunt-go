// --- Utils --- //
var util = util || {};

util.computeQuadraticBezierPosition = function (s, c, f, t) {
    return ~~((1-t) * (1-t) * s + 2 * (1-t) * t * c + (t * t) * f);
}

// --- Array extensions --- //
if (!Array.prototype.filter)
{
  Array.prototype.filter = function(fun /*, thisp */)
  {
    "use strict";
 
    if (this == null)
      throw new TypeError();
 
    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun != "function")
      throw new TypeError();
 
    var res = [];
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in t)
      {
        var val = t[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, t))
          res.push(val);
      }
    }
 
    return res;
  };
}
if(!Array.prototype.shuffle) {
  Array.prototype.shuffle = function () {
    var i = this.length, j, tempi, tempj;
    if (i === 0) {
        return false;
    }
    while ( --i ) {
        j = Math.floor(Math.random() * ( i + 1 ) );
        tempi = this[i];
        tempj = this[j];
        this[i] = tempj;
        this[j] = tempi;
    }
    return this;
  }
}