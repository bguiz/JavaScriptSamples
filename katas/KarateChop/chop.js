
function chop(value, values) {
	var length = values.length;

	var l = length;
	var pos = Math.floor(l / 2);
	var delta = pos;

	while (pos >= 0 && pos < length) {
		var newvalue = values[pos];

		if (value == newvalue)
			return pos;

		if (delta == 0)
			return -1;

		delta = Math.floor(delta / 2);
		l = pos;

		if (value < newvalue)
			pos = pos - (delta ? delta : 1);
		else
			pos = pos + (delta ? delta : 1);
	}

	return -1;
}

module.exports = chop;