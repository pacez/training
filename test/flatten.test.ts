import flatten from "../src/flatten";

const case_1 = flatten([1,2,[3,0,-1],7,11,15]);
test('一般情况，默认拉平第一层', () => {
    expect(case_1).toStrictEqual([1,2,3,0,-1,7,11,15]);
});

const case_2 = flatten([1,2,[3,0,-1],7,11,{}]);
test('子项有对象时，默认拉平第一层', () => {
    expect(case_2).toStrictEqual([1,2,3,0,-1,7,11,{}]);
});

const case_3 = flatten([1,2,[3,0,-1,[{a:1},2,[100,{b:1}]]],7,11,{}],3);
test('子项有对象时，拉平三层，且最深一层有对象类型值', () => {
    expect(case_3).toStrictEqual([1,2,3,0,-1,{a:1},2,100,{b:1},7,11,{}]);
});

const case_4 = flatten([1,2,[3,0,-1,[{a:1},2,[100,{b:1}]]],7,11,{}],5);
test('为depth设置超出数组本身深度的值', () => {
    expect(case_3).toStrictEqual([1,2,3,0,-1,{a:1},2,100,{b:1},7,11,{}]);
});
