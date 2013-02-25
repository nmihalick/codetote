/**
 * simple unit testing framework for javascript. requires a web browser. the
 * best way to use this is to embed it in an empty html file.
 *
 * not very robust yet. it was simpler to write this than to setup, learn, and
 * use a framework built by someone else. 
 *
 * there are no test classes or functions. just assert_equals. what else do you
 * really need?
 */
var tester = function() {
    var that = {};
    that.assert_equals = function(t1, t2, n) {
	var r = false;
	if (t1 == t2) {
	    r = true;
	}
	this.write_result(n, r);
    };
    that.assert_true = function(t1, n) {
	var r = false;
	if (t1 === true) {
	    r = true;
	}
	this.write_result(n, r);
    };
    that.write_result = function(n, r) {
	var d = $("<div>").html(n+": "+r);
	$("body").append(d);
    };
    return that; 
};
