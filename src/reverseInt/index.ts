
/**
 * author: pace_zhong@foxmail.com
 * 
 * 整数反转
 * 不使用转字符，数组反转等内置方法
 * @export
 * @param {number} num
 * @return {*}  {number}
 */


export default function reverseInt(num:number):number {
    //范围定义: -2^31 ~ 2^31-1
    const min = -Math.pow(2,31);
    const max = Math.pow(2,31)-1;
    let result = 0;

    if(num > max || num < min ) {
        return  0
    }

    while(num !== 0) {
        result = result * 10 + num % 10;
        num = (num / 10) | 0;
    }
    
    if(result > max || result < min ) {
        return  0
    }

   return result;
}
