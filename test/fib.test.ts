import fib from "../src/fib";

const case_1 = fib(1);
test('1 -> 1', () => {
  expect(case_1).toBe(1);
})

const case_2 = fib(5);
test('5 -> 5', () => {
  expect(case_2).toBe(5);
})

const case_3 = fib(7);
test('7 -> 13', () => {
  expect(case_3).toBe(13);
})


const case_4 = fib(100);
test('100 -> 687995182', () => {
  expect(case_4).toBe(687995182);
})