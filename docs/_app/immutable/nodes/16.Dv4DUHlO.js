import{s as M,n as N,r as R,c as T}from"../chunks/scheduler.C7I-Luai.js";import{S as U,i as j,e as d,s as C,c as v,a as b,d as u,f as V,m as g,g as w,h as k,o as O,p as y,q as $,r as x,t as z,b as B,j as D}from"../chunks/index.C5Gq5ESH.js";import{e as P}from"../chunks/each.2HYmfo-H.js";import{g as q}from"../chunks/entry.DZpvoRKn.js";import{w as G}from"../chunks/index.DAK7eFfL.js";import{b as H}from"../chunks/paths.G21JwR54.js";function F(n,l,s){const t=n.slice();return t[7]=l[s],t}function L(n){let l,s,t=n[7]+"",o,i,f;function m(){return n[5](n[7])}return{c(){l=d("li"),s=d("a"),o=z(t),this.h()},l(h){l=v(h,"LI",{});var c=b(l);s=v(c,"A",{href:!0});var p=b(s);o=B(p,t),p.forEach(u),c.forEach(u),this.h()},h(){g(s,"href","#")},m(h,c){w(h,l,c),k(l,s),k(s,o),i||(f=y(s,"click",m),i=!0)},p(h,c){n=h,c&2&&t!==(t=n[7]+"")&&D(o,t)},d(h){h&&u(l),i=!1,f()}}}function J(n){let l,s,t,o,i,f,m,h,c,p=P(n[1]),r=[];for(let e=0;e<p.length;e+=1)r[e]=L(F(n,p,e));return{c(){l=d("main"),s=d("form"),t=d("input"),o=C(),i=d("footer"),f=d("nav"),m=d("ul");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){l=v(e,"MAIN",{class:!0});var _=b(l);s=v(_,"FORM",{});var a=b(s);t=v(a,"INPUT",{class:!0,type:!0,placeholder:!0}),a.forEach(u),_.forEach(u),o=V(e),i=v(e,"FOOTER",{class:!0});var E=b(i);f=v(E,"NAV",{});var A=b(f);m=v(A,"UL",{});var I=b(m);for(let S=0;S<r.length;S+=1)r[S].l(I);I.forEach(u),A.forEach(u),E.forEach(u),this.h()},h(){g(t,"class","searcher svelte-1wutxhn"),g(t,"type","text"),g(t,"placeholder","Search for a Pokemon"),g(l,"class","svelte-1wutxhn"),g(i,"class","svelte-1wutxhn")},m(e,_){w(e,l,_),k(l,s),k(s,t),O(t,n[0]),w(e,o,_),w(e,i,_),k(i,f),k(f,m);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(m,null);h||(c=[y(t,"input",n[3]),y(s,"submit",$(n[4]))],h=!0)},p(e,[_]){if(_&1&&t.value!==e[0]&&O(t,e[0]),_&2){p=P(e[1]);let a;for(a=0;a<p.length;a+=1){const E=F(e,p,a);r[a]?r[a].p(E,_):(r[a]=L(E),r[a].c(),r[a].m(m,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=p.length}},i:N,o:N,d(e){e&&(u(l),u(o),u(i)),x(r,e),h=!1,R(c)}}}function K(n,l,s){let t,o="",i=G([]);T(n,i,c=>s(1,t=c));function f(){o=this.value,s(0,o)}return[o,t,i,f,()=>{q(H+"/search/"+o)},c=>q("/search/"+c)]}class te extends U{constructor(l){super(),j(this,l,K,J,M,{})}}export{te as component};
