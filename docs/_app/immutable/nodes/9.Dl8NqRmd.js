import{s as q,n as k,r as O}from"../chunks/scheduler.C7I-Luai.js";import{S as j,i as z,e as d,s as C,c as v,l as I,f as b,a as U,d as _,m as n,g as V,h as l,o as E,p as B}from"../chunks/index.C5Gq5ESH.js";function F(h){let a,x="register",i,t,r,o,w="Username",D,u,L,f,m,N="Password",P,p,S,c,A="Submit",T,$;return{c(){a=d("div"),a.textContent=x,i=C(),t=d("div"),r=d("div"),o=d("label"),o.textContent=w,D=C(),u=d("input"),L=C(),f=d("div"),m=d("label"),m.textContent=N,P=C(),p=d("input"),S=C(),c=d("button"),c.textContent=A,this.h()},l(e){a=v(e,"DIV",{class:!0,"data-svelte-h":!0}),I(a)!=="svelte-chulf7"&&(a.textContent=x),i=b(e),t=v(e,"DIV",{class:!0});var s=U(t);r=v(s,"DIV",{class:!0});var g=U(r);o=v(g,"LABEL",{for:!0,"data-svelte-h":!0}),I(o)!=="svelte-1wr0xay"&&(o.textContent=w),D=b(g),u=v(g,"INPUT",{type:!0,id:!0}),g.forEach(_),L=b(s),f=v(s,"DIV",{class:!0});var y=U(f);m=v(y,"LABEL",{for:!0,"data-svelte-h":!0}),I(m)!=="svelte-pepa0a"&&(m.textContent=N),P=b(y),p=v(y,"INPUT",{type:!0,id:!0}),y.forEach(_),S=b(s),c=v(s,"BUTTON",{class:!0,"data-svelte-h":!0}),I(c)!=="svelte-1wrxxdi"&&(c.textContent=A),s.forEach(_),this.h()},h(){n(a,"class","register-text svelte-rus2vh"),n(o,"for","username"),n(u,"type","text"),n(u,"id","username"),n(r,"class","form-group svelte-rus2vh"),n(m,"for","password"),n(p,"type","password"),n(p,"id","password"),n(f,"class","form-group svelte-rus2vh"),n(c,"class","submit-button svelte-rus2vh"),n(t,"class","form-container svelte-rus2vh")},m(e,s){V(e,a,s),V(e,i,s),V(e,t,s),l(t,r),l(r,o),l(r,D),l(r,u),E(u,h[0]),l(t,L),l(t,f),l(f,m),l(f,P),l(f,p),E(p,h[1]),l(t,S),l(t,c),T||($=[B(u,"input",h[3]),B(p,"input",h[4]),B(c,"click",h[2])],T=!0)},p(e,[s]){s&1&&u.value!==e[0]&&E(u,e[0]),s&2&&p.value!==e[1]&&E(p,e[1])},i:k,o:k,d(e){e&&(_(a),_(i),_(t)),T=!1,O($)}}}function G(h,a,x){let i="",t="";function r(){i&&t&&(window.location.href="https://x.com")}function o(){i=this.value,x(0,i)}function w(){t=this.value,x(1,t)}return[i,t,r,o,w]}class K extends j{constructor(a){super(),z(this,a,G,F,q,{})}}export{K as component};
