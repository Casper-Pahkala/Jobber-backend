import{n as k,m as f,G as U,q as b,t as n,Y as V,p as A,T as o,_ as I,x as B,a_ as X,l as T,y as _,a1 as D,E as L,a4 as p,a5 as R,D as z,a$ as Z,ab as ee,a9 as $,V as C,v as ae,$ as te,w as ne,b0 as se,aJ as le,aK as ie,a0 as de,a2 as ce,B as re,a6 as ue,C as ve,b1 as oe,aL as me,aM as ye,a3 as ge,c as S,W as ke,a8 as fe,b2 as be}from"./index-607c4400.js";import{V as E}from"./VImg-139fd672.js";const Ce=k()({name:"VCardActions",props:f(),setup(e,l){let{slots:t}=l;return U({VBtn:{variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ve=V("v-card-subtitle"),Ae=V("v-card-title");const Ie=A({start:Boolean,end:Boolean,icon:o,image:String,...f(),...I(),...B(),...X(),...T(),..._(),...D({variant:"flat"})},"VAvatar"),x=k()({name:"VAvatar",props:Ie(),setup(e,l){let{slots:t}=l;const{themeClasses:a}=L(e),{colorClasses:c,colorStyles:i,variantClasses:r}=p(e),{densityClasses:u}=R(e),{roundedClasses:v}=z(e),{sizeClasses:d,sizeStyles:s}=Z(e);return b(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,c.value,u.value,v.value,d.value,r.value,e.class],style:[i.value,s.value,e.style]},{default:()=>{var m;return[e.image?n(E,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(ee,{key:"icon",icon:e.icon},null):(m=t.default)==null?void 0:m.call(t),$(!1,"v-avatar")]}})),{}}}),he=A({appendAvatar:String,appendIcon:o,prependAvatar:String,prependIcon:o,subtitle:String,title:String,...f(),...I()},"VCardItem"),Pe=k()({name:"VCardItem",props:he(),setup(e,l){let{slots:t}=l;return b(()=>{var d;const a=!!(e.prependAvatar||e.prependIcon),c=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),r=!!(i||t.append),u=!!(e.title||t.title),v=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[c&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(C,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(x,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[u&&n(Ae,{key:"title"},{default:()=>{var s;return[((s=t.title)==null?void 0:s.call(t))??e.title]}}),v&&n(Ve,{key:"subtitle"},{default:()=>{var s;return[((s=t.subtitle)==null?void 0:s.call(t))??e.subtitle]}}),(d=t.default)==null?void 0:d.call(t)]),r&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(C,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):i&&n(x,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Se=V("v-card-text"),xe=A({appendAvatar:String,appendIcon:o,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:o,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...ae(),...f(),...I(),...te(),...ne(),...se(),...le(),...ie(),...B(),...de(),...T(),..._(),...D({variant:"elevated"})},"VCard"),_e=k()({name:"VCard",directives:{Ripple:ce},props:xe(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:c}=L(e),{borderClasses:i}=re(e),{colorClasses:r,colorStyles:u,variantClasses:v}=p(e),{densityClasses:d}=R(e),{dimensionStyles:s}=ue(e),{elevationClasses:m}=ve(e),{loaderClasses:M}=oe(e),{locationStyles:w}=me(e),{positionClasses:F}=ye(e),{roundedClasses:O}=z(e),y=ge(e,t),j=S(()=>e.link!==!1&&y.isLink.value),g=S(()=>!e.disabled&&e.link!==!1&&(e.link||y.isClickable.value));return b(()=>{const q=j.value?"a":e.tag,G=!!(a.title||e.title),H=!!(a.subtitle||e.subtitle),J=G||H,K=!!(a.append||e.appendAvatar||e.appendIcon),N=!!(a.prepend||e.prependAvatar||e.prependIcon),W=!!(a.image||e.image),Y=J||N||K,Q=!!(a.text||e.text);return ke(n(q,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":g.value},c.value,i.value,r.value,d.value,m.value,M.value,F.value,O.value,v.value,e.class],style:[u.value,s.value,w.value,e.style],href:y.href.value,onClick:g.value&&y.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var h;return[W&&n("div",{key:"image",class:"v-card__image"},[a.image?n(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(E,{key:"image-img",cover:!0,src:e.image},null)]),n(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),Y&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),Q&&n(Se,{key:"text"},{default:()=>{var P;return[((P=a.text)==null?void 0:P.call(a))??e.text]}}),(h=a.default)==null?void 0:h.call(a),a.actions&&n(Ce,null,{default:a.actions}),$(g.value,"v-card")]}}),[[fe("ripple"),g.value&&e.ripple]])}),{}}});export{x as V,_e as a,Ae as b,Se as c,Pe as d,Ce as e};
