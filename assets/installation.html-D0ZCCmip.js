import{_ as r,c as i,b as a,d as n,w as l,a as o,r as d,o as p,e as s}from"./app-e03MkAss.js";const c={},u={class:"table-of-contents"};function h(m,e){const t=d("router-link");return p(),i("div",null,[a("nav",u,[a("ul",null,[a("li",null,[n(t,{to:"#requirements"},{default:l(()=>e[0]||(e[0]=[s("Requirements")])),_:1})]),a("li",null,[n(t,{to:"#installation"},{default:l(()=>e[1]||(e[1]=[s("Installation")])),_:1})]),a("li",null,[n(t,{to:"#create-a-project"},{default:l(()=>e[2]||(e[2]=[s("Create a Project")])),_:1})]),a("li",null,[n(t,{to:"#run"},{default:l(()=>e[3]||(e[3]=[s("Run")])),_:1})])])]),e[4]||(e[4]=o(`<h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements"><span>Requirements</span></a></h2><ul><li>Dart SDK &gt;= 3.5.2</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><p>To develop with Daravel, you need to install the Dart SDK. The Dart SDK can be found at <a href="https://dart.dev/get-dart#install" target="_blank" rel="noopener noreferrer">https://dart.dev/get-dart#install</a>.</p><p>If you have the <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer">Flutter</a> SDK installed, you already have the Dart SDK.</p><p>With the Dart SDK installed, install Daravel with:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">dart pub global activate daravel_core</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="create-a-project" tabindex="-1"><a class="header-anchor" href="#create-a-project"><span>Create a Project</span></a></h2><p>To create a Daravel project, run:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">dartisan new <span class="token operator">&lt;</span>project<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="run" tabindex="-1"><a class="header-anchor" href="#run"><span>Run</span></a></h2><p>To run you application, do thr following at the root of your project:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">dartisan serve</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Default server port is <code>8080</code>. To use a different port, use the below</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">dartisan serve <span class="token parameter variable">-p</span> <span class="token number">3000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You can change the port via a <code>PORT</code> environment variable or an <code>APP_PORT</code> value in your <code>.env</code> file.</p>`,16))])}const b=r(c,[["render",h],["__file","installation.html.vue"]]),g=JSON.parse('{"path":"/getting-started/installation.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements","link":"#requirements","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Create a Project","slug":"create-a-project","link":"#create-a-project","children":[]},{"level":2,"title":"Run","slug":"run","link":"#run","children":[]}],"git":{"updatedTime":1732249257000,"contributors":[{"name":"The Full-Stack Jonin","email":"francis94c@gmail.com","commits":1}]},"filePathRelative":"getting-started/installation.md"}');export{b as comp,g as data};