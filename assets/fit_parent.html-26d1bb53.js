import{_ as p,r as n,o as e,c as o,a as s,w as c,e as l}from"./app-80d3d61a.js";const u={},i=l(`<h1 id="fit-parent" tabindex="-1"><a class="header-anchor" href="#fit-parent" aria-hidden="true">#</a> Fit parent</h1><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VuePDF<span class="token punctuation">,</span> usePDF <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@tato30/vue-pdf&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> pdf <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePDF</span><span class="token punctuation">(</span><span class="token string">&#39;https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vuePDFRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parentWidth <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">fitParentWidth</span><span class="token punctuation">(</span><span class="token parameter">pxs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  parentWidth<span class="token punctuation">.</span>value <span class="token operator">=</span> parentWidth<span class="token punctuation">.</span>value <span class="token operator">+</span> pxs
  vuePDFRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fitParentWidth(-50)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Remove 50px
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Parent width: {{ parentWidth }}px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fitParentWidth(50)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Add 50px
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`width: \${parentWidth}px\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VuePDF</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vuePDFRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:pdf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pdf<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fit-parent</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(r,d){const a=n("FitParent"),t=n("ClientOnly");return e(),o("div",null,[i,s(t,null,{default:c(()=>[s(a)]),_:1})])}const m=p(u,[["render",k],["__file","fit_parent.html.vue"]]);export{m as default};
