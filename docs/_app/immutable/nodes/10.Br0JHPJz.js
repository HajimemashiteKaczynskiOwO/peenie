import{s as $,n as S}from"../chunks/scheduler.C7I-Luai.js";import{S as j,i as M,e as i,s as x,c as r,l as _,f as b,a as w,d as p,m as f,o as H,g as B,h as a,p as Y}from"../chunks/index.C5Gq5ESH.js";import{b as q}from"../chunks/paths.tb1_L9-K.js";function U(y){let e,g="register",u,t,v,h,L="How Old Are you? Are you Olds but Youngs enough..?",E,c,l,N="No",n,A="Yes",I,m,D='<label for="age">Age</label> <input type="age" id="age"/>',T,d,P="Submit",k,V;return{c(){e=i("div"),e.textContent=g,u=x(),t=i("div"),v=i("div"),h=i("label"),h.textContent=L,E=x(),c=i("select"),l=i("option"),l.textContent=N,n=i("option"),n.textContent=A,I=x(),m=i("div"),m.innerHTML=D,T=x(),d=i("button"),d.textContent=P,this.h()},l(o){e=r(o,"DIV",{class:!0,"data-svelte-h":!0}),_(e)!=="svelte-chulf7"&&(e.textContent=g),u=b(o),t=r(o,"DIV",{class:!0});var s=w(t);v=r(s,"DIV",{class:!0});var C=w(v);h=r(C,"LABEL",{for:!0,"data-svelte-h":!0}),_(h)!=="svelte-k6sv6m"&&(h.textContent=L),E=b(C),c=r(C,"SELECT",{id:!0,name:!0});var O=w(c);l=r(O,"OPTION",{"data-svelte-h":!0}),_(l)!=="svelte-u9l2ja"&&(l.textContent=N),n=r(O,"OPTION",{"data-svelte-h":!0}),_(n)!=="svelte-y2mbp4"&&(n.textContent=A),O.forEach(p),C.forEach(p),I=b(s),m=r(s,"DIV",{class:!0,"data-svelte-h":!0}),_(m)!=="svelte-4cjyww"&&(m.innerHTML=D),T=b(s),d=r(s,"BUTTON",{class:!0,"data-svelte-h":!0}),_(d)!=="svelte-1wrxxdi"&&(d.textContent=P),s.forEach(p),this.h()},h(){f(e,"class","register-text svelte-rus2vh"),f(h,"for","ageCheck"),l.__value="no",H(l,l.__value),n.__value="yes",H(n,n.__value),f(c,"id","ageCheck"),f(c,"name","ageCheck"),f(v,"class","form-group svelte-rus2vh"),f(m,"class","form-group svelte-rus2vh"),f(d,"class","submit-button svelte-rus2vh"),f(t,"class","form-container svelte-rus2vh")},m(o,s){B(o,e,s),B(o,u,s),B(o,t,s),a(t,v),a(v,h),a(v,E),a(v,c),a(c,l),a(c,n),a(t,I),a(t,m),a(t,T),a(t,d),k||(V=Y(d,"click",y[0]),k=!0)},p:S,i:S,o:S,d(o){o&&(p(e),p(u),p(t)),k=!1,V()}}}function z(y){function e(){let g=document.getElementById("ageCheck").value,u=document.getElementById("age").value;u=Number(u),g==="yes"&&88>u>=17?goto(`${q}/diffShit/registerPage/`):(alert("Too Bad!"),window.location.href="/diffShit/")}return[e]}class K extends j{constructor(e){super(),M(this,e,z,U,$,{})}}export{K as component};
