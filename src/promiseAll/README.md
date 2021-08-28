# PromiseAll

对于ES6 Promise.all的简单实现。


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

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success_p3');
    }, 1000)
});

promiseAll([p1,p2]).cache(e => {
    console.log(e)
})

/*
output: fail
*/

promiseAll([p1,p3]).then((data)=>{
    console.log(data);
})
/*
output: [
    'success',
    'success_p3'
]
*/
```