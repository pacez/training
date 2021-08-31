/**
 * author: pace_zhong@foxmail.com
 * 罗马数字转整数，限定范围1-3999
 *
 * @param {string} s
 * @return {*}  {number}
 */
interface INumMap  {
    [key:string]: number
}
export default function romanToInt(s: string): number {

    const arr:string[] = s.split('');
    let result:number = 0;
    const numMap: INumMap = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };

    for(let i = 0; i<arr.length; i++) {
        const current:number = numMap[arr[i]];
        const prev:number | null = i==0 ? null : numMap[arr[i-1]];
        result += current; // 先累加
        if(prev!==null && current > prev) {
            // 如果当前罗马数字比上一位大，则减上一位双倍（因为先加一次）
            result -= 2*prev;
        }
    }

    return result
};