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
