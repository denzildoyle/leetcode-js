const containsDuplicate = require('./index');

describe("Containes Duplicates", () => {
    test("Input: [1,2,3,1]", () => {
        const nums = [1,2,3,1];
        expect(containsDuplicate(nums)).toBeTruthy();
    });

    test("Input: [1,2,3,4]", () => {
        const nums = [1,2,3,4];
        expect(containsDuplicate(nums)).toBeFalsy();
    });

    test("Input: [1,1,1,3,3,4,3,2,4,2]", () => {
        const nums = [1,1,1,3,3,4,3,2,4,2];
        expect(containsDuplicate(nums)).toBeTruthy();
    });
});