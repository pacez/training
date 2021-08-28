# PromiseAllSettled

对于ES6 Promise.allSetled 的简单实现。


### 示例
```typescript
//声明两个promise对象
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 1500)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('fail');
    }, 1000)
});

allSettled([p1,p2]).then(result => {
  console.log(result);
})

/*
output: [
    {
        "status": "fulfilled",
        "value": "success"
    },
    {
        "status": "rejected",
        "reason": "fail"
    }
]
*/
```