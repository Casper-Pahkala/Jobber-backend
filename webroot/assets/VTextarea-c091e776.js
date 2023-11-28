import{p as Z,bw as p,bx as ee,n as te,aH as ae,K as ne,by as le,c as y,r as x,s as oe,N as ue,o as ie,J as m,k as re,q as se,bz as ce,bA as T,bB as de,t as l,bC as fe,M as I,X as R,aJ as _,aK as ve,bD as xe,bE as me,aC as ge,Y as S,bF as he,b as we,I as Ve}from"./index-73700b5c.js";const ye=Z({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...p(),...ee()},"VTextarea"),Fe=te()({name:"VTextarea",directives:{Intersect:ae},inheritAttrs:!1,props:ye(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,D){let{attrs:C,emit:M,slots:i}=D;const o=ne(e,"modelValue"),{isFocused:f,focus:E,blur:G}=le(e),U=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),O=y(()=>{if(C.maxlength)return C.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function $(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const B=x(),g=x(),H=oe(""),h=x(),J=y(()=>e.persistentPlaceholder||f.value||e.active);function F(){var t;h.value!==document.activeElement&&((t=h.value)==null||t.focus()),f.value||E()}function K(t){F(),M("click:control",t)}function j(t){M("mousedown:control",t)}function q(t){t.stopPropagation(),F(),S(()=>{o.value="",he(e["onClick:clear"],t)})}function X(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=x(),w=x(+e.rows),b=y(()=>["plain","underlined"].includes(e.variant));ue(()=>{e.autoGrow||(w.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!g.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(g.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,V=parseFloat(t.lineHeight),P=Math.max(parseFloat(e.rows)*V+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),k=parseFloat(e.maxRows)*V+a||1/0,s=Ve(u??0,P,k);w.value=Math.floor((s-a)/V),H.value=we(s)})}ie(d),m(o,d),m(()=>e.rows,d),m(()=>e.maxRows,d),m(()=>e.density,d);let r;return m(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),re(()=>{r==null||r.disconnect()}),se(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=ce(C),[{modelValue:V,...P}]=T.filterProps(e),[k]=de(e);return l(T,I({ref:B,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":b.value},e.class],style:e.style},a,P,{centerAffix:w.value===1&&!b.value,focused:f.value}),{...i,default:s=>{let{isDisabled:v,isDirty:N,isReadonly:Y,isValid:L}=s;return l(fe,I({ref:g,style:{"--v-textarea-control-height":H.value},onClick:K,onMousedown:j,"onClick:clear":q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},k,{active:J.value||N.value,centerAffix:w.value===1&&!b.value,dirty:N.value||e.dirty,disabled:v.value,focused:f.value,error:L.value===!1}),{...i,default:Q=>{let{props:{class:z,...A}}=Q;return l(R,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),_(l("textarea",I({ref:h,class:z,value:o.value,onInput:X,autofocus:e.autofocus,readonly:Y.value,disabled:v.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:G},A,u),null),[[ve("intersect"),{handler:$},null,{once:!0}]]),e.autoGrow&&_(l("textarea",{class:[z,"v-textarea__sizer"],id:`${A.id}-sizer`,"onUpdate:modelValue":W=>o.value=W,ref:c,readonly:!0,"aria-hidden":"true"},null),[[xe,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var v;return l(R,null,[(v=i.details)==null?void 0:v.call(i,s),t&&l(R,null,[l("span",null,null),l(me,{active:e.persistentCounter||f.value,value:U.value,max:O.value},i.counter)])])}:void 0})}),ge({},B,g,h)}});export{Fe as V};
