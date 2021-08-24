/**
 * 快速排序
 *
 * @param {*} arr
 * @return {*} 
 */
const quickSort = (arr) => {

    const arrLength = arr.length;

    if(arr.length <=1) return arr;

    const middleIndex = Math.floor(arr.length/2);
    const middle = arr[middleIndex];

    let left = [];
    let right = [];

    for(let i=0; i<arrLength; i++) {
        const item = arr[i];
        item <= middle && i!==middleIndex && left.push(item); // 考虑参考值紧邻有相同值的情况
        item > middle && right.push(item);
    }

    left = quickSort(left)
    right = quickSort(right)

    return left.concat([middle]).concat(right);
}

/**
 * 实现一个数组过滤方法。
 * 输入参数为一个数组arr，和一个数字max，arr中全是数字，max小于arr的长度，要求返回arr中最小的k个数字，且保持原数组顺序。
 * 比如：输入：[1,2,3,5,6,3,2]，3 返回：[1,2,2] 
 *
 * @param {*} max
 * @param {*} arr
 * @return {*} 
 */
const limitFilterArray = (max,arr) => {
    const arrLength = arr.length;

    if(max > arrLength) {
        alert('max 不能大于数组长度')
        return 
    }

    // 长度相等直接返回
    if(max === arr) {
        return arr
    }

    const arrToMap = {};
    
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


const result = limitFilterArray(6,[
    4,1,2,3,4,7,5,3,4,3,5,6,6
])
console.log(result);