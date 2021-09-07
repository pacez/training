import ascIndexOf from '../src/ascIndexOf';

const case_1 = ascIndexOf([5],5)
test('[5],5 => 0', ()=>{
    expect(case_1).toBe(0);
});


const case_2 = ascIndexOf([-1,0,2,5],5);
test('[-1,0,2,5],2 => 5', ()=>{
    expect(case_2).toBe(3);
});

const case_3 = ascIndexOf([1,2,5],4)
test('[1,2,5],4 => -1', ()=>{
    expect(case_3).toBe(-1);
});

const case_4 = ascIndexOf([],4)
test('[],4 => -1', ()=>{
    expect(case_4).toBe(-1);
});

const case_5 = ascIndexOf([2,5],0)
test('[2,5],0 => -1', ()=>{
    expect(case_5).toBe(-1);
});