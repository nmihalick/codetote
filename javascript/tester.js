var tester = function() {
    var that = {};
    that.assert_equals = function(t1, t2, n) {
	if (t1 == t2) {
	    var r = true;
	}
	else {
	    var r = false;
	    console.log(t1);
	    console.log(t2);
	}
	this.write_result(n, r);
    };
    that.write_result = function(n, r) {
	var d = $("<div>").html(n+": "+r);
	$("body").append(d);
    };
    return that; 
};
