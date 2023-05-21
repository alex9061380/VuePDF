import{u as c,_ as i}from"./index-e633c287.js";import{_ as r,g as d,f as s,o as k,c as v,a as e,d as m,u as l,e as f,j as g}from"./app-eaae4d09.js";const b=f(`<h1 id="multiples-pdf" tabindex="-1"><a class="header-anchor" href="#multiples-pdf" aria-hidden="true">#</a> Multiples PDF</h1><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VuePDF<span class="token punctuation">,</span> usePDF <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@tato30/vue-pdf&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> withBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>

<span class="token keyword">const</span> currentPdfIndex <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> pdfSources <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;/example_014.pdf&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;/example_036.pdf&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;/example_041.pdf&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;/example_045.pdf&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf&#39;</span>
<span class="token punctuation">]</span>

<span class="token comment">// Setting the first (or default) PDF</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> pdf <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePDF</span><span class="token punctuation">(</span>pdfSources<span class="token punctuation">[</span>currentPdfIndex<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">nextPdf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> sourceIndex <span class="token operator">=</span> currentPdfIndex<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>sourceIndex <span class="token operator">&gt;=</span> pdfSources<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    sourceIndex <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">pdf</span><span class="token operator">:</span> newPDFToLoad <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePDF</span><span class="token punctuation">(</span>pdfSources<span class="token punctuation">[</span>sourceIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// Loads the new pdf</span>
  <span class="token function">watch</span><span class="token punctuation">(</span>newPDFToLoad<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// How usePDF returns a promised values, we must wait (watch) for a resolved value before reassign the main pdf ref</span>
    pdf<span class="token punctuation">.</span>value <span class="token operator">=</span> newPDFToLoad<span class="token punctuation">.</span>value
    currentPdfIndex<span class="token punctuation">.</span>value <span class="token operator">=</span> sourceIndex
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button-example<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nextPdf<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Next PDF
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VuePDF</span> <span class="token attr-name">:pdf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pdf<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),x={style:{"text-align":"center"}},_={__name:"multiple_pdf.html",setup(w){const a=d(0),t=[s("/example_014.pdf"),s("/example_036.pdf"),s("/example_041.pdf"),s("/example_045.pdf"),"https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"],{pdf:o}=c(t[a.value]);function u(){let n=a.value+1;n>=t.length&&(n=0);const{pdf:p}=c(t[n]);g(p,()=>{o.value=p.value,a.value=n})}return(n,p)=>(k(),v("div",null,[b,e("div",x,[e("div",null,[e("button",{class:"button-example",onClick:u},"Next PDF")]),m(l(i),{pdf:l(o)},null,8,["pdf"])])]))}},y=r(_,[["__file","multiple_pdf.html.vue"]]);export{y as default};