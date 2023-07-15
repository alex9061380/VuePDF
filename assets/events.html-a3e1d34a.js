import{_ as n,o as s,c as a,e as t}from"./app-80d3d61a.js";const e={},o=t(`<h1 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h1><h2 id="loaded" tabindex="-1"><a class="header-anchor" href="#loaded" aria-hidden="true">#</a> loaded</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VuePDF</span> <span class="token attr-name">:pdf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pdf<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@loaded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onLoaded<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Emitted when page has finished rendering task in view, the value contains page information.</p><p>Value example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;viewBox&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">595.276</span><span class="token punctuation">,</span> <span class="token number">841.89</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scale&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rotation&quot;</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
  <span class="token property">&quot;offsetX&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;offsetY&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;transform&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">841.89</span><span class="token punctuation">,</span>
  <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">595.276</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="annotation" tabindex="-1"><a class="header-anchor" href="#annotation" aria-hidden="true">#</a> annotation</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VuePDF</span> <span class="token attr-name">:pdf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pdf<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@annotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onAnnotation<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Emitted when user has interaction with any annotation.</p><p>Annotation event data depends on what type of annotation has triggered the event, in general, the events value follows this structure:</p><table><thead><tr><th>Property</th><th>Value</th></tr></thead><tbody><tr><td><code>type</code></td><td>Possible values: <code>internal-link</code>, <code>link</code>, <code>file-attachment</code>, <code>form-text</code>, <code>form-select</code>, <code>form-checkbox</code>, <code>form-radio</code>, <code>form-button</code></td></tr><tr><td><code>data</code></td><td>Annotation associated data</td></tr></tbody></table><h3 id="internal-link" tabindex="-1"><a class="header-anchor" href="#internal-link" aria-hidden="true">#</a> internal-link</h3><p><code>internal-link</code> emitted when user clicks a link that redirects to another content within the document.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;internal-link&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;referencedPage&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;left&quot;</span><span class="token operator">:</span> <span class="token number">82</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bottom&quot;</span><span class="token operator">:</span> <span class="token number">716</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> link</h3><p><code>link</code> emitted when user clicks an external content link.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mailto:aor@testmail.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unsafeUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mailto:aor@testmail.com&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="file-attachment" tabindex="-1"><a class="header-anchor" href="#file-attachment" aria-hidden="true">#</a> file-attachment</h3><p><code>file-attachment</code> emitted when user double-click an attachment annotation.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file-attachment&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;utf8test.txt&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">83</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">]</span> <span class="token comment">// Uint8Array</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="form-text" tabindex="-1"><a class="header-anchor" href="#form-text" aria-hidden="true">#</a> form-text</h3><p><code>form-text</code> emitted when user inputs a value in an text-field element.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;form-text&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fieldName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;firstname&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Aldo Hernandez&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="form-select" tabindex="-1"><a class="header-anchor" href="#form-select" aria-hidden="true">#</a> form-select</h3><p><code>form-select</code> emitted when user inputs a value in an one-select or multi-select element.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;form-select&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fieldName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gender&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Male&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Male&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Female&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="form-checkbox" tabindex="-1"><a class="header-anchor" href="#form-checkbox" aria-hidden="true">#</a> form-checkbox</h3><p><code>form-checkbox</code> emitted when user changes a checkbox field element.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;form-checkbox&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fieldName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;newsletter&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;checked&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="form-radio" tabindex="-1"><a class="header-anchor" href="#form-radio" aria-hidden="true">#</a> form-radio</h3><p><code>form-radio</code> emitted when user changes a radio field.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;form-radio&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fieldName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;drink&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Wine&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;defaultValue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Beer&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Water&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Beer&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wine&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Milk&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="form-button" tabindex="-1"><a class="header-anchor" href="#form-button" aria-hidden="true">#</a> form-button</h3><p><code>form-button</code> emitted when user click on push button element.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;form-button&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fieldName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Print&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;Mouse Down&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Print()&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reset&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),p=[o];function c(l,i){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","events.html.vue"]]);export{r as default};
