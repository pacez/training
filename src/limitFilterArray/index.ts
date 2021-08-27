import quickSort from "../quickSort";

interface IArrToMap {
    [key:string]: Array<number>
}

/**
 * author: pace_zhong@foxmail.com
 * 
 * 实现一个数组过滤方法。
 * 输入参数为一个数组arr，和一个数字max，arr中全是数字，max小于arr的长度，要求返回arr中最小的max个数字，且保持原数组顺序。
 * 比如：输入：[1,2,3,5,6,3,2]，3 返回：[1,2,2] 
 *
 * @param {number} max
 * @param {Array<number>} arr
 * @return {*}  {Array<number>}
 */
export default function limitFilterArray (max:number,arr:Array<number>):Array<number> {
    const arrLength = arr.length;

    if(max > arrLength) {
        max = arrLength;
    }

    // 长度相等直接返回
    if(max === arrLength) {
        return arr
    }

    const arrToMap:IArrToMap = {};
    
    // 将值的索引以对象结构记录下来  
    arr.forEach((item,i) => {
        !arrToMap[item] && (arrToMap[item]=[]);
        arrToMap[item].push(i);
    });

    // 返回结果
    let result = new Array(arrLength);

    // 重新排序为递增有序数组 
    let orderArray = quickSort(arr);
    
    // 根据arrToMap记录的索引,构建最终结果
    for(let i=0;  i<max; i++) {
        const item = orderArray[i];
        const itemIndex = arrToMap[item][0]; 
        result[itemIndex] = item;
        // 删除已开销的索引
        arrToMap[item].splice(0,1);
    }
    
    return result.filter(item => item)
}

