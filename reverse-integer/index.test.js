const reverseInteger = require('./index');

describe('reverse integer', () => {
    test('Input: x = 123\n      Output: 321', () => {
        const number = 123;
        expect(reverseInteger(number)).toBe(321);
    });
    test('Input: x = -123\n      Output: -321', () => {
        const number = -123;
        expect(reverseInteger(number)).toBe(-321);
    });
    test('Input: x = 1534236469\n      Output: 0', () => {
        const number = 1534236469;
        expect(reverseInteger(number)).toBe(0);
    });
    test('Input: x = -2147483648\n      Output: 0', () => {
        const number = -2147483648;
        expect(reverseInteger(number)).toBe(0);
    });
});