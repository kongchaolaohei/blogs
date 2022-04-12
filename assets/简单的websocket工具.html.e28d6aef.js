import{r as p,o,c as t,a as s,d as e,F as r,b as n,e as c}from"./app.115e6629.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const b={},u=s("h1",{id:"\u7B80\u5355\u7684websocket\u5DE5\u5177",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u7B80\u5355\u7684websocket\u5DE5\u5177","aria-hidden":"true"},"#"),n(" \u7B80\u5355\u7684websocket\u5DE5\u5177")],-1),k=n("\u6211\u5728"),i={href:"https://vueuse.org",target:"_blank",rel:"noopener noreferrer"},m=n("vueuse"),d=n("\u4E2D\u53D1\u73B0\u4E86\u4E00\u4E2A\u6BD4\u8F83\u7B80\u5355\u597D\u7528\u7684"),w={href:"https://vueuse.org/core/useWebSocket/",target:"_blank",rel:"noopener noreferrer"},f=n("websocket\u5DE5\u5177\u51FD\u6570"),g=n(",\u53EF\u4EE5\u5FEB\u901F\u7684\u5728\u4E0D\u592A\u590D\u6742\u7684websocket\u7684\u573A\u666F\u4E2D\u4F7F\u7528."),y=c(`<h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useWebSocket <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> status<span class="token punctuation">,</span> data<span class="token punctuation">,</span> send<span class="token punctuation">,</span> open<span class="token punctuation">,</span> close <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useWebSocket</span><span class="token punctuation">(</span><span class="token string">&#39;ws://websocketurl&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53EF\u4EE5\u901A\u8FC7\u7686\u82E6\u63CF\u8FF0\u6765\u770B\u770B\u4ED6\u600E\u4E48\u4F7F\u7528</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">WebSocketStatus</span> <span class="token operator">=</span> <span class="token string">&quot;OPEN&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;CONNECTING&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;CLOSED&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">WebSocketOptions</span> <span class="token punctuation">{</span>
  <span class="token comment">// websocket\u8FDE\u63A5\u540E\u53C8\u7684\u56DE\u8C03</span>
  onConnected<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>ws<span class="token operator">:</span> WebSocket<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  <span class="token comment">// websocket\u65AD\u5F00\u8FDE\u63A5\u540E\u7684\u56DE\u8C03</span>
  onDisconnected<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>ws<span class="token operator">:</span> WebSocket<span class="token punctuation">,</span> event<span class="token operator">:</span> CloseEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  <span class="token comment">// \u4EA7\u751F\u9519\u8BEF\u540E\u7684\u56DE\u8C03</span>
  onError<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>ws<span class="token operator">:</span> WebSocket<span class="token punctuation">,</span> event<span class="token operator">:</span> Event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  <span class="token comment">// \u63A5\u6536\u5230\u4FE1\u606F\u65F6\u7684\u56DE\u8C03</span>
  onMessage<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>ws<span class="token operator">:</span> WebSocket<span class="token punctuation">,</span> event<span class="token operator">:</span> MessageEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  <span class="token doc-comment comment">/**
   * \u662F\u5426\u542F\u7528\u5FC3\u8DF3\u8FDE\u63A5
   *
   * <span class="token keyword">@default</span> false
   */</span>
  heartbeat<span class="token operator">?</span><span class="token operator">:</span>
    <span class="token operator">|</span> <span class="token builtin">boolean</span>
    <span class="token operator">|</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * \u8BBE\u7F6E\u5FC3\u8DF3\u8FDE\u63A5\u65F6\u8981\u53D1\u9001\u7684\u5185\u5BB9
         *
         * <span class="token keyword">@default</span> &#39;ping&#39;
         */</span>
        message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
        <span class="token doc-comment comment">/**
         * \u8BBE\u7F6E\u6BCF\u9694xx\u79D2\u53D1\u9001\u4E00\u6B21\u5FC3\u8DF3\u8FDE\u63A5
         *
         * <span class="token keyword">@default</span> 1000
         */</span>
        interval<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
      <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * \u662F\u5426\u542F\u7528\u81EA\u52A8\u91CD\u8FDE
   *
   * <span class="token keyword">@default</span> false
   */</span>
  autoReconnect<span class="token operator">?</span><span class="token operator">:</span>
    <span class="token operator">|</span> <span class="token builtin">boolean</span>
    <span class="token operator">|</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * \u8BBE\u7F6E\u6700\u5927\u91CD\u8FDE\u6B21\u6570
         *
         * <span class="token keyword">@default</span> -1
         */</span>
        retries<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
        <span class="token doc-comment comment">/**
         * \u8BBE\u7F6E\u6BCF\u6B21\u91CD\u8FDE\u7684\u95F4\u9694\u65F6\u95F4
         *
         * <span class="token keyword">@default</span> 1000
         */</span>
        delay<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
        <span class="token doc-comment comment">/**
         * \u8BBE\u7F6E\u8FBE\u5230\u6700\u5927\u91CD\u8FDE\u6B21\u6570\u4E4B\u540E\u7684\u56DE\u8C03\u51FD\u6570
         */</span>
        onFailed<span class="token operator">?</span><span class="token operator">:</span> Fn
      <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * \u662F\u5426\u542F\u7528\u81EA\u52A8\u8FDE\u63A5
   *
   * <span class="token keyword">@default</span> true
   */</span>
  immediate<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">WebSocketResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u83B7\u53D6websocket\u8FD4\u56DE\u7684\u7ED3\u679C\u7684\u5F15\u7528,\u53EF\u4EE5\u76D1\u542C\u4ED6\u7684\u53D8\u5316
   */</span>
  data<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span>
  <span class="token doc-comment comment">/**
   * \u83B7\u53D6websocket\u7684\u8FDE\u63A5\u72B6\u6001
   * &#39;OPEN&#39;, &#39;CONNECTING&#39;, &#39;CLOSED&#39;
   */</span>
  status<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>WebSocketStatus<span class="token operator">&gt;</span>
  <span class="token doc-comment comment">/**
   * \u5173\u95EDwebsocket\u8FDE\u63A5
   */</span>
  close<span class="token operator">:</span> WebSocket<span class="token punctuation">[</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">]</span>
  <span class="token doc-comment comment">/**
   * \u91CD\u65B0\u6253\u5F00\u4E00\u4E2A\u65B0\u94FE\u63A5
   * \u5982\u679C\u5F53\u524D\u8FDE\u63A5\u662F\u6D3B\u52A8\u7684,\u5219\u5173\u95ED\u5F53\u524D\u6D3B\u52A8\u7684\u8FDE\u63A5,\u6253\u5F00\u4E00\u4E2A\u65B0\u7684\u8FDE\u63A5
   */</span>
  open<span class="token operator">:</span> Fn
  <span class="token doc-comment comment">/**
   * \u901A\u8FC7websocket\u8FDE\u63A5\u53D1\u9001\u4FE1\u606F
   *
   * <span class="token keyword">@param</span> <span class="token parameter">data</span>
   * <span class="token keyword">@param</span> <span class="token parameter">useBuffer</span> \u5F53\u5957\u63A5\u5B57\u8FD8\u6CA1\u6709\u6253\u5F00\u65F6\uFF0C\u5C06\u6570\u636E\u5B58\u50A8\u5230\u7F13\u51B2\u533A\u4E2D\u5E76\u53D1\u9001\u4E00\u4E2A\u8FDE\u63A5\u7684\u6570\u636E\u3002\u9ED8\u8BA4\u4E3Atrue(\u4E0D\u592A\u660E\u767D\u662F\u4EC0\u4E48\u610F\u601D)
   */</span>
  <span class="token function-variable function">send</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> ArrayBuffer <span class="token operator">|</span> Blob<span class="token punctuation">,</span> useBuffer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span>
  <span class="token doc-comment comment">/**
   * \u8FD4\u56DE\u4E00\u4E2Awebsocket\u7684\u5F15\u7528
   */</span>
  ws<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>WebSocket <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * websocket\u7684\u53C2\u6570\u8BF4\u660E
 *
 * <span class="token keyword">@see</span> /useWebSocket
 * <span class="token keyword">@param</span> <span class="token parameter">url</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useWebSocket</span><span class="token generic class-name"><span class="token operator">&lt;</span>Data <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  options<span class="token operator">?</span><span class="token operator">:</span> WebSocketOptions
<span class="token punctuation">)</span><span class="token operator">:</span> WebSocketResult<span class="token operator">&lt;</span>Data<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div>`,4);function _(h,v){const a=p("ExternalLinkIcon");return o(),t(r,null,[u,s("p",null,[k,s("a",i,[m,e(a)]),d,s("a",w,[f,e(a)]),g]),y],64)}var x=l(b,[["render",_]]);export{x as default};
