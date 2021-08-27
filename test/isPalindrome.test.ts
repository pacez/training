import isPalindrome from "../src/isPalindrome";

const case_1 = isPalindrome(12222221);
test('一般情况，输入值：12222221', () => {
  expect(case_1).toStrictEqual(true);
});

const case_2 = isPalindrome(1222222);
test('测试错误情况, 输入值：1222222', () => {
  expect(case_2).toStrictEqual(false);
});

const case_3 = isPalindrome(1223221);
test('测试奇数位数, 输入值：1223221', () => {
  expect(case_3).toStrictEqual(true);
});