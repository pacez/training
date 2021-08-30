import calcMultiplier from '../src/calcMultiplier';

const case_1 = calcMultiplier(100);
test('输入100，期望得到[2,2,5,5]', () => {
    expect(case_1).toStrictEqual([2,2,5,5]);
});


const case_2 = calcMultiplier(180);
test('输入180，期望得到[2, 2, 3, 3, 5 ]', () => {
    expect(case_2).toStrictEqual([2, 2, 3, 3, 5 ]);
});

