/**
 * author: pace_zhong@foxmail.com
 * 
 * 判断是否回文数
 * 核心思路保持一致：回文数 反转后 与 反转前相等
 *  
 * @param x
 * @returns boolean
 */

export default function isPalindrome(x: number): boolean {
  const cacheNum = x; // 缓存原始值用于最终对比

  // 负数 或者 (以0结尾 && 非零)
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reverse: number = 0; // 反转后的值
  while (x > 0) {
    reverse = reverse * 10 + x % 10; // 往反转的数字后追加值
    x = Math.floor(x / 10); // 移除最后一位
  }

  return reverse === cacheNum
};