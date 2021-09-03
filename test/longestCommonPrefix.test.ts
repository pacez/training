import longestCommonPrefix from '../src/longestCommonPrefix';

const case_1 = longestCommonPrefix(["flower", "flow", "flight"]);
test('["flower", "flow", "flight"] -> fl', () => {
  expect(case_1).toBe('fl');
});


const case_2 = longestCommonPrefix([]);
test('[] -> ""', () => {
  expect(case_2).toBe('');
});

const case_3 = longestCommonPrefix(["fsf","yslf","ffl"]);
test('["fsf","yslf","ffl"] -> ""', () => {
  expect(case_3).toBe('');
});