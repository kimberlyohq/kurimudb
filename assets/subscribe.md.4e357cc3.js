import{o as n,c as s,a}from"./app.80c0d1c4.js";const p='{"title":"订阅变更","description":"","frontmatter":{},"headers":[{"level":2,"title":"订阅","slug":"订阅"},{"level":2,"title":"批量订阅","slug":"批量订阅"},{"level":2,"title":"自动订阅","slug":"自动订阅"},{"level":2,"title":"订阅模型","slug":"订阅模型"},{"level":2,"title":"退订","slug":"退订"},{"level":2,"title":"自动退订","slug":"自动退订"},{"level":3,"title":"Vue3","slug":"vue3"},{"level":3,"title":"React","slug":"react"},{"level":3,"title":"忽略自动退订","slug":"忽略自动退订"}],"relativePath":"subscribe.md","lastUpdated":1621352695269}',t={},e=a('<h1 id="订阅变更"><a class="header-anchor" href="#订阅变更" aria-hidden="true">#</a> 订阅变更</h1><h2 id="订阅"><a class="header-anchor" href="#订阅" aria-hidden="true">#</a> 订阅</h2><p>Kurimudb 中，<code>$</code> 符号代表 <code>subscribe</code> 的简写。你可以在一个值后加上 <code>$</code> 符号来订阅它的变更：</p><div class="language-js line-numbers-mode"><pre><code>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">foo$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>默认情况下，闭包函数会立即执行一次，方便你为你视图中的响应式变量赋初始值。如果你不希望这么做，而是只在后续值变更时执行，那么如下即可：</p><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><br><br><div class="highlighted"> </div><br><br></div><pre><code>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">foo$</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> immediate<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>你也可以使用<a href="/model.html#类-storage-api">类 Storage Api</a> 的形式进行订阅：</p><div class="language-js line-numbers-mode"><pre><code>configState<span class="token punctuation">.</span><span class="token function">subscribeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> closFunc<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="批量订阅"><a class="header-anchor" href="#批量订阅" aria-hidden="true">#</a> 批量订阅</h2><p>如果你想一次订阅多个值的变更，可以使用 <code>batch$</code> 函数：</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> batch$ <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb&quot;</span><span class="token punctuation">;</span>\n\n<span class="token function">batch$</span><span class="token punctuation">(</span><span class="token punctuation">[</span>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>foo$<span class="token punctuation">,</span> configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>bar$<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="自动订阅"><a class="header-anchor" href="#自动订阅" aria-hidden="true">#</a> 自动订阅</h2><p>手动声明要订阅的值可能会有些繁琐，我们还提供了一种便捷的方式。当你在闭包中所使用的值有任一被更改时，都会触发一次订阅：</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> auto$ <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb&quot;</span><span class="token punctuation">;</span>\n\n<span class="token function">auto$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在闭包函数的首次执行过程时，Kurimudb 会收集其中哪些值被读取，随后订阅它们，因此，闭包函数<strong>必须是同步的</strong>。</p><blockquote><p>📜 使用此功能需要 (^3.1.1) 版本。</p></blockquote><h2 id="订阅模型"><a class="header-anchor" href="#订阅模型" aria-hidden="true">#</a> 订阅模型</h2><p>你还可以订阅整个模型的变更，当模型中有任一值变更时，闭包函数都会触发。</p><p>这通常用于你不知道要订阅的是哪个值的场景，如<strong>集合模型</strong>上。一个常见的例子：存储草稿的集合模型，视图需要在用户保存/新增/删除草稿时即时变化，这时就派上用场啦。</p><p>想要订阅模型的变更，只需要调用 <code>yourModel.$</code> 函数即可：</p><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><br><br><br><br><br><br><br></div><pre><code>ref<span class="token operator">:</span> currentDraftData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\ndraftList<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  currentDraftData <span class="token operator">=</span> draftList<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// in view..</span>\n\ndraftList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// ..</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="退订"><a class="header-anchor" href="#退订" aria-hidden="true">#</a> 退订</h2><p>当你执行了订阅函数后，返回值将是一个退订函数，执行它，会将此订阅退订：</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">foo$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ..</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 退订</span>\n<span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="自动退订"><a class="header-anchor" href="#自动退订" aria-hidden="true">#</a> 自动退订</h2><p>如果你正在使用 Vue/React 等框架，你可能会希望，在组件被销毁时，自动退订此组件中产生的所有订阅。</p><p>你可以向 <code>kurimudbConfig.autoUnsubscribe</code> 上挂载一个函数，此函数会在每次执行订阅函数时执行，你可以利用它结合所使用框架的生命周期 Api，来实现自动退订。</p><h3 id="vue3"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> Vue3</h3><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onBeforeUnmount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> kurimudbConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb&quot;</span><span class="token punctuation">;</span>\n\nkurimudbConfig<span class="token punctuation">.</span><span class="token function-variable function">autoUnsubscribe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">unsubscribe</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="react"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h3><p>待续 🐸</p><h3 id="忽略自动退订"><a class="header-anchor" href="#忽略自动退订" aria-hidden="true">#</a> 忽略自动退订</h3><p>如果你使用了自动退订功能，却又不希望部分场景下自动退订，如下即可：</p><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><br><br><div class="highlighted"> </div><br><br></div><pre><code>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">foo$</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> autoUnsubscribe<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',34);t.render=function(a,p,t,o,c,u){return n(),s("div",null,[e])};export default t;export{p as __pageData};
