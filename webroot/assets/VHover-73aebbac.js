import"./VDivider-0f231541.js";import{aE as u,aF as i,p as d,m as V,l as k,n as m,c as C,aD as S,K as N}from"./index-73700b5c.js";import{p as P,q as p}from"./VForm-2ac4f720.js";const y=(()=>u.reduce((e,o)=>(e[o]={type:[Boolean,String,Number],default:!1},e),{}))(),b=(()=>u.reduce((e,o)=>{const t="offset"+i(o);return e[t]={type:[String,Number],default:null},e},{}))(),g=(()=>u.reduce((e,o)=>{const t="order"+i(o);return e[t]={type:[String,Number],default:null},e},{}))(),f={col:Object.keys(y),offset:Object.keys(b),order:Object.keys(g)};function h(e,o,t){let a=e;if(!(t==null||t===!1)){if(o){const s=o.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const H=["auto","start","end","center","baseline","stretch"],L=d({cols:{type:[Boolean,String,Number],default:!1},...y,offset:{type:[String,Number],default:null},...b,order:{type:[String,Number],default:null},...g,alignSelf:{type:String,default:null,validator:e=>H.includes(e)},...V(),...k()},"VCol"),M=m()({name:"VCol",props:L(),setup(e,o){let{slots:t}=o;const a=C(()=>{const s=[];let r;for(r in f)f[r].forEach(n=>{const v=e[n],c=h(r,n,v);c&&s.push(c)});const l=s.some(n=>n.startsWith("v-col-"));return s.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return S(e.tag,{class:[a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),$=d({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...P()},"VHover"),O=m()({name:"VHover",props:$(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const a=N(e,"modelValue"),{runOpenDelay:s,runCloseDelay:r}=p(e,l=>!e.disabled&&(a.value=l));return()=>{var l;return(l=t.default)==null?void 0:l.call(t,{isHovering:a.value,props:{onMouseenter:s,onMouseleave:r}})}}});export{M as V,O as a};
