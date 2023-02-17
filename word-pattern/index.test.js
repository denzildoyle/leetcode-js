const wordPattern = require('./index');

describe("Word Pattern", () => {

    test('Input: pattern = "abba", s = "dog cat cat dog"\n      Output: true', () => {
        const pattern = "abba";
        const s = "dog cat cat dog";
        expect(wordPattern(pattern, s)).toBe(true);
    });

    test('Input: pattern = "abba", s = "dog cat cat fish"\n     Output: false', () => {
        const pattern = "abba";
        const s = "dog cat cat fish";
        expect(wordPattern(pattern, s)).toBe(false);
    });

    test('Input: pattern = "aaaa", s = "dog cat cat dog"\n      Output: false', () => {
        const pattern = "aaaa";
        const s = "dog cat cat dog";
        expect(wordPattern(pattern, s)).toBe(false);
    });
});