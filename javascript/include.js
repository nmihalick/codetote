/**
 * this method was defined in "Javascript: The Good Parts" by Douglas Crockford.
 * if you haven't read that book and are writing javascript, you are a fool.
 *
 */
Function.prototype.method = function(name, func) {
    if (!this.prototype[name]) { this.prototype[name] = func;
	return this;
    }
};
