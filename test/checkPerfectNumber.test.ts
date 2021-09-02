import checkPerfectNumber from '../src/checkPerfectNumber';

test('6，28，496，8128，33550336, 完美数校验, 期望值true',() => {
    expect(checkPerfectNumber(6)).toBe(true);
    expect(checkPerfectNumber(28)).toBe(true);
    expect(checkPerfectNumber(496)).toBe(true);
    expect(checkPerfectNumber(8128)).toBe(true);
    expect(checkPerfectNumber(33550336)).toBe(true);
})


test('随机非完美数校验, 期望值true',() => {
    expect(checkPerfectNumber(1)).toBe(false);
    expect(checkPerfectNumber(16)).toBe(false);
    expect(checkPerfectNumber(227)).toBe(false);
    expect(checkPerfectNumber(4936)).toBe(false);
    expect(checkPerfectNumber(81218)).toBe(false);
    expect(checkPerfectNumber(33555336)).toBe(false);
})