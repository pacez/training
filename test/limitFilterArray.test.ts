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

// 最大长度
const case_3 = limitFilterArray(6,[
    4,-1,2,3,4,7
]);;
test('max length', () => {
    expect(case_3).toStrictEqual([ 4,-1,2,3,4,7 ]);
});


// 超出数组长度
const case_4 = limitFilterArray(7,[
    4,-1,2,3,4,7
]);;
test('max length', () => {
    expect(case_4).toStrictEqual([ 4,-1,2,3,4,7 ]);
});