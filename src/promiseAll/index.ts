/**
 * author: pace_zhong@foxmail.com
 *
 * 对于ES6 Promise.all 的简单实现
 *
 * @param   {Array<Promise>}              promises 
 * @return  {Promise<Array><any>}                   
 */
export default function promiseAll(promises: Array<Promise<any>>): Promise<Array<any>> | any {
  return new Promise((resolve, reject) => {
    let count = 0;
    const arrLength = promises.length;

    if (arrLength === 0) {
      resolve([])
      return
    }

    let result = new Array(arrLength - 1);

    for (let i = 0; i < arrLength; i++) {
      const promise = promises[i];
      promise.then(
        (value) => {
          result[i] = value;
          count++;
          if (count === arrLength) {
            resolve(result)
          }
        },
        (reason) => {
          reject(reason)
        }
      )
    }
  });
}