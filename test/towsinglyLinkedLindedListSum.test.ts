import towsinglyLinkedLindedListSum from '../src/towsinglyLinkedLindedListSum';

const case_1 = towsinglyLinkedLindedListSum(
    {
        val: 2,next: {
            val: 4,
            next: {
                val: 3,
                next: null
            }
        }
    },
    {
        val: 5,next: {
            val: 6,
            next: {
                val: 4,
                next: null
            }
        }
    }
)

test('[2,4,3],[5,6,4]  => [7,0,8]', () => {
    expect(case_1).toStrictEqual({
        val: 7,
        next: {
            val: 0,
            next: {
                val: 8,
                next: null
            }
        }
    });
});

