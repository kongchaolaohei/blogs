"use strict";(self.webpackChunkvuepress_test=self.webpackChunkvuepress_test||[]).push([[440],{6261:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-5a32cf63",path:"/solution/other/%E4%B8%8D%E5%90%8C%E9%A1%B5%E9%9D%A2%E9%80%9A%E8%AE%AF%E9%97%AE%E9%A2%98.html",title:"不同页面通讯问题",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"iframe通信",slug:"iframe通信",children:[{level:3,title:"符合CORS情况下的交互方式",slug:"符合cors情况下的交互方式",children:[]},{level:3,title:"不符合CORS情况下的交互方式",slug:"不符合cors情况下的交互方式",children:[]}]},{level:2,title:"storage",slug:"storage",children:[]},{level:2,title:"BroadcastChannel",slug:"broadcastchannel",children:[]}],filePathRelative:"solution/other/不同页面通讯问题.md",git:{updatedTime:1632735577e3,contributors:[{name:"kongchaolaohei",email:"kongchaolaohei@qq.com",commits:1},{name:"kongchaolaohei",email:"kongchaolaohei@xxx.com",commits:1}]}}},3717:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var e=a(6252);const t=(0,e._)("h1",{id:"不同页面通讯问题",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#不同页面通讯问题","aria-hidden":"true"},"#"),(0,e.Uk)(" 不同页面通讯问题")],-1),p=(0,e._)("p",null,[(0,e.Uk)("平时开发可能会遇到两个不同的页面之间相互通信的情况. 目前我遇到过的暂时只有"),(0,e._)("code",null,"iframe"),(0,e.Uk)("这一类的问题,其他的方法并没有实际的在项目中使用过.")],-1),o=(0,e._)("h2",{id:"iframe通信",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#iframe通信","aria-hidden":"true"},"#"),(0,e.Uk)(" iframe通信")],-1),c={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLIFrameElement",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("MDN"),r=(0,e.uE)('<h3 id="符合cors情况下的交互方式" tabindex="-1"><a class="header-anchor" href="#符合cors情况下的交互方式" aria-hidden="true">#</a> 符合CORS情况下的交互方式</h3><p>在<code>iframe</code>中使用的是非跨域资源的时候,双方是可以互相访问到对方的<code>window</code>对象的. 那么第一种通讯方式就很明显了.</p><p>以下为获取方式</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 获取页面中iframe实例中的window对象</span>\n<span class="token keyword">const</span> childIframeWindow <span class="token operator">=</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myIframe&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLIFrameElement<span class="token punctuation">)</span><span class="token punctuation">.</span>contentWindow\n<span class="token comment">// 在iframe对象中获取父亲页面的window对象</span>\n<span class="token comment">// 如果确定只有一层嵌套则使用parent</span>\n<span class="token keyword">const</span> farterIframeWindow <span class="token operator">=</span> window<span class="token punctuation">.</span>parent\n<span class="token comment">// 如果不确定有几层嵌套则使用top确保获取的是最上层页面的window对象</span>\n<span class="token keyword">const</span> topIframeWindow <span class="token operator">=</span> top\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="不符合cors情况下的交互方式" tabindex="-1"><a class="header-anchor" href="#不符合cors情况下的交互方式" aria-hidden="true">#</a> 不符合CORS情况下的交互方式</h3><p>在不符合CORS的情况下,上面的方法是行不通的,这时需要使用另外的方法来实现信息交换,<code>postMessage()</code>随之映入眼帘.</p><p>这个API可以解决这个问题</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 发送信息</span>\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    top<span class="token operator">?.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        data<span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span>\n        message<span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;http://localhost:8080&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// 接收消息</span>\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>origin <span class="token operator">===</span> <span class="token string">&#39;http://localhost:xxxx&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> storage</h2>',9),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/storage_event",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("MDN"),k=(0,e.uE)('<p><strong>在符合CORS的情况下</strong>可以使用<code>stroage</code>来实现夸页面的通讯</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;storage&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 更改storage数据的键值</span>\n    <span class="token keyword">const</span> key<span class="token operator">=</span> event<span class="token punctuation">.</span>key\n    <span class="token comment">// 更改前key所对应的数据</span>\n    <span class="token keyword">const</span> oldValue <span class="token operator">=</span> event<span class="token punctuation">.</span>oldValue\n    <span class="token comment">// 更改后key所对应的数据</span>\n    <span class="token keyword">const</span> newValue <span class="token operator">=</span> event<span class="token punctuation">.</span>newValue\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>目前根据我的测试,修改<code>localStorage</code>数据的当前页面即使添加了<code>storage</code>事件也不会触发,但是其他拥有<code>stroage</code>事件的newTab页面是会触发事件的.</p></div><h2 id="broadcastchannel" tabindex="-1"><a class="header-anchor" href="#broadcastchannel" aria-hidden="true">#</a> BroadcastChannel</h2>',4),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/BroadcastChannel",target:"_blank",rel:"noopener noreferrer"},m=(0,e.Uk)("MDN"),b=(0,e.uE)('<p><strong>在符合CORS的情况下</strong>可以使用<code>BroadcastChannel</code>来实现夸页面的通讯</p><p>其中频道的名称一定要一致(例子中的频道名为<code>test</code>)</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 发送消息</span>\n<span class="token keyword">const</span> broadCastChannel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BroadcastChannel</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    broadCastChannel<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&#39;Ohhhhhhhhhhhhhhhh!&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 接收消息</span>\n<span class="token keyword">const</span> broadCastChannel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BroadcastChannel</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>\nbroadCastChannel<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>目前根据我的测试,使用<code>BroadcastChannel</code>发送消息时,当前页面即使添加了<code>message</code>事件也不会触发,但是其他拥有<code>message</code>事件的newTab页面是会触发事件的.</p></div>',4),h={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,p,o,(0,e._)("p",null,[(0,e._)("a",c,[l,(0,e.Wm)(a)])]),r,(0,e._)("p",null,[(0,e._)("a",u,[i,(0,e.Wm)(a)])]),k,(0,e._)("p",null,[(0,e._)("a",d,[m,(0,e.Wm)(a)])]),b],64)}}}}]);