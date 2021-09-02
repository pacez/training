import templateEngine from '../src/templateEngine';

const case_1 = templateEngine('<div>{a},{b.c} " & </div>',{a:1,b:{c:2}});
test('普通情况', () => {
    expect(case_1).toBe('&lt;div&gt;1,2 &quot; &amp; &lt;/div&gt;');
});
