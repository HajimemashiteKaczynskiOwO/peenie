import{n as c,s as h}from"./scheduler.DZs670Vv.js";const n=[];function q(e,o){return{subscribe:p(e,o).subscribe}}function p(e,o=c){let r;const i=new Set;function b(t){if(h(e,t)&&(e=t,r)){const u=!n.length;for(const s of i)s[1](),n.push(s,e);if(u){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(t){b(t(e))}function _(t,u=c){const s=[t,u];return i.add(s),i.size===1&&(r=o(b,a)||c),t(e),()=>{i.delete(s),i.size===0&&r&&(r(),r=null)}}return{set:b,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_1q5r7un)==null?void 0:f.base)??"";var l;const k=((l=globalThis.__sveltekit_1q5r7un)==null?void 0:l.assets)??d;export{k as a,d as b,q as r,p as w};
