const {twoSum, twoSum2} = require('./index.js');

describe("Find indexs of target function1", () => {

    test('Input: numbers = [2,7,11,15], target = 9\n        Output: [1,2]', () => {
        const numbers = [2,7,11,15];
        const target = 9;
        expect(twoSum(numbers, target)).toStrictEqual([1,2]);
    });

    test('Input: numbers = [2,3,4], target = 6\n        Output: [1,3]', () => {
        const numbers = [2,3,4];
        const target = 6;
        expect(twoSum(numbers, target)).toStrictEqual([1,3]);
    });

    test('Input: numbers = [-1,0], target = -1\n        Output: [1,2]', () => {
        const numbers = [-1,0];
        const target = -1;
        expect(twoSum(numbers, target)).toStrictEqual([1,2]);
    });

    test('Input: numbers = [0,0,5,9,8], target = -1\n        Output: [1,2]', () => {
        const numbers = [0,0,5,9,8];
        const target = 0;
        expect(twoSum(numbers, target)).toStrictEqual([1,2]);
    });
});


describe("Find indexs of target function2", () => {

    test('Input: numbers = [2,7,11,15], target = 9\n        Output: [1,2]', () => {
        const numbers = [2,7,11,15];
        const target = 9;
        expect(twoSum2(numbers, target)).toStrictEqual([1,2]);
    });

    test('Input: numbers = [2,3,4], target = 6\n        Output: [1,3]', () => {
        const numbers = [2,3,4];
        const target = 6;
        expect(twoSum2(numbers, target)).toStrictEqual([1,3]);
    });

    test('Input: numbers = [-1,0], target = -1\n        Output: [1,2]', () => {
        const numbers = [-1,0];
        const target = -1;
        expect(twoSum2(numbers, target)).toStrictEqual([1,2]);
    });

    test('Input: numbers = [0,0,5,9,8], target = -1\n        Output: [1,2]', () => {
        const numbers = [0,0,5,9,8];
        const target = 0;
        expect(twoSum2(numbers, target)).toStrictEqual([1,2]);
    });
});