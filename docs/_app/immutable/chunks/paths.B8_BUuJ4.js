import{n as c,s as d}from"./scheduler.C7I-Luai.js";const n=[];function q(e,o){return{subscribe:g(e,o).subscribe}}function g(e,o=c){let i;const r=new Set;function b(t){if(d(e,t)&&(e=t,i)){const u=!n.length;for(const s of r)s[1](),n.push(s,e);if(u){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(t){b(t(e))}function _(t,u=c){const s=[t,u];return r.add(s),r.size===1&&(i=o(b,a)||c),t(e),()=>{r.delete(s),r.size===0&&i&&(i(),i=null)}}return{set:b,update:a,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_1djgun2)==null?void 0:f.base)??"";var l;const j=((l=globalThis.__sveltekit_1djgun2)==null?void 0:l.assets)??h;export{j as a,h as b,q as r,g as w};
