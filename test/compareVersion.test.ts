import compareVersion from '../src/compareVersion';

const case_1 = compareVersion('1.2','1');
test('1.2 > 1 => 1', () => {
    expect(case_1).toBe(1);
});


const case_2 = compareVersion('1.0.0','1.0');
test('1.0.0 === 1.0 => 0', () => {
    expect(case_2).toBe(0);
});


const case_3 = compareVersion('0.0.1','1.0.0');
test('0.0.1 === 1.0.0 => -1', () => {
    expect(case_3).toBe(-1);
});


const case_4 = compareVersion('1.0.0.1','1.0.0');
test('1.0.0.1 === 1.0.0 => 1', () => {
    expect(case_4).toBe(1);
});

const case_5 = compareVersion('1.0.0.1.0','1.1.0');
test('1.0.0.1.0 === 1.1.0 => -1', () => {
    expect(case_5).toBe(-1);
});


const case_6 = compareVersion('1','1.2.1.1');
test(' 1 === 1.2.1.1 => -1', () => {
    expect(case_6).toBe(-1);
});


const case_7 = compareVersion('1.001.1','1.2.1.1');
test(' 1.001.1 === 1.2.1.1 => -1', () => {
    expect(case_7).toBe(-1);
});


const case_8 = compareVersion('1.003.1','1.02.1.1');
test(' 1.003.1 === 1.02.1.1 => -1', () => {
    expect(case_8).toBe(1);
});


const case_9 = compareVersion('01.000.1','02.02.1.1');
test(' 01.000.1 === 02.02.1.1 => -1', () => {
    expect(case_9).toBe(-1);
});