interface INumsMap {
    [key:number]: number
}
/**
 * author: pace_zhong@foxmail.com
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {*}  {number[]}
 */
export default function twoSum(nums: number[], target: number): number[] {
    const numsMap: INumsMap = {};
    for(let i=0; i<nums.length; i++) {
        const item = nums[i];
        var partnerIndex = numsMap[target - item];
        if (typeof partnerIndex !== 'undefined') {
            return [i, partnerIndex];
        }
        numsMap[item] = i;
    }
    return []
};
