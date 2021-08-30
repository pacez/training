
/**
 * author: pace_zhong@foxmail.com
 * 已知乘积，求乘数。
 *
 * @export
 * @param {number} num
 * @param {Array<number>} [result=[]]
 * @param {*} [parts=number]
 * @return {*}  {Array<number>}
 */
export default function calcMultiplier(num:number,result:Array<number>=[],parts:number=2):Array<number> {
    const part = num / parts;

    if(part > 1) {
        // 是否能分成整数
        if(part % 1 === 0) {
            result.push(parts);
            calcMultiplier(part,result);
        }else {
            calcMultiplier(num,result,parts+1);
        }
    }

    if(part === 1) {
        result.push(parts)
    } 
    return result
}