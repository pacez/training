import romanToInt from '../src/romanToInt';

const case_1 = romanToInt('IV');
test('IV -> 4',()=>{
    expect(case_1).toBe(4);
});

const case_2 = romanToInt('XXIV');
test('XXIV -> 24',()=>{
    expect(case_2).toBe(24);
});

const case_3 = romanToInt('XXVII');
test('XXVII -> 27',()=>{
    expect(case_3).toBe(27);
});

