import{y as f,z as _,A as x,B as A,C,D as F,F as H,G as N,H as O,b as q,I,h as p,J as M,K as b,L as T,M as E,c as k,N as R}from"./runtime.BNWgMn2m.js";function W(a){var e=x,s=A;f(null),_(null);try{return a()}finally{f(e),_(s)}}const J=new Set,K=new Set;function m(a,e,s,i){function n(r){if(i.capture||z.call(e,r),!r.cancelBubble)return W(()=>s.call(this,r))}return a.startsWith("pointer")||a.startsWith("touch")||a==="wheel"?F(()=>{e.addEventListener(a,n,i)}):e.addEventListener(a,n,i),n}function P(a,e,s,i,n){var r={capture:i,passive:n},l=m(a,e,s,r);(e===document.body||e===window||e===document)&&C(()=>{e.removeEventListener(a,l,r)})}function z(a){var w;var e=this,s=e.ownerDocument,i=a.type,n=((w=a.composedPath)==null?void 0:w.call(a))||[],r=n[0]||a.target,l=0,y=a.__root;if(y){var d=n.indexOf(y);if(d!==-1&&(e===document||e===window)){a.__root=e;return}var v=n.indexOf(e);if(v===-1)return;d<=v&&(l=d)}if(r=n[l]||a.target,r!==e){H(a,"currentTarget",{configurable:!0,get(){return r||s}});var D=x,L=A;f(null),_(null);try{for(var c,g=[];r!==null;){var h=r.assignedSlot||r.parentNode||r.host||null;try{var o=r["__"+i];if(o!==void 0&&!r.disabled)if(N(o)){var[S,...B]=o;S.apply(r,[a,...B])}else o.call(r,a)}catch(u){c?g.push(u):c=u}if(a.cancelBubble||h===e||h===null)break;r=h}if(c){for(let u of g)queueMicrotask(()=>{throw u});throw c}}finally{a.__root=e,delete a.currentTarget,f(D),_(L)}}}let t;function Y(){t=void 0}function j(a){let e=null,s=p;var i;if(p){for(e=k,t===void 0&&(t=R(document.head));t!==null&&(t.nodeType!==8||t.data!==M);)t=b(t);t===null?T(!1):t=E(b(t))}p||(i=document.head.appendChild(O()));try{q(()=>a(i),I)}finally{s&&(T(!0),t=k,E(e))}}export{J as a,Y as b,z as c,P as e,j as h,K as r};
