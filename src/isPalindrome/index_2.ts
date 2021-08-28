/**
 * author: pace_zhong@foxmail.com
 * 判断是否回文数
 * 核心思路保持一致：回文数 反转后 与 反转前相等
 * 
 * @param x 
 * @returns boolean
 */


// 利用反转后，值相等原理，不涉及算法
export default function isPalindrome(x: number): boolean {
  let arr = (x + '').split('');
  let reverse = parseInt(arr.reverse().join(''), 10); // 负数反转后，直接被转为正数，不带负号，这里不用特殊处理这。
  return x === reverse
};

