const {solution1, solution2} = require('./index');

describe('Detect capitals solution1', () => {
    test('Input: word = "USA"\n         Output: true', () => {
        let word = "USA";
        expect(solution1(word)).toBe(true);
    });

    test('Input: word = "FlaG"\n         Output: false', () => {
        let word = "FlaG";
        expect(solution1(word)).toBe(false);
    });

    test('Input: word = "leetcode"\n         Output: true', () => {
        let word = "leetcode";
        expect(solution1(word)).toBe(true);
    });

    test('Input: word = "Google"\n         Output: true', () => {
        let word = "Google";
        expect(solution1(word)).toBe(true);
    });
});

describe('Detect capitals solution2', () => {
    test('Input: word = "USA"\n         Output: true', () => {
        let word = "USA";
        expect(solution2(word)).toBe(true);
    });

    test('Input: word = "FlaG"\n         Output: false', () => {
        let word = "FlaG";
        expect(solution2(word)).toBe(false);
    });

    test('Input: word = "leetcode"\n         Output: true', () => {
        let word = "leetcode";
        expect(solution2(word)).toBe(true);
    });

    test('Input: word = "Google"\n         Output: true', () => {
        let word = "Google";
        expect(solution2(word)).toBe(true);
    });
});
