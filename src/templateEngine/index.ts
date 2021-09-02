// 安全转义转义
function safeConvert(str:any):string  {
    if(typeof str !== 'string') return str;
    return str.replace(/[<>"&]/g,(match):string => {
        switch(match){
            case '<':
                return "&lt;";
            case '>':
                return "&gt;";
            case '&':
                return "&amp;";
            default :
                return "&quot;";
        }
    });
}

// 对象模板解析
function parseData(tpl:string,data:object) {
    let safeTpl = safeConvert(tpl);  // 处理模板上的脚本

    safeTpl = safeTpl.replace(/\{(\w+(.\w)*)\}/g,(match,key) => {
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

    return safeTpl
}

/**
 * authour: pace_zhong@foxmail.com
 * 模板引擎简单实现
 *
 * @param {string} tpl
 * @param {object} data
 * @return {*}  {string}
 */
export default function templateEngine(tpl:string,data:object):string {
    return parseData(tpl,data)
}


