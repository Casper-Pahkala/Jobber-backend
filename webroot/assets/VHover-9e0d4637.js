import{aY as u,aZ as i,p as d,m as v,l as V,n as m,c as C,aX as S,L as N}from"./index-61dd75c5.js";import{j as P,k as h}from"./VForm-00da143e.js";const y=(()=>u.reduce((e,o)=>(e[o]={type:[Boolean,String,Number],default:!1},e),{}))(),b=(()=>u.reduce((e,o)=>{const t="offset"+i(o);return e[t]={type:[String,Number],default:null},e},{}))(),g=(()=>u.reduce((e,o)=>{const t="order"+i(o);return e[t]={type:[String,Number],default:null},e},{}))(),f={col:Object.keys(y),offset:Object.keys(b),order:Object.keys(g)};function L(e,o,t){let a=e;if(!(t==null||t===!1)){if(o){const s=o.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const p=["auto","start","end","center","baseline","stretch"],H=d({cols:{type:[Boolean,String,Number],default:!1},...y,offset:{type:[String,Number],default:null},...b,order:{type:[String,Number],default:null},...g,alignSelf:{type:String,default:null,validator:e=>p.includes(e)},...v(),...V()},"VCol"),D=m()({name:"VCol",props:H(),setup(e,o){let{slots:t}=o;const a=C(()=>{const s=[];let n;for(n in f)f[n].forEach(r=>{const k=e[r],c=L(n,r,k);c&&s.push(c)});const l=s.some(r=>r.startsWith("v-col-"));return s.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return S(e.tag,{class:[a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),$=d({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...P()},"VHover"),M=m()({name:"VHover",props:$(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const a=N(e,"modelValue"),{runOpenDelay:s,runCloseDelay:n}=h(e,l=>!e.disabled&&(a.value=l));return()=>{var l;return(l=t.default)==null?void 0:l.call(t,{isHovering:a.value,props:{onMouseenter:s,onMouseleave:n}})}}});export{D as V,M as a};
