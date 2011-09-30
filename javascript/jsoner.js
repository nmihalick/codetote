/**
 * jsoner is a wrapper for the JSON stringify and parse methods. if the passed
 * value cannot be converted, it will be returned as-is. 
 *
 */
var jsoner = function() {
    var that = {};
    that.convert = function(o) {
	if (typeof(o) == "object") {
	    try {
		o = JSON.stringify(o);
	    }
	    catch(e) {
		// nothing to do -- the parsing doesn't work
	    }
	}
	return o;
    };
    that.parse = function(o) {
	try {
	    o = JSON.parse(o);
	}
	catch(e) {
	    // nothing to do -- the parsing doesn't work
	}
	return o;
    };
    return that;
};
