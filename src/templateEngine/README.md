# 模板引擎简单实现

结合数据实现对html模板字符串的渲染

### 示例
```javascript
console.log(templateEngine('<div>{a},{b.c} " & </div>',{a:1,b:{c:2}}));
//output: '&lt;div&gt;1,2 &quot; &amp; &lt;/div&gt;'
```