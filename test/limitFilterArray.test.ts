import limitFilterArray from '../src/limitFilterArray';

// 普通情况
const case_1 = limitFilterArray(6,[
    4,1,2,3,4,7,5,3,4,3,5,6,6
]);
test('普通', () => {
    expect(case_1).toStrictEqual([ 4, 1, 2, 3, 3, 3 ]);
});

// 有负数的情况
const case_2 = limitFilterArray(6,[
    4,-1,2,3,4,7,5,3,4,3,5,6,-6
]);
test('有负数', () => {
    expect(case_2).toStrictEqual([ -1, 2, 3, 3, 3, -6 ]);
});

// 最大长度
const case_3 = limitFilterArray(6,[
    4,-1,2,3,4,7
]);;
test('达到数组最大长度', () => {
    expect(case_3).toStrictEqual([ 4,-1,2,3,4,7 ]);
});


// 超出数组长度
const case_4 = limitFilterArray(7,[
    4,-1,2,3,4,7
]);;
test('超出数组最大长度', () => {
    expect(case_4).toStrictEqual([ 4,-1,2,3,4,7 ]);
});