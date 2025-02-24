import{s as Ae,f as Ee,n as me,o as ke,d as se,r as ze}from"../chunks/scheduler.Bs8F_AUP.js";import{S as Ie,i as Te,e as u,s as T,t as X,c as v,f as q,l as G,a as V,d as f,b as J,m as n,o as ue,g as Q,h as t,w as he,p as re,j as ee,r as _e,y as qe}from"../chunks/index.B5tQNggO.js";import{e as ae}from"../chunks/each.pSuhPYJz.js";function ge(e,i,o){const m=e.slice();return m[12]=i[o],m}function xe(e,i,o){const m=e.slice();return m[15]=i[o],m}function Ce(e){let i,o,m="+",j,x,s,p,N,E,d,h=e[15].name+"",D,k,L,l=e[15].price+"",c,z,C,_,B;function g(){return e[8](e[15])}return{c(){i=u("div"),o=u("button"),o.textContent=m,j=T(),x=u("img"),N=T(),E=u("div"),d=u("span"),D=X(h),k=T(),L=u("span"),c=X(l),z=X(" kr"),C=T(),this.h()},l(y){i=v(y,"DIV",{class:!0});var b=V(i);o=v(b,"BUTTON",{class:!0,"data-svelte-h":!0}),G(o)!=="svelte-1gjowb8"&&(o.textContent=m),j=q(b),x=v(b,"IMG",{src:!0,alt:!0,class:!0}),N=q(b),E=v(b,"DIV",{class:!0});var H=V(E);d=v(H,"SPAN",{class:!0});var K=V(d);D=J(K,h),K.forEach(f),k=q(H),L=v(H,"SPAN",{class:!0});var w=V(L);c=J(w,l),z=J(w," kr"),w.forEach(f),H.forEach(f),C=q(b),b.forEach(f),this.h()},h(){n(o,"class","add-button svelte-1l0xxzv"),se(x.src,s=e[15].image)||n(x,"src",s),n(x,"alt",p=e[15].name),n(x,"class","product-image svelte-1l0xxzv"),n(d,"class","product-name svelte-1l0xxzv"),n(L,"class","product-price svelte-1l0xxzv"),n(E,"class","product-info svelte-1l0xxzv"),n(i,"class","product-item svelte-1l0xxzv")},m(y,b){Q(y,i,b),t(i,o),t(i,j),t(i,x),t(i,N),t(i,E),t(E,d),t(d,D),t(E,k),t(E,L),t(L,c),t(L,z),t(i,C),_||(B=re(o,"click",g),_=!0)},p(y,b){e=y,b&4&&!se(x.src,s=e[15].image)&&n(x,"src",s),b&4&&p!==(p=e[15].name)&&n(x,"alt",p),b&4&&h!==(h=e[15].name+"")&&ee(D,h),b&4&&l!==(l=e[15].price+"")&&ee(c,l)},d(y){y&&f(i),_=!1,B()}}}function be(e){let i,o,m,j,x,s,p,N=e[12].name+"",E,d,h,D=e[12].price+"",k,L,l,c,z,C,_,B="×",g,y,b;function H(...w){return e[9](e[12],...w)}function K(){return e[10](e[12])}return{c(){i=u("div"),o=u("img"),x=T(),s=u("div"),p=u("span"),E=X(N),d=T(),h=u("span"),k=X(D),L=X(" kr/st"),l=T(),c=u("input"),C=T(),_=u("button"),_.textContent=B,g=T(),this.h()},l(w){i=v(w,"DIV",{class:!0});var A=V(i);o=v(A,"IMG",{src:!0,alt:!0,class:!0}),x=q(A),s=v(A,"DIV",{class:!0});var O=V(s);p=v(O,"SPAN",{class:!0});var F=V(p);E=J(F,N),F.forEach(f),d=q(O),h=v(O,"SPAN",{class:!0});var M=V(h);k=J(M,D),L=J(M," kr/st"),M.forEach(f),l=q(O),c=v(O,"INPUT",{type:!0,class:!0,min:!0}),C=q(O),_=v(O,"BUTTON",{class:!0,"data-svelte-h":!0}),G(_)!=="svelte-1u155x6"&&(_.textContent=B),O.forEach(f),g=q(A),A.forEach(f),this.h()},h(){se(o.src,m=e[12].image)||n(o,"src",m),n(o,"alt",j=e[12].name),n(o,"class","cart-item-image svelte-1l0xxzv"),n(p,"class","cart-item-name"),n(h,"class","cart-item-price"),n(c,"type","number"),c.value=z=e[12].quantity,n(c,"class","quantity-input svelte-1l0xxzv"),n(c,"min","1"),n(_,"class","remove-button svelte-1l0xxzv"),n(s,"class","cart-item-info svelte-1l0xxzv"),n(i,"class","cart-item svelte-1l0xxzv")},m(w,A){Q(w,i,A),t(i,o),t(i,x),t(i,s),t(s,p),t(p,E),t(s,d),t(s,h),t(h,k),t(h,L),t(s,l),t(s,c),t(s,C),t(s,_),t(i,g),y||(b=[re(c,"input",H),re(_,"click",K)],y=!0)},p(w,A){e=w,A&1&&!se(o.src,m=e[12].image)&&n(o,"src",m),A&1&&j!==(j=e[12].name)&&n(o,"alt",j),A&1&&N!==(N=e[12].name+"")&&ee(E,N),A&1&&D!==(D=e[12].price+"")&&ee(k,D),A&1&&z!==(z=e[12].quantity)&&c.value!==z&&(c.value=z)},d(w){w&&f(i),y=!1,ze(b)}}}function ye(e){let i,o,m,j="Elektroniki Butiki",x,s,p,N="Sort:",E,d,h,D="Alphabetical",k,L="Price: High → Low",l,c="Price: Low → High",z,C,_,B,g,y,b,H,K="Shopping Cart",w,A,O,F,M,ve="Total:",ne,W,te,ie,oe,pe,Z=ae(e[2]),P=[];for(let a=0;a<Z.length;a+=1)P[a]=Ce(xe(e,Z,a));let $=ae(e[0]),S=[];for(let a=0;a<$.length;a+=1)S[a]=be(ge(e,$,a));return{c(){i=u("meta"),o=T(),m=u("h1"),m.textContent=j,x=T(),s=u("div"),p=u("label"),p.textContent=N,E=T(),d=u("select"),h=u("option"),h.textContent=D,k=u("option"),k.textContent=L,l=u("option"),l.textContent=c,z=T(),C=u("div"),_=u("div");for(let a=0;a<P.length;a+=1)P[a].c();B=T(),g=u("div"),y=u("div"),b=T(),H=u("h3"),H.textContent=K,w=T(),A=u("div");for(let a=0;a<S.length;a+=1)S[a].c();O=T(),F=u("div"),M=u("h3"),M.textContent=ve,ne=T(),W=u("span"),te=X(e[3]),ie=X(" kr"),this.h()},l(a){i=v(a,"META",{name:!0,content:!0}),o=q(a),m=v(a,"H1",{class:!0,"data-svelte-h":!0}),G(m)!=="svelte-1w3debg"&&(m.textContent=j),x=q(a),s=v(a,"DIV",{class:!0});var I=V(s);p=v(I,"LABEL",{for:!0,"data-svelte-h":!0}),G(p)!=="svelte-sps469"&&(p.textContent=N),E=q(I),d=v(I,"SELECT",{id:!0});var r=V(d);h=v(r,"OPTION",{"data-svelte-h":!0}),G(h)!=="svelte-xif9qq"&&(h.textContent=D),k=v(r,"OPTION",{"data-svelte-h":!0}),G(k)!=="svelte-1oqc7fm"&&(k.textContent=L),l=v(r,"OPTION",{"data-svelte-h":!0}),G(l)!=="svelte-1j3j0t0"&&(l.textContent=c),r.forEach(f),I.forEach(f),z=q(a),C=v(a,"DIV",{class:!0});var U=V(C);_=v(U,"DIV",{class:!0});var de=V(_);for(let Y=0;Y<P.length;Y+=1)P[Y].l(de);de.forEach(f),B=q(U),g=v(U,"DIV",{class:!0});var R=V(g);y=v(R,"DIV",{class:!0}),V(y).forEach(f),b=q(R),H=v(R,"H3",{class:!0,"data-svelte-h":!0}),G(H)!=="svelte-1yig0j3"&&(H.textContent=K),w=q(R),A=v(R,"DIV",{class:!0});var fe=V(A);for(let Y=0;Y<S.length;Y+=1)S[Y].l(fe);fe.forEach(f),O=q(R),F=v(R,"DIV",{class:!0});var le=V(F);M=v(le,"H3",{class:!0,"data-svelte-h":!0}),G(M)!=="svelte-k9hv0l"&&(M.textContent=ve),ne=q(le),W=v(le,"SPAN",{class:!0});var ce=V(W);te=J(ce,e[3]),ie=J(ce," kr"),ce.forEach(f),le.forEach(f),R.forEach(f),U.forEach(f),this.h()},h(){n(i,"name","viewport"),n(i,"content","width=device-width, initial-scale=1.0"),n(m,"class","headerName svelte-1l0xxzv"),n(p,"for","sort-select"),h.__value="alphabetical",ue(h,h.__value),k.__value="priceHigh",ue(k,k.__value),l.__value="priceLow",ue(l,l.__value),n(d,"id","sort-select"),e[1]===void 0&&Ee(()=>e[7].call(d)),n(s,"class","sort-container svelte-1l0xxzv"),n(_,"class","products svelte-1l0xxzv"),n(y,"class","cart-handle svelte-1l0xxzv"),n(H,"class","cartTitle svelte-1l0xxzv"),n(A,"class","cart-items svelte-1l0xxzv"),n(M,"class","totalTitle svelte-1l0xxzv"),n(W,"class","totalAmount svelte-1l0xxzv"),n(F,"class","total-container svelte-1l0xxzv"),n(g,"class","cart svelte-1l0xxzv"),n(C,"class","container svelte-1l0xxzv")},m(a,I){Q(a,i,I),Q(a,o,I),Q(a,m,I),Q(a,x,I),Q(a,s,I),t(s,p),t(s,E),t(s,d),t(d,h),t(d,k),t(d,l),he(d,e[1],!0),Q(a,z,I),Q(a,C,I),t(C,_);for(let r=0;r<P.length;r+=1)P[r]&&P[r].m(_,null);t(C,B),t(C,g),t(g,y),t(g,b),t(g,H),t(g,w),t(g,A);for(let r=0;r<S.length;r+=1)S[r]&&S[r].m(A,null);t(g,O),t(g,F),t(F,M),t(F,ne),t(F,W),t(W,te),t(W,ie),oe||(pe=re(d,"change",e[7]),oe=!0)},p(a,[I]){if(I&2&&he(d,a[1]),I&20){Z=ae(a[2]);let r;for(r=0;r<Z.length;r+=1){const U=xe(a,Z,r);P[r]?P[r].p(U,I):(P[r]=Ce(U),P[r].c(),P[r].m(_,null))}for(;r<P.length;r+=1)P[r].d(1);P.length=Z.length}if(I&97){$=ae(a[0]);let r;for(r=0;r<$.length;r+=1){const U=ge(a,$,r);S[r]?S[r].p(U,I):(S[r]=be(U),S[r].c(),S[r].m(A,null))}for(;r<S.length;r+=1)S[r].d(1);S.length=$.length}I&8&&ee(te,a[3])},i:me,o:me,d(a){a&&(f(i),f(o),f(m),f(x),f(s),f(z),f(C)),_e(P,a),_e(S,a),oe=!1,pe()}}}function we(e,i,o){let m,j,x=[{name:"TV",price:9999,image:"/images/store/bigtv.png"},{name:"Laptop",price:1e3,image:"/images/store/laptop.jpg"},{name:"RTX 2080Ti",price:3200,image:"/images/store/gpu.png"},{name:"Toaster",price:50,image:"/images/store/toaster.jpg"},{name:"Soldier Merc",price:90769,image:"/images/tits.webp"},{name:"Ambatron",price:100750,image:"/images/store/ambatron.jpg"}],s=[],p="alphabetical";function N(l){const c=s.findIndex(z=>z.name===l.name);c!==-1?(o(0,s[c].quantity+=1,s),o(0,s=[...s])):o(0,s=[...s,{...l,quantity:1}])}function E(l){o(0,s=s.filter(c=>c.name!==l))}function d(l,c){const z=parseInt(c.target.value);z>0&&(l.quantity=z,o(0,s=[...s]))}ke(()=>{document.getElementById("sort-select").addEventListener("change",function(){const l=this.value,c=document.querySelector(".products");Array.from(c.querySelectorAll(".product-item")).sort((C,_)=>{if(l==="alphabetical"){const B=C.getAttribute("data-name").toLowerCase(),g=_.getAttribute("data-name").toLowerCase();return B.localeCompare(g)}else if(l==="priceHigh"){const B=parseFloat(C.getAttribute("data-price").replace("$",""));return parseFloat(_.getAttribute("data-price").replace("$",""))-B}else if(l==="priceLow"){const B=parseFloat(C.getAttribute("data-price").replace("$","")),g=parseFloat(_.getAttribute("data-price").replace("$",""));return B-g}})}),productsArray.forEach(l=>{productsContainer.appendChild(l)})});function h(){p=qe(this),o(1,p)}const D=l=>N(l),k=(l,c)=>d(l,c),L=l=>E(l.name);return e.$$.update=()=>{e.$$.dirty&1&&o(3,m=s.reduce((l,c)=>l+c.price*c.quantity,0)),e.$$.dirty&2&&o(2,j=x.sort((l,c)=>p==="alphabetical"?l.name.localeCompare(c.name):p==="priceHigh"?c.price-l.price:p==="priceLow"?l.price-c.price:0))},[s,p,j,m,N,E,d,h,D,k,L]}class Le extends Ie{constructor(i){super(),Te(this,i,we,ye,Ae,{})}}export{Le as component};
