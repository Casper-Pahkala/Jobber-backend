import{_ as M,R as Q,Q as W,P as X,r as y,c as $,T as o,a0 as r,X as i,a1 as x,t as e,W as l,af as _,a2 as v,a4 as u,U as h,a9 as d,V as z,ay as L,a7 as N,a3 as Y,$ as c,Z as p,Y as T,a5 as D,ab as Z,ac as q}from"./index-ea86fad6.js";import{a as E,V as g}from"./VDivider-6059bda6.js";import{V as b}from"./VSkeletonLoader-fff1f9b8.js";const I=k=>(Z("data-v-72e65c9c"),k=k(),q(),k),G={class:"main-wrapper"},ee={class:"main-content"},ae={class:"carousel mt-2"},te={id:"job-title"},se={key:0,class:"job-info"},le={key:1,class:"job-info"},oe={class:"area-container"},ie={key:2,class:"job-info"},ne={key:3,class:"job-info"},re={key:4,class:"job-info"},ce=I(()=>i("h4",{class:"mt-3"},"Kuvaus",-1)),ue={id:"job-description",class:"mt-2"},de={style:{display:"flex",gap:"5px"}},me={class:"mt-2"},_e={key:1,class:"listing-deleted"},ve=I(()=>i("div",null," Listaus poistettu ",-1)),pe=I(()=>i("div",{class:"carousel mt-2"},null,-1)),fe={style:{display:"flex",gap:"5px","align-items":"center"}},ye={class:"mb-7"},he={__name:"Job",setup(k){const F=Q(),C=W(),s=X(),a=y({}),j=y(!0);y(null),y(null);const J=y(""),R=$(()=>a.value.user&&s.user&&a.value.user.hashed_id===s.user.id),K=$(()=>(console.log(s.fullscreen,"ss"),s.fullscreen)),V=y(0);s.displayedJob.id=F.params.id,s.fetchJob(s.displayedJob.id).then(n=>{let t=n.data;t.error||(t.job.area=JSON.parse(t.job.area),a.value=t.job,J.value=t.job.user.first_name+" "+t.job.user.last_name,s.displayedJob.userId=t.job.user.hashed_id),j.value=!1});function S(){window.history.length>1?C.back():C.replace({path:"/jobs"})}function O(){C.replace({path:"/jobs"})}window.scrollTo(0,0);function P(){s.chat.jobId=s.displayedJob.id,s.chat.userId=s.displayedJob.userId,s.chatOpen=!0}function w(n=0,t=!1){return a.value.job_images&&a.value.job_images.length>0?s.url+"/job-image/"+a.value.job_images[n].name:s.url+"/no-img.png"}function B(){s.toggleFullscreen(document.getElementById("mainImageContainer"))}function U(){return console.log(a.value),a.value.contract_type===0?"Keikka työ":a.value.contract_type===1?"Vakituinen työsopimus":"Toistaiseksi voimassa oleva työsopimus"}function A(){let n=a.value;if(n.salary){let t="";return n.contract_type===0?n.salary_type===0?t="€/h":t="€":n.salary_type===0?t="€/h":t="€/kk",n.salary+" "+t}return"Sopimuksen mukaan"}function H(){if(window.confirm("Haluatko varmasti poistaa listauksen "+a.value.title+"?")){const t={job_id:a.value.hashed_id};s.deleteListing(t).then(m=>{a.value.is_deleted=!0})}}return document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(s.fullscreen=!1)}),(n,t)=>(o(),r("div",G,[i("div",ee,[!a.value.is_deleted&&!j.value?(o(),r(x,{key:0},[e(_,null,{default:l(()=>[e(v,{flat:"",rounded:"",id:"back-btn",onClick:S},{default:l(()=>[e(d,{icon:"mdi-arrow-left"})]),_:1}),e(_,{id:"images-container"},{default:l(()=>[e(_,{class:"main-image-container",id:"mainImageContainer"},{default:l(()=>[e(z,{src:w(V.value),"lazy-src":w(V.value,!0),contain:"",class:"job-image",id:"mainJobImage"},{placeholder:l(()=>[e(E,{class:"fill-height ma-0",align:"center",justify:"center"},{default:l(()=>[e(L,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),_:1},8,["src","lazy-src"]),a.value.job_images.length>0?(o(),h(v,{key:0,class:"fullscreen-btn",flat:"",icon:"mdi-fullscreen",elevation:"10",onClick:t[0]||(t[0]=m=>B())})):u("",!0),K.value?(o(),h(v,{key:1,class:"close-btn",flat:"",icon:"mdi-close",elevation:"8",onClick:t[1]||(t[1]=m=>B())})):u("",!0)]),_:1}),i("div",ae,[(o(!0),r(x,null,N(a.value.job_images,(m,f)=>(o(),h(z,{key:f,src:w(f),"lazy-src":w(f,!0),cover:"",class:Y(["carousel-img",n.image===n.mainImage?"selected":""]),onClick:ge=>V.value=f,"aspect-ratio":"1"},{placeholder:l(()=>[e(E,{class:"fill-height ma-0",align:"center",justify:"center"},{default:l(()=>[e(L,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),_:2},1032,["src","lazy-src","onClick","class"]))),128))])]),_:1}),i("h1",te,c(a.value.title),1),e(g),a.value?(o(),r("div",se,[e(d,{icon:"mdi-briefcase"}),p(c(U()),1)])):u("",!0),a.value.area?(o(),r("div",le,[e(d,{icon:"mdi-map-marker"}),i("div",oe,[(o(!0),r(x,null,N(a.value.area,(m,f)=>(o(),r("div",{key:f,class:"area-chip"},c(m),1))),128))])])):u("",!0),a.value.date?(o(),r("div",ie,[e(d,{icon:"mdi-calendar-range"}),p(" "+c(T(s).formatDate(a.value.date)),1)])):u("",!0),a.value.hours?(o(),r("div",ne,[e(d,{icon:"mdi-timer-outline"}),p(" "+c(a.value.hours)+"h "+c(a.value.contract_type===1||a.value.contract_type===2?"/ viikko":""),1)])):u("",!0),a.value.salary?(o(),r("div",re,[e(d,{icon:"mdi-cash"}),p(" "+c(A()),1)])):u("",!0),e(g,{class:"mt-5"}),ce,i("p",ue,c(a.value.description),1)]),_:1}),e(g,{class:"mt-5 mb-5"}),i("div",null,[e(_,null,{default:l(()=>[e(D,{class:"user-card pa-5",elevation:"8"},{default:l(()=>[i("div",null,[i("div",de,[e(d,{icon:"mdi-account"}),i("h3",null,c(J.value),1)]),i("div",me," Käyttäjä luotu "+c(T(s).formatDate(a.value.user.created_at)),1)]),R.value?(o(),h(v,{key:1,class:"mt-4",color:"red",style:{color:"white"},onClick:t[3]||(t[3]=m=>H())},{default:l(()=>[p(" Poista listaus ")]),_:1})):(o(),h(v,{key:0,class:"mt-6",color:"primary",onClick:t[2]||(t[2]=m=>P())},{default:l(()=>[p(" Ota yhteyttä ")]),_:1}))]),_:1})]),_:1}),e(g,{class:"mt-5 mb-5"})])],64)):j.value?u("",!0):(o(),r("div",_e,[ve,e(v,{color:"primary",onClick:t[4]||(t[4]=m=>O())},{default:l(()=>[p(" Selaa töitä ")]),_:1})])),j.value?(o(),h(_,{key:2},{default:l(()=>[e(v,{flat:"",rounded:"",id:"back-btn",onClick:S},{default:l(()=>[e(d,{icon:"mdi-arrow-left"})]),_:1}),e(_,{id:"images-container"},{default:l(()=>[e(_,{class:"main-image-container"},{default:l(()=>[e(b,{style:{width:"100%",height:"100%"},class:"job-image"})]),_:1}),pe]),_:1}),e(b,{type:"article"}),e(g,{class:"mt-5"}),e(b,{type:"list-item-three-line"}),e(g,{class:"mt-5 mb-5"}),e(D,{class:"pa-5",elevation:"8"},{default:l(()=>[i("div",null,[i("div",fe,[e(d,{icon:"mdi-account"}),e(b,{type:"text",width:"300px"})]),i("div",ye,[e(b,{type:"text",width:"300px",height:"20px",style:{"margin-top":"-10px"}})])]),e(b,{width:"200px",height:"40px",class:"mt-6"})]),_:1})]),_:1})):u("",!0)])]))}},we=M(he,[["__scopeId","data-v-72e65c9c"]]);export{we as default};
