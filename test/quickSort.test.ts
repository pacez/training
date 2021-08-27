import quickSort from "../src/quickSort";

// 普通情况
const case_1 = quickSort([10,0,5,2,3,99,1000]);
test('normal', () => {
    expect(case_1).toStrictEqual([ 0, 2, 3, 5, 10, 99,1000 ]);
});

// 负数情况
const case_2 = quickSort([-10,0,5,2,3,99,1000,-2]);
test('minus zone', () => {
    expect(case_2).toStrictEqual([ -10,-2,0, 2, 3, 5, 99,1000 ]);
});

// 重复数字
const case_3 = quickSort([-10,0,5,2,99,3,99,-10,1000,-2]);
test('repeat number', () => {
    expect(case_3).toStrictEqual([ -10,-10,-2,0, 2, 3, 5, 99, 99,1000 ]);
});
