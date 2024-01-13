import{a8 as H,ab as M,aa as Q,a9 as Z,r as y,c as L,ad as o,ae as r,ak as i,Z as I,t as e,af as l,ax as v,Q as p,ai as u,ah as g,a5 as d,V as N,a7 as $,aq as D,an as G,am as c,aj as h,ag as _,ao as E,at as W,au as X}from"./index-0ea08868.js";import{a as F,V as b}from"./VDivider-1fa0efd1.js";import{V as k}from"./VSkeletonLoader-aec0dd26.js";const J=j=>(W("data-v-0e57cdbb"),j=j(),X(),j),Y={class:"main-wrapper"},ee={class:"main-content"},te={class:"carousel mt-2"},ae={id:"job-title"},se={key:0,class:"job-info"},le={key:1,class:"job-info"},oe={class:"area-container"},ie={key:2,class:"job-info"},ne={key:3,class:"job-info"},re={key:4,class:"job-info"},ce=J(()=>i("h4",{class:"mt-3"},"Kuvaus",-1)),ue={id:"job-description",class:"mt-2"},de={style:{display:"flex",gap:"5px"}},me={class:"mt-2"},_e={key:1,class:"listing-deleted"},ve=J(()=>i("div",null," Listaus poistettu ",-1)),pe=J(()=>i("div",{class:"carousel mt-2"},null,-1)),he={style:{display:"flex",gap:"5px","align-items":"center"}},fe={class:"mb-7"},ye={__name:"Job",setup(j){const T=M(),C=Q(),s=Z(),t=y({}),w=y(!0);y(null),y(null);const S=y(""),K=L(()=>t.value.user&&s.user&&t.value.user.hashed_id===s.user.id),O=L(()=>(console.log(s.fullscreen,"ss"),s.fullscreen)),V=y(0);s.displayedJob.id=T.params.id,s.fetchJob(s.displayedJob.id).then(n=>{let a=n.data;a.error||(a.job.area=JSON.parse(a.job.area),t.value=a.job,S.value=a.job.user.first_name+" "+a.job.user.last_name,s.displayedJob.userId=a.job.user.hashed_id),w.value=!1});function B(){window.history.length>1?C.back():C.replace({path:"/jobs"})}function R(){C.replace({path:"/jobs"})}window.scrollTo(0,0);function P(){s.chat.jobId=s.displayedJob.id,s.chat.userId=s.displayedJob.userId,s.chatOpen=!0}function x(n=0,a=!1){return t.value.job_images&&t.value.job_images.length>0?s.url+"/job-image/"+t.value.job_images[n].name+".jpg":s.url+"/no-img.png"}function z(){s.toggleFullscreen(document.getElementById("mainImageContainer"))}function U(){return console.log(t.value),t.value.contract_type===0?"Keikka työ":t.value.contract_type===1?"Vakituinen työsopimus":"Toistaiseksi voimassa oleva työsopimus"}function q(){let n=t.value;if(n.salary){let a="";return n.contract_type===0?n.salary_type===0?a="€/h":a="€":n.salary_type===0?a="€/h":a="€/kk",n.salary+" "+a}return"Sopimuksen mukaan"}function A(){if(window.confirm("Haluatko varmasti poistaa listauksen "+t.value.title+"?")){const a={job_id:t.value.hashed_id};s.deleteListing(a).then(m=>{t.value.is_deleted=!0})}}return document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(s.fullscreen=!1)}),(n,a)=>(o(),r("div",Y,[i("div",ee,[!t.value.is_deleted&&!w.value?(o(),r(I,{key:0},[e(v,null,{default:l(()=>[e(p,{flat:"",rounded:"",id:"back-btn",onClick:B},{default:l(()=>[e(d,{icon:"mdi-arrow-left"})]),_:1}),e(v,{id:"images-container"},{default:l(()=>[e(v,{class:"main-image-container",id:"mainImageContainer"},{default:l(()=>[e(N,{src:x(V.value),"lazy-src":x(V.value,!0),contain:"",class:"job-image",id:"mainJobImage"},{placeholder:l(()=>[e(F,{class:"fill-height ma-0",align:"center",justify:"center"},{default:l(()=>[e($,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),_:1},8,["src","lazy-src"]),t.value.job_images.length>0?(o(),g(p,{key:0,class:"fullscreen-btn",flat:"",icon:"mdi-fullscreen",elevation:"10",onClick:a[0]||(a[0]=m=>z())})):u("",!0),O.value?(o(),g(p,{key:1,class:"close-btn",flat:"",icon:"mdi-close",elevation:"8",onClick:a[1]||(a[1]=m=>z())})):u("",!0)]),_:1}),i("div",te,[(o(!0),r(I,null,D(t.value.job_images,(m,f)=>(o(),g(N,{key:f,src:x(f),"lazy-src":x(f,!0),cover:"",class:G(["carousel-img",n.image===n.mainImage?"selected":""]),onClick:ge=>V.value=f,"aspect-ratio":"1"},{placeholder:l(()=>[e(F,{class:"fill-height ma-0",align:"center",justify:"center"},{default:l(()=>[e($,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),_:2},1032,["src","lazy-src","onClick","class"]))),128))])]),_:1}),i("h1",ae,c(t.value.title),1),e(b),t.value?(o(),r("div",se,[e(d,{icon:"mdi-briefcase"}),h(c(U()),1)])):u("",!0),t.value.area?(o(),r("div",le,[e(d,{icon:"mdi-map-marker"}),i("div",oe,[(o(!0),r(I,null,D(t.value.area,(m,f)=>(o(),r("div",{key:f,class:"area-chip"},c(m),1))),128))])])):u("",!0),t.value.date?(o(),r("div",ie,[e(d,{icon:"mdi-calendar-range"}),h(" "+c(_(s).formatDate(t.value.date)),1)])):u("",!0),t.value.hours?(o(),r("div",ne,[e(d,{icon:"mdi-timer-outline"}),h(" "+c(t.value.hours)+"h "+c(t.value.contract_type===1||t.value.contract_type===2?"/ viikko":""),1)])):u("",!0),t.value.salary?(o(),r("div",re,[e(d,{icon:"mdi-cash"}),h(" "+c(q()),1)])):u("",!0),e(b,{class:"mt-5"}),ce,i("p",ue,c(t.value.description),1)]),_:1}),e(b,{class:"mt-5 mb-5"}),i("div",null,[e(v,null,{default:l(()=>[e(E,{class:"user-card pa-5",elevation:"8"},{default:l(()=>[i("div",null,[i("div",de,[e(d,{icon:"mdi-account"}),i("h3",null,c(S.value),1)]),i("div",me," Käyttäjä luotu "+c(_(s).formatDate(t.value.user.created_at)),1)]),K.value?(o(),g(p,{key:1,class:"mt-4",color:"red",style:{color:"white"},onClick:a[3]||(a[3]=m=>A())},{default:l(()=>[h(" Poista listaus ")]),_:1})):(o(),g(p,{key:0,class:"mt-6",color:"primary",onClick:a[2]||(a[2]=m=>P())},{default:l(()=>[h(" Ota yhteyttä ")]),_:1}))]),_:1})]),_:1}),e(b,{class:"mt-5 mb-5"})])],64)):w.value?u("",!0):(o(),r("div",_e,[ve,e(p,{color:"primary",onClick:a[4]||(a[4]=m=>R())},{default:l(()=>[h(" Selaa töitä ")]),_:1})])),w.value?(o(),g(v,{key:2},{default:l(()=>[e(p,{flat:"",rounded:"",id:"back-btn",onClick:B},{default:l(()=>[e(d,{icon:"mdi-arrow-left"})]),_:1}),e(v,{id:"images-container"},{default:l(()=>[e(v,{class:"main-image-container"},{default:l(()=>[e(k,{style:{width:"100%",height:"100%"},class:"job-image",theme:_(s).theme},null,8,["theme"])]),_:1}),pe]),_:1}),e(k,{type:"article",theme:_(s).theme},null,8,["theme"]),e(b,{class:"mt-5"}),e(k,{type:"list-item-three-line",theme:_(s).theme},null,8,["theme"]),e(b,{class:"mt-5 mb-5"}),e(E,{class:"pa-5",elevation:"8"},{default:l(()=>[i("div",null,[i("div",he,[e(d,{icon:"mdi-account"}),e(k,{type:"text",width:"300px",theme:_(s).theme},null,8,["theme"])]),i("div",fe,[e(k,{type:"text",width:"300px",height:"20px",style:{"margin-top":"-10px"},theme:_(s).theme},null,8,["theme"])])]),e(k,{width:"200px",height:"40px",class:"mt-6",theme:_(s).theme},null,8,["theme"])]),_:1})]),_:1})):u("",!0)])]))}},we=H(ye,[["__scopeId","data-v-0e57cdbb"]]);export{we as default};
