import{O as m,N as O,J as V,K as D,P as y,L as b,M as N,Q as H,c as l,R as I,S as Y,T as C,U as M,V as j,W as k,H as P,a as W,p as $,h as w,B,e as J,j as K,n as E,k as Q,C as U,X,m as q,Y as z}from"./runtime.BNWgMn2m.js";import{a as F,r as S,b as G,c as h}from"./svelte-head.B0RnvJk0.js";import{b as Z}from"./disclose-version.QTl-9UNe.js";const x=["touchstart","touchmove"];function ee(e){return x.includes(e)}function ie(e,s){var t=s==null?"":typeof s=="object"?s+"":s;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function se(e,s){return A(e,s)}function ue(e,s){m(),s.intro=s.intro??!1;const t=s.target,r=w,o=l;try{for(var n=O(t);n&&(n.nodeType!==8||n.data!==V);)n=D(n);if(!n)throw y;b(!0),N(n),H();const f=A(e,{...s,anchor:n});if(l===null||l.nodeType!==8||l.data!==I)throw Y(),y;return b(!1),f}catch(f){if(f===y)return s.recover===!1&&C(),m(),M(t),b(!1),se(e,s);throw f}finally{b(r),N(o),G()}}const d=new Map;function A(e,{target:s,anchor:t,props:r={},events:o,context:n,intro:f=!0}){m();var g=new Set,p=u=>{for(var a=0;a<u.length;a++){var i=u[a];if(!g.has(i)){g.add(i);var c=ee(i);s.addEventListener(i,h,{passive:c});var R=d.get(i);R===void 0?(document.addEventListener(i,h,{passive:c}),d.set(i,1)):d.set(i,R+1)}}};p(j(F)),S.add(p);var _=void 0,L=k(()=>{var u=t??s.appendChild(P());return W(()=>{if(n){$({});var a=K;a.c=n}o&&(r.$$events=o),w&&Z(u,null),_=e(u,r)||{},w&&(B.nodes_end=l),n&&J()}),()=>{var c;for(var a of g){s.removeEventListener(a,h);var i=d.get(a);--i===0?(document.removeEventListener(a,h),d.delete(a)):d.set(a,i)}S.delete(p),T.delete(_),u!==t&&((c=u.parentNode)==null||c.removeChild(u))}});return T.set(_,L),_}let T=new WeakMap;function oe(e){const s=T.get(e);s&&s()}function re(e,s,t){if(e==null)return s(void 0),E;const r=Q(()=>e.subscribe(s,t));return r.unsubscribe?()=>r.unsubscribe():r}let v=!1;function de(e,s,t){const r=t[s]??(t[s]={store:null,source:X(void 0),unsubscribe:E});if(r.store!==e)if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=E;else{var o=!0;r.unsubscribe=re(e,n=>{o?r.source.v=n:z(r.source,n)}),o=!1}return q(r.source)}function fe(){const e={};return U(()=>{for(var s in e)e[s].unsubscribe()}),e}function ce(e){var s=v;try{return v=!1,[e(),v]}finally{v=s}}export{ie as a,de as b,ce as c,ue as h,se as m,fe as s,oe as u};
