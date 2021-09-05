/**
 * 求两个单链接 相加后的 新单链表
 * 采用的是取巧的解法，利用了数组反转和bigInt的特性解决。
 *
 * @param   {ListNode}  l1
 * @param   {ListNode}  l2
 *
 * @return  {ListNode}
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

export default function towsinglyLinkedLindedListSum(l1: ListNode, l2: ListNode): ListNode {

  // 初始将链接都转为数组格式
  let a: number[] | bigint = listNodeToArray(l1, []);
  let b: number[] | bigint = listNodeToArray(l2, []);

  // 转大数，因为有可能超过了最大范围了
  a = BigInt(a.reverse().join(''));
  b = BigInt(b.reverse().join(''));

  // 将反转后的两个数组相加，并将每项值转换为整型
  let arr = (a + b + '').split('').reverse().map(item => parseInt(item, 10))

  // 设置默认节点的值
  let result: ListNode = {
    val: arr[0],
    next: null
  };

  arrayToListNode(arr, result);

  return result
};


// 将链表转为数组
function listNodeToArray(listNode: ListNode, arr: number[]): number[] {
  arr.push(listNode.val);
  listNode.next && listNodeToArray(listNode.next, arr);
  return arr;
}

// 将数组转为链表
export function arrayToListNode(arr: number[], result?: ListNode | null): void {
  if (arr.length === 0) {
    return
  }

  if (!result) {
    result = {
      val: arr[0],
      next: null
    }
  }
  arr.splice(0, 1);

  const nextVal: number | undefined = arr[0];

  if (typeof nextVal !== 'undefined') {
    result.next = {
      val: nextVal,
      next: {
        val: arr[1],
        next: null
      }
    }
  } else {
    result.next = null
  }
  return arrayToListNode(arr, result.next)
}