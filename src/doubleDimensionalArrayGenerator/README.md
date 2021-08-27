# doubleDimensionalArrayGenerator
二维数组生成器

根据参数配置，生成一个有序的二维数组。



### Config

| Name    | Desc     |
| ------- | -------- |
| columns | 列数     |
| rows    | 行数     |
| start   | 起始值   |
| step    | 递增步长 |



### 示例


```typescript
import doubleDimensionalArrayGenerator from 'double-dimensional-array-generator';

const doubleDimensionalArray  =  doubleDimensionalArrayGenerator({
  columns: 5,
  rows: 6,
  start: 1,
  step: 1
});

console.log(doubleDimensionalArray);

/*
输出: 
[
  [ 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10 ],
  [ 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20 ],
  [ 21, 22, 23, 24, 25 ],
  [ 26, 27, 28, 29, 30 ]
]
*/
```

