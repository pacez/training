// 安全转义转义
function safeConvert(str:any):string  {
    if(typeof str !== 'string') return str;
    return str.replace(/[<>]/g,(match):string => {
        switch(match){
            case '<':
                return "&lt;";
            default:
                return "&gt;";
        }
    });
}

/**
 * authour: pace_zhong@foxmail.com
 * 模板引擎简单实现
 *
 * @param {string} tpl
 * @param {object} data
 * @return {*}  {string}
 */
 export default function parseData(tpl:string,data:object) {

    tpl = tpl.replace(/\{(\w+(.\w)*)\}/g,(match,key) => {
        let result = '';
        try{
            // result = safeConvert(eval(`data.${key}`))
            const returnStr = `return data.${key}`;
            result = safeConvert(new Function('data','key',returnStr)(data,key));
        }catch(e) {
            // console.log(e);
        }

        return result
    });

    return tpl
}
