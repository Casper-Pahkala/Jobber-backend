import{$ as F,a2 as R,a1 as H,a0 as O,r as m,c as P,a3 as i,a4 as n,aa as d,Z as J,t,a5 as l,ao as b,Q as g,ag as u,V as C,aH as w,ae as U,a7 as V,aG as A,ab as r,a9 as c,a8 as v,a6 as E,aj as G,ak as K}from"./index-f078a329.js";import{a as S,V as h}from"./VDivider-1253dc03.js";const M=f=>(G("data-v-1fc408bd"),f=f(),K(),f),Q={class:"main-wrapper"},Z={class:"main-content"},q={class:"carousel mt-2"},W={id:"job-title"},X={key:0,class:"job-info"},Y={key:1,class:"job-info"},ee={key:2,class:"job-info"},ae={key:3,class:"job-info"},te={key:4,class:"job-info"},se={id:"job-description"},oe={class:"job-info"},ie={key:1,class:"listing-deleted"},le=M(()=>d("div",null," Listaus poistettu ",-1)),ne={__name:"Job",setup(f){const z=R(),k=H(),s=O(),e=m({});s.loading=!0,m(null),m(null);const I=m(""),B=P(()=>e.value.user&&s.user&&e.value.user.hashed_id===s.user.id),j=m(0);s.displayedJob.id=z.params.id,s.fetchJob(s.displayedJob.id).then(o=>{let a=o.data;a.error||(e.value=a.job,I.value=a.job.user.first_name+" "+a.job.user.last_name,s.displayedJob.userId=a.job.user.hashed_id),s.loading=!1});function $(){window.history.length>1?k.back():k.replace({path:"/jobs"})}function N(){k.replace({path:"/jobs"})}window.scrollTo(0,0);function x(){s.chat.jobId=s.displayedJob.id,s.chat.userId=s.displayedJob.userId,s.chatOpen=!0}function p(o=0,a=!1){return e.value.job_images&&e.value.job_images.length>0?s.url+"/job-image/"+e.value.job_images[o].name:s.url+"/no-img.png"}function re(){}function L(){return console.log(e.value),e.value.contract_type===0?"Keikka työ":e.value.contract_type===1?"Vakituinen työsopimus":"Toistaiseksi voimassa oleva työsopimus"}function T(){let o=e.value;if(o.salary){let a="";return o.contract_type===0?o.salary_type===0?a="€/h":a="€":o.salary_type===0?a="€/h":a="€/kk",o.salary+" "+a}return"Sopimuksen mukaan"}function D(){if(window.confirm("Haluatko varmasti poistaa listauksen "+e.value.title+"?")){const a={job_id:e.value.hashed_id};s.deleteListing(a).then(_=>{e.value.is_deleted=!0})}}return(o,a)=>(i(),n("div",Q,[d("div",Z,[e.value.is_deleted?(i(),n("div",ie,[le,t(g,{color:"primary",onClick:a[3]||(a[3]=_=>N())},{default:l(()=>[c(" Selaa töitä ")]),_:1})])):(i(),n(J,{key:0},[t(b,null,{default:l(()=>[t(g,{flat:"",rounded:"",id:"back-btn",onClick:$},{default:l(()=>[t(u,{icon:"mdi-arrow-left"})]),_:1}),t(b,{id:"images-container"},{default:l(()=>[t(b,{class:"main-image-container"},{default:l(()=>[t(C,{src:p(j.value),"lazy-src":p(j.value,!0),contain:"",class:"job-image",id:"mainJobImage",onClick:a[0]||(a[0]=_=>void 0)},{placeholder:l(()=>[t(S,{class:"fill-height ma-0",align:"center",justify:"center"},{default:l(()=>[t(w,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),_:1},8,["src","lazy-src"])]),_:1}),d("div",q,[(i(!0),n(J,null,U(e.value.job_images,(_,y)=>(i(),V(C,{key:y,src:p(y),"lazy-src":p(y,!0),cover:"",class:A(["carousel-img",o.image===o.mainImage?"selected":""]),onClick:ce=>j.value=y,"aspect-ratio":"1"},{placeholder:l(()=>[t(S,{class:"fill-height ma-0",align:"center",justify:"center"},{default:l(()=>[t(w,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),_:2},1032,["src","lazy-src","onClick","class"]))),128))])]),_:1}),d("h1",W,r(e.value.title),1),t(h),e.value?(i(),n("div",X,[t(u,{icon:"mdi-briefcase"}),c(r(L()),1)])):v("",!0),e.value.area?(i(),n("div",Y,[t(u,{icon:"mdi-map-marker"}),c(" "+r(e.value.area),1)])):v("",!0),e.value.date?(i(),n("div",ee,[t(u,{icon:"mdi-calendar-range"}),c(" "+r(E(s).formatDate(e.value.date)),1)])):v("",!0),e.value.hours?(i(),n("div",ae,[t(u,{icon:"mdi-timer-outline"}),c(" "+r(e.value.hours)+"h "+r(e.value.contract_type===1||e.value.contract_type===2?"/ viikko":""),1)])):v("",!0),e.value.salary?(i(),n("div",te,[t(u,{icon:"mdi-cash"}),c(" "+r(T()),1)])):v("",!0),t(h,{class:"mt-5"}),d("p",se,r(e.value.description),1)]),_:1}),t(h,{class:"mt-5 mb-5"}),d("div",null,[t(b,null,{default:l(()=>[d("div",oe,[t(u,{icon:"mdi-account"}),c(" "+r(I.value),1)]),B.value?(i(),V(g,{key:1,class:"mt-4",color:"red",onClick:a[2]||(a[2]=_=>D())},{default:l(()=>[c(" Poista listaus ")]),_:1})):(i(),V(g,{key:0,class:"mt-4",color:"primary",onClick:a[1]||(a[1]=_=>x())},{default:l(()=>[c(" Ota yhteyttä ")]),_:1}))]),_:1}),t(h,{class:"mt-5 mb-5"})])],64))])]))}},_e=F(ne,[["__scopeId","data-v-1fc408bd"]]);export{_e as default};