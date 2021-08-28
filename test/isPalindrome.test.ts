import isPalindrome from "../src/isPalindrome";
import isPalindrome_2 from "../src/isPalindrome/index_2";

const case_1 = isPalindrome(12222221);
const case_2_1 = isPalindrome_2(12222221);
test('一般情况，输入值：12222221', () => {
  expect(case_1).toStrictEqual(true);
  expect(case_2_1).toStrictEqual(true);
});

const case_2 = isPalindrome(1222222);
const case_2_2 = isPalindrome_2(1222222);
test('测试错误情况, 输入值：1222222', () => {
  expect(case_2).toStrictEqual(false);
  expect(case_2_2).toStrictEqual(false);
});

const case_3 = isPalindrome(1223221);
const case_2_3 = isPalindrome_2(1223221);
test('测试奇数位数, 输入值：1223221', () => {
  expect(case_3).toStrictEqual(true);
  expect(case_2_3).toStrictEqual(true);
});

const case_4 = isPalindrome(-1223221);
const case_2_4 = isPalindrome_2(-1223221);
test('测试负数, 输入值：-1223221', () => {
  expect(case_4).toStrictEqual(false);
  expect(case_2_4).toStrictEqual(false);
});


const case_5 = isPalindrome(10);
const case_2_5 = isPalindrome_2(10);
test('非零开始，以零结尾, 输入值：1100', () => {
  expect(case_4).toStrictEqual(false);
  expect(case_2_4).toStrictEqual(false);
});