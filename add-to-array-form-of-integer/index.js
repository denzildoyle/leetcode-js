module.exports = (num, k) => {
	return String((BigInt(num.join(''))+BigInt(k))).split('').map(Number);
}
