
function chop(value, values) {
	var length = values.length;

	var l = length;
	var top = l;
	var bottom = 0;
	var pos = Math.floor(l / 2);

	while (bottom <= top) {
		var newvalue = values[pos];

		if (value == newvalue)
			return pos;

		if (value < newvalue)
			top = pos - 1;
		else
			bottom = pos + 1;

		pos = bottom + Math.floor((top - bottom)/2);
	}

	return -1;
}

module.exports = chop;