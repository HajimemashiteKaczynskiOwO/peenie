import{s as O,v as Q,n as F,w as j}from"../chunks/scheduler.CxAnwkWf.js";import{S as N,i as U,e as D,s as R,c as _,m as C,g as K,b as H,f as P,o as I,h as L,j as x,w as V,a as J,d as X,k as Z}from"../chunks/index.D6RuoAkh.js";import{e as q}from"../chunks/each.u2ubkde5.js";import{g as ee}from"../chunks/_commonjsHelpers.CqkleIqs.js";import{p as te,i as oe,a as ae}from"../chunks/entry.0pfXu50V.js";var T={};T.elizaInitials=["How do you do.  Please tell me your problem.","Please tell me what's been bothering you.","Is something troubling you ?"];T.elizaFinals=["Goodbye.  It was nice talking to you.","Goodbye.  This was really a nice talk.","Goodbye.  I'm looking forward to our next session.","This was a good session, wasn't it -- but time is over now.   Goodbye.","Maybe we could discuss this moreover in our next session ?   Goodbye."];T.elizaQuits=["bye","goodbye","done","exit","quit"];T.elizaPres=["dont","don't","cant","can't","wont","won't","recollect","remember","recall","remember","dreamt","dreamed","dreams","dream","maybe","perhaps","certainly","yes","machine","computer","machines","computer","computers","computer","were","was","you're","you are","i'm","i am","same","alike","identical","alike","equivalent","alike"];T.elizaPosts=["am","are","your","my","me","you","myself","yourself","yourself","myself","i","you","you","I","my","your","i'm","you are"];T.elizaSynons={be:["am","is","are","was"],belief:["feel","think","believe","wish"],cannot:["can't"],desire:["want","need"],everyone:["everybody","nobody","noone"],family:["mother","mom","father","dad","sister","brother","wife","children","child"],happy:["elated","glad","better"],sad:["unhappy","depressed","sick"]};T.elizaKeywords=[["xnone",0,[["*",["I'm not sure I understand you fully.","Please go on.","What does that suggest to you ?","Do you feel strongly about discussing such things ?","That is interesting.  Please continue.","Tell me more about that.","Does talking about this bother you ?"]]]],["sorry",0,[["*",["Please don't apologise.","Apologies are not necessary.","I've told you that apologies are not required.","It did not bother me.  Please continue."]]]],["apologise",0,[["*",["goto sorry"]]]],["remember",5,[["* i remember *",["Do you often think of (2) ?","Does thinking of (2) bring anything else to mind ?","What else do you recollect ?","Why do you remember (2) just now ?","What in the present situation reminds you of (2) ?","What is the connection between me and (2) ?","What else does (2) remind you of ?"]],["* do you remember *",["Did you think I would forget (2) ?","Why do you think I should recall (2) now ?","What about (2) ?","goto what","You mentioned (2) ?"]],["* you remember *",["How could I forget (2) ?","What about (2) should I remember ?","goto you"]]]],["forget",5,[["* i forget *",["Can you think of why you might forget (2) ?","Why can't you remember (2) ?","How often do you think of (2) ?","Does it bother you to forget that ?","Could it be a mental block ?","Are you generally forgetful ?","Do you think you are suppressing (2) ?"]],["* did you forget *",["Why do you ask ?","Are you sure you told me ?","Would it bother you if I forgot (2) ?","Why should I recall (2) just now ?","goto what","Tell me more about (2)."]]]],["if",3,[["* if *",["Do you think it's likely that (2) ?","Do you wish that (2) ?","What do you know about (2) ?","Really, if (2) ?","What would you do if (2) ?","But what are the chances that (2) ?","What does this speculation lead to ?"]]]],["dreamed",4,[["* i dreamed *",["Really, (2) ?","Have you ever fantasized (2) while you were awake ?","Have you ever dreamed (2) before ?","goto dream"]]]],["dream",3,[["*",["What does that dream suggest to you ?","Do you dream often ?","What persons appear in your dreams ?","Do you believe that dreams have something to do with your problem ?"]]]],["perhaps",0,[["*",["You don't seem quite certain.","Why the uncertain tone ?","Can't you be more positive ?","You aren't sure ?","Don't you know ?","How likely, would you estimate ?"]]]],["name",15,[["*",["I am not interested in names.","I've told you before, I don't care about names -- please continue."]]]],["deutsch",0,[["*",["goto xforeign","I told you before, I don't understand German."]]]],["francais",0,[["*",["goto xforeign","I told you before, I don't understand French."]]]],["italiano",0,[["*",["goto xforeign","I told you before, I don't understand Italian."]]]],["espanol",0,[["*",["goto xforeign","I told you before, I don't understand Spanish."]]]],["xforeign",0,[["*",["I speak only English."]]]],["hello",0,[["*",["How do you do.  Please state your problem.","Hi.  What seems to be your problem ?"]]]],["computer",50,[["*",["Do computers worry you ?","Why do you mention computers ?","What do you think machines have to do with your problem ?","Don't you think computers can help people ?","What about machines worries you ?","What do you think about machines ?","You don't think I am a computer program, do you ?"]]]],["am",0,[["* am i *",["Do you believe you are (2) ?","Would you want to be (2) ?","Do you wish I would tell you you are (2) ?","What would it mean if you were (2) ?","goto what"]],["* i am *",["goto i"]],["*",["Why do you say 'am' ?","I don't understand that."]]]],["are",0,[["* are you *",["Why are you interested in whether I am (2) or not ?","Would you prefer if I weren't (2) ?","Perhaps I am (2) in your fantasies.","Do you sometimes think I am (2) ?","goto what","Would it matter to you ?","What if I were (2) ?"]],["* you are *",["goto you"]],["* are *",["Did you think they might not be (2) ?","Would you like it if they were not (2) ?","What if they were not (2) ?","Are they always (2) ?","Possibly they are (2).","Are you positive they are (2) ?"]]]],["your",0,[["* your *",["Why are you concerned over my (2) ?","What about your own (2) ?","Are you worried about someone else's (2) ?","Really, my (2) ?","What makes you think of my (2) ?","Do you want my (2) ?"]]]],["was",2,[["* was i *",["What if you were (2) ?","Do you think you were (2) ?","Were you (2) ?","What would it mean if you were (2) ?","What does ' (2) ' suggest to you ?","goto what"]],["* i was *",["Were you really ?","Why do you tell me you were (2) now ?","Perhaps I already know you were (2)."]],["* was you *",["Would you like to believe I was (2) ?","What suggests that I was (2) ?","What do you think ?","Perhaps I was (2).","What if I had been (2) ?"]]]],["i",0,[["* i @desire *",["What would it mean to you if you got (3) ?","Why do you want (3) ?","Suppose you got (3) soon.","What if you never got (3) ?","What would getting (3) mean to you ?","What does wanting (3) have to do with this discussion ?"]],["* i am* @sad *",["I am sorry to hear that you are (3).","Do you think coming here will help you not to be (3) ?","I'm sure it's not pleasant to be (3).","Can you explain what made you (3) ?"]],["* i am* @happy *",["How have I helped you to be (3) ?","Has your treatment made you (3) ?","What makes you (3) just now ?","Can you explain why you are suddenly (3) ?"]],["* i was *",["goto was"]],["* i @belief i *",["Do you really think so ?","But you are not sure you (3).","Do you really doubt you (3) ?"]],["* i* @belief *you *",["goto you"]],["* i am *",["Is it because you are (2) that you came to me ?","How long have you been (2) ?","Do you believe it is normal to be (2) ?","Do you enjoy being (2) ?","Do you know anyone else who is (2) ?"]],["* i @cannot *",["How do you know that you can't (3) ?","Have you tried ?","Perhaps you could (3) now.","Do you really want to be able to (3) ?","What if you could (3) ?"]],["* i don't *",["Don't you really (2) ?","Why don't you (2) ?","Do you wish to be able to (2) ?","Does that trouble you ?"]],["* i feel *",["Tell me more about such feelings.","Do you often feel (2) ?","Do you enjoy feeling (2) ?","Of what does feeling (2) remind you ?"]],["* i * you *",["Perhaps in your fantasies we (2) each other.","Do you wish to (2) me ?","You seem to need to (2) me.","Do you (2) anyone else ?"]],["*",["You say (1) ?","Can you elaborate on that ?","Do you say (1) for some special reason ?","That's quite interesting."]]]],["you",0,[["* you remind me of *",["goto alike"]],["* you are *",["What makes you think I am (2) ?","Does it please you to believe I am (2) ?","Do you sometimes wish you were (2) ?","Perhaps you would like to be (2)."]],["* you* me *",["Why do you think I (2) you ?","You like to think I (2) you -- don't you ?","What makes you think I (2) you ?","Really, I (2) you ?","Do you wish to believe I (2) you ?","Suppose I did (2) you -- what would that mean ?","Does someone else believe I (2) you ?"]],["* you *",["We were discussing you -- not me.","Oh, I (2) ?","You're not really talking about me -- are you ?","What are your feelings now ?"]]]],["yes",0,[["*",["You seem to be quite positive.","You are sure.","I see.","I understand."]]]],["no",0,[["* no one *",["Are you sure, no one (2) ?","Surely someone (2) .","Can you think of anyone at all ?","Are you thinking of a very special person ?","Who, may I ask ?","You have a particular person in mind, don't you ?","Who do you think you are talking about ?"]],["*",["Are you saying no just to be negative?","You are being a bit negative.","Why not ?","Why 'no' ?"]]]],["my",2,[["$ * my *",["Does that have anything to do with the fact that your (2) ?","Lets discuss further why your (2).","Earlier you said your (2).","But your (2)."]],["* my* @family *",["Tell me more about your family.","Who else in your family (4) ?","Your (3) ?","What else comes to your mind when you think of your (3) ?"]],["* my *",["Your (2) ?","Why do you say your (2) ?","Does that suggest anything else which belongs to you ?","Is it important to you that your (2) ?"]]]],["can",0,[["* can you *",["You believe I can (2) don't you ?","goto what","You want me to be able to (2).","Perhaps you would like to be able to (2) yourself."]],["* can i *",["Whether or not you can (2) depends on you more than on me.","Do you want to be able to (2) ?","Perhaps you don't want to (2).","goto what"]]]],["what",0,[["*",["Why do you ask ?","Does that question interest you ?","What is it you really want to know ?","Are such questions much on your mind ?","What answer would please you most ?","What do you think ?","What comes to mind when you ask that ?","Have you asked such questions before ?","Have you asked anyone else ?"]]]],["who",0,[["who *",["goto what"]]]],["when",0,[["when *",["goto what"]]]],["where",0,[["where *",["goto what"]]]],["how",0,[["how *",["goto what"]]]],["because",0,[["*",["Is that the real reason ?","Don't any other reasons come to mind ?","Does that reason seem to explain anything else ?","What other reasons might there be ?"]]]],["why",0,[["* why don't you *",["Do you believe I don't (2) ?","Perhaps I will (2) in good time.","Should you (2) yourself ?","You want me to (2) ?","goto what"]],["* why can't i *",["Do you think you should be able to (2) ?","Do you want to be able to (2) ?","Do you believe this will help you to (2) ?","Have you any idea why you can't (2) ?","goto what"]],["*",["goto what"]]]],["everyone",2,[["* @everyone *",["Really, (2) ?","Surely not (2).","Can you think of anyone in particular ?","Who, for example?","Are you thinking of a very special person ?","Who, may I ask ?","Someone special perhaps ?","You have a particular person in mind, don't you ?","Who do you think you're talking about ?"]]]],["everybody",2,[["*",["goto everyone"]]]],["nobody",2,[["*",["goto everyone"]]]],["noone",2,[["*",["goto everyone"]]]],["always",1,[["*",["Can you think of a specific example ?","When ?","What incident are you thinking of ?","Really, always ?"]]]],["alike",10,[["*",["In what way ?","What resemblence do you see ?","What does that similarity suggest to you ?","What other connections do you see ?","What do you suppose that resemblence means ?","What is the connection, do you suppose ?","Could there really be some connection ?","How ?"]]]],["like",10,[["* @be *like *",["goto alike"]]]],["different",0,[["*",["How is it different ?","What differences do you see ?","What does that difference suggest to you ?","What other distinctions do you see ?","What do you suppose that disparity means ?","Could there be some connection, do you suppose ?","How ?"]]]]];T.elizaPostTransforms=[/ old old/g," old",/\bthey were( not)? me\b/g,"it was$1 me",/\bthey are( not)? me\b/g,"it is$1 me",/Are they( always)? me\b/,"it is$1 me",/\bthat your( own)? (\w+)( now)? \?/,"that you have your$1 $2 ?",/\bI to have (\w+)/,"I have $1",/Earlier you said your( own)? (\w+)( now)?\./,"Earlier you talked about your $2."];var a=T;function g(t){this.noRandom=!!t,this.capitalizeFirstLetter=!0,this.debug=!1,this.memSize=20,this.version="1.1 (original)",this._dataParsed||this._init(),this.reset()}g.prototype.reset=function(){this.quit=!1,this.mem=[],this.lastchoice=[];for(var t=0;t<a.elizaKeywords.length;t++){this.lastchoice[t]=[];for(var e=a.elizaKeywords[t][2],r=0;r<e.length;r++)this.lastchoice[t][r]=-1}};g.prototype._dataParsed=!1;g.prototype._init=function(){var t={};if(a.elizaSynons&&typeof a.elizaSynons=="object")for(var e in a.elizaSynons)t[e]="("+e+"|"+a.elizaSynons[e].join("|")+")";(!a.elizaKeywords||typeof a.elizaKeywords.length>"u")&&(a.elizaKeywords=[["###",0,[["###",[]]]]]);for(var r=/@(\S+)/,d=/(\S)\s*\*\s*(\S)/,o=/^\s*\*\s*(\S)/,c=/(\S)\s*\*\s*$/,n=/^\s*\*\s*$/,h=/\s+/g,l=0;l<a.elizaKeywords.length;l++){var u=a.elizaKeywords[l][2];a.elizaKeywords[l][3]=l;for(var e=0;e<u.length;e++){var i=u[e];if(i[0].charAt(0)=="$"){for(var w=1;i[0].charAt[w]==" ";)w++;i[0]=i[0].substring(w),i[2]=!0}else i[2]=!1;for(var s=r.exec(i[0]);s;){var W=t[s[1]]?t[s[1]]:s[1];i[0]=i[0].substring(0,s.index)+W+i[0].substring(s.index+s[0].length),s=r.exec(i[0])}if(n.test(i[0]))i[0]="\\s*(.*)\\s*";else{if(s=d.exec(i[0]),s){for(var m="",f=i[0];s;)m+=f.substring(0,s.index+1),s[1]!=")"&&(m+="\\b"),m+="\\s*(.*)\\s*",s[2]!="("&&s[2]!="\\"&&(m+="\\b"),m+=s[2],f=f.substring(s.index+s[0].length),s=d.exec(f);i[0]=m+f}if(s=o.exec(i[0]),s){var m="\\s*(.*)\\s*";s[1]!=")"&&s[1]!="\\"&&(m+="\\b"),i[0]=m+i[0].substring(s.index-1+s[0].length)}if(s=c.exec(i[0]),s){var m=i[0].substring(0,s.index+1);s[1]!="("&&(m+="\\b"),i[0]=m+"\\s*(.*)\\s*"}}i[0]=i[0].replace(h,"\\s+"),h.lastIndex=0}}if(a.elizaKeywords.sort(this._sortKeywords),g.prototype.pres={},g.prototype.posts={},a.elizaPres&&a.elizaPres.length){for(var v=new Array,e=0;e<a.elizaPres.length;e+=2)v.push(a.elizaPres[e]),g.prototype.pres[a.elizaPres[e]]=a.elizaPres[e+1];g.prototype.preExp=new RegExp("\\b("+v.join("|")+")\\b")}else g.prototype.preExp=/####/,g.prototype.pres["####"]="####";if(a.elizaPosts&&a.elizaPosts.length){for(var v=new Array,e=0;e<a.elizaPosts.length;e+=2)v.push(a.elizaPosts[e]),g.prototype.posts[a.elizaPosts[e]]=a.elizaPosts[e+1];g.prototype.postExp=new RegExp("\\b("+v.join("|")+")\\b")}else g.prototype.postExp=/####/,g.prototype.posts["####"]="####";(!a.elizaQuits||typeof a.elizaQuits.length>"u")&&(a.elizaQuits=[]),g.prototype._dataParsed=!0};g.prototype._sortKeywords=function(t,e){return t[1]>e[1]?-1:t[1]<e[1]||t[3]>e[3]?1:t[3]<e[3]?-1:0};g.prototype.transform=function(t){var e="";this.quit=!1,t=t.toLowerCase(),t=t.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g," "),t=t.replace(/\s+-+\s+/g,"."),t=t.replace(/\s*[,\.\?!;]+\s*/g,"."),t=t.replace(/\s*\bbut\b\s*/g,"."),t=t.replace(/\s{2,}/g," ");for(var r=t.split("."),d=0;d<r.length;d++){var o=r[d];if(o!=""){for(var c=0;c<a.elizaQuits.length;c++)if(a.elizaQuits[c]==o)return this.quit=!0,this.getFinal();var n=this.preExp.exec(o);if(n){for(var h="",l=o;n;)h+=l.substring(0,n.index)+this.pres[n[1]],l=l.substring(n.index+n[0].length),n=this.preExp.exec(l);o=h+l}this.sentence=o;for(var u=0;u<a.elizaKeywords.length;u++)if(o.search(new RegExp("\\b"+a.elizaKeywords[u][0]+"\\b","i"))>=0&&(e=this._execRule(u)),e!="")return e}}if(e=this._memGet(),e==""){this.sentence=" ";var u=this._getRuleIndexByKey("xnone");u>=0&&(e=this._execRule(u))}return e!=""?e:"I am at a loss for words."};g.prototype._execRule=function(t){for(var e=a.elizaKeywords[t],r=e[2],d=/\(([0-9]+)\)/,o=0;o<r.length;o++){var c=this.sentence.match(r[o][0]);if(c!=null){var n=r[o][1],h=r[o][2],l=this.noRandom?0:Math.floor(Math.random()*n.length);this.noRandom&&this.lastchoice[t][o]>l||this.lastchoice[t][o]==l?(l=++this.lastchoice[t][o],l>=n.length&&(l=0,this.lastchoice[t][o]=-1)):this.lastchoice[t][o]=l;var u=n[l];if(this.debug&&alert(`match:
key: `+a.elizaKeywords[t][0]+`
rank: `+a.elizaKeywords[t][1]+`
decomp: `+r[o][0]+`
reasmb: `+u+`
memflag: `+h),u.search("^goto ","i")==0){var i=this._getRuleIndexByKey(u.substring(5));if(i>=0)return this._execRule(i)}var w=d.exec(u);if(w){for(var s="",W=u;w;){var m=c[parseInt(w[1])],f=this.postExp.exec(m);if(f){for(var v="",k=m;f;)v+=k.substring(0,f.index)+this.posts[f[1]],k=k.substring(f.index+f[0].length),f=this.postExp.exec(k);m=v+k}s+=W.substring(0,w.index)+m,W=W.substring(w.index+w[0].length),w=d.exec(W)}u=s+W}if(u=this._postTransform(u),h)this._memSave(u);else return u}}return""};g.prototype._postTransform=function(t){if(t=t.replace(/\s{2,}/g," "),t=t.replace(/\s+\./g,"."),a.elizaPostTransforms&&a.elizaPostTransforms.length)for(var e=0;e<a.elizaPostTransforms.length;e+=2)t=t.replace(a.elizaPostTransforms[e],a.elizaPostTransforms[e+1]),a.elizaPostTransforms[e].lastIndex=0;if(this.capitalizeFirstLetter){var r=/^([a-z])/,d=r.exec(t);d&&(t=d[0].toUpperCase()+t.substring(1))}return t};g.prototype._getRuleIndexByKey=function(t){for(var e=0;e<a.elizaKeywords.length;e++)if(a.elizaKeywords[e][0]==t)return e;return-1};g.prototype._memSave=function(t){this.mem.push(t),this.mem.length>this.memSize&&this.mem.shift()};g.prototype._memGet=function(){if(this.mem.length){if(this.noRandom)return this.mem.shift();for(var t=Math.floor(Math.random()*this.mem.length),e=this.mem[t],r=t+1;r<this.mem.length;r++)this.mem[r-1]=this.mem[r];return this.mem.length--,e}else return""};g.prototype.getFinal=function(){return a.elizaFinals?a.elizaFinals[Math.floor(Math.random()*a.elizaFinals.length)]:""};g.prototype.getInitial=function(){return a.elizaInitials?a.elizaInitials[Math.floor(Math.random()*a.elizaInitials.length)]:""};typeof Array.prototype.push>"u"&&(Array.prototype.push=function(t){return this[this.length]=t});typeof Array.prototype.shift>"u"&&(Array.prototype.shift=function(){if(this.length==0)return null;for(var t=this[0],e=1;e<this.length;e++)this[e-1]=this[e];return this.length--,t});var se=g;const ne=ee(se);function ie(t){const e=JSON.parse(t);return e.data&&(e.data=te(e.data)),e}function $(t){return HTMLElement.prototype.cloneNode.call(t)}function re(t,e=()=>{}){const r=async({action:o,result:c,reset:n=!0,invalidateAll:h=!0})=>{c.type==="success"&&(n&&HTMLFormElement.prototype.reset.call(t),h&&await oe()),(location.origin+location.pathname===o.origin+o.pathname||c.type==="redirect"||c.type==="error")&&ae(c)};async function d(o){var f,v,k,S,E;if(((f=o.submitter)!=null&&f.hasAttribute("formmethod")?o.submitter.formMethod:$(t).method)!=="post")return;o.preventDefault();const n=new URL((v=o.submitter)!=null&&v.hasAttribute("formaction")?o.submitter.formAction:$(t).action),h=(k=o.submitter)!=null&&k.hasAttribute("formenctype")?o.submitter.formEnctype:$(t).enctype,l=new FormData(t),u=(S=o.submitter)==null?void 0:S.getAttribute("name");u&&l.append(u,((E=o.submitter)==null?void 0:E.getAttribute("value"))??"");const i=new AbortController;let w=!1;const W=await e({action:n,cancel:()=>w=!0,controller:i,formData:l,formElement:t,submitter:o.submitter})??r;if(w)return;let m;try{const y=new Headers({accept:"application/json","x-sveltekit-action":"true"});h!=="multipart/form-data"&&y.set("Content-Type",/^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(h)?h:"application/x-www-form-urlencoded");const p=h==="multipart/form-data"?l:new URLSearchParams(l),z=await fetch(n,{method:"POST",headers:y,cache:"no-store",body:p,signal:i.signal});m=ie(await z.text()),m.type==="error"&&(m.status=z.status)}catch(y){if((y==null?void 0:y.name)==="AbortError")return;m={type:"error",error:y}}W({action:n,formData:l,formElement:t,update:y=>r({action:n,result:m,reset:y==null?void 0:y.reset,invalidateAll:y==null?void 0:y.invalidateAll}),result:m})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",d),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",d)}}}function B(t,e,r){const d=t.slice();return d[5]=e[r],d}function G(t){let e,r,d=t[5].message+"",o,c;return{c(){e=D("article"),r=D("p"),o=J(d),this.h()},l(n){e=_(n,"ARTICLE",{class:!0});var h=H(e);r=_(h,"P",{});var l=H(r);o=X(l,d),l.forEach(P),h.forEach(P),this.h()},h(){I(e,"class",c=j(t[5].user)+" svelte-a3flvn")},m(n,h){L(n,e,h),x(e,r),x(r,o)},p(n,h){h&1&&d!==(d=n[5].message+"")&&Z(o,d),h&1&&c!==(c=j(n[5].user)+" svelte-a3flvn")&&I(e,"class",c)},d(n){n&&P(e)}}}function le(t){let e,r='<source src="mp3/toujours.mp3" type="audio/mp3"/>',d,o,c,n,h,l='<img src="images/droyda.png" height="50px" width="50px"/> <h1 class="svelte-a3flvn">George Droyd</h1>',u,i,w,s,W='<span class="dot svelte-a3flvn"></span> <span class="dot svelte-a3flvn"></span> <span class="dot svelte-a3flvn"></span>',m,f,v='<input type="text" name="text" class="textBox svelte-a3flvn" minlength="1" maxlength="64" placeholder="Express your love..."/> <input type="submit" name="submit"/>',k,S,E=q(t[0]),y=[];for(let p=0;p<E.length;p+=1)y[p]=G(B(t,E,p));return{c(){e=D("audio"),e.innerHTML=r,d=R(),o=D("div"),c=D("main"),n=D("div"),h=D("div"),h.innerHTML=l,u=R(),i=D("section");for(let p=0;p<y.length;p+=1)y[p].c();w=R(),s=D("article"),s.innerHTML=W,m=R(),f=D("form"),f.innerHTML=v,this.h()},l(p){e=_(p,"AUDIO",{disableremoteplayback:!0,class:!0,"data-svelte-h":!0}),C(e)!=="svelte-1duigm4"&&(e.innerHTML=r),d=K(p),o=_(p,"DIV",{class:!0});var z=H(o);c=_(z,"MAIN",{class:!0});var b=H(c);n=_(b,"DIV",{class:!0});var A=H(n);h=_(A,"DIV",{class:!0,"data-svelte-h":!0}),C(h)!=="svelte-1rt6yg0"&&(h.innerHTML=l),u=K(A),i=_(A,"SECTION",{class:!0});var M=H(i);for(let Y=0;Y<y.length;Y+=1)y[Y].l(M);w=K(M),s=_(M,"ARTICLE",{id:!0,class:!0,"data-svelte-h":!0}),C(s)!=="svelte-27lo8h"&&(s.innerHTML=W),M.forEach(P),m=K(A),f=_(A,"FORM",{class:!0,method:!0,"data-svelte-h":!0}),C(f)!=="svelte-6pkoao"&&(f.innerHTML=v),A.forEach(P),b.forEach(P),z.forEach(P),this.h()},h(){e.controls=!0,e.autoplay=!0,e.loop="true",I(e,"disableremoteplayback",""),I(e,"class","audio svelte-a3flvn"),I(h,"class","TalkyHead svelte-a3flvn"),I(s,"id","visible"),I(s,"class","svelte-a3flvn"),I(i,"class","msgSection svelte-a3flvn"),I(f,"class","chatTalk svelte-a3flvn"),I(f,"method","post"),I(n,"class","chatHead svelte-a3flvn"),I(c,"class","svelte-a3flvn"),I(o,"class","entirewebsite svelte-a3flvn")},m(p,z){L(p,e,z),L(p,d,z),L(p,o,z),x(o,c),x(c,n),x(n,h),x(n,u),x(n,i);for(let b=0;b<y.length;b+=1)y[b]&&y[b].m(i,null);x(i,w),x(i,s),x(n,m),x(n,f),k||(S=Q(re.call(null,f,t[2])),k=!0)},p(p,[z]){if(z&1){E=q(p[0]);let b;for(b=0;b<E.length;b+=1){const A=B(p,E,b);y[b]?y[b].p(A,z):(y[b]=G(A),y[b].c(),y[b].m(i,w))}for(;b<y.length;b+=1)y[b].d(1);y.length=E.length}},i:F,o:F,d(p){p&&(P(e),P(d),P(o)),V(y,p),k=!1,S()}}}let ue="Eliza";function he(t,e,r){const d=new ne;let o=[{user:"Eliza",message:"My name is George Droyd. Shiiieeet, How can I assist you?"}],c=!1;async function n(l){if(c)return;o.push({user:"user",message:l}),r(0,o);var u=document.getElementById("visible");u.style.display="block",c=!0,await new Promise(w=>setTimeout(w,1e3+Math.random()*1e3)),c=!1,u.style.display="none";let i=d.transform(l);o.push({user:ue,message:i}),r(0,o)}return[o,n,({formElement:l,formData:u,action:i,cancel:w})=>{w();const s=u.get("text");n(s),l.reset()}]}class pe extends N{constructor(e){super(),U(this,e,he,le,O,{})}}export{pe as component};
