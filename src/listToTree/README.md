# 数组转树

根据传处的path, 将一个数组解析成对应的path层级的树形结构

### 示例
```javascript
const userList = [
    {name:'user1',age:18,province:'四川',city:'成都',district:'高新区'},
    {name:'user2',age:19,province:'四川',city:'成都',district:'天府新区'},
    {name:'user3',age:20,province:'四川',city:'南充',district:'顺庆区'},
    {name:'user4',age:22,province:'江苏',city:'南京',district:'鼓楼区'},
    {name:'user5',age:21,province:'江苏',city:'南京',district:'玄武区'},
    {name:'user6',age:21,province:'江苏',city:'镇江',district:'京口区'}
]
const result = listToTree(userList,'province/city/district');
console.log(result)
//输出如下：
/*
{
    "id": "root",
    "name": "root",
    "children": [
        {
            "level": "province",
            "name": "四川",
            "children": [
                {
                    "level": "city",
                    "name": "成都",
                    "children": [
                        {
                            "level": "district",
                            "name": "高新区",
                            "children": [
                                {
                                    "name": "user1",
                                    "age": 18
                                }
                            ]
                        },
                        {
                            "level": "district",
                            "name": "天府新区",
                            "children": [
                                {
                                    "name": "user2",
                                    "age": 19
                                }
                            ]
                        }
                    ]
                },
                {
                    "level": "city",
                    "name": "南充",
                    "children": [
                        {
                            "level": "district",
                            "name": "顺庆区",
                            "children": [
                                {
                                    "name": "user3",
                                    "age": 20
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "level": "province",
            "name": "江苏",
            "children": [
                {
                    "level": "city",
                    "name": "南京",
                    "children": [
                        {
                            "level": "district",
                            "name": "鼓楼区",
                            "children": [
                                {
                                    "name": "user4",
                                    "age": 22
                                }
                            ]
                        },
                        {
                            "level": "district",
                            "name": "玄武区",
                            "children": [
                                {
                                    "name": "user5",
                                    "age": 21
                                }
                            ]
                        }
                    ]
                },
                {
                    "level": "city",
                    "name": "镇江",
                    "children": [
                        {
                            "level": "district",
                            "name": "京口区",
                            "children": [
                                {
                                    "name": "user6",
                                    "age": 21
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
*/
```