import twoSum from "../src/towSum";

const sort = (nums:Array<number> ) => nums.sort((a,b)=>a-b);

const case_1 = twoSum([1,2,7,11,15],18);
test('普通', () => {
    expect(sort(case_1)).toStrictEqual([2,3]);
});

const case_2 = twoSum([2,7,11,15],9);
test('紧邻的两个值，就是目标值', () => {
    expect(sort(case_2)).toStrictEqual([0,1]);
});

const case_3 = twoSum([2,7,11,15],19);
test('未命中目标', () => {
    expect(sort(case_3)).toStrictEqual([]);
});