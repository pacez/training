import doubleDimensionalArrayGenerator from '../src/doubleDimensionalArrayGenerator';

const case_1  =  doubleDimensionalArrayGenerator({
    columns: 5,
    rows: 6,
    start: 1,
    step: 1
});
test('6行，5列，从1开始，以1为步进递增', () => {
    expect(case_1).toStrictEqual([
        [ 1, 2, 3, 4, 5 ],
        [ 6, 7, 8, 9, 10 ],
        [ 11, 12, 13, 14, 15 ],
        [ 16, 17, 18, 19, 20 ],
        [ 21, 22, 23, 24, 25 ],
        [ 26, 27, 28, 29, 30 ]
    ]);
});


const case_2  =  doubleDimensionalArrayGenerator({
    columns: 5,
    rows: 5,
    start: 9,
    step: 5
});
test('5行，5列，从9开始，以5为步进递增', () => {
    expect(case_2).toStrictEqual([ 
        [ 9, 14, 19, 24, 29 ],
        [ 34, 39, 44, 49, 54 ],
        [ 59, 64, 69, 74, 79 ],
        [ 84, 89, 94, 99, 104 ],
        [ 109, 114, 119, 124, 129 ] 
    ]);
});

