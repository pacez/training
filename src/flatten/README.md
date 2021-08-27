# flatten

实现数组扁平化算法，支持设置拉平深度

### 示例
```javascript
flatten([1,2,3,[4,5]])
//output: [1,2,3,4,5]


flatten([1,2,3,[4,5,[6,[7]]]],3)
//output: [1,2,3,4,5,6,7]


flatten([1,2,3,[4,5,[6,[7,{a:1},undefined]]]],3)
//output: [1,2,3,4,5,6,7,{a:1},undefined]
```

