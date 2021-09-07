/**
 * author: pace_zhong@foxmail.com
 *
 * @param   {number[]}  nums    
 * @param   {number}    target  
 *
 * @return  {number}           
 */

function findIndex(nums: number[], target: number, targetIndex:number): number {
    const length = nums.length;

    if (!nums || nums.length === 0) return -1;

    if (length === 1 && nums[0] !== target) {
      targetIndex = -1;
    }

    if (length > 1) {
      const midIndex = Math.floor(length / 2);
      if (target >= nums[0] && target < nums[midIndex]) {
        // 目标在左侧
        targetIndex = findIndex(nums.slice(0, midIndex), target, targetIndex);
      }else if(target >= nums[midIndex] && target <= nums[length - 1]) {
        // 目标在右侧
        targetIndex = findIndex(nums.slice(midIndex, length), target, targetIndex + midIndex);
      }else {
        // 处理超出边界的值
        targetIndex = -1
      }
    }
    return targetIndex
}

export default function ascIndexOf(nums: number[], target: number): number {
  return findIndex(nums, target, 0);
}
