import{s as M,o as Ee,c as y,aK as Ke,i as R,d as H,aL as _,r as P,p as I,K as W,k as ce,g as Ue,e as qe,aM as Je,a1 as F,m as x,l as N,n as B,A as k,q as T,t as d,V as X,aN as We,H as Xe,aO as de,aP as ze,an as ve,aQ as ae,v as fe,a8 as me,ao as ye,w as ge,x as pe,aR as Qe,y as he,ar as Se,aS as Ye,aT as Ze,J as et,E as be,B as Ce,as as tt,a9 as ke,at as Ve,C as Pe,D as we,aU as nt,aV as at,ax as lt,X as le,a6 as se,_ as st,M as ie,aW as it,aX as w,aY as Ie,z as rt,G as ot,aZ as ut,a_ as ct,a$ as dt,aJ as vt}from"./index-624479a9.js";import{d as re}from"./VCard-23dcc96c.js";import{V as ft}from"./VDivider-bf36d72e.js";import{c as mt,d as yt}from"./VDialog-84372a38.js";function gt(){const e=M(!1);return Ee(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:y(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ke(e)}}const z=Symbol.for("vuetify:list");function Ae(){const e=R(z,{hasPrepend:M(!1),updateHasPrepend:()=>null}),l={hasPrepend:M(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return H(z,l),e}function Le(){return R(z,null)}const pt={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){const a=new Set;a.add(l);let i=s.get(l);for(;i!=null;)a.add(i),i=s.get(i);return a}else return n.delete(l),n},select:()=>null},Be={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){let a=s.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=s.get(a);return n}else n.delete(l);return n},select:()=>null},ht={open:Be.open,select:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(!t)return n;const a=[];let i=s.get(l);for(;i!=null;)a.push(i),i=s.get(i);return new Set(a)}},Y=e=>{const l={select:t=>{let{id:n,value:s,selected:a}=t;if(n=_(n),e&&!s){const i=Array.from(a.entries()).reduce((r,g)=>{let[f,m]=g;return m==="on"?[...r,f]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,s?"on":"off"),a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:t=>{const n=[];for(const[s,a]of t.entries())a==="on"&&n.push(s);return n}};return l},Oe=e=>{const l=Y(e);return{select:n=>{let{selected:s,id:a,...i}=n;a=_(a);const r=s.has(a)?new Map([[a,s.get(a)]]):new Map;return l.select({...i,id:a,selected:r})},in:(n,s,a)=>{let i=new Map;return n!=null&&n.length&&(i=l.in(n.slice(0,1),s,a)),i},out:(n,s,a)=>l.out(n,s,a)}},St=e=>{const l=Y(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=_(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},bt=e=>{const l=Oe(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=_(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},Ct=e=>{const l={select:t=>{let{id:n,value:s,selected:a,children:i,parents:r}=t;n=_(n);const g=new Map(a),f=[n];for(;f.length;){const o=f.shift();a.set(o,s?"on":"off"),i.has(o)&&f.push(...i.get(o))}let m=r.get(n);for(;m;){const o=i.get(m),u=o.every(v=>a.get(v)==="on"),c=o.every(v=>!a.has(v)||a.get(v)==="off");a.set(m,u?"on":c?"off":"indeterminate"),m=r.get(m)}return e&&!s&&Array.from(a.entries()).reduce((u,c)=>{let[v,p]=c;return p==="on"?[...u,v]:u},[]).length===0?g:a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:(t,n)=>{const s=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&s.push(a);return s}};return l},D=Symbol.for("vuetify:nested"),Fe={id:M(),root:{register:()=>null,unregister:()=>null,parents:P(new Map),children:P(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:P(new Set),selected:P(new Map),selectedValues:P([])}},kt=I({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),Vt=e=>{let l=!1;const t=P(new Map),n=P(new Map),s=W(e,"opened",e.opened,o=>new Set(o),o=>[...o.values()]),a=y(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return bt(e.mandatory);case"leaf":return St(e.mandatory);case"independent":return Y(e.mandatory);case"single-independent":return Oe(e.mandatory);case"classic":default:return Ct(e.mandatory)}}),i=y(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ht;case"single":return pt;case"multiple":default:return Be}}),r=W(e,"selected",e.selected,o=>a.value.in(o,t.value,n.value),o=>a.value.out(o,t.value,n.value));ce(()=>{l=!0});function g(o){const u=[];let c=o;for(;c!=null;)u.unshift(c),c=n.value.get(c);return u}const f=Ue("nested"),m={id:M(),root:{opened:s,selected:r,selectedValues:y(()=>{const o=[];for(const[u,c]of r.value.entries())c==="on"&&o.push(u);return o}),register:(o,u,c)=>{u&&o!==u&&n.value.set(o,u),c&&t.value.set(o,[]),u!=null&&t.value.set(u,[...t.value.get(u)||[],o])},unregister:o=>{if(l)return;t.value.delete(o);const u=n.value.get(o);if(u){const c=t.value.get(u)??[];t.value.set(u,c.filter(v=>v!==o))}n.value.delete(o),s.value.delete(o)},open:(o,u,c)=>{f.emit("click:open",{id:o,value:u,path:g(o),event:c});const v=i.value.open({id:o,value:u,opened:new Set(s.value),children:t.value,parents:n.value,event:c});v&&(s.value=v)},openOnSelect:(o,u,c)=>{const v=i.value.select({id:o,value:u,selected:new Map(r.value),opened:new Set(s.value),children:t.value,parents:n.value,event:c});v&&(s.value=v)},select:(o,u,c)=>{f.emit("click:select",{id:o,value:u,path:g(o),event:c});const v=a.value.select({id:o,value:u,selected:new Map(r.value),children:t.value,parents:n.value,event:c});v&&(r.value=v),m.root.openOnSelect(o,u,c)},children:t,parents:n}};return H(D,m),m.root},Me=(e,l)=>{const t=R(D,Fe),n=Symbol(qe()),s=y(()=>e.value!==void 0?e.value:n),a={...t,id:s,open:(i,r)=>t.root.open(s.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(s.value,i,r),isOpen:y(()=>t.root.opened.value.has(s.value)),parent:y(()=>t.root.parents.value.get(s.value)),select:(i,r)=>t.root.select(s.value,i,r),isSelected:y(()=>t.root.selected.value.get(_(s.value))==="on"),isIndeterminate:y(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:y(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),ce(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&H(D,a),a},Pt=()=>{const e=R(D,Fe);H(D,{...e,isGroupActivator:!0})},wt=Je({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return Pt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),It=I({activeColor:String,baseColor:String,color:String,collapseIcon:{type:F,default:"$collapse"},expandIcon:{type:F,default:"$expand"},prependIcon:F,appendIcon:F,fluid:Boolean,subgroup:Boolean,title:String,value:null,...x(),...N()},"VListGroup"),oe=B()({name:"VListGroup",props:It(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:s,id:a}=Me(k(e,"value"),!0),i=y(()=>`v-list-group--id-${String(a.value)}`),r=Le(),{isBooted:g}=gt();function f(c){s(!n.value,c)}const m=y(()=>({onClick:f,class:"v-list-group__header",id:i.value})),o=y(()=>n.value?e.collapseIcon:e.expandIcon),u=y(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&o.value,appendIcon:e.appendIcon||!e.subgroup&&o.value,title:e.title,value:e.value}}));return T(()=>d(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&d(X,{defaults:u.value},{default:()=>[d(wt,null,{default:()=>[t.activator({props:m.value,isOpen:n.value})]})]}),d(We,{transition:{component:Xe},disabled:!g.value},{default:()=>{var c;return[de(d("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(c=t.default)==null?void 0:c.call(t)]),[[ze,n.value]])]}})]})),{}}});const At=ve("v-list-item-subtitle"),Lt=ve("v-list-item-title"),Bt=I({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:F,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:F,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:ae(),onClickOnce:ae(),...fe(),...x(),...me(),...ye(),...ge(),...pe(),...Qe(),...N(),...he(),...Se({variant:"text"})},"VListItem"),ue=B()({name:"VListItem",directives:{Ripple:Ye},props:Bt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:s}=l;const a=Ze(e,t),i=y(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:g,isIndeterminate:f,isGroupActivator:m,root:o,parent:u,openOnSelect:c}=Me(i,!1),v=Le(),p=y(()=>{var h;return e.active!==!1&&(e.active||((h=a.isActive)==null?void 0:h.value)||g.value)}),S=y(()=>e.link!==!1&&a.isLink.value),C=y(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!v)),O=y(()=>e.rounded||e.nav),L=y(()=>e.color??e.activeColor),$=y(()=>({color:p.value?L.value??e.baseColor:e.baseColor,variant:e.variant}));et(()=>{var h;return(h=a.isActive)==null?void 0:h.value},h=>{h&&u.value!=null&&o.open(u.value,!0),h&&c(h)},{immediate:!0});const{themeClasses:E}=be(e),{borderClasses:K}=Ce(e),{colorClasses:U,colorStyles:A,variantClasses:b}=tt($),{densityClasses:G}=ke(e),{dimensionStyles:Te}=Ve(e),{elevationClasses:Ge}=Pe(e),{roundedClasses:je}=we(O),Re=y(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),q=y(()=>({isActive:p.value,select:r,isSelected:g.value,isIndeterminate:f.value}));function Z(h){var j;s("click",h),!(m||!C.value)&&((j=a.navigate)==null||j.call(a,h),e.value!=null&&r(!g.value,h))}function He(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),Z(h))}return T(()=>{const h=S.value?"a":e.tag,j=n.title||e.title,Ne=n.subtitle||e.subtitle,ee=!!(e.appendAvatar||e.appendIcon),$e=!!(ee||n.append),te=!!(e.prependAvatar||e.prependIcon),J=!!(te||n.prepend);return v==null||v.updateHasPrepend(J),e.activeColor&&nt("active-color",["color","base-color"]),de(d(h,{class:["v-list-item",{"v-list-item--active":p.value,"v-list-item--disabled":e.disabled,"v-list-item--link":C.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!J&&(v==null?void 0:v.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&p.value},E.value,K.value,U.value,G.value,Ge.value,Re.value,je.value,b.value,e.class],style:[A.value,Te.value,e.style],href:a.href.value,tabindex:C.value?v?-2:0:void 0,onClick:Z,onKeydown:C.value&&!S.value&&He},{default:()=>{var ne;return[lt(C.value||p.value,"v-list-item"),J&&d("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?d(X,{key:"prepend-defaults",disabled:!te,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var V;return[(V=n.prepend)==null?void 0:V.call(n,q.value)]}}):d(le,null,[e.prependAvatar&&d(re,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(se,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),d("div",{class:"v-list-item__spacer"},null)]),d("div",{class:"v-list-item__content","data-no-activator":""},[j&&d(Lt,{key:"title"},{default:()=>{var V;return[((V=n.title)==null?void 0:V.call(n,{title:e.title}))??e.title]}}),Ne&&d(At,{key:"subtitle"},{default:()=>{var V;return[((V=n.subtitle)==null?void 0:V.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ne=n.default)==null?void 0:ne.call(n,q.value)]),$e&&d("div",{key:"append",class:"v-list-item__append"},[n.append?d(X,{key:"append-defaults",disabled:!ee,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var V;return[(V=n.append)==null?void 0:V.call(n,q.value)]}}):d(le,null,[e.appendIcon&&d(se,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(re,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),d("div",{class:"v-list-item__spacer"},null)])]}}),[[at("ripple"),C.value&&e.ripple]])}),{}}}),Ot=I({color:String,inset:Boolean,sticky:Boolean,title:String,...x(),...N()},"VListSubheader"),Ft=B()({name:"VListSubheader",props:Ot(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:s}=st(k(e,"color"));return T(()=>{const a=!!(t.default||e.title);return d(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[a&&d("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),Mt=I({items:Array,returnObject:Boolean},"VListChildren"),_e=B()({name:"VListChildren",props:Mt(),setup(e,l){let{slots:t}=l;return Ae(),()=>{var n,s;return((n=t.default)==null?void 0:n.call(t))??((s=e.items)==null?void 0:s.map(a=>{var c,v;let{children:i,props:r,type:g,raw:f}=a;if(g==="divider")return((c=t.divider)==null?void 0:c.call(t,{props:r}))??d(ft,r,null);if(g==="subheader")return((v=t.subheader)==null?void 0:v.call(t,{props:r}))??d(Ft,r,null);const m={subtitle:t.subtitle?p=>{var S;return(S=t.subtitle)==null?void 0:S.call(t,{...p,item:f})}:void 0,prepend:t.prepend?p=>{var S;return(S=t.prepend)==null?void 0:S.call(t,{...p,item:f})}:void 0,append:t.append?p=>{var S;return(S=t.append)==null?void 0:S.call(t,{...p,item:f})}:void 0,title:t.title?p=>{var S;return(S=t.title)==null?void 0:S.call(t,{...p,item:f})}:void 0},[o,u]=oe.filterProps(r);return i?d(oe,ie({value:r==null?void 0:r.value},o),{activator:p=>{let{props:S}=p;const C={...r,...S,value:e.returnObject?f:r.value};return t.header?t.header({props:C}):d(ue,C,m)},default:()=>d(_e,{items:i},t)}):t.item?t.item({props:r}):d(ue,ie(r,{value:e.returnObject?f:r.value}),m)}))}}}),_t=I({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:it}},"list-items");function Q(e,l){const t=w(l,e.itemTitle,l),n=w(l,e.itemValue,t),s=w(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?Ie(l,["children"])[1]:l:void 0:w(l,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?De(e,s):void 0,raw:l}}function De(e,l){const t=[];for(const n of l)t.push(Q(e,n));return t}function Kt(e){const l=y(()=>De(e,e.items)),t=y(()=>l.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(i=>i!==null)),a.map(i=>e.returnObject&&typeof i=="string"?Q(e,i):l.value.find(r=>e.valueComparator(i,r.value))||Q(e,i))}function s(a){return e.returnObject?a.map(i=>{let{raw:r}=i;return r}):a.map(i=>{let{value:r}=i;return r})}return{items:l,transformIn:n,transformOut:s}}function Dt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function xt(e,l){const t=w(l,e.itemType,"item"),n=Dt(l)?l:w(l,e.itemTitle),s=w(l,e.itemValue,void 0),a=w(l,e.itemChildren),i=e.itemProps===!0?Ie(l,["children"])[1]:w(l,e.itemProps),r={title:n,value:s,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?xe(e,a):void 0,raw:l}}function xe(e,l){const t=[];for(const n of l)t.push(xt(e,n));return t}function Tt(e){return{items:y(()=>xe(e,e.items))}}const Gt=I({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...kt({selectStrategy:"single-leaf",openStrategy:"list"}),...fe(),...x(),...me(),...ye(),...ge(),itemType:{type:String,default:"type"},..._t(),...pe(),...N(),...he(),...Se({variant:"text"})},"VList"),Ut=B()({name:"VList",props:Gt(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=Tt(e),{themeClasses:s}=be(e),{backgroundColorClasses:a,backgroundColorStyles:i}=rt(k(e,"bgColor")),{borderClasses:r}=Ce(e),{densityClasses:g}=ke(e),{dimensionStyles:f}=Ve(e),{elevationClasses:m}=Pe(e),{roundedClasses:o}=we(e),{open:u,select:c}=Vt(e),v=y(()=>e.lines?`v-list--${e.lines}-line`:void 0),p=k(e,"activeColor"),S=k(e,"baseColor"),C=k(e,"color");Ae(),ot({VListGroup:{activeColor:p,baseColor:S,color:C},VListItem:{activeClass:k(e,"activeClass"),activeColor:p,baseColor:S,color:C,density:k(e,"density"),disabled:k(e,"disabled"),lines:k(e,"lines"),nav:k(e,"nav"),variant:k(e,"variant")}});const O=M(!1),L=P();function $(b){O.value=!0}function E(b){O.value=!1}function K(b){var G;!O.value&&!(b.relatedTarget&&((G=L.value)!=null&&G.contains(b.relatedTarget)))&&A()}function U(b){if(L.value){if(b.key==="ArrowDown")A("next");else if(b.key==="ArrowUp")A("prev");else if(b.key==="Home")A("first");else if(b.key==="End")A("last");else return;b.preventDefault()}}function A(b){if(L.value)return ut(L.value,b)}return T(()=>d(e.tag,{ref:L,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},s.value,a.value,r.value,g.value,m.value,v.value,o.value,e.class],style:[i.value,f.value,e.style],tabindex:e.disabled||O.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:$,onFocusout:E,onFocus:K,onKeydown:U},{default:()=>[d(_e,{items:n.value,returnObject:e.returnObject},t)]})),{open:u,select:c,focus:A}}}),jt=I({...x(),...ct()},"VForm"),qt=B()({name:"VForm",props:jt(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,l){let{slots:t,emit:n}=l;const s=dt(e),a=P();function i(g){g.preventDefault(),s.reset()}function r(g){const f=g,m=s.validate();f.then=m.then.bind(m),f.catch=m.catch.bind(m),f.finally=m.finally.bind(m),n("submit",f),f.defaultPrevented||m.then(o=>{var c;let{valid:u}=o;u&&((c=a.value)==null||c.submit())}),f.preventDefault()}return T(()=>{var g;return d("form",{ref:a,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:i,onSubmit:r},[(g=t.default)==null?void 0:g.call(t,s)])}),vt(s,a)}}),Rt=I({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...mt()},"VHover"),Jt=B()({name:"VHover",props:Rt(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const n=W(e,"modelValue"),{runOpenDelay:s,runCloseDelay:a}=yt(e,i=>!e.disabled&&(n.value=i));return()=>{var i;return(i=t.default)==null?void 0:i.call(t,{isHovering:n.value,props:{onMouseenter:s,onMouseleave:a}})}}});export{Ut as V,ue as a,qt as b,Jt as c,Kt as d,_t as m,gt as u};