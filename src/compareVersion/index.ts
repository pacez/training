/**
 * author: pace_zhong@foxmail.com
 * 版本号对比
 *
 * @export
 * @param {string} version1
 * @param {string} version2
 * @return {*}  {number}
 */
export default function compareVersion(version1: string, version2: string) {
  const verArr1 = version1.split('.');
  const verArr2 = version2.split('.');

  const maxLength = verArr1.length > verArr2.length ? verArr1.length : verArr2.length

  // 取任意最长的版本号进行循环对比
  for (let i = 0; i < maxLength; i++) {

    // 若v1还有值(也可能是0)，但是v2 已经没值了， 帮v2补充0。
    const v2 = parseInt((verArr2[i] || '0'), 10); // 处理V2前导0
    // 若v2还有值(也可能是0)，但是v1 已经没值了， 帮v1补充0。
    const v1 = parseInt((verArr1[i] || '0'), 10);  // 处理V1前导0

    if (v1 > v2) return 1
    if (v1 < v2) return -1

    // 比到最后，都相等返回0
    if (i === maxLength - 1) {
      return 0
    }

    // 相等，但不是最后一位数，继续比较下一位
    continue;
  }
};