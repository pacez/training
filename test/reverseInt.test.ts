import reverseInt from '../src/reverseInt';

const case_1 = reverseInt(12345);
test('普通', () => {
    expect(case_1).toBe(54321);
});


const case_2 = reverseInt(-1552345);
test('负数', () => {
    expect(case_2).toBe(-5432551);
});


const case_3 = reverseInt(Math.pow(2,31) * 10);
test('超出边界范围', () => {
    expect(case_3).toBe(0);
});


const case_4 = reverseInt(-1232323232323232323232323);
test('负数，超出边界范围', () => {
    expect(case_4).toBe(0);
});

const case_5 = reverseInt(1534236469);
test('反转后超出边界范围', () => {
    expect(case_5).toBe(0);
});


