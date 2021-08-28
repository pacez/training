import allSettled from '../src/allSettled';

interface IResult {
  value: any,
  compare: any,
}

async function getValueAndCompare(promises: Array<Promise<unknown>>): Promise<IResult> {
  return new Promise( async (resolve,reject) => {
    const value = await allSettled(promises);
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