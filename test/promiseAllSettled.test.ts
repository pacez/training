import promiseAllSettled from '../src/promiseAllSettled';

interface IResult {
  value: any,
  compare: any,
}

function getValueAndCompare(promises: Array<Promise<any>>): Promise<IResult> {
  return new Promise( async (resolve) => {
    const value = await promiseAllSettled(promises);
    const compare = await Promise.allSettled(promises);
    resolve({
      value,
      compare
    })
  })
}

test('一般情况验证', async () => {
  const case_1 = await getValueAndCompare([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('success');
      }, 500)
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('fail');
      }, 200)
    })
  ]);
  expect(case_1.value).toStrictEqual(case_1.compare)
});


test('传入空数组', async () => {
  const case_1 = await getValueAndCompare([]);
  expect(case_1.value).toStrictEqual(case_1.compare)
});