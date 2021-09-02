# 模板引擎简单实现

结合数据实现对html模板字符串的渲染

### 示例
```javascript
console.log(templateEngine('<div style="display: block; width: 120px; background: red">{a},{b.c}</div>',{a:1,b:{c:'<script>alert(1)</script>'}}));
//output: '<div style="display: block; width: 120px; background: red">1,&lt;script&gt;alert(1)&lt;/script&gt;</div>'
```