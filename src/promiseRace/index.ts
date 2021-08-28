
/**
 * Promise.race的简单实现
 *
 * @param   {Array<Promise>}       promises  
 * @return  {Promise<any>}                   
 */
export default function promiseRace(promises: Array<Promise<any>>): Promise<any> {
  return new Promise((resolve, reject) => {
    // let flag = false;
    for (let promise of promises) {
      promise.then(
        (value) => {
          // if (flag) return;
          // flag = true;
          resolve(value)
        },
        (reason) => {
          // if (flag) return;
          // flag = true;
          reject(reason)
        }
      )
    }
  })
}