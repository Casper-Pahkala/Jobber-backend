import{V as $e}from"./VImg-1a747bb2.js";import{aS as He,aT as We,aU as ye,aV as qe,p as L,m as K,l as ge,n as W,c as A,aW as gt,t as g,N as R,am as de,ap as Z,aX as ze,aY as ht,aq as fe,aZ as bt,G as St,q as U,Y as he,T as Q,_ as be,x as je,a_ as kt,y as Se,a1 as Ye,E as ke,a4 as Ke,a5 as Ue,D as Xe,a$ as wt,ab as Et,a9 as Ge,V as ae,v as Ct,$ as Je,w as xt,b0 as Pt,aJ as At,aK as Ot,a0 as pt,a2 as Vt,B as Lt,a6 as Ze,C as Tt,b1 as Bt,aL as Ft,aM as It,a3 as Dt,W as Qe,a8 as et,b2 as Mt,g as we,r as H,at as q,M as Ee,b3 as N,J as V,b4 as Rt,b5 as Pe,b6 as le,b7 as se,b8 as Ae,an as ee,b9 as re,ba as Oe,bb as pe,b as M,I as Ve,O as Ce,bc as tt,i as nt,bd as Nt,be as _t,s as G,ai as $t,o as Ht,a as at,d as Wt,K as qt,R as zt,bf as jt,L as ot,F as Yt,z as Kt,A as Ut,aj as Xt,bg as Gt,U as Jt,X as Zt,aa as Qt,bh as en,aQ as it,av as tn,bi as nn,bj as an}from"./index-da233b0e.js";const te=new WeakMap;function on(e,n){Object.keys(n).forEach(t=>{if(He(t)){const a=We(t),o=te.get(e);if(n[t]==null)o==null||o.forEach(i=>{const[s,l]=i;s===a&&(e.removeEventListener(a,l),o.delete(i))});else if(!o||![...o].some(i=>i[0]===a&&i[1]===n[t])){e.addEventListener(a,n[t]);const i=o||new Set;i.add([a,n[t]]),te.has(e)||te.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function ln(e,n){Object.keys(n).forEach(t=>{if(He(t)){const a=We(t),o=te.get(e);o==null||o.forEach(i=>{const[s,l]=i;s===a&&(e.removeEventListener(a,l),o.delete(i))})}else e.removeAttribute(t)})}function lt(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function sn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?rn(e):xe(e))return e;e=e.parentElement}return document.scrollingElement}function oe(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(xe(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function xe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function rn(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function cn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const st=(()=>ye.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),rt=(()=>ye.reduce((e,n)=>{const t="offset"+qe(n);return e[t]={type:[String,Number],default:null},e},{}))(),ct=(()=>ye.reduce((e,n)=>{const t="order"+qe(n);return e[t]={type:[String,Number],default:null},e},{}))(),Le={col:Object.keys(st),offset:Object.keys(rt),order:Object.keys(ct)};function un(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const o=n.replace(e,"");a+=`-${o}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const dn=["auto","start","end","center","baseline","stretch"],fn=L({cols:{type:[Boolean,String,Number],default:!1},...st,offset:{type:[String,Number],default:null},...rt,order:{type:[String,Number],default:null},...ct,alignSelf:{type:String,default:null,validator:e=>dn.includes(e)},...K(),...ge()},"VCol"),ea=W()({name:"VCol",props:fn(),setup(e,n){let{slots:t}=n;const a=A(()=>{const o=[];let i;for(i in Le)Le[i].forEach(l=>{const c=e[l],u=un(i,l,c);u&&o.push(u)});const s=o.some(l=>l.startsWith("v-col-"));return o.push({"v-col":!s||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),o});return()=>{var o;return gt(e.tag,{class:[a.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),vn=L({target:Object},"v-dialog-transition"),mn=W()({name:"VDialogTransition",props:vn(),setup(e,n){let{slots:t}=n;const a={onBeforeEnter(o){o.style.pointerEvents="none",o.style.visibility="hidden"},async onEnter(o,i){var v;await new Promise(y=>requestAnimationFrame(y)),await new Promise(y=>requestAnimationFrame(y)),o.style.visibility="";const{x:s,y:l,sx:c,sy:u,speed:r}=Be(e.target,o),f=Z(o,[{transform:`translate(${s}px, ${l}px) scale(${c}, ${u})`,opacity:0},{}],{duration:225*r,easing:ht});(v=Te(o))==null||v.forEach(y=>{Z(y,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*r,easing:fe})}),f.finished.then(()=>i())},onAfterEnter(o){o.style.removeProperty("pointer-events")},onBeforeLeave(o){o.style.pointerEvents="none"},async onLeave(o,i){var v;await new Promise(y=>requestAnimationFrame(y));const{x:s,y:l,sx:c,sy:u,speed:r}=Be(e.target,o);Z(o,[{},{transform:`translate(${s}px, ${l}px) scale(${c}, ${u})`,opacity:0}],{duration:125*r,easing:bt}).finished.then(()=>i()),(v=Te(o))==null||v.forEach(y=>{Z(y,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*r,easing:fe})})},onAfterLeave(o){o.style.removeProperty("pointer-events")}};return()=>e.target?g(de,R({name:"dialog-transition"},a,{css:!1}),t):g(de,{name:"dialog-transition"},t)}});function Te(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Be(e,n){const t=e.getBoundingClientRect(),a=ze(n),[o,i]=getComputedStyle(n).transformOrigin.split(" ").map(x=>parseFloat(x)),[s,l]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=t.left+t.width/2;s==="left"||l==="left"?c-=t.width/2:(s==="right"||l==="right")&&(c+=t.width/2);let u=t.top+t.height/2;s==="top"||l==="top"?u-=t.height/2:(s==="bottom"||l==="bottom")&&(u+=t.height/2);const r=t.width/a.width,f=t.height/a.height,v=Math.max(1,r,f),y=r/v||0,h=f/v||0,m=a.width*a.height/(window.innerWidth*window.innerHeight),C=m>.12?Math.min(1.5,(m-.12)*10+1):1;return{x:c-(o+a.left),y:u-(i+a.top),sx:y,sy:h,speed:C}}const yn=W()({name:"VCardActions",props:K(),setup(e,n){let{slots:t}=n;return St({VBtn:{variant:"text"}}),U(()=>{var a;return g("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),gn=he("v-card-subtitle"),hn=he("v-card-title");const bn=L({start:Boolean,end:Boolean,icon:Q,image:String,...K(),...be(),...je(),...kt(),...ge(),...Se(),...Ye({variant:"flat"})},"VAvatar"),Fe=W()({name:"VAvatar",props:bn(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=ke(e),{colorClasses:o,colorStyles:i,variantClasses:s}=Ke(e),{densityClasses:l}=Ue(e),{roundedClasses:c}=Xe(e),{sizeClasses:u,sizeStyles:r}=wt(e);return U(()=>g(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,o.value,l.value,c.value,u.value,s.value,e.class],style:[i.value,r.value,e.style]},{default:()=>{var f;return[e.image?g($e,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?g(Et,{key:"icon",icon:e.icon},null):(f=t.default)==null?void 0:f.call(t),Ge(!1,"v-avatar")]}})),{}}}),Sn=L({appendAvatar:String,appendIcon:Q,prependAvatar:String,prependIcon:Q,subtitle:String,title:String,...K(),...be()},"VCardItem"),kn=W()({name:"VCardItem",props:Sn(),setup(e,n){let{slots:t}=n;return U(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),s=!!(i||t.append),l=!!(e.title||t.title),c=!!(e.subtitle||t.subtitle);return g("div",{class:["v-card-item",e.class],style:e.style},[o&&g("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?g(ae,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&g(Fe,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),g("div",{class:"v-card-item__content"},[l&&g(hn,{key:"title"},{default:()=>{var r;return[((r=t.title)==null?void 0:r.call(t))??e.title]}}),c&&g(gn,{key:"subtitle"},{default:()=>{var r;return[((r=t.subtitle)==null?void 0:r.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),s&&g("div",{key:"append",class:"v-card-item__append"},[t.append?g(ae,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):i&&g(Fe,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),wn=he("v-card-text"),En=L({appendAvatar:String,appendIcon:Q,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:Q,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...Ct(),...K(),...be(),...Je(),...xt(),...Pt(),...At(),...Ot(),...je(),...pt(),...ge(),...Se(),...Ye({variant:"elevated"})},"VCard"),ta=W()({name:"VCard",directives:{Ripple:Vt},props:En(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:o}=ke(e),{borderClasses:i}=Lt(e),{colorClasses:s,colorStyles:l,variantClasses:c}=Ke(e),{densityClasses:u}=Ue(e),{dimensionStyles:r}=Ze(e),{elevationClasses:f}=Tt(e),{loaderClasses:v}=Bt(e),{locationStyles:y}=Ft(e),{positionClasses:h}=It(e),{roundedClasses:m}=Xe(e),C=Dt(e,t),x=A(()=>e.link!==!1&&C.isLink.value),S=A(()=>!e.disabled&&e.link!==!1&&(e.link||C.isClickable.value));return U(()=>{const d=x.value?"a":e.tag,p=!!(a.title||e.title),I=!!(a.subtitle||e.subtitle),_=p||I,$=!!(a.append||e.appendAvatar||e.appendIcon),z=!!(a.prepend||e.prependAvatar||e.prependIcon),j=!!(a.image||e.image),B=_||z||$,P=!!(a.text||e.text);return Qe(g(d,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":S.value},o.value,i.value,s.value,u.value,f.value,v.value,h.value,m.value,c.value,e.class],style:[l.value,r.value,y.value,e.style],href:C.href.value,onClick:S.value&&C.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var w;return[j&&g("div",{key:"image",class:"v-card__image"},[a.image?g(ae,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):g($e,{key:"image-img",cover:!0,src:e.image},null)]),g(Mt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),B&&g(kn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),P&&g(wn,{key:"text"},{default:()=>{var b;return[((b=a.text)==null?void 0:b.call(a))??e.text]}}),(w=a.default)==null?void 0:w.call(a),a.actions&&g(yn,null,{default:a.actions}),Ge(S.value,"v-card")]}}),[[et("ripple"),S.value&&e.ripple]])}),{}}});function ut(){const n=we("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}function ce(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Cn(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ie(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,o=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,i=t==="top"?0:t==="bottom"?n.height:t;return ce({x:o,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,o=t==="left"?0:t==="right"?n.width:t,i=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return ce({x:o,y:i},n)}return ce({x:n.width/2,y:n.height/2},n)}const dt={static:An,connected:pn},xn=L({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in dt},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Pn(e,n){const t=H({}),a=H();q&&(Ee(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var s,l;V(()=>e.locationStrategy,i),N(()=>{a.value=void 0}),typeof e.locationStrategy=="function"?a.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:a.value=(l=dt[e.locationStrategy](n,e,t))==null?void 0:l.updateLocation}),window.addEventListener("resize",o,{passive:!0}),N(()=>{window.removeEventListener("resize",o),a.value=void 0}));function o(i){var s;(s=a.value)==null||s.call(a,i)}return{contentStyles:t,updateLocation:a}}function An(){}function On(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=ze(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function pn(e,n,t){cn(e.activatorEl.value)&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:o,preferredOrigin:i}=Rt(()=>{const h=Pe(n.location,e.isRtl.value),m=n.origin==="overlap"?h:n.origin==="auto"?le(h):Pe(n.origin,e.isRtl.value);return h.side===m.side&&h.align===se(m).align?{preferredAnchor:Ae(h),preferredOrigin:Ae(m)}:{preferredAnchor:h,preferredOrigin:m}}),[s,l,c,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(h=>A(()=>{const m=parseFloat(n[h]);return isNaN(m)?1/0:m})),r=A(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const h=n.offset.split(" ").map(parseFloat);return h.length<2&&h.push(0),h}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let f=!1;const v=new ResizeObserver(()=>{f&&y()});V([e.activatorEl,e.contentEl],(h,m)=>{let[C,x]=h,[S,d]=m;S&&v.unobserve(S),C&&v.observe(C),d&&v.unobserve(d),x&&v.observe(x)},{immediate:!0}),N(()=>{v.disconnect()});function y(){if(f=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>f=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const h=e.activatorEl.value.getBoundingClientRect(),m=On(e.contentEl.value,e.isRtl.value),C=oe(e.contentEl.value),x=12;C.length||(C.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(m.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),m.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const S=C.reduce((P,w)=>{const b=w.getBoundingClientRect(),E=new re({x:w===document.documentElement?0:b.x,y:w===document.documentElement?0:b.y,width:w.clientWidth,height:w.clientHeight});return P?new re({x:Math.max(P.left,E.left),y:Math.max(P.top,E.top),width:Math.min(P.right,E.right)-Math.max(P.left,E.left),height:Math.min(P.bottom,E.bottom)-Math.max(P.top,E.top)}):E},void 0);S.x+=x,S.y+=x,S.width-=x*2,S.height-=x*2;let d={anchor:o.value,origin:i.value};function p(P){const w=new re(m),b=Ie(P.anchor,h),E=Ie(P.origin,w);let{x:F,y:D}=Cn(b,E);switch(P.anchor.side){case"top":D-=r.value[0];break;case"bottom":D+=r.value[0];break;case"left":F-=r.value[0];break;case"right":F+=r.value[0];break}switch(P.anchor.align){case"top":D-=r.value[1];break;case"bottom":D+=r.value[1];break;case"left":F-=r.value[1];break;case"right":F+=r.value[1];break}return w.x+=F,w.y+=D,w.width=Math.min(w.width,c.value),w.height=Math.min(w.height,u.value),{overflows:pe(w,S),x:F,y:D}}let I=0,_=0;const $={x:0,y:0},z={x:!1,y:!1};let j=-1;for(;!(j++>10);){const{x:P,y:w,overflows:b}=p(d);I+=P,_+=w,m.x+=P,m.y+=w;{const E=Oe(d.anchor),F=b.x.before||b.x.after,D=b.y.before||b.y.after;let X=!1;if(["x","y"].forEach(O=>{if(O==="x"&&F&&!z.x||O==="y"&&D&&!z.y){const k={anchor:{...d.anchor},origin:{...d.origin}},T=O==="x"?E==="y"?se:le:E==="y"?le:se;k.anchor=T(k.anchor),k.origin=T(k.origin);const{overflows:Y}=p(k);(Y[O].before<=b[O].before&&Y[O].after<=b[O].after||Y[O].before+Y[O].after<(b[O].before+b[O].after)/2)&&(d=k,X=z[O]=!0)}}),X)continue}b.x.before&&(I+=b.x.before,m.x+=b.x.before),b.x.after&&(I-=b.x.after,m.x-=b.x.after),b.y.before&&(_+=b.y.before,m.y+=b.y.before),b.y.after&&(_-=b.y.after,m.y-=b.y.after);{const E=pe(m,S);$.x=S.width-E.x.before-E.x.after,$.y=S.height-E.y.before-E.y.after,I+=E.x.before,m.x+=E.x.before,_+=E.y.before,m.y+=E.y.before}break}const B=Oe(d.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${d.anchor.side} ${d.anchor.align}`,transformOrigin:`${d.origin.side} ${d.origin.align}`,top:M(ue(_)),left:e.isRtl.value?void 0:M(ue(I)),right:e.isRtl.value?M(ue(-I)):void 0,minWidth:M(B==="y"?Math.min(s.value,h.width):s.value),maxWidth:M(De(Ve($.x,s.value===1/0?0:s.value,c.value))),maxHeight:M(De(Ve($.y,l.value===1/0?0:l.value,u.value)))}),{available:$,contentBox:m}}return V(()=>[o.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>y()),ee(()=>{const h=y();if(!h)return;const{available:m,contentBox:C}=h;C.height>m.y&&requestAnimationFrame(()=>{y(),requestAnimationFrame(()=>{y()})})}),{updateLocation:y}}function ue(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function De(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ve=!0;const ie=[];function Vn(e){!ve||ie.length?(ie.push(e),me()):(ve=!1,e(),me())}let Me=-1;function me(){cancelAnimationFrame(Me),Me=requestAnimationFrame(()=>{const e=ie.shift();e&&e(),ie.length?me():ve=!0})}const ne={none:null,close:Bn,block:Fn,reposition:In},Ln=L({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ne}},"VOverlay-scroll-strategies");function Tn(e,n){if(!q)return;let t;Ce(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=tt(),await ee(),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=ne[e.scrollStrategy])==null||a.call(ne,n,e,t)}))}),N(()=>{t==null||t.stop()})}function Bn(e){function n(t){e.isActive.value=!1}ft(e.activatorEl.value??e.contentEl.value,n)}function Fn(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,a=[...new Set([...oe(e.activatorEl.value,n.contained?t:void 0),...oe(e.contentEl.value,n.contained?t:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,i=(l=>xe(l)&&l)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((l,c)=>{l.style.setProperty("--v-body-scroll-x",M(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",M(-l.scrollTop)),l!==document.documentElement&&l.style.setProperty("--v-scrollbar-offset",M(o)),l.classList.add("v-overlay-scroll-blocked")}),N(()=>{a.forEach((l,c)=>{const u=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),r=parseFloat(l.style.getPropertyValue("--v-body-scroll-y"));l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-u,l.scrollTop=-r}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function In(e,n,t){let a=!1,o=-1,i=-1;function s(l){Vn(()=>{var r,f;const c=performance.now();(f=(r=e.updateLocation).value)==null||f.call(r,l),a=(performance.now()-c)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?l=>l():requestIdleCallback)(()=>{t.run(()=>{ft(e.activatorEl.value??e.contentEl.value,l=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{s(l)})})):s(l)})})}),N(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(o)})}function ft(e,n){const t=[document,...oe(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),N(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}const Dn=Symbol.for("vuetify:v-menu"),Mn=L({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Rn(e,n){const t={},a=o=>()=>{if(!q)return Promise.resolve(!0);const i=o==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(s=>{const l=parseInt(e[o]??0,10);t[o]=window.setTimeout(()=>{n==null||n(i),s(i)},l)})};return{runCloseDelay:a("closeDelay"),runOpenDelay:a("openDelay")}}const Nn=L({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Mn()},"VOverlay-activator");function _n(e,n){let{isActive:t,isTop:a}=n;const o=H();let i=!1,s=!1,l=!0;const c=A(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),u=A(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:r,runCloseDelay:f}=Rn(e,d=>{d===(e.openOnHover&&i||c.value&&s)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==d&&(l=!0),t.value=d)}),v={onClick:d=>{d.stopPropagation(),o.value=d.currentTarget||d.target,t.value=!t.value},onMouseenter:d=>{var p;(p=d.sourceCapabilities)!=null&&p.firesTouchEvents||(i=!0,o.value=d.currentTarget||d.target,r())},onMouseleave:d=>{i=!1,f()},onFocus:d=>{_t(d.target,":focus-visible")!==!1&&(s=!0,d.stopPropagation(),o.value=d.currentTarget||d.target,r())},onBlur:d=>{s=!1,d.stopPropagation(),f()}},y=A(()=>{const d={};return u.value&&(d.onClick=v.onClick),e.openOnHover&&(d.onMouseenter=v.onMouseenter,d.onMouseleave=v.onMouseleave),c.value&&(d.onFocus=v.onFocus,d.onBlur=v.onBlur),d}),h=A(()=>{const d={};if(e.openOnHover&&(d.onMouseenter=()=>{i=!0,r()},d.onMouseleave=()=>{i=!1,f()}),c.value&&(d.onFocusin=()=>{s=!0,r()},d.onFocusout=()=>{s=!1,f()}),e.closeOnContentClick){const p=nt(Dn,null);d.onClick=()=>{t.value=!1,p==null||p.closeParents()}}return d}),m=A(()=>{const d={};return e.openOnHover&&(d.onMouseenter=()=>{l&&(i=!0,l=!1,r())},d.onMouseleave=()=>{i=!1,f()}),d});V(a,d=>{d&&(e.openOnHover&&!i&&(!c.value||!s)||c.value&&!s&&(!e.openOnHover||!i))&&(t.value=!1)});const C=H();Ce(()=>{C.value&&ee(()=>{o.value=Nt(C.value)})});const x=we("useActivator");let S;return V(()=>!!e.activator,d=>{d&&q?(S=tt(),S.run(()=>{$n(e,x,{activatorEl:o,activatorEvents:y})})):S&&S.stop()},{flush:"post",immediate:!0}),N(()=>{S==null||S.stop()}),{activatorEl:o,activatorRef:C,activatorEvents:y,contentEvents:h,scrimEvents:m}}function $n(e,n,t){let{activatorEl:a,activatorEvents:o}=t;V(()=>e.activator,(c,u)=>{if(u&&c!==u){const r=l(u);r&&s(r)}c&&ee(()=>i())},{immediate:!0}),V(()=>e.activatorProps,()=>{i()}),N(()=>{s()});function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&on(c,R(o.value,u))}function s(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&ln(c,R(o.value,u))}function l(){var r,f;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,u;if(c)if(c==="parent"){let v=(f=(r=n==null?void 0:n.proxy)==null?void 0:r.$el)==null?void 0:f.parentNode;for(;v!=null&&v.hasAttribute("data-no-activator");)v=v.parentNode;u=v}else typeof c=="string"?u=document.querySelector(c):"$el"in c?u=c.$el:u=c;return a.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:null,a.value}}function Hn(){if(!q)return G(!1);const{ssr:e}=$t();if(e){const n=G(!1);return Ht(()=>{n.value=!0}),n}else return G(!0)}const Wn=L({eager:Boolean},"lazy");function qn(e,n){const t=G(!1),a=A(()=>t.value||e.eager||n.value);V(n,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}const Re=Symbol.for("vuetify:stack"),J=at([]);function zn(e,n,t){const a=we("useStack"),o=!t,i=nt(Re,void 0),s=at({activeChildren:new Set});Wt(Re,s);const l=G(+n.value);Ee(e,()=>{var f;const r=(f=J.at(-1))==null?void 0:f[1];l.value=r?r+10:+n.value,o&&J.push([a.uid,l.value]),i==null||i.activeChildren.add(a.uid),N(()=>{if(o){const v=zt(J).findIndex(y=>y[0]===a.uid);J.splice(v,1)}i==null||i.activeChildren.delete(a.uid)})});const c=G(!0);o&&Ce(()=>{var f;const r=((f=J.at(-1))==null?void 0:f[0])===a.uid;setTimeout(()=>c.value=r)});const u=A(()=>!s.activeChildren.size);return{globalTop:qt(c),localTop:u,stackStyles:A(()=>({zIndex:l.value}))}}function jn(e){return{teleportTarget:A(()=>{const t=e.value;if(t===!0||!q)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let o=a.querySelector(":scope > .v-overlay-container");return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function Yn(){return!0}function vt(e,n,t){if(!e||mt(e,t)===!1)return!1;const a=lt(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(i=>i==null?void 0:i.contains(e.target))}function mt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Yn)(e)}function Kn(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&vt(e,n,t)&&setTimeout(()=>{mt(e,t)&&a&&a(e)},0)}function Ne(e,n){const t=lt(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Un={mounted(e,n){const t=o=>Kn(o,e,n),a=o=>{e._clickOutside.lastMousedownWasOutside=vt(o,e,n)};Ne(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},unmounted(e,n){e._clickOutside&&(Ne(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Xn(e){const{modelValue:n,color:t,...a}=e;return g(de,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&g("div",R({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const yt=L({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Nn(),...K(),...Je(),...Wn(),...xn(),...Ln(),...Se(),...jt()},"VOverlay"),_e=W()({name:"VOverlay",directives:{ClickOutside:Un},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...yt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:o}=n;const i=ot(e,"modelValue"),s=A({get:()=>i.value,set:k=>{k&&e.disabled||(i.value=k)}}),{teleportTarget:l}=jn(A(()=>e.attach||e.contained)),{themeClasses:c}=ke(e),{rtlClasses:u,isRtl:r}=Yt(),{hasContent:f,onAfterLeave:v}=qn(e,s),y=Kt(A(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:h,localTop:m,stackStyles:C}=zn(s,Ut(e,"zIndex"),e._disableGlobalStack),{activatorEl:x,activatorRef:S,activatorEvents:d,contentEvents:p,scrimEvents:I}=_n(e,{isActive:s,isTop:m}),{dimensionStyles:_}=Ze(e),$=Hn(),{scopeId:z}=ut();V(()=>e.disabled,k=>{k&&(s.value=!1)});const j=H(),B=H(),{contentStyles:P,updateLocation:w}=Pn(e,{isRtl:r,contentEl:B,activatorEl:x,isActive:s});Tn(e,{root:j,contentEl:B,activatorEl:x,isActive:s,updateLocation:w});function b(k){o("click:outside",k),e.persistent?O():s.value=!1}function E(){return s.value&&h.value}q&&V(s,k=>{k?window.addEventListener("keydown",F):window.removeEventListener("keydown",F)},{immediate:!0});function F(k){var T,Y;k.key==="Escape"&&h.value&&(e.persistent?O():(s.value=!1,(T=B.value)!=null&&T.contains(document.activeElement)&&((Y=x.value)==null||Y.focus())))}const D=Xt();Ee(()=>e.closeOnBack,()=>{en(D,k=>{h.value&&s.value?(k(!1),e.persistent?O():s.value=!1):k()})});const X=H();V(()=>s.value&&(e.absolute||e.contained)&&l.value==null,k=>{if(k){const T=sn(j.value);T&&T!==document.scrollingElement&&(X.value=T.scrollTop)}});function O(){e.noClickAnimation||B.value&&Z(B.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:fe})}return U(()=>{var k;return g(Qt,null,[(k=t.activator)==null?void 0:k.call(t,{isActive:s.value,props:R({ref:S},d.value,e.activatorProps)}),$.value&&f.value&&g(Gt,{disabled:!l.value,to:l.value},{default:()=>[g("div",R({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},c.value,u.value,e.class],style:[C.value,{top:M(X.value)},e.style],ref:j},z,a),[g(Xn,R({color:y,modelValue:s.value&&!!e.scrim},I.value),null),g(Jt,{appear:!0,persisted:!0,transition:e.transition,target:x.value,onAfterLeave:()=>{v(),o("afterLeave")}},{default:()=>{var T;return[Qe(g("div",R({ref:B,class:["v-overlay__content",e.contentClass],style:[_.value,P.value]},p.value,e.contentProps),[(T=t.default)==null?void 0:T.call(t,{isActive:s})]),[[Zt,s.value],[et("click-outside"),{handler:b,closeConditional:E,include:()=>[x.value]}]])]}})])]})])}),{activatorEl:x,animateClick:O,contentEl:B,globalTop:h,localTop:m,updateLocation:w}}}),Gn=L({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...yt({origin:"center center",scrollStrategy:"block",transition:{component:mn},zIndex:2400})},"VDialog"),na=W()({name:"VDialog",props:Gn(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=ot(e,"modelValue"),{scopeId:o}=ut(),i=H();function s(c){var f,v;const u=c.relatedTarget,r=c.target;if(u!==r&&((f=i.value)!=null&&f.contentEl)&&((v=i.value)!=null&&v.globalTop)&&![document,i.value.contentEl].includes(r)&&!i.value.contentEl.contains(r)){const y=tn(i.value.contentEl);if(!y.length)return;const h=y[0],m=y[y.length-1];u===h?m.focus():h.focus()}}q&&V(()=>a.value&&e.retainFocus,c=>{c?document.addEventListener("focusin",s):document.removeEventListener("focusin",s)},{immediate:!0}),V(a,async c=>{var u,r;await ee(),c?(u=i.value.contentEl)==null||u.focus({preventScroll:!0}):(r=i.value.activatorEl)==null||r.focus({preventScroll:!0})});const l=A(()=>R({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps));return U(()=>{const[c]=_e.filterProps(e);return g(_e,R({ref:i,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},c,{modelValue:a.value,"onUpdate:modelValue":u=>a.value=u,"aria-modal":"true",activatorProps:l.value,role:"dialog"},o),{activator:t.activator,default:function(){for(var u=arguments.length,r=new Array(u),f=0;f<u;f++)r[f]=arguments[f];return g(ae,{root:"VDialog"},{default:()=>{var v;return[(v=t.default)==null?void 0:v.call(t,...r)]}})}})}),it({},i)}}),Jn=L({...K(),...nn()},"VForm"),aa=W()({name:"VForm",props:Jn(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,n){let{slots:t,emit:a}=n;const o=an(e),i=H();function s(c){c.preventDefault(),o.reset()}function l(c){const u=c,r=o.validate();u.then=r.then.bind(r),u.catch=r.catch.bind(r),u.finally=r.finally.bind(r),a("submit",u),u.defaultPrevented||r.then(f=>{var y;let{valid:v}=f;v&&((y=i.value)==null||y.submit())}),u.preventDefault()}return U(()=>{var c;return g("form",{ref:i,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:s,onSubmit:l},[(c=t.default)==null?void 0:c.call(t,o)])}),it(o,i)}});export{Fe as V,ta as a,hn as b,wn as c,aa as d,ea as e,na as f,_e as g,Mn as h,Rn as i,kn as j,yn as k,yt as m,ut as u};
