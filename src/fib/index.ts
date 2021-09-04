/**
 * author: pace_zhong@foxmail.com
 * 
 * 输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）
 * 实现思路可优化，目前以滚动数组的方式引导解决
 * 
 * @param n 
 * @returns 
 */

export default function fib(n: number): number {
  // 从2开始后续的递增才需要计算
  if (n < 2) {
    return n
  }

  const mod = 10**9 + 7;

  let p1 = 0, p2 = 0, r = 1;
  for (let i = 2; i <= n; i++) {
    p1 = p2;
    p2 = r
    r = (p1 + p2) % mod;
  }
  return r
};