var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let l,i;function s(t,n){return l||(l=document.createElement("a")),l.href=n,t===l.href}function a(t,n){t.appendChild(n)}function f(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function m(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function $(){return p(" ")}function h(){return p("")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function y(t,n){t.value=null==n?"":n}function v(t){i=t}function _(){const t=function(){if(!i)throw new Error("Function called outside component initialization");return i}();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}const k=[],C=[],E=[],j=[],I=Promise.resolve();let T=!1;function z(t){E.push(t)}const N=new Set;let A=0;function O(){const t=i;do{for(;A<k.length;){const t=k[A];A++,v(t),H(t.$$)}for(v(null),k.length=0,A=0;C.length;)C.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];N.has(n)||(N.add(n),n())}E.length=0}while(k.length);for(;j.length;)j.pop()();T=!1,N.clear(),v(t)}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}const L=new Set;let M;function B(t,n){t&&t.i&&(L.delete(t),t.i(n))}function F(t,n,e,o){if(t&&t.o){if(L.has(t))return;L.add(t),M.c.push((()=>{L.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function J(t){t&&t.c()}function K(t,n,o,u){const{fragment:l,on_mount:i,on_destroy:s,after_update:a}=t.$$;l&&l.m(n,o),u||z((()=>{const n=i.map(e).filter(c);s?s.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(z)}function P(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function S(t,n){-1===t.$$.dirty[0]&&(k.push(t),T||(T=!0,I.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function U(n,e,c,u,l,s,a,f=[-1]){const m=i;v(n);const g=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||m.$$.root};a&&a(g.root);let p=!1;if(g.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return g.ctx&&l(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),p&&S(n,t)),e})):[],g.update(),p=!0,r(g.before_update),g.fragment=!!u&&u(g.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);g.fragment&&g.fragment.l(t),t.forEach(d)}else g.fragment&&g.fragment.c();e.intro&&B(n.$$.fragment),K(n,e.target,e.anchor,e.customElement),O()}v(m)}class V{$destroy(){P(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function X(n){let e,o,r;return{c(){e=g("p"),o=p("The answer is "),r=p(n[0])},m(t,n){f(t,e,n),a(e,o),a(e,r)},p(t,[n]){1&n&&w(r,t[0])},i:t,o:t,d(t){t&&d(e)}}}function Y(t,n,e){let{answer:o}=n;return t.$$set=t=>{"answer"in t&&e(0,o=t.answer)},[o]}class q extends V{constructor(t){super(),U(this,t,Y,X,u,{answer:0})}}function D(t){let n,e,o;return{c(){n=g("p"),e=p(t[0]),o=p(" is between 5 and 10")},m(t,r){f(t,n,r),a(n,e),a(n,o)},p(t,n){1&n&&w(e,t[0])},d(t){t&&d(n)}}}function G(t){let n,e,o;return{c(){n=g("p"),e=p(t[0]),o=p(" is less than 5")},m(t,r){f(t,n,r),a(n,e),a(n,o)},p(t,n){1&n&&w(e,t[0])},d(t){t&&d(n)}}}function Q(t){let n,e,o;return{c(){n=g("p"),e=p(t[0]),o=p(" is greater than 10")},m(t,r){f(t,n,r),a(n,e),a(n,o)},p(t,n){1&n&&w(e,t[0])},d(t){t&&d(n)}}}function W(n){let e,o,r,c,u;function l(t,n){return t[0]>10?Q:5>t[0]?G:D}let i=l(n),s=i(n);return{c(){e=g("button"),e.textContent="Change X",o=$(),s.c(),r=h()},m(t,l){f(t,e,l),f(t,o,l),s.m(t,l),f(t,r,l),c||(u=b(e,"click",n[1]),c=!0)},p(t,[n]){i===(i=l(t))&&s?s.p(t,n):(s.d(1),s=i(t),s&&(s.c(),s.m(r.parentNode,r)))},i:t,o:t,d(t){t&&d(e),t&&d(o),s.d(t),t&&d(r),c=!1,u()}}}function R(t,n,e){let o=1;return[o,()=>{e(0,o+=1)}]}class Z extends V{constructor(t){super(),U(this,t,R,W,u,{})}}function tt(n){let e,o,r;return{c(){e=g("button"),e.textContent="Click to say hello"},m(t,c){f(t,e,c),o||(r=b(e,"click",n[0]),o=!0)},p:t,i:t,o:t,d(t){t&&d(e),o=!1,r()}}}function nt(t){const n=_();return[function(){n("message",{text:"Hello!"})}]}class et extends V{constructor(t){super(),U(this,t,nt,tt,u,{})}}function ot(t){let n,e,o,r,c,u,l,i,s;return i=new et({}),i.$on("message",rt),{c(){n=g("p"),e=g("span"),o=p("The emoji for "),r=p(t[0]),c=p(" is "),u=p(t[1]),l=$(),J(i.$$.fragment),x(e,"class","svelte-xcjze2"),x(n,"class","svelte-xcjze2")},m(t,d){f(t,n,d),a(n,e),a(e,o),a(e,r),a(e,c),a(e,u),f(t,l,d),K(i,t,d),s=!0},p(t,[n]){(!s||1&n)&&w(r,t[0])},i(t){s||(B(i.$$.fragment,t),s=!0)},o(t){F(i.$$.fragment,t),s=!1},d(t){t&&d(n),t&&d(l),P(i,t)}}}function rt(t){console.log(t.detail)}function ct(t,n,e){let{name:o}=n;const r={apple:"🍎",banana:"🍌",carrot:"🥕",doughnut:"🍩",egg:"🥚"}[o];return t.$$set=t=>{"name"in t&&e(0,o=t.name)},[o,r]}class ut extends V{constructor(t){super(),U(this,t,ct,ot,u,{name:0})}}function lt(t,n,e){const o=t.slice();return o[5]=n[e],o[7]=e,o}function it(t,n,e){const o=t.slice();return o[8]=n[e],o[7]=e,o}function st(n){let e,o,r,c,u,l,i,s=n[7]+1+"",m=n[8].name+"";return{c(){e=g("li"),o=g("a"),r=p(s),c=p(": "),u=p(m),l=$(),x(o,"target","_blank"),x(o,"href",i="https://www.youtube.com/watch?v="+n[8].id),x(e,"class","svelte-ijc6b8")},m(t,n){f(t,e,n),a(e,o),a(o,r),a(o,c),a(o,u),a(o,l)},p:t,d(t){t&&d(e)}}}function at(n){let e,o;return e=new ut({props:{name:n[5].name}}),{c(){J(e.$$.fragment)},m(t,n){K(e,t,n),o=!0},p:t,i(t){o||(B(e.$$.fragment,t),o=!0)},o(t){F(e.$$.fragment,t),o=!1},d(t){P(e,t)}}}function ft(t){let n,e,o,c,u,l,i,s,x,v,_,k,C=t[1],E=[];for(let n=0;n<C.length;n+=1)E[n]=st(it(t,C,n));let j=t[2],I=[];for(let n=0;n<j.length;n+=1)I[n]=at(lt(t,j,n));const T=t=>F(I[t],1,1,(()=>{I[t]=null}));return{c(){n=g("input"),e=$(),o=g("p"),c=p("Hello "),u=p(t[0]),l=$(),i=g("ul");for(let t=0;t<E.length;t+=1)E[t].c();s=$();for(let t=0;t<I.length;t+=1)I[t].c();x=h()},m(r,d){f(r,n,d),y(n,t[0]),f(r,e,d),f(r,o,d),a(o,c),a(o,u),f(r,l,d),f(r,i,d);for(let t=0;t<E.length;t+=1)E[t].m(i,null);f(r,s,d);for(let t=0;t<I.length;t+=1)I[t].m(r,d);f(r,x,d),v=!0,_||(k=b(n,"input",t[3]),_=!0)},p(t,[e]){if(1&e&&n.value!==t[0]&&y(n,t[0]),(!v||1&e)&&w(u,t[0]),2&e){let n;for(C=t[1],n=0;n<C.length;n+=1){const o=it(t,C,n);E[n]?E[n].p(o,e):(E[n]=st(o),E[n].c(),E[n].m(i,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=C.length}if(4&e){let n;for(j=t[2],n=0;n<j.length;n+=1){const o=lt(t,j,n);I[n]?(I[n].p(o,e),B(I[n],1)):(I[n]=at(o),I[n].c(),B(I[n],1),I[n].m(x.parentNode,x))}for(M={r:0,c:[],p:M},n=j.length;n<I.length;n+=1)T(n);M.r||r(M.c),M=M.p}},i(t){if(!v){for(let t=0;t<j.length;t+=1)B(I[t]);v=!0}},o(t){I=I.filter(Boolean);for(let t=0;t<I.length;t+=1)F(I[t]);v=!1},d(t){t&&d(n),t&&d(e),t&&d(o),t&&d(l),t&&d(i),m(E,t),t&&d(s),m(I,t),t&&d(x),_=!1,k()}}}function dt(t,n,e){let o="Amazon";return[o,[{id:"J---aiyznGQ",name:"Keyboard Cat"},{id:"z_AbfPXTKms",name:"Maru"},{id:"OUtn3pvWmpg",name:"Henri The Existential Cat"}],[{id:1,name:"apple"},{id:2,name:"banana"},{id:3,name:"carrot"},{id:4,name:"doughnut"},{id:5,name:"egg"}],function(){o=this.value,e(0,o)}]}class mt extends V{constructor(t){super(),U(this,t,dt,ft,u,{})}}function gt(n){let e,o,r;return{c(){e=g("button"),e.textContent="Log in"},m(t,c){f(t,e,c),o||(r=b(e,"click",n[1]),o=!0)},p:t,d(t){t&&d(e),o=!1,r()}}}function pt(n){let e,o,r;return{c(){e=g("button"),e.textContent="Log out"},m(t,c){f(t,e,c),o||(r=b(e,"click",n[1]),o=!0)},p:t,d(t){t&&d(e),o=!1,r()}}}function $t(t){let n;return{c(){n=g("p"),n.textContent="Yes I am in"},m(t,e){f(t,n,e)},d(t){t&&d(n)}}}function ht(t){let n;return{c(){n=g("p"),n.textContent="Yes I am Out"},m(t,e){f(t,n,e)},d(t){t&&d(n)}}}function bt(t){let n,e,o,r,c,u,l;function i(t,n){return t[0].loggedIn?pt:gt}let s=i(t),a=s(t),m=t[0].loggedIn&&$t(),g=!t[0].loggedIn&&ht();return r=new Z({}),u=new mt({}),{c(){a.c(),n=$(),m&&m.c(),e=$(),g&&g.c(),o=$(),J(r.$$.fragment),c=$(),J(u.$$.fragment)},m(t,i){a.m(t,i),f(t,n,i),m&&m.m(t,i),f(t,e,i),g&&g.m(t,i),f(t,o,i),K(r,t,i),f(t,c,i),K(u,t,i),l=!0},p(t,[r]){s===(s=i(t))&&a?a.p(t,r):(a.d(1),a=s(t),a&&(a.c(),a.m(n.parentNode,n))),t[0].loggedIn?m||(m=$t(),m.c(),m.m(e.parentNode,e)):m&&(m.d(1),m=null),t[0].loggedIn?g&&(g.d(1),g=null):g||(g=ht(),g.c(),g.m(o.parentNode,o))},i(t){l||(B(r.$$.fragment,t),B(u.$$.fragment,t),l=!0)},o(t){F(r.$$.fragment,t),F(u.$$.fragment,t),l=!1},d(t){a.d(t),t&&d(n),m&&m.d(t),t&&d(e),g&&g.d(t),t&&d(o),P(r,t),t&&d(c),P(u,t)}}}function xt(t,n,e){let o={loggedIn:!1};return[o,()=>{e(0,o.loggedIn=!o.loggedIn,o)}]}class wt extends V{constructor(t){super(),U(this,t,xt,bt,u,{})}}function yt(t){let e,o,c,u,l,i,m,h,y,v,_,k,C,E,j,I,T,z,N,A,O,H,L,M,S,U,V,X,Y,D,G=t[6].join(" + ")+"",Q=1===t[3]?"time":"times";o=new wt({}),u=new q({props:{answer:42}});const W=[t[4]];let R={};for(let t=0;t<W.length;t+=1)R=n(R,W[t]);return i=new q({props:R}),{c(){e=g("main"),J(o.$$.fragment),c=$(),J(u.$$.fragment),l=$(),J(i.$$.fragment),m=$(),h=g("h1"),y=p("Hello "),v=p(t[0]),_=p("!"),k=$(),C=g("p"),E=p(G),j=p(" = "),I=p(t[2]),T=$(),z=g("button"),z.textContent="Add a number",N=$(),A=g("button"),O=p("Clicked "),H=p(t[3]),L=$(),M=p(Q),S=$(),U=g("img"),x(h,"class","svelte-1fz89ok"),s(U.src,V=t[1])||x(U,"src",V),x(U,"alt","Test"),x(e,"class","svelte-1fz89ok")},m(n,r){f(n,e,r),K(o,e,null),a(e,c),K(u,e,null),a(e,l),K(i,e,null),a(e,m),a(e,h),a(h,y),a(h,v),a(h,_),a(e,k),a(e,C),a(C,E),a(C,j),a(C,I),a(e,T),a(e,z),a(e,N),a(e,A),a(A,O),a(A,H),a(A,L),a(A,M),a(e,S),a(e,U),X=!0,Y||(D=[b(z,"click",t[7]),b(A,"click",t[5])],Y=!0)},p(t,[n]){const e=16&n?function(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],l=n[c];if(l){for(const t in u)t in l||(o[t]=1);for(const t in l)r[t]||(e[t]=l[t],r[t]=1);t[c]=l}else for(const t in u)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(W,[(o=t[4],"object"==typeof o&&null!==o?o:{})]):{};var o;i.$set(e),(!X||1&n)&&w(v,t[0]),(!X||4&n)&&w(I,t[2]),(!X||8&n)&&w(H,t[3]),(!X||8&n)&&Q!==(Q=1===t[3]?"time":"times")&&w(M,Q),(!X||2&n&&!s(U.src,V=t[1]))&&x(U,"src",V)},i(t){X||(B(o.$$.fragment,t),B(u.$$.fragment,t),B(i.$$.fragment,t),X=!0)},o(t){F(o.$$.fragment,t),F(u.$$.fragment,t),F(i.$$.fragment,t),X=!1},d(t){t&&d(e),P(o),P(u),P(i),Y=!1,r(D)}}}function vt(t,n,e){let o,r,{name:c}=n,{src:u}=n;let l=[1,2,3,4,5];return t.$$set=t=>{"name"in t&&e(0,c=t.name),"src"in t&&e(1,u=t.src)},e(3,o=0),e(2,r=l.reduce(((t,n)=>t+n),0)),[c,u,r,o,{answer:125},function(){e(3,o+=1)},l,function(){l.push(l.length+1),console.log(l)}]}return new class extends V{constructor(t){super(),U(this,t,vt,yt,u,{name:0,src:1})}}({target:document.body,props:{name:"Mr. Aishvarya Tiwari",src:"https://as2.ftcdn.net/v2/jpg/04/67/56/35/1000_F_467563548_yhMye5JjVlzTmtmFou6VTDICBe7p2sNU.jpg"}})}();
//# sourceMappingURL=bundle.js.map
