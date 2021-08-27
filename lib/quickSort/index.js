"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 快速排序
 *
 * @param {*} arr
 * @return {*}
 */
function quickSort(arr) {
    var arrLength = arr.length;
    if (arr.length <= 1)
        return arr;
    var middleIndex = Math.floor(arr.length / 2);
    var middle = arr[middleIndex];
    var left = [];
    var right = [];
    for (var i = 0; i < arrLength; i++) {
        var item = arr[i];
        item <= middle && i !== middleIndex && left.push(item); // 数据组中值与参考值相同时，统一放左侧
        item > middle && right.push(item);
    }
    left = quickSort(left);
    right = quickSort(right);
    return left.concat([middle]).concat(right);
}
exports.default = quickSort;
