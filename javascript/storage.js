/**
 * this method extends Storage to add regex for finding key matches.
 *
 * @returns array
 */
Storage.prototype.match = function(pattern) {
    var found = [];
    // if no pattern is provided, match on everything.
    if (!pattern) {
	pattern = /.*/;
    }
    for (var i=0; i<this.length; i++) {
	key_name = localStorage.key(i);
	if (pattern.test(key_name)) {
	    found.push(key_name);
	}
    }
    return found;
};
