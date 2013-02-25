/**
 * returns a uuid to specs on:
 *  http://www.ietf.org/rfc/rfc4122.txt
 */
function create_uuid() {
    var s = [];
    var hex_digits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
    s[i] = hex_digits.substr(Math.floor(Math.random() *
    0x10), 1);
    }
    // bits 12-15 of the time_hi_and_version field to 0010
    s[14] = "4";  
    // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[19] = hex_digits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}


