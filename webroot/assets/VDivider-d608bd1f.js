import{p as c,m as v,y as d,n as m,E as h,_ as u,A as g,c as y,b as r,q as C,t as V}from"./index-c33e5e7d.js";const k=c({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},"VDivider"),b=m()({name:"VDivider",props:k(),setup(e,a){let{attrs:t}=a;const{themeClasses:s}=h(e),{textColorClasses:o,textColorStyles:n}=u(g(e,"color")),l=y(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=r(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=r(e.thickness)),i});return C(()=>V("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[l.value,n.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{b as V};