
/**
 * author: pace_zhong@foxmail.com
 * 
 * 对于ES6 Promise.allSettled 的简单实现
 *
 * @param   {Array<Promise>}                    promises  
 * @return  {Promise<Array><IPromiseResult>}            
 */

export interface IPromiseResult {
  status: 'fulfilled' | 'rejected';
  value?: any;
  reason?: any;
}
export default function PromiseAllSettled(promises: Array<Promise<any>>): Promise<Array<IPromiseResult>> {
  return new Promise((resolve, reject) => {
    let doneCount = 0;
    const count = promises.length; // promise数量

    // 空数组
    if (count === 0) {
      resolve([]);
      return
    }

    const result:Array<IPromiseResult> = new Array(count); // 返回的结果

    // 设置返回值，并判断全部请求结束后，执行resolve 
    const setResult = (data: IPromiseResult, index:number) => {
      result[index] = data;
      doneCount++;
      if (doneCount === count) {
        resolve(result);
      }
    }

    for (let i = 0; i < count; i++) {
      const promise = promises[i];
      promise.then(
        (value) => {
          setResult({
            status: 'fulfilled',
            value,
          }, i)
        },
        (reason) => {
          setResult({
            status: 'rejected',
            reason,
          }, i)
        }
      )
    }
  })
}