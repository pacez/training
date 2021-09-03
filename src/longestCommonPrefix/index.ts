
/**
 * author: pace_zhong@foxmail.com
 * [查找最长公共前缀]
 *
 * @param   {string[]}  strs  [被查找数组]
 * @return  {string}          [公共前缀]
 */
export default function longestCommonPrefix(strs: string[]):string {
  // 空数组直接返回
  if (strs.length === 0) return '';

  // 按长符递增排序
  const orderList = strs.sort((a, b) => a.length - b.length);
  // 最小长度字符
  const minLengthStr = orderList[0];

  const perfix = check(minLengthStr, orderList);

  return perfix;
};

/**
 * check
 * 
 * @param   {string}    target     [查找目标]
 * @param   {string[]}  orderList  [被查找数组]
 *
 * @return  {string}               [公共前缀]
 */
function check(target: string, orderList: string[]):string {
  // 没找到返回空字符
  if (target === '') return '';

  let flag = true; // 找到的标记

  // 从1开始，不和自身做对比
  for (let i = 1; i < orderList.length; i++) {
    const str = orderList[i];
    // 不是起始值
    if (str.indexOf(target) !== 0) {
      flag = false; // 没找到
    }
  }

  // 找到目标值
  if (flag) {
    return target
  }

  // 未找到目标值，递归执行
  return check(target.substring(0, target.length - 1), orderList);
}