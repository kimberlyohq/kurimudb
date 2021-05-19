import{o as s,c as n,a}from"./app.80c0d1c4.js";const e='{"title":"Cookie","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"示例","slug":"示例"}],"relativePath":"drivers/cookie.md","lastUpdated":1621352695267}',o={},p=a('<h1 id="cookie"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h1><div class="tip custom-block"><p class="custom-block-title">注意事项</p><p><a href="https://developer.mozilla.org/docs/Web/HTTP/Cookies" target="_blank" rel="noopener noreferrer">Cookie</a> 中的数据，一般会自动随请求发送给服务端。由于每次请求都会携带所有 Cookie，其中存储的数据应当尽量的少。一般来说，Cookie 最多可以存储 4KB 的数据。</p><p>Cookie 驱动是没有命名空间的，不同模型之间的同名值，会互相覆盖。</p><p>Cookie 只能存储字符串。Cookie 驱动会对存入的数据进行 <code>JSON.stringify</code>，所以，请勿存入无法被正确 <code>JSON.stringify</code> 的对象 (如 <code>Set</code>、<code>Map</code> 等)。</p></div><h2 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> i kurimudb-driver-cookie@4\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="示例"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><div class="highlighted"> </div><br><br><br><br><div class="highlighted"> </div><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Models <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> CookieDriver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb-driver-cookie&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">class</span> CookieState <span class="token keyword">extends</span> <span class="token class-name">Models<span class="token punctuation">.</span>keyValue</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      driver<span class="token operator">:</span> CookieDriver<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',6);o.render=function(a,e,o,t,r,c){return s(),n("div",null,[p])};export default o;export{e as __pageData};
