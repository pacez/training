# PromiseAll

对于ES6 Promise.race的简单实现。


### 示例
```typescript
//声明两个promise对象
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 500)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('fail');
    }, 1000)
});

promiseAll([p1,p2]).then((data) => {
    console.log(data);
},(e) => {
    console.log(e);
})

/*
output: success
*/
```