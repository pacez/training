// 清理旧节点
function clean(list:any[]) {
    return list.filter ? list.filter(item => item.level): list
}

// 排除终端节点，路径属性
function excludePathForEndNode(list:any[],originPathArr:any[]) {
    for (const item of list) {
        for (const path of originPathArr) {
            delete item[path]
        }
    }
    return list;
}


// 分组
function grouping(list:any[],pathArr:any[],result:{[key:string]:any},originPathArr:any[]) {
    
    //  取层级的key
    const level = pathArr[0];

    // 取完删除在path中的key
    pathArr.splice(0,1);

    const pathArrLength = pathArr.length;

    // 获取当前层级chidren
    let { children } = result;    

    
    // 根据level进行分组
    for(const listItem of list) {
        const group = children.find((item:{[key:string]:any}) => item.name === listItem[level]);
        
        if(group) {
            //  分类添加到children中
            group.children.push(listItem); 
            continue
        }
        // 没有分组，创建分组
        listItem[level] && children.push({level,name:listItem[level],children:[listItem]});
    }

    // 剃除旧数据
    children = clean(children);

    // 如果路径没有消费完，则继续递归分组
    if(pathArr.length > 0 ) {
        children.forEach((item:{[key:string]:any}) => {
           grouping(item.children,pathArr.concat([]),item,originPathArr);
        })
    }

    // 最后一层剃除层级中的属性
    if(pathArr.length === 1) {
        result.children = excludePathForEndNode(result.children,originPathArr);
    }

    result.children = clean(result.children);
    
    return result;
}


/**
 * list转tree
 * 核心难点不在于实现递归逻辑，在于处理每一项的深浅拷贝
 * @param {*} list
 * @param {*} path
 */
export default function list2tree(list:any[],path:string) {
    if(path === '') {
        return list
    }

    const pathArr = path.split('/');
    const level = pathArr[0];
    const result = grouping(list,pathArr,{id:'root',name:'root',children:[]},pathArr.concat([]));
    return result;
}
