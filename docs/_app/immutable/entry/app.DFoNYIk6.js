const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DhILvrkx.js","../chunks/scheduler.be47Yvb9.js","../chunks/index.DoppXiCa.js","../chunks/paths.GXY8i-_z.js","../chunks/index.Rte9RDnY.js","../assets/0.8fBd-yRf.css","../nodes/1.B5fmjMD7.js","../chunks/entry.BGED86A5.js","../nodes/2.CGNd7rla.js","../assets/2.CPso3iBf.css","../nodes/3.BF_OFkLL.js","../assets/3.G8bstbU7.css","../nodes/4.C-zx17OD.js","../chunks/user.DZSwb2pF.js","../assets/4.C8CF1KnY.css","../nodes/5.JGVusy2e.js","../assets/5.CN29FDhK.css","../nodes/6.Bdf_DluW.js","../assets/6.Bwrqj4An.css","../nodes/7.C4ydTSlg.js","../assets/7.CGQIvstZ.css"])))=>i.map(i=>d[i]);
import{s as N,b as q,o as U,d as O,t as j}from"../chunks/scheduler.be47Yvb9.js";import{S as z,i as W,s as F,u as h,f as G,g as k,v as g,w as D,x as w,d as b,e as H,c as J,a as K,n as T,o as d,t as Q,b as X,j as Y,y as I,z as P,A as R,B as V,C as L,D as A}from"../chunks/index.DoppXiCa.js";const Z="modulepreload",M=function(o,e){return new URL(o,e).href},S={},p=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(n.map(f=>{if(f=M(f,r),f in S)return;S[f]=!0;const a=f.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(!!r)for(let v=t.length-1;v>=0;v--){const y=t[v];if(y.href===f&&(!a||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${u}`))return;const m=document.createElement("link");if(m.rel=a?"stylesheet":Z,a||(m.as="script"),m.crossOrigin="",m.href=f,l&&m.setAttribute("nonce",l),document.head.appendChild(m),a)return new Promise((v,y)=>{m.addEventListener("load",v),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${f}`)))})}))}function _(t){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=t,window.dispatchEvent(i),!i.defaultPrevented)throw t}return s.then(t=>{for(const i of t||[])i.status==="rejected"&&_(i.reason);return e().catch(_)})},se={};function $(o){let e,n,r;var s=o[1][0];function _(t,i){return{props:{data:t[3],form:t[2]}}}return s&&(e=P(s,_(o)),o[12](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&V(e.$$.fragment,t),n=h()},m(t,i){e&&L(e,t,i),k(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){I();const l=e;g(l.$$.fragment,1,0,()=>{A(l,1)}),D()}s?(e=P(s,_(t)),t[12](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&w(e.$$.fragment,t),r=!0)},o(t){e&&g(e.$$.fragment,t),r=!1},d(t){t&&b(n),o[12](null),e&&A(e,t)}}}function x(o){let e,n,r;var s=o[1][0];function _(t,i){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=P(s,_(o)),o[11](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&V(e.$$.fragment,t),n=h()},m(t,i){e&&L(e,t,i),k(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){I();const l=e;g(l.$$.fragment,1,0,()=>{A(l,1)}),D()}s?(e=P(s,_(t)),t[11](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&8215&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)}},i(t){r||(e&&w(e.$$.fragment,t),r=!0)},o(t){e&&g(e.$$.fragment,t),r=!1},d(t){t&&b(n),o[11](null),e&&A(e,t)}}}function ee(o){let e,n,r;var s=o[1][1];function _(t,i){return{props:{data:t[4],form:t[2]}}}return s&&(e=P(s,_(o)),o[10](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&V(e.$$.fragment,t),n=h()},m(t,i){e&&L(e,t,i),k(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][1])){if(e){I();const l=e;g(l.$$.fragment,1,0,()=>{A(l,1)}),D()}s?(e=P(s,_(t)),t[10](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&16&&(l.data=t[4]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&w(e.$$.fragment,t),r=!0)},o(t){e&&g(e.$$.fragment,t),r=!1},d(t){t&&b(n),o[10](null),e&&A(e,t)}}}function C(o){let e,n=o[6]&&B(o);return{c(){e=H("div"),n&&n.c(),this.h()},l(r){e=J(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(b),this.h()},h(){T(e,"id","svelte-announcer"),T(e,"aria-live","assertive"),T(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(r,s){k(r,e,s),n&&n.m(e,null)},p(r,s){r[6]?n?n.p(r,s):(n=B(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&b(e),n&&n.d()}}}function B(o){let e;return{c(){e=Q(o[7])},l(n){e=X(n,o[7])},m(n,r){k(n,e,r)},p(n,r){r&128&&Y(e,n[7])},d(n){n&&b(e)}}}function te(o){let e,n,r,s,_;const t=[x,$],i=[];function l(a,u){return a[1][1]?0:1}e=l(o),n=i[e]=t[e](o);let f=o[5]&&C(o);return{c(){n.c(),r=F(),f&&f.c(),s=h()},l(a){n.l(a),r=G(a),f&&f.l(a),s=h()},m(a,u){i[e].m(a,u),k(a,r,u),f&&f.m(a,u),k(a,s,u),_=!0},p(a,[u]){let E=e;e=l(a),e===E?i[e].p(a,u):(I(),g(i[E],1,1,()=>{i[E]=null}),D(),n=i[e],n?n.p(a,u):(n=i[e]=t[e](a),n.c()),w(n,1),n.m(r.parentNode,r)),a[5]?f?f.p(a,u):(f=C(a),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i(a){_||(w(n),_=!0)},o(a){g(n),_=!1},d(a){a&&(b(r),b(s)),i[e].d(a),f&&f.d(a)}}}function ne(o,e,n){let{stores:r}=e,{page:s}=e,{constructors:_}=e,{components:t=[]}=e,{form:i}=e,{data_0:l=null}=e,{data_1:f=null}=e;q(r.page.notify);let a=!1,u=!1,E=null;U(()=>{const c=r.page.subscribe(()=>{a&&(n(6,u=!0),j().then(()=>{n(7,E=document.title||"untitled page")}))});return n(5,a=!0),c});function m(c){O[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function v(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function y(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return o.$$set=c=>{"stores"in c&&n(8,r=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,_=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,i=c.form),"data_0"in c&&n(3,l=c.data_0),"data_1"in c&&n(4,f=c.data_1)},o.$$.update=()=>{o.$$.dirty&768&&r.page.set(s)},[t,_,i,l,f,a,u,E,r,s,m,v,y]}class oe extends z{constructor(e){super(),W(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>p(()=>import("../nodes/0.DhILvrkx.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>p(()=>import("../nodes/1.B5fmjMD7.js"),__vite__mapDeps([6,1,2,7,4,3]),import.meta.url),()=>p(()=>import("../nodes/2.CGNd7rla.js"),__vite__mapDeps([8,1,2,9]),import.meta.url),()=>p(()=>import("../nodes/3.BF_OFkLL.js"),__vite__mapDeps([10,1,2,11]),import.meta.url),()=>p(()=>import("../nodes/4.C-zx17OD.js"),__vite__mapDeps([12,1,2,13,4,14]),import.meta.url),()=>p(()=>import("../nodes/5.JGVusy2e.js"),__vite__mapDeps([15,1,2,16]),import.meta.url),()=>p(()=>import("../nodes/6.Bdf_DluW.js"),__vite__mapDeps([17,1,2,18]),import.meta.url),()=>p(()=>import("../nodes/7.C4ydTSlg.js"),__vite__mapDeps([19,1,2,13,4,20]),import.meta.url)],le=[],fe={"/":[2],"/about":[3],"/login":[4],"/maf":[5],"/photoapp":[6],"/register":[7]},ce={handleError:({error:o})=>{console.error(o)},reroute:()=>{}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
