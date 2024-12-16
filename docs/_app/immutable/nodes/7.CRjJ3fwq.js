import{s as W,n as J,a as R}from"../chunks/scheduler.BtxPl-uW.js";import{S as X,i as Y,e as _,s as w,a as H,c as g,m as Z,g as P,b as D,f as o,d as q,o as n,v as G,h as I,j as v,k as K,r as $}from"../chunks/index.DCzoMOBC.js";import{e as O,u as x,d as ee}from"../chunks/each.CKN37nZf.js";function Q(d,a,t){const r=d.slice();return r[11]=a[t],r}function U(d,a){let t,r,f,c,i,p,k,m,u,M;function y(){return a[5](a[11])}return{key:d,first:null,c(){t=_("div"),r=_("img"),i=w(),p=_("img"),m=w(),this.h()},l(h){t=g(h,"DIV",{class:!0});var s=D(t);r=g(s,"IMG",{class:!0,src:!0,alt:!0}),i=P(s),p=g(s,"IMG",{src:!0,alt:!0,class:!0}),m=P(s),s.forEach(o),this.h()},h(){n(r,"class","front svelte-t49pso"),R(r.src,f=a[11].image)||n(r,"src",f),n(r,"alt",c=a[11].alt),R(p.src,k="images/droydCord.png")||n(p,"src",k),n(p,"alt","Backside"),n(p,"class","svelte-t49pso"),n(t,"class","card svelte-t49pso"),G(t,"flipped",a[11].flipped),this.first=t},m(h,s){I(h,t,s),v(t,r),v(t,i),v(t,p),v(t,m),u||(M=$(t,"click",y),u=!0)},p(h,s){a=h,s&1&&!R(r.src,f=a[11].image)&&n(r,"src",f),s&1&&c!==(c=a[11].alt)&&n(r,"alt",c),s&1&&G(t,"flipped",a[11].flipped)},d(h){h&&o(t),u=!1,M()}}}function se(d){let a,t='<h1 class="svelte-t49pso">The Beautiful Memory Game</h1>',r,f,c,i=[],p=new Map,k,m,u,M,y,h,s,b,S,T,A,C,B=O(d[0]);const z=e=>e[11].id;for(let e=0;e<B.length;e+=1){let l=Q(d,B,e),E=z(l);p.set(E,i[e]=U(E,l))}return{c(){a=_("div"),a.innerHTML=t,r=w(),f=_("div"),c=_("main");for(let e=0;e<i.length;e+=1)i[e].c();k=w(),m=_("aside"),u=_("p"),M=H("Blue: "),y=H(d[1]),h=w(),s=_("aside"),b=_("p"),S=H("Red: "),T=H(d[2]),A=w(),C=_("aside"),this.h()},l(e){a=g(e,"DIV",{class:!0,"data-svelte-h":!0}),Z(a)!=="svelte-1kb93z8"&&(a.innerHTML=t),r=P(e),f=g(e,"DIV",{class:!0});var l=D(f);c=g(l,"MAIN",{class:!0});var E=D(c);for(let L=0;L<i.length;L+=1)i[L].l(E);E.forEach(o),l.forEach(o),k=P(e),m=g(e,"ASIDE",{class:!0});var F=D(m);u=g(F,"P",{class:!0});var V=D(u);M=q(V,"Blue: "),y=q(V,d[1]),V.forEach(o),F.forEach(o),h=P(e),s=g(e,"ASIDE",{class:!0});var N=D(s);b=g(N,"P",{class:!0});var j=D(b);S=q(j,"Red: "),T=q(j,d[2]),j.forEach(o),N.forEach(o),A=P(e),C=g(e,"ASIDE",{class:!0}),D(C).forEach(o),this.h()},h(){n(a,"class","Header svelte-t49pso"),n(c,"class","mainHead svelte-t49pso"),n(f,"class","centerShit svelte-t49pso"),n(u,"class","svelte-t49pso"),n(m,"class","blue svelte-t49pso"),n(b,"class","svelte-t49pso"),n(s,"class","svelte-t49pso"),n(C,"class","turn svelte-t49pso"),G(C,"blue",d[3])},m(e,l){I(e,a,l),I(e,r,l),I(e,f,l),v(f,c);for(let E=0;E<i.length;E+=1)i[E]&&i[E].m(c,null);I(e,k,l),I(e,m,l),v(m,u),v(u,M),v(u,y),I(e,h,l),I(e,s,l),v(s,b),v(b,S),v(b,T),I(e,A,l),I(e,C,l)},p(e,[l]){l&17&&(B=O(e[0]),i=x(i,l,z,1,e,B,p,c,ee,U,null,Q)),l&2&&K(y,e[1]),l&4&&K(T,e[2]),l&8&&G(C,"blue",e[3])},i:J,o:J,d(e){e&&(o(a),o(r),o(f),o(k),o(m),o(h),o(s),o(A),o(C));for(let l=0;l<i.length;l+=1)i[l].d()}}}let te=12;function le(d,a,t){let r=["images/1727730631300u.png","images/tits.webp","images/calmfly.png","images/pou.jpeg","images/screaming-baby-made-of-ash-v0-7nskgql0k1w91.webp","images/static-assets-upload10830305506337304706.webp"],f=["meh","tits","meh4","tit2s","m3eh","tits1"],c=[],i=0,p=[],k=0,m=0,u=!0;for(let s=0;s<te;s++)c.push({id:s,image:r[s%r.length],alt:f[s%f.length],flipped:!1,matched:!1});c.sort(()=>Math.random()-.50000000069);function M(s){s.flipped||s.matched||i==2||(s.flipped=!0,i++,p.push(s),t(0,c),i===2&&y())}function y(){const[s,b]=p;p.length===2&&(s.image===b.image&&(u?t(1,k+=1):t(2,m+=1),s.matched=!0,b.matched=!0,t(0,c),i=0),setTimeout(()=>{c.forEach(S=>{S.flipped=S.matched}),i=0,t(0,c)},1e3),t(3,u=!u)),p=[]}return[c,k,m,u,M,s=>M(s)]}class ce extends X{constructor(a){super(),Y(this,a,le,se,W,{})}}export{ce as component};
