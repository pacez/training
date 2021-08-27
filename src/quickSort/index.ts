/**
 * 快速排序
 *
 * @param {*} arr
 * @return {*} 
 */
 export default  function quickSort (arr:Array<number>) {

    const arrLength = arr.length;

    if(arr.length <=1) return arr;

    const middleIndex = Math.floor(arr.length/2);
    const middle = arr[middleIndex];

    let left:Array<number> = [];
    let right:Array<number>  = [];

    for(let i=0; i<arrLength; i++) {
        const item = arr[i];
        item <= middle && i!==middleIndex && left.push(item); // 数据组中值与参考值相同时，统一放左侧
        item > middle && right.push(item);
    }

    left = quickSort(left)
    right = quickSort(right)

    return left.concat([middle]).concat(right);
}