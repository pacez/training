# 数组限制过滤

实现一个数组过滤方法。  
输入参数为一个数组arr，和一个数字max，arr中全是数字，max小于arr的长度，要求返回arr中最小的k个数字，且保持原数组顺序。  

### 示例
```javascript
const result = limitFilterArray(6,[
    4,1,2,3,4,7,5,3,4,3,5,6,6
])
console.log(result);

// 输出： [ 4, 1, 2, 3, 3, 3 ]
```