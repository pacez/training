import templateEngine from '../src/templateEngine';

const case_1 = templateEngine('<div style="display: block; width: 120px; background: red">{a},{b.c}</div>',{a:1,b:{c:'<script>alert(1)</script>'}});
test('普通情况', () => {
    expect(case_1).toBe('<div style="display: block; width: 120px; background: red">1,&lt;script&gt;alert(1)&lt;/script&gt;</div>');
});
