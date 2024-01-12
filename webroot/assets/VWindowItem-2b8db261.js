import{p as T,b9 as re,m as w,aL as ve,l as Y,y as G,am as U,n as L,E as H,aN as J,G as fe,A as x,q as W,t as i,ah as X,b3 as F,v as he,ai as me,w as ye,bN as Z,x as ge,b4 as be,bK as ke,b5 as Ce,at as p,B as Ve,an as Ie,ao as Se,C as Be,D as Pe,bO as xe,L as _e,bP as ee,b6 as Ae,c as y,b1 as E,b8 as te,au as Ee,bQ as Te,a9 as _,H as A,b2 as ne,a1 as j,a8 as K,N as we,bR as ae,F as Le,r as q,s as $,K as Re,d as Xe,a2 as N,i as $e,b0 as Ye,b as Q,aG as Ge}from"./index-d90048ba.js";import{k as He,u as We,l as De}from"./VForm-d4dcda54.js";const le=Symbol.for("vuetify:v-chip-group"),Me=T({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:re},...w(),...ve({selectedClass:"v-chip--selected"}),...Y(),...G(),...U({variant:"tonal"})},"VChipGroup"),et=L()({name:"VChipGroup",props:Me(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{themeClasses:n}=H(e),{isSelected:l,select:c,next:o,prev:v,selected:d}=J(e,le);return fe({VChip:{color:x(e,"color"),disabled:x(e,"disabled"),filter:x(e,"filter"),variant:x(e,"variant")}}),W(()=>i(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style},{default:()=>{var f;return[(f=t.default)==null?void 0:f.call(t,{isSelected:l,select:c,next:o,prev:v,selected:d.value})]}})),{}}}),Oe=T({activeClass:String,appendAvatar:String,appendIcon:X,closable:Boolean,closeIcon:{type:X,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:X,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:F(),onClickOnce:F(),...he(),...w(),...me(),...ye(),...Z(),...ge(),...be(),...ke(),...Y({tag:"span"}),...G(),...U({variant:"tonal"})},"VChip"),tt=L()({name:"VChip",directives:{Ripple:Ce},props:Oe(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,a){let{attrs:t,emit:n,slots:l}=a;const{t:c}=p(),{borderClasses:o}=Ve(e),{colorClasses:v,colorStyles:d,variantClasses:f}=Ie(e),{densityClasses:V}=Se(e),{elevationClasses:S}=Be(e),{roundedClasses:I}=Pe(e),{sizeClasses:C}=xe(e),{themeClasses:h}=H(e),B=_e(e,"modelValue"),s=ee(e,le,!1),b=Ae(e,t),R=y(()=>e.link!==!1&&b.isLink.value),k=y(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||b.isClickable.value)),u=y(()=>({"aria-label":c(e.closeLabel),onClick(m){m.stopPropagation(),B.value=!1,n("click:close",m)}}));function r(m){var P;n("click",m),k.value&&((P=b.navigate)==null||P.call(b,m),s==null||s.toggle())}function g(m){(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),r(m))}return()=>{const m=b.isLink.value?"a":e.tag,P=!!(e.appendIcon||e.appendAvatar),ce=!!(P||l.append),ue=!!(l.close||e.closable),D=!!(l.filter||e.filter)&&s,M=!!(e.prependIcon||e.prependAvatar),de=!!(M||l.prepend),O=!s||s.isSelected.value;return B.value&&E(i(m,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":k.value,"v-chip--filter":D,"v-chip--pill":e.pill},h.value,o.value,O?v.value:void 0,V.value,S.value,I.value,C.value,f.value,s==null?void 0:s.selectedClass.value,e.class],style:[O?d.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:b.href.value,tabindex:k.value?0:void 0,onClick:r,onKeydown:k.value&&!R.value&&g},{default:()=>{var z;return[Ee(k.value,"v-chip"),D&&i(Te,{key:"filter"},{default:()=>[E(i("div",{class:"v-chip__filter"},[l.filter?i(A,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},l.filter):i(_,{key:"filter-icon",icon:e.filterIcon},null)]),[[ne,s.isSelected.value]])]}),de&&i("div",{key:"prepend",class:"v-chip__prepend"},[l.prepend?i(A,{key:"prepend-defaults",disabled:!M,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},l.prepend):i(j,null,[e.prependIcon&&i(_,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(K,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content"},[((z=l.default)==null?void 0:z.call(l,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),ce&&i("div",{key:"append",class:"v-chip__append"},[l.append?i(A,{key:"append-defaults",disabled:!P,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},l.append):i(j,null,[e.appendIcon&&i(_,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(K,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),ue&&i("div",we({key:"close",class:"v-chip__close"},u.value),[l.close?i(A,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},l.close):i(_,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[te("ripple"),k.value&&e.ripple,null]])}}});const ze=e=>{const{touchstartX:a,touchendX:t,touchstartY:n,touchendY:l}=e,c=.5,o=16;e.offsetX=t-a,e.offsetY=l-n,Math.abs(e.offsetY)<c*Math.abs(e.offsetX)&&(e.left&&t<a-o&&e.left(e),e.right&&t>a+o&&e.right(e)),Math.abs(e.offsetX)<c*Math.abs(e.offsetY)&&(e.up&&l<n-o&&e.up(e),e.down&&l>n+o&&e.down(e))};function Fe(e,a){var n;const t=e.changedTouches[0];a.touchstartX=t.clientX,a.touchstartY=t.clientY,(n=a.start)==null||n.call(a,{originalEvent:e,...a})}function je(e,a){var n;const t=e.changedTouches[0];a.touchendX=t.clientX,a.touchendY=t.clientY,(n=a.end)==null||n.call(a,{originalEvent:e,...a}),ze(a)}function Ke(e,a){var n;const t=e.changedTouches[0];a.touchmoveX=t.clientX,a.touchmoveY=t.clientY,(n=a.move)==null||n.call(a,{originalEvent:e,...a})}function qe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Fe(t,a),touchend:t=>je(t,a),touchmove:t=>Ke(t,a)}}function Ne(e,a){var v;const t=a.value,n=t!=null&&t.parent?e.parentElement:e,l=(t==null?void 0:t.options)??{passive:!0},c=(v=a.instance)==null?void 0:v.$.uid;if(!n||!c)return;const o=qe(a.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[c]=o,ae(o).forEach(d=>{n.addEventListener(d,o[d],l)})}function Qe(e,a){var c,o;const t=(c=a.value)!=null&&c.parent?e.parentElement:e,n=(o=a.instance)==null?void 0:o.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const l=t._touchHandlers[n];ae(l).forEach(v=>{t.removeEventListener(v,l[v])}),delete t._touchHandlers[n]}const oe={mounted:Ne,unmounted:Qe},se=Symbol.for("vuetify:v-window"),ie=Symbol.for("vuetify:v-window-group"),Ue=T({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...w(),...Y(),...G()},"VWindow"),nt=L()({name:"VWindow",directives:{Touch:oe},props:Ue(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{themeClasses:n}=H(e),{isRtl:l}=Le(),{t:c}=p(),o=J(e,ie),v=q(),d=y(()=>l.value?!e.reverse:e.reverse),f=$(!1),V=y(()=>{const u=e.direction==="vertical"?"y":"x",g=(d.value?!f.value:f.value)?"-reverse":"";return`v-window-${u}${g}-transition`}),S=$(0),I=q(void 0),C=y(()=>o.items.value.findIndex(u=>o.selected.value.includes(u.id)));Re(C,(u,r)=>{const g=o.items.value.length,m=g-1;g<=2?f.value=u<r:u===m&&r===0?f.value=!0:u===0&&r===m?f.value=!1:f.value=u<r}),Xe(se,{transition:V,isReversed:f,transitionCount:S,transitionHeight:I,rootRef:v});const h=y(()=>e.continuous||C.value!==0),B=y(()=>e.continuous||C.value!==o.items.value.length-1);function s(){h.value&&o.prev()}function b(){B.value&&o.next()}const R=y(()=>{const u=[],r={icon:l.value?e.nextIcon:e.prevIcon,class:`v-window__${d.value?"right":"left"}`,onClick:o.prev,ariaLabel:c("$vuetify.carousel.prev")};u.push(h.value?t.prev?t.prev({props:r}):i(N,r,null):i("div",null,null));const g={icon:l.value?e.prevIcon:e.nextIcon,class:`v-window__${d.value?"left":"right"}`,onClick:o.next,ariaLabel:c("$vuetify.carousel.next")};return u.push(B.value?t.next?t.next({props:g}):i(N,g,null):i("div",null,null)),u}),k=y(()=>e.touch===!1?e.touch:{...{left:()=>{d.value?s():b()},right:()=>{d.value?b():s()},start:r=>{let{originalEvent:g}=r;g.stopPropagation()}},...e.touch===!0?{}:e.touch});return W(()=>E(i(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var u,r;return[i("div",{class:"v-window__container",style:{height:I.value}},[(u=t.default)==null?void 0:u.call(t,{group:o}),e.showArrows!==!1&&i("div",{class:"v-window__controls"},[R.value])]),(r=t.additional)==null?void 0:r.call(t,{group:o})]}}),[[te("touch"),k.value]])),{group:o}}}),Je=T({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...w(),...Z(),...He()},"VWindowItem"),at=L()({name:"VWindowItem",directives:{Touch:oe},props:Je(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:t}=a;const n=$e(se),l=ee(e,ie),{isBooted:c}=We();if(!n||!l)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=$(!1),v=y(()=>c.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function d(){!o.value||!n||(o.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function f(){var h;o.value||!n||(o.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=Q((h=n.rootRef.value)==null?void 0:h.clientHeight)),n.transitionCount.value+=1)}function V(){d()}function S(h){o.value&&Ge(()=>{!v.value||!o.value||!n||(n.transitionHeight.value=Q(h.clientHeight))})}const I=y(()=>{const h=n.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof h!="string"?n.transition.value:h,onBeforeEnter:f,onAfterEnter:d,onEnterCancelled:V,onBeforeLeave:f,onAfterLeave:d,onLeaveCancelled:V,onEnter:S}:!1}),{hasContent:C}=De(e,l.isSelected);return W(()=>i(Ye,{transition:I.value,disabled:!c.value},{default:()=>{var h;return[E(i("div",{class:["v-window-item",l.selectedClass.value,e.class],style:e.style},[C.value&&((h=t.default)==null?void 0:h.call(t))]),[[ne,l.isSelected.value]])]}})),{groupItem:l}}});export{nt as V,at as a,et as b,tt as c};
