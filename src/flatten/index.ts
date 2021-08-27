/**
 * author: pace_zhong@foxmail.com
 * 数组扁平化
 *
 * @param {Array<any>} arr
 * @param {number} [depth=1]
 * @param {number} [currentDepth=0]
 * @return {*}  {Array<any>}
 */

export default function flatten(arr:Array<any>,depth:number = 1,currentDepth:number=0):Array<any> {
    // 非数组,或者达到拉平深度,不处理直接返回
    if(!Array.isArray(arr) || depth === currentDepth) return arr;

    let result:Array<any> = [];

    arr.forEach(item => {
        result = result.concat(flatten(item,depth,currentDepth+1));
    })

    return result;
}