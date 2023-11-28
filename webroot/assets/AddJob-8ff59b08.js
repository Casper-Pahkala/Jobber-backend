import{_ as ke,Z as Ve,r as u,c as te,af as he,a0 as d,a1 as y,a3 as O,a4 as b,a2 as t,a5 as w,a6 as r,t as l,P as v,X as k,ac as _e,a7 as s,a9 as D,az as be,aa as we,ab as xe,aw as x,a8 as L,M as Te,bw as Ce,ad as je,ae as Se}from"./index-1e2fd370.js";import{_ as Ue,b as Ie,V as De}from"./VDivider-9099ac37.js";import{V as T}from"./VContainer-80b7a4ef.js";import{a as X,b as $,c as A,V as Re}from"./VWindowItem-ac96473d.js";import{d as G,l as Fe,k as Me,m as Le,j as $e}from"./VForm-3fcb8b49.js";import{a as Ae,b as Je,V as We}from"./VTextarea-43f6fc59.js";const i=R=>(je("data-v-7a26fc9b"),R=R(),Se(),R),Pe=i(()=>s("h1",{class:"pb-5"},"Luo listaus",-1)),He=i(()=>s("div",{class:"title"},[s("h2",null,"Kuvat")],-1)),Ke={class:"content"},ze=i(()=>s("canvas",{id:"imageCanvas",style:{display:"none"}},null,-1)),Be={style:{display:"flex","flex-direction":"column","align-items":"center",gap:"10px"}},Ee={class:"actions"},Ne=i(()=>s("div",{class:"title"},[s("h2",null,"Tiedot")],-1)),qe={class:"content"},Ye=i(()=>s("h4",{class:"pl-1"},"Mikä on työn otsikko? *",-1)),Oe=i(()=>s("span",{class:"pl-1"},"Esim. Lastenhoitaja tai Nurmikonleikkaaja",-1)),Xe=i(()=>s("h4",{class:"pl-1"},"Mikä on kohde alueesi? *",-1)),Ge=i(()=>s("span",{class:"pl-1"},"Esim. Suomi tai Helsinki, Suomi",-1)),Ze={class:"actions"},Qe=i(()=>s("div",{class:"title"},[s("h2",null,"Tiedot")],-1)),ea={class:"content"},aa=i(()=>s("h4",{class:"pl-1"},"Milloin työt alkavat? *",-1)),la=i(()=>s("h4",{class:"pl-1"},"Mikä on työsopimuksen tyyppi?",-1)),ta=i(()=>s("h4",{class:"pl-1"},"Mikä on työn kesto?",-1)),sa=i(()=>s("span",{class:"pl-1"},"Jätä tyhjäksi jos ei tiedossa",-1)),oa=i(()=>s("h4",{class:"pl-1"},"Mikä on palkan tyyppi?",-1)),na=i(()=>s("span",{class:"pl-1"},"Jätä tyhjäksi jos ei tiedossa",-1)),ua=i(()=>s("h4",{class:"pl-1"},"Paljonko tunteja viikossa?",-1)),ia=i(()=>s("span",{class:"pl-1"},"Jätä tyhjäksi jos ei tiedossa",-1)),da=i(()=>s("h4",{class:"pl-1"},"Mikä on palkan tyyppi?",-1)),ra=i(()=>s("span",{class:"pl-1"},"Jätä tyhjäksi jos ei tiedossa",-1)),ma={class:"actions"},pa={key:1,class:"login-container"},ca={__name:"AddJob",setup(R){const se=ke(),m=Ve(),c=u([]),J=u([]),Z=u(null),W=u("one"),oe=["Sopimuksen mukaan","Tarkka päivämäärä"],ne=["Keikkatyö","Vakituinen","Toistaiseksi voimassa oleva"],Q=["Tuntipalkka","Urakkapalkka"],ee=["Tuntipalkka","Kuukausipalkka"],P=u(""),H=u(""),V=u(""),K=u(!1),z=u([]),B=u(""),C=u(!1),F=u(0),M=u(null),ae=te(()=>M.value?_e(M.value).format("DD.MM.YYYY"):null),E=u(null),j=u(0),N=u(null),f=u(0),q=u(null),S=u(null),ue=te(()=>{if(c.value.length===0)return!0;let o=!0;return c.value.forEach(e=>{e.ready||(o=!1)}),o?(console.log("uploaded all"),!0):!1});function ie(){C.value=!1,M.value=E.value}function de(){Z.value.click()}function re(o){c.value=c.value.filter((e,p)=>p!==o),J.value=J.value.filter((e,p)=>p!==o)}function me(o){const e=o.target.files[0];if(e)if(e.type.startsWith("image/")&&!e.type.startsWith("image/gif")){var p=new FileReader;p.onload=function(a){const n=new Image;n.onload=()=>{let h=n.width,_=n.height;(h>1920||_>1080)&&(h/1920>_/1080?(_*=1920/h,h=1920):(h*=1080/_,_=1080));const I=document.getElementById("imageCanvas"),fe=I.getContext("2d");I.width=h,I.height=_,fe.drawImage(n,0,0,h,_);const ge=I.toDataURL("image/jpeg",.8);c.value.push({image:ge,progress:10,ready:!1}),I.toBlob(le=>{const ye=new File([le],e.name,{type:"image/jpeg"});J.value.push(ye),pe(le)},"image/jpeg",.8)},n.src=a.target.result},p.readAsDataURL(e)}else m.snackbarText="Valitse kuva tiedostotyyppi",m.snackbarColor="red-darken-2",m.snackbar=!0}function pe(o){const e=new XMLHttpRequest,p=new FormData;p.append("image",o);let a=c.value.length-1;a<0&&(a=0);const n=c.value[a];e.upload.addEventListener("progress",g=>{if(g.lengthComputable){const Y=g.loaded/g.total*100;n.progress=Y,Y>=100&&setTimeout(()=>{n.ready=!0},1e3)}}),e.open("POST",`${m.url}/api/jobs/upload-image.json`,!0),e.onreadystatechange=function(){if(e.readyState==4&&e.status==200)try{const g=JSON.parse(e.responseText).data;n.id=g.image_id,console.log(n)}catch(g){console.error("Error parsing response:",g)}},e.send(p)}function U(o){W.value=o}function ce(){let o=null;z.value=[],setTimeout(()=>{o=V.value},100),setTimeout(()=>{V.value&&V.value.length>0&&o===V.value&&(K.value=!0,m.getAddressSuggestions(V.value).then(e=>{z.value=e.suggestions,K.value=!1}))},500)}function ve(){m.loading=!0;let o={title:P.value,area:H.value,description:B.value,images:c.value.map(e=>e.id),date:F.value===1?M.value:null,contract_type:j.value,salary_type:f.value,salary:S.value};j.value===0?o.hours=N.value:o.hours=q.value,m.addJob(o).then(e=>{se.replace("/jobs/"+e.job_id)}).catch(()=>{})}return m.user||(m.loginDialogShowing=!0),(o,e)=>{const p=he("v-date-picker");return d(),y(k,null,[O(m).user?(d(),b(T,{key:0,class:"add-container pa-10"},{default:t(()=>[Pe,l(Re,{modelValue:W.value,"onUpdate:modelValue":e[23]||(e[23]=a=>W.value=a),class:"main-window"},{default:t(()=>[l(X,{value:"one",class:"window"},{default:t(()=>[He,s("div",Ke,[l(Ie,{justify:"center",align:"center",class:"images mt-10"},{default:t(()=>[(d(!0),y(k,null,D(c.value,(a,n)=>(d(),b(G,{key:n,elevation:"8",width:"180"},{default:t(()=>[l(De,{src:a?a.image:"#",alt:"your image",cover:"","aspect-ratio":"1"},null,8,["src"]),a.ready?(d(),b(v,{key:0,class:"close-btn",icon:"mdi-delete",elevation:"8",size:"35",onClick:g=>re(n)},null,8,["onClick"])):w("",!0),a.ready?w("",!0):(d(),b(be,{key:1,class:"progress-bar","model-value":a.progress,color:"primary"},null,8,["model-value"]))]),_:2},1024))),128)),ze,c.value.length<=9?(d(),b(G,{key:0,elevation:"8",width:"180",height:"180"},{default:t(()=>[s("input",{type:"file",ref_key:"fileInput",ref:Z,onChange:me,style:{display:"none"},id:"customFileInput"},null,544),l(v,{onClick:de,icon:"mdi-plus",flat:"",id:"add-img-btn",class:"text-none"},{default:t(()=>[s("div",Be,[l(we,{style:{"font-size":"35px"}}),r(" Lisää kuva ")])]),_:1})]),_:1})):w("",!0)]),_:1})]),s("div",Ee,[l(v,{color:"primary",class:"text-none","append-icon":"mdi-chevron-right",style:{float:"right"},onClick:e[0]||(e[0]=a=>U("two")),disabled:!ue.value},{default:t(()=>[r("Seuraava")]),_:1},8,["disabled"])])]),_:1}),l(X,{value:"two",class:"window"},{default:t(()=>[Ne,s("div",qe,[l(Fe,{onSubmit:e[6]||(e[6]=xe(a=>U("three"),["prevent"])),ref:"jobForm"},{default:t(()=>[l(T,null,{default:t(()=>[Ye,Oe,l(x,{modelValue:P.value,"onUpdate:modelValue":e[1]||(e[1]=a=>P.value=a),label:"Työn otsikko",rules:o.jobTitleRules,required:""},null,8,["modelValue","rules"])]),_:1}),l(T,null,{default:t(()=>[Xe,Ge,l(Ae,{label:"Alue",items:z.value,"onUpdate:search":[e[2]||(e[2]=a=>ce()),e[3]||(e[3]=a=>V.value=a)],"hide-no-data":"",search:V.value,modelValue:H.value,"onUpdate:modelValue":e[4]||(e[4]=a=>H.value=a),"auto-select-first":"",clearable:"",loading:K.value},null,8,["items","search","modelValue","loading"])]),_:1}),l(T,null,{default:t(()=>[l(Je,{label:"Kuvaus",rules:o.descriptionRules,required:"",modelValue:B.value,"onUpdate:modelValue":e[5]||(e[5]=a=>B.value=a),"no-resize":""},null,8,["rules","modelValue"])]),_:1})]),_:1},512)]),s("div",Ze,[l(v,{onClick:e[7]||(e[7]=a=>U("one")),class:"text-none"},{default:t(()=>[r("Takaisin")]),_:1}),l(v,{color:"primary",type:"submit",class:"text-none",onClick:e[8]||(e[8]=a=>U("three")),"append-icon":"mdi-chevron-right"},{default:t(()=>[r("Seuraava")]),_:1})])]),_:1}),l(X,{value:"three",class:"window"},{default:t(()=>[Qe,s("div",ea,[l(T,null,{default:t(()=>[aa,l($,{mandatory:"","selected-class":"text-primary",column:"",modelValue:F.value,"onUpdate:modelValue":e[9]||(e[9]=a=>F.value=a)},{default:t(()=>[(d(),y(k,null,D(oe,(a,n)=>l(A,{key:n},{default:t(()=>[r(L(a),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),F.value==1?(d(),b(Me,{key:0,modelValue:C.value,"onUpdate:modelValue":e[14]||(e[14]=a=>C.value=a),"max-width":"400"},{activator:t(({on:a})=>[l(x,Te({modelValue:ae.value,"onUpdate:modelValue":e[10]||(e[10]=n=>ae.value=n),label:"Päivä",readonly:""},Ce(a),{"onUpdate:focused":e[11]||(e[11]=n=>C.value=!0),rules:o.jobDateRules,required:""}),null,16,["modelValue","rules"])]),default:t(()=>[l(G,null,{default:t(()=>[l(Le,null,{default:t(()=>[l(We,{locale:"fi"},{default:t(()=>[l(p,{modelValue:E.value,"onUpdate:modelValue":e[12]||(e[12]=a=>E.value=a),"hide-actions":"",min:o.minDate,title:"Valitse päivämäärä"},null,8,["modelValue","min"])]),_:1})]),_:1}),l($e,{style:{direction:"rtl"}},{default:t(()=>[l(v,{flat:"",onClick:ie},{default:t(()=>[r("OK")]),_:1}),l(v,{flat:"",onClick:e[13]||(e[13]=a=>C.value=!1)},{default:t(()=>[r("Peruuta")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):w("",!0)]),_:1}),l(T,null,{default:t(()=>[la,l($,{mandatory:"","selected-class":"text-primary",column:"",modelValue:j.value,"onUpdate:modelValue":e[15]||(e[15]=a=>j.value=a)},{default:t(()=>[(d(),y(k,null,D(ne,(a,n)=>l(A,{key:n},{default:t(()=>[r(L(a),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),j.value==0?(d(),y(k,{key:0},[ta,sa,l(x,{label:"kesto",suffix:"h",type:"number",modelValue:N.value,"onUpdate:modelValue":[e[16]||(e[16]=a=>N.value=a),o.estimatedTimeUpdated],min:"0",rules:o.numberRules},null,8,["modelValue","onUpdate:modelValue","rules"]),oa,na,l($,{mandatory:"","selected-class":"text-primary",column:"",modelValue:f.value,"onUpdate:modelValue":e[17]||(e[17]=a=>f.value=a)},{default:t(()=>[(d(),y(k,null,D(Q,(a,n)=>l(A,{key:n},{default:t(()=>[r(L(a),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),l(x,{label:Q[f.value],suffix:f.value==0?"€/h":"€",type:"number",modelValue:S.value,"onUpdate:modelValue":e[18]||(e[18]=a=>S.value=a),min:"0",rules:o.numberRules},null,8,["label","suffix","modelValue","rules"])],64)):(d(),y(k,{key:1},[ua,ia,l(x,{label:"Tunteja viikossa",suffix:"h",type:"number",modelValue:q.value,"onUpdate:modelValue":e[19]||(e[19]=a=>q.value=a),min:"0",rules:o.numberRules},null,8,["modelValue","rules"]),da,ra,l($,{mandatory:"","selected-class":"text-primary",column:"",modelValue:f.value,"onUpdate:modelValue":e[20]||(e[20]=a=>f.value=a)},{default:t(()=>[(d(),y(k,null,D(ee,(a,n)=>l(A,{key:n},{default:t(()=>[r(L(a),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),l(x,{label:ee[f.value],suffix:f.value==0?"€/h":"€/kk",type:"number",modelValue:S.value,"onUpdate:modelValue":e[21]||(e[21]=a=>S.value=a),min:"0",rules:o.numberRules},null,8,["label","suffix","modelValue","rules"])],64))]),_:1})]),s("div",ma,[l(v,{onClick:e[22]||(e[22]=a=>U("two")),class:"text-none"},{default:t(()=>[r("Takaisin")]),_:1}),l(v,{color:"primary",class:"text-none","append-icon":"mdi-chevron-right",style:{float:"right"},onClick:ve},{default:t(()=>[r("Luo listaus")]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1})):w("",!0),O(m).user?w("",!0):(d(),y("div",pa,[r(" Kirjaudu sisään niin pääset lisäämään listauksen "),l(v,{class:"mt-7",size:"large",color:"primary",onClick:e[24]||(e[24]=a=>O(m).loginDialogShowing=!0)},{default:t(()=>[r(" Kirjaudu ")]),_:1})]))],64)}}},ha=Ue(ca,[["__scopeId","data-v-7a26fc9b"]]);export{ha as default};
