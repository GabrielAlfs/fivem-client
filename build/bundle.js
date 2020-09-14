var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function c(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function u(t,n,e,o,r,s,i){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(u){const r=c(n,e,o,i);t.p(r,u)}}function a(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function $(){return p("")}function m(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function y(t,n){t.value=null==n?"":n}let b;function v(t){b=t}function x(){const t=function(){if(!b)throw new Error("Function called outside component initialization");return b}();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach(n=>{n.call(t,r)})}}}function w(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}const _=[],E=[],k=[],j=[],H=Promise.resolve();let N=!1;function A(){N||(N=!0,H.then(M))}function C(t){k.push(t)}let O=!1;const L=new Set;function M(){if(!O){O=!0;do{for(let t=0;t<_.length;t+=1){const n=_[t];v(n),q(n.$$)}for(v(null),_.length=0;E.length;)E.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];L.has(n)||(L.add(n),n())}k.length=0}while(_.length);for(;j.length;)j.pop()();N=!1,O=!1,L.clear()}}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}const D=new Set;let I;function S(){I={r:0,c:[],p:I}}function T(){I.r||o(I.c),I=I.p}function R(t,n){t&&t.i&&(D.delete(t),t.i(n))}function B(t,n,e,o){if(t&&t.o){if(D.has(t))return;D.add(t),I.c.push(()=>{D.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function F(t){t&&t.c()}function P(t,e,s){const{fragment:i,on_mount:c,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,s),C(()=>{const e=c.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(C)}function z(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function G(n,r,s,i,c,u,a=[-1]){const l=b;v(n);const d=r.props||{},p=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:e(),dirty:a,skip_bound:!1};let h=!1;if(p.ctx=s?s(n,d,(t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&function(t,n){-1===t.$$.dirty[0]&&(_.push(t),A(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();r.intro&&R(n.$$.fragment),P(n,r.target,r.anchor),M()}v(l)}class U{$destroy(){z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const W=[];function J(t,n){return{subscribe:K(t,n).subscribe}}function K(n,e=t){let o;const r=[];function i(t){if(s(n,t)&&(n=t,o)){const t=!W.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),W.push(e,n)}if(t){for(let t=0;t<W.length;t+=2)W[t][0](W[t+1]);W.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(s,c=t){const u=[s,c];return r.push(u),1===r.length&&(o=e(i)||t),s(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function Q(n,e,s){const c=!Array.isArray(n),u=c?[n]:n,a=e.length<2;return J(s,n=>{let s=!1;const l=[];let f=0,d=t;const p=()=>{if(f)return;d();const o=e(c?l[0]:l,n);a?n(o):d=r(o)?o:t},h=u.map((t,n)=>i(t,t=>{l[n]=t,f&=~(1<<n),s&&p()},()=>{f|=1<<n}));return s=!0,p(),function(){o(h),d()}})}function V(t){let n;return{c(){n=d("div"),n.innerHTML='<img src="build/images/logo.png" alt="" width="120px" class="pt-3 pb-3"/>',g(n,"class","header border-b-2 border-white border-solid")},m(t,e){l(t,n,e)},d(t){t&&f(n)}}}function X(t){let n,e,o,r,s,i=t[0]&&V();const p=t[3].default,$=function(t,n,e,o){if(t){const r=c(t,n,e,o);return t[0](r)}}(p,t,t[2],null);return{c(){n=d("div"),e=d("div"),i&&i.c(),o=h(),$&&$.c(),g(e,"class","container go-up delay-1 svelte-1ya8iyt"),g(e,"style",r=t[1]?"min-height: 80px":""),g(n,"class","float text-white svelte-1ya8iyt")},m(t,r){l(t,n,r),a(n,e),i&&i.m(e,null),a(e,o),$&&$.m(e,null),s=!0},p(t,[n]){t[0]?i||(i=V(),i.c(),i.m(e,o)):i&&(i.d(1),i=null),$&&$.p&&4&n&&u($,p,t,t[2],n,null,null),(!s||2&n&&r!==(r=t[1]?"min-height: 80px":""))&&g(e,"style",r)},i(t){s||(R($,t),s=!0)},o(t){B($,t),s=!1},d(t){t&&f(n),i&&i.d(),$&&$.d(t)}}}function Y(t,n,e){let{$$slots:o={},$$scope:r}=n,{showHeader:s=!0}=n,{minHeight:i=!1}=n;return t.$$set=t=>{"showHeader"in t&&e(0,s=t.showHeader),"minHeight"in t&&e(1,i=t.minHeight),"$$scope"in t&&e(2,r=t.$$scope)},[s,i,r,o]}class Z extends U{constructor(t){super(),G(this,t,Y,X,s,{showHeader:0,minHeight:1})}}function tt(t){let n,e,r,s,i,c,u,p,$,b,v,x,w,_,E,k;return{c(){n=d("div"),n.textContent=`Bem vindo de volta, ${et}!`,e=h(),r=d("form"),s=d("div"),i=d("label"),i.textContent="Nick",c=h(),u=d("input"),p=h(),$=d("div"),b=d("label"),b.textContent="Senha",v=h(),x=d("input"),w=h(),_=d("div"),_.innerHTML='<button type="submit" class="btn btn-primary">Entrar</button> \n\n            <div>Esqueci minha senha</div>',g(n,"class","text-lg"),g(u,"type","text"),g(u,"class","form-control"),g(u,"placeholder","Insira seu nick conforme o cadastro"),g(s,"class","form-group"),g(x,"type","password"),g(x,"class","form-control"),g(x,"placeholder","Sua senha no servidor"),g($,"class","form-group"),g(_,"class","flex justify-between items-center")},m(o,f){l(o,n,f),l(o,e,f),l(o,r,f),a(r,s),a(s,i),a(s,c),a(s,u),y(u,t[0].playerName),a(r,p),a(r,$),a($,b),a($,v),a($,x),y(x,t[0].password),a(r,w),a(r,_),E||(k=[m(u,"input",t[1]),m(x,"input",t[2])],E=!0)},p(t,n){1&n&&u.value!==t[0].playerName&&y(u,t[0].playerName),1&n&&x.value!==t[0].password&&y(x,t[0].password)},d(t){t&&f(n),t&&f(e),t&&f(r),E=!1,o(k)}}}function nt(t){let n,e;return n=new Z({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){F(n.$$.fragment)},m(t,o){P(n,t,o),e=!0},p(t,[e]){const o={};9&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(R(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){z(n,t)}}}let et="Mandrakke_Army";function ot(t,n,e){let o=K({playerName:et,password:""});return[o,function(){o.playerName=this.value,e(0,o)},function(){o.password=this.value,e(0,o)}]}function rt(t){let n;return{c(){n=d("div"),n.innerHTML='<div class="text-center text-lg">GUI do servidor</div> \n\n        <div class="text-center italic text-sm">Abaixo as janelas prontas para uso no servidor.</div> \n\n        <a href="#/login"><button>Login</button></a>',g(n,"class","p-5")},m(t,e){l(t,n,e)},d(t){t&&f(n)}}}function st(t){let n,e;return n=new Z({props:{showHeader:!1,minHeight:!0,$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c(){F(n.$$.fragment)},m(t,o){P(n,t,o),e=!0},p(t,[e]){const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(R(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){z(n,t)}}}function it(n){let e;return{c(){e=d("div"),e.textContent="Página não encontrada",g(e,"class","font-bold text-xl text-center")},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&f(e)}}}var ct={"/":class extends U{constructor(t){super(),G(this,t,null,st,s,{})}},"/login":class extends U{constructor(t){super(),G(this,t,ot,nt,s,{})}},"*":class extends U{constructor(t){super(),G(this,t,null,it,s,{})}}};function ut(t){let n,e,o;var r=t[0];return r&&(n=new r({}),n.$on("routeEvent",t[5])),{c(){n&&F(n.$$.fragment),e=$()},m(t,r){n&&P(n,t,r),l(t,e,r),o=!0},p(t,o){if(r!==(r=t[0])){if(n){S();const t=n;B(t.$$.fragment,1,0,()=>{z(t,1)}),T()}r?(n=new r({}),n.$on("routeEvent",t[5]),F(n.$$.fragment),R(n.$$.fragment,1),P(n,e.parentNode,e)):n=null}},i(t){o||(n&&R(n.$$.fragment,t),o=!0)},o(t){n&&B(n.$$.fragment,t),o=!1},d(t){t&&f(e),n&&z(n,t)}}}function at(t){let n,e,o;var r=t[0];function s(t){return{props:{params:t[1]}}}return r&&(n=new r(s(t)),n.$on("routeEvent",t[4])),{c(){n&&F(n.$$.fragment),e=$()},m(t,r){n&&P(n,t,r),l(t,e,r),o=!0},p(t,o){const i={};if(2&o&&(i.params=t[1]),r!==(r=t[0])){if(n){S();const t=n;B(t.$$.fragment,1,0,()=>{z(t,1)}),T()}r?(n=new r(s(t)),n.$on("routeEvent",t[4]),F(n.$$.fragment),R(n.$$.fragment,1),P(n,e.parentNode,e)):n=null}else r&&n.$set(i)},i(t){o||(n&&R(n.$$.fragment,t),o=!0)},o(t){n&&B(n.$$.fragment,t),o=!1},d(t){t&&f(e),n&&z(n,t)}}}function lt(t){let n,e,o,r;const s=[at,ut],i=[];function c(t,n){return t[1]?0:1}return n=c(t),e=i[n]=s[n](t),{c(){e.c(),o=$()},m(t,e){i[n].m(t,e),l(t,o,e),r=!0},p(t,[r]){let u=n;n=c(t),n===u?i[n].p(t,r):(S(),B(i[u],1,1,()=>{i[u]=null}),T(),e=i[n],e||(e=i[n]=s[n](t),e.c()),R(e,1),e.m(o.parentNode,o))},i(t){r||(R(e),r=!0)},o(t){B(e),r=!1},d(t){i[n].d(t),t&&f(o)}}}function ft(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const dt=J(null,(function(t){t(ft());const n=()=>{t(ft())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));Q(dt,t=>t.location),Q(dt,t=>t.querystring);function pt(n,e,o){let r,s=t;!function(t,n,e){t.$$.on_destroy.push(i(n,e))}(n,dt,t=>o(6,r=t)),n.$$.on_destroy.push(()=>s());let{routes:c={}}=e,{prefix:u=""}=e;class a{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,i=[],c="",u=t.split("/");for(u[0]||u.shift();r=u.shift();)"*"===(e=r[0])?(i.push("wild"),c+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),c+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~o?"?":"")+"\\"+r.substring(s))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.route,this.conditions=n.conditions||[],this.userData=n.userData):(this.component=n,this.conditions=[],this.userData=void 0),this._pattern=e,this._keys=o}match(t){u&&t.startsWith(u)&&(t=t.substr(u.length)||"/");const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;)e[this._keys[o]]=n[++o]||null;return e}checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!this.conditions[n](t))return!1;return!0}}const l=[];c instanceof Map?c.forEach((t,n)=>{l.push(new a(n,t))}):Object.keys(c).forEach(t=>{l.push(new a(t,c[t]))});let f=null,d=null;const p=x(),h=(t,n)=>{(A(),H).then(()=>{p(t,n)})};return n.$$set=t=>{"routes"in t&&o(2,c=t.routes),"prefix"in t&&o(3,u=t.prefix)},n.$$.update=()=>{if(65&n.$$.dirty){o(0,f=null);let t=0;for(;!f&&t<l.length;){const n=l[t].match(r.location);if(n){const e={component:l[t].component,name:l[t].component.name,location:r.location,querystring:r.querystring,userData:l[t].userData};if(!l[t].checkConditions(e)){h("conditionsFailed",e);break}o(0,f=l[t].component),n&&"object"==typeof n&&Object.keys(n).length?o(1,d=n):o(1,d=null),h("routeLoaded",e)}t++}}},[f,d,c,u,function(t){w(n,t)},function(t){w(n,t)}]}class ht extends U{constructor(t){super(),G(this,t,pt,lt,s,{routes:2,prefix:3})}}function $t(n){let e,o,r,s;return r=new ht({props:{routes:ct}}),{c(){e=d("main"),o=d("div"),F(r.$$.fragment),g(o,"class","body absolute w-screen h-screen svelte-1wudmur"),g(e,"class","padding: 0; margin: 0;")},m(t,n){l(t,e,n),a(e,o),P(r,o,null),s=!0},p:t,i(t){s||(R(r.$$.fragment,t),s=!0)},o(t){B(r.$$.fragment,t),s=!1},d(t){t&&f(e),z(r)}}}return new class extends U{constructor(t){super(),G(this,t,null,$t,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
