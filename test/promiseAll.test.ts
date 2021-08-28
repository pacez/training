import promiseAll from '../src/promiseAll';

interface IResult {
  value: any,
  compare: any,
}

function getValueAndCompare(promises: Array<Promise<any>>): Promise<IResult> {
  return new Promise( async (resolve) => {
    let value = await promiseAll(promises).catch((e: any) => {
      //无实际意义，规避难以造出的测试场景，保证reject的测试覆盖率。
    });
    let compare = await Promise.all(promises).catch((e: any) => {
      //无实际意义，规避难以造出的测试场景，保证reject的测试覆盖率。
    });
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
        resolve('success_2');
      }, 200)
    })
  ]);
  expect(case_1.value).toStrictEqual(case_1.compare)
});

test('期中一个Promise Reject', async () => {
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
  ])
  expect(case_1.value).toStrictEqual(case_1.compare)
});


test('传入空数组', async () => {
  const case_1 = await getValueAndCompare([]);
  expect(case_1.value).toStrictEqual(case_1.compare)
});