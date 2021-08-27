"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var quickSort_1 = __importDefault(require("../quickSort"));
function limitFilterArray(max, arr) {
    var arrLength = arr.length;
    if (max > arrLength) {
        alert('max 不能大于数组长度');
        return;
    }
    // 长度相等直接返回
    if (max === arrLength) {
        return arr;
    }
    var arrToMap = {};
    // 将值的索引以对象结构记录下来  
    arr.forEach(function (item, i) {
        !arrToMap[item] && (arrToMap[item] = []);
        arrToMap[item].push(i);
    });
    // 返回结果
    var result = new Array(arrLength);
    // 重新排序为递增有序数组 
    var orderArray = (0, quickSort_1.default)(arr);
    // 根据arrToMap记录的索引,构建最终结果
    for (var i = 0; i < max; i++) {
        var item = orderArray[i];
        var itemIndex = arrToMap[item][0];
        result[itemIndex] = item;
        // 删除已开销的索引
        arrToMap[item].splice(0, 1);
    }
    return result.filter(function (item) { return item; });
}
exports.default = limitFilterArray;
