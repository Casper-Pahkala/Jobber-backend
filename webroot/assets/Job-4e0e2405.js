import{$ as D,_ as F,Z as R,r as _,c as L,a0 as l,a1 as n,a7 as d,X as I,t as a,a2 as i,a5 as m,P as j,aa as u,az as J,a9 as O,a4 as P,ay as U,a8 as r,a6 as c,a3 as A,ad as E,ae as K}from"./index-38921841.js";import{_ as M,V as C,b as w,a as y}from"./VDivider-7e34ec7b.js";import{V as b}from"./VContainer-e20e2455.js";const X=p=>(E("data-v-7ab2846e"),p=p(),K(),p),Z={class:"main-wrapper"},q={class:"main-content"},G={class:"carousel mt-2"},H={id:"job-title"},Q={class:"job-info"},W={key:0,class:"job-info"},Y={key:1,class:"job-info"},ee={key:2,class:"job-info"},ae={key:3,class:"job-info"},te={id:"job-description"},se={key:0},oe={class:"job-info"},ie={key:1,class:"listing-deleted"},le=X(()=>d("div",null," Listaus poistettu ",-1)),ne={__name:"Job",setup(p){const S=D(),h=F(),s=R(),e=_({});s.loading=!0,_(null),_(null);const V=_(""),z=L(()=>e.value.user&&s.user&&e.value.user.hashed_id===s.user.id),g=_(0);s.displayedJob.id=S.params.id,s.fetchJob(s.displayedJob.id).then(o=>{let t=o.data;t.error||(e.value=t.job,V.value=t.job.user.first_name+" "+t.job.user.last_name,s.displayedJob.userId=t.job.user.hashed_id),s.loading=!1});function B(){window.history.length>1?h.back():h.replace({path:"/jobs"})}function N(){h.replace({path:"/jobs"})}window.scrollTo(0,0);function $(){s.chat.jobId=s.displayedJob.id,s.chat.userId=s.displayedJob.userId,s.chatOpen=!0}function v(o=0,t=!1){return e.value.job_images&&e.value.job_images.length>0?s.url+"/job-image/"+e.value.job_images[o].name:s.url+"/no-img.png"}function re(){}function x(){return console.log(e.value),e.value.contract_type===0?"Keikka työ":e.value.contract_type===1?"Vakituinen työsopimus":"Toistaiseksi voimassa oleva työsopimus"}function T(){let o=e.value;if(o.salary){let t="";return o.contract_type===0?o.salary_type===0?t="€/h":t="€":o.salary_type===0?t="€/h":t="€/kk",o.salary+" "+t}return"Sopimuksen mukaan"}return(o,t)=>(l(),n("div",Z,[d("div",q,[e.value.is_deleted?(l(),n("div",ie,[le,a(j,{color:"primary",onClick:t[2]||(t[2]=k=>N())},{default:i(()=>[c(" Selaa töitä ")]),_:1})])):(l(),n(I,{key:0},[a(b,null,{default:i(()=>[a(j,{flat:"",rounded:"",id:"back-btn",onClick:B},{default:i(()=>[a(u,{icon:"mdi-arrow-left"})]),_:1}),a(b,{id:"images-container"},{default:i(()=>[a(b,{class:"main-image-container"},{default:i(()=>[a(C,{src:v(g.value),"lazy-src":v(g.value,!0),contain:"",class:"job-image",id:"mainJobImage",onClick:t[0]||(t[0]=k=>void 0)},{placeholder:i(()=>[a(w,{class:"fill-height ma-0",align:"center",justify:"center"},{default:i(()=>[a(J,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),_:1},8,["src","lazy-src"])]),_:1}),d("div",G,[(l(!0),n(I,null,O(e.value.job_images,(k,f)=>(l(),P(C,{key:f,src:v(f),"lazy-src":v(f,!0),cover:"",class:U(["carousel-img",o.image===o.mainImage?"selected":""]),onClick:ce=>g.value=f,"aspect-ratio":"1"},{placeholder:i(()=>[a(w,{class:"fill-height ma-0",align:"center",justify:"center"},{default:i(()=>[a(J,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),_:2},1032,["src","lazy-src","onClick","class"]))),128))])]),_:1}),d("h1",H,r(e.value.title),1),a(y),d("div",Q,[a(u,{icon:"mdi-briefcase"}),c(r(x()),1)]),e.value.area?(l(),n("div",W,[a(u,{icon:"mdi-map-marker"}),c(" "+r(e.value.area),1)])):m("",!0),e.value.date?(l(),n("div",Y,[a(u,{icon:"mdi-calendar-range"}),c(" "+r(A(s).formatDate(e.value.date)),1)])):m("",!0),e.value.hours?(l(),n("div",ee,[a(u,{icon:"mdi-timer-outline"}),c(" "+r(e.value.hours)+"h "+r(e.value.contract_type===1||e.value.contract_type===2?"/ viikko":""),1)])):m("",!0),e.value.salary?(l(),n("div",ae,[a(u,{icon:"mdi-cash"}),c(" "+r(T()),1)])):m("",!0),a(y,{class:"mt-5"}),d("p",te,r(e.value.description),1)]),_:1}),a(y,{class:"mt-5 mb-5"}),z.value?m("",!0):(l(),n("div",se,[a(b,null,{default:i(()=>[d("div",oe,[a(u,{icon:"mdi-account"}),c(" "+r(V.value),1)]),a(j,{class:"mt-4",color:"primary",onClick:t[1]||(t[1]=k=>$())},{default:i(()=>[c(" Ota yhteyttä ")]),_:1})]),_:1}),a(y,{class:"mt-5 mb-5"})]))],64))])]))}},me=M(ne,[["__scopeId","data-v-7ab2846e"]]);export{me as default};
