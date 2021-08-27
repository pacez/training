import limitFilterArray from '../src/limitFilterArray';

// 普通情况
const case_1 = limitFilterArray(6,[
    4,1,2,3,4,7,5,3,4,3,5,6,6
]);
test('normal', () => {
    expect(case_1).toStrictEqual([ 4, 1, 2, 3, 3, 3 ]);
});

// 有负数的情况
const case_2 = limitFilterArray(6,[
    4,-1,2,3,4,7,5,3,4,3,5,6,-6
]);
test('minus zone', () => {
    expect(case_2).toStrictEqual([ -1, 2, 3, 3, 3, -6 ]);
});