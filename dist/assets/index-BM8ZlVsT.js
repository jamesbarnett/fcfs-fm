var Y=Object.defineProperty;var Z=(e,t,n)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var C=(e,t,n)=>Z(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function x(){}function V(e){return e()}function z(){return Object.create(null)}function k(e){e.forEach(V)}function D(e){return typeof e=="function"}function G(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let N;function K(e,t){return e===t?!0:(N||(N=document.createElement("a")),N.href=t,e===N.href)}function ee(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function J(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function b(){return I(" ")}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function te(e){return Array.from(e.childNodes)}function U(e,t){t=""+t,e.data!==t&&(e.data=t)}let R;function j(e){R=e}const y=[],F=[];let w=[];const H=[],ne=Promise.resolve();let B=!1;function re(){B||(B=!0,ne.then(Q))}function M(e){w.push(e)}const q=new Set;let _=0;function Q(){if(_!==0)return;const e=R;do{try{for(;_<y.length;){const t=y[_];_++,j(t),se(t.$$)}}catch(t){throw y.length=0,_=0,t}for(j(null),y.length=0,_=0;F.length;)F.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];q.has(n)||(q.add(n),n())}w.length=0}while(y.length);for(;H.length;)H.pop()();B=!1,q.clear(),j(e)}function se(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}function ie(e){const t=[],n=[];w.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),w=t}const P=new Set;let oe;function $(e,t){e&&e.i&&(P.delete(e),e.i(t))}function S(e,t,n,i){if(e&&e.o){if(P.has(e))return;P.add(e),oe.c.push(()=>{P.delete(e)}),e.o(t)}}function A(e){e&&e.c()}function v(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),M(()=>{const s=e.$$.on_mount.map(V).filter(D);e.$$.on_destroy?e.$$.on_destroy.push(...s):k(s),e.$$.on_mount=[]}),r.forEach(M)}function O(e,t){const n=e.$$;n.fragment!==null&&(ie(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){e.$$.dirty[0]===-1&&(y.push(e),re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,i,r,s,a=null,m=[-1]){const o=R;j(e);const c=e.$$={fragment:null,ctx:[],props:s,update:x,not_equal:r,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:z(),dirty:m,skip_bound:!1,root:t.target||o.$$.root};a&&a(c.root);let h=!1;if(c.ctx=n?n(e,t.props||{},(l,d,...u)=>{const E=u.length?u[0]:d;return c.ctx&&r(c.ctx[l],c.ctx[l]=E)&&(!c.skip_bound&&c.bound[l]&&c.bound[l](E),h&&ce(e,l)),d}):[],c.update(),h=!0,k(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const l=te(t.target);c.fragment&&c.fragment.l(l),l.forEach(T)}else c.fragment&&c.fragment.c();t.intro&&$(e.$$.fragment),v(e,t.target,t.anchor),Q()}j(o)}class X{constructor(){C(this,"$$");C(this,"$$set")}$destroy(){O(this,1),this.$destroy=x}$on(t,n){if(!D(n))return x;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const le="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(le);function ae(e){let t,n,i,r,s,a,m,o,c,h;return{c(){t=p("div"),n=p("h2"),i=I(e[0]),r=b(),s=p("p"),a=I(e[1]),m=b(),o=p("img"),f(n,"class","text-xl font-bold"),f(s,"class","font-light text-sm leading-relaxed"),f(o,"class","ms-auto mt-8"),f(o,"height","64"),f(o,"width","64"),K(o.src,c=e[2])||f(o,"src",c),f(o,"alt",""),f(t,"class",h="card rounded-md bg-[white] w-full mx-auto sm:max-w-[50rem] shadow-lg px-10 py-8 sm:justify-center "+e[4]+" svelte-1xt9hzc"),f(t,"data-accent",e[3])},m(l,d){J(l,t,d),g(t,n),g(n,i),g(t,r),g(t,s),g(s,a),g(t,m),g(t,o)},p(l,[d]){d&1&&U(i,l[0]),d&2&&U(a,l[1]),d&4&&!K(o.src,c=l[2])&&f(o,"src",c),d&16&&h!==(h="card rounded-md bg-[white] w-full mx-auto sm:max-w-[50rem] shadow-lg px-10 py-8 sm:justify-center "+l[4]+" svelte-1xt9hzc")&&f(t,"class",h),d&8&&f(t,"data-accent",l[3])},i:x,o:x,d(l){l&&T(t)}}}function ue(e,t,n){let{name:i=void 0}=t,{blurb:r=void 0}=t,{icon:s=void 0}=t,{accent:a=void 0}=t,{styles:m=void 0}=t;return e.$$set=o=>{"name"in o&&n(0,i=o.name),"blurb"in o&&n(1,r=o.blurb),"icon"in o&&n(2,s=o.icon),"accent"in o&&n(3,a=o.accent),"styles"in o&&n(4,m=o.styles)},[i,r,s,a,m]}class L extends X{constructor(t){super(),W(this,t,ue,ae,G,{name:0,blurb:1,icon:2,accent:3,styles:4})}}function fe(e){let t,n,i,r,s,a,m,o,c,h,l,d;return s=new L({props:{styles:"sm:row-start-1 sm:row-span-2",name:"Supervisor",blurb:"Monitors activity to identify project roadblock",icon:"/images/icon-supervisor.svg",accent:"cyan"}}),m=new L({props:{styles:"sm:col-start-2",name:"Team Builder",blurb:"Scans our talent network to create the optimal team for your project",icon:"/images/icon-team-builder.svg",accent:"red"}}),c=new L({props:{styles:"sm:col-start-2",name:"Karma",blurb:"Regularly evaluates our talent to ensure quality",icon:"/images/icon-karma.svg",accent:"orange"}}),l=new L({props:{styles:"sm:col-start-3 sm:row-start-1 sm:row-span-2",name:"Calculator",blurb:"Uses data from past projects to provide better delivery estimates",icon:"/images/icon-calculator.svg",accent:"blue"}}),{c(){t=p("main"),n=p("section"),n.innerHTML=`<h1 class="text-2xl font-light leading-loose">Reliable, efficient delivery</h1> <p class="text-2xl font-bold pb-4">Powered by Technology</p> <p class="font-light leading-relaxed">Our Artificial Intelligence powered tools use millions of project data points 
      to ensure that your project is successful</p>`,i=b(),r=p("section"),A(s.$$.fragment),a=b(),A(m.$$.fragment),o=b(),A(c.$$.fragment),h=b(),A(l.$$.fragment),f(n,"class","pitch text-center pb-20 svelte-1qlrf4s"),f(n,"role","banner"),f(r,"class","flex flex-col gap-8 sm:grid sm:grid-cols-3 sm:items-center sm:max-w-[1000px] sm:mx-auto"),f(t,"class","bg-neutral-lightgray px-8 py-20")},m(u,E){J(u,t,E),g(t,n),g(t,i),g(t,r),v(s,r,null),g(r,a),v(m,r,null),g(r,o),v(c,r,null),g(r,h),v(l,r,null),d=!0},p:x,i(u){d||($(s.$$.fragment,u),$(m.$$.fragment,u),$(c.$$.fragment,u),$(l.$$.fragment,u),d=!0)},o(u){S(s.$$.fragment,u),S(m.$$.fragment,u),S(c.$$.fragment,u),S(l.$$.fragment,u),d=!1},d(u){u&&T(t),O(s),O(m),O(c),O(l)}}}class de extends X{constructor(t){super(),W(this,t,null,fe,G,{})}}new de({target:document.getElementById("app")});
