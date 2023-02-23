const addToArrayForm = require('./index.js');

describe("Add to array from", () => {

    test('Input: num = [1,2,0,0], k = 34\n      Output: [1,2,3,4]\n         Explanation: 1200 + 34 = 1234', () => {
        const num = [1,2,0,0];
        const k = 34;
        expect(addToArrayForm(num, k)).toStrictEqual([1,2,3,4]);
    });

    test('Input: num = [2,7,4], k = 181\n       Output: [4,5,5]\n       Explanation: 274 + 181 = 455', () => {
        const num = [2,7,4];
        const k = 181;
        expect(addToArrayForm(num, k)).toStrictEqual([4,5,5]);
    });

    test('Input: num = [2,1,5], k = 806\n       Output: [1,0,2,1]\n         Explanation: 215 + 806 = 1021', () => {
        const num = [2,1,5];
        const k = 806;
        expect(addToArrayForm(num, k)).toStrictEqual([1,0,2,1]);
    });

    test('Input: num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], k=100\n       Output: [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,1,6,3]\n         Explanation: 12630717197566440063 + 100 = 12630717197566440163', () => {
        const num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3];
        const k = 100;
        expect(addToArrayForm(num, k)).toStrictEqual([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,1,6,3]);
    });
});