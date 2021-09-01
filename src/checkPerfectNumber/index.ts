/**
 * 判断是否完美数
 *
 * @export
 * @param {number} num
 * @return {*}  {boolean}
 */
export default function checkPerfectNumber(num: number): boolean {
    let result = 1;

    // 1是所有整数的最小正因数，不能为自身。
    if(num === 1) return false

    const isEven = num % 2 === 0; // 是否偶数
    let i = 2; 

    while(i * i <= num ) {
        if(num % i === 0){
            result += i + num / i  // 份数 + 每份数量 往结果上递加
        }
        i = isEven ? i+2 : i+1; // 通过奇偶判断，在偶数的场景下可以减少一倍的循环次数
    }
    // 最终计算结果 与 对比值相等，认为是完美数
    if(result === num){
        return true
    }

    return false

};