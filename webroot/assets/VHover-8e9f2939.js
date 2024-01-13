import{bu as u,bv as i,p as d,m as V,l as k,n as m,c as C,bt as S,L as N}from"./index-3d67980b.js";import{i as P,j as h}from"./VForm-b7059ea1.js";const b=(()=>u.reduce((e,o)=>(e[o]={type:[Boolean,String,Number],default:!1},e),{}))(),y=(()=>u.reduce((e,o)=>{const t="offset"+i(o);return e[t]={type:[String,Number],default:null},e},{}))(),g=(()=>u.reduce((e,o)=>{const t="order"+i(o);return e[t]={type:[String,Number],default:null},e},{}))(),f={col:Object.keys(b),offset:Object.keys(y),order:Object.keys(g)};function L(e,o,t){let s=e;if(!(t==null||t===!1)){if(o){const l=o.replace(e,"");s+=`-${l}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const p=["auto","start","end","center","baseline","stretch"],H=d({cols:{type:[Boolean,String,Number],default:!1},...b,offset:{type:[String,Number],default:null},...y,order:{type:[String,Number],default:null},...g,alignSelf:{type:String,default:null,validator:e=>p.includes(e)},...V(),...k()},"VCol"),D=m()({name:"VCol",props:H(),setup(e,o){let{slots:t}=o;const s=C(()=>{const l=[];let n;for(n in f)f[n].forEach(r=>{const v=e[r],c=L(n,r,v);c&&l.push(c)});const a=l.some(r=>r.startsWith("v-col-"));return l.push({"v-col":!a||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return S(e.tag,{class:[s.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),$=d({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...P()},"VHover"),M=m()({name:"VHover",props:$(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const s=N(e,"modelValue"),{runOpenDelay:l,runCloseDelay:n}=h(e,a=>!e.disabled&&(s.value=a));return()=>{var a;return(a=t.default)==null?void 0:a.call(t,{isHovering:s.value,props:{onMouseenter:l,onMouseleave:n}})}}});export{D as V,M as a};
