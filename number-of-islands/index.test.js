const numberofIslands = require('./index');

describe("Number of islands", () => {
    test("1 island", () => {
        const GRID = [
            ["1","1","1","1","0"],
            ["1","1","0","1","0"],
            ["1","1","0","0","0"],
            ["0","0","0","0","0"]
        ];
        expect(numberofIslands(GRID)).toBe(1);
    });

    test("3 islands", () => {
        const GRID = [
            ["1","1","0","0","0"],
            ["1","1","0","0","0"],
            ["0","0","1","0","0"],
            ["0","0","0","1","1"]
        ];
        expect(numberofIslands(GRID)).toBe(3);
    });
});