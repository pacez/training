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

    if (nums.length === 1 && nums[0] !== target) {
      targetIndex = -1;
    }

    const midIndex = Math.floor(length / 2);

    if (length > 1) {
      if (target >= nums[0] && target < nums[midIndex]) {
        targetIndex = targetIndex;
        findIndex(nums.slice(0, midIndex), target, targetIndex);
      }

      if (target >= nums[midIndex] && target <= nums[length - 1]) {
        targetIndex = targetIndex + midIndex;
        findIndex(nums.slice(midIndex, length), target, targetIndex);
      }
    }

    return targetIndex
}

export default function ascIndexOf(nums: number[], target: number): number {
  findIndex(nums, target,0);
}
