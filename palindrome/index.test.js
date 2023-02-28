const palindrome = require('./index');

describe('palindrome', () => {
    test('Input: x = 121\n          Output: true', () => {
        const number = 121;
        expect(palindrome(number)).toBeTruthy();
    });
    test('Input: x = -121\n         Output: false', () => {
        const number = -121;
        expect(palindrome(number)).toBeFalsy();
    });
    test('Input: x = 10\n           Output: false', () => {
        const number = 10;
        expect(palindrome(number)).toBeFalsy();
    });
    test('Input: x = 10001\n           Output: true', () => {
        const number = 10001;
        expect(palindrome(number)).toBeTruthy();
    });
    test('Input: x = 12521\n           Output: true', () => {
        const number = 12521;
        expect(palindrome(number)).toBeTruthy();
    });
    test('Input: x = -12521\n           Output: false', () => {
        const number = -12521;
        expect(palindrome(number)).toBeFalsy();
    });
});