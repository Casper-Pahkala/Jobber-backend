import{ab as L,ac as O,r as n,c as A,ae as k,af as D,az as t,t as s,ag as l,X as T,ah as i,ai as z,aE as K,aj as F,a6 as X,ak as C,aF as R,P as b,aA as q,aB as G}from"./index-624479a9.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{V as M}from"./VContainer-40989895.js";import{a as Q,V as Y}from"./VDialog-84372a38.js";import{a as Z,V as j}from"./VImg-ac374819.js";import{V as ee,c as ae,e as te}from"./VCard-23dcc96c.js";const se=g=>(q("data-v-acfc9faf"),g=g(),G(),g),le={class:"main-wrapper"},oe={class:"main-content"},ne={class:"row"},ie={class:"profile-image-container"},re={key:1,class:"profile-image empty"},ce={class:"user-info"},ue={class:"fullname"},de={class:"joined-at"},fe=se(()=>t("canvas",{id:"imageCanvas",style:{display:"none"}},null,-1)),ge={class:"new-profile-img-wrapper"},me={class:"new-profile-img-container"},pe={__name:"Account",setup(g){const e=L();O();const I=n(null),r=n(!1),v=n(null),h=n(null);n(null);const x=n(0),P=A(()=>e.user?e.user.first_name+" "+e.user.last_name:""),$=A(()=>e.user?"Käyttäjä luotu "+e.formatDate(e.user.created_at):"");e.user||(e.loginDialogShowing=!0);function S(m){const a=m.target.files[0];if(a)if(a.type.startsWith("image/")&&!a.type.startsWith("image/gif")){h.value=null,v.value=null,e.loading=!0,r.value=!0;var o=new FileReader;o.onload=function(U){const c=new Image;c.onload=()=>{let p=1080,_=1080;const u=document.getElementById("imageCanvas"),W=u.getContext("2d"),y=c.width/c.height,E=p/_;let d,f,V,w;y>E?(f=_,d=f*y,w=0,V=(d-p)/2):(d=p,f=d/y,V=0,w=(f-_)/2),u.width=p,u.height=_,W.drawImage(c,-V,-w,d,f),u.toBlob(H=>{h.value=new File([H],a.name,{type:a.type}),v.value=u.toDataURL("image/jpeg",.8),e.loading=!1},a.type,.8)},c.src=U.target.result},o.readAsDataURL(a)}else e.snackbarText="Valitse kuva tiedostotyyppi",e.snackbarColor="red-darken-2",e.snackbar=!0}function B(){I.value.click()}function N(){let m={image:h.value};e.loading=!0,e.loadingBackground=!0,e.uploadProfileImage(m).then(a=>{r.value=!1,e.loading=!1,e.loadingBackground=!1,x.value++}).catch(a=>{e.loading=!1,e.loadingBackground=!1})}return e.tab="account",(m,a)=>(k(),D(T,null,[t("div",le,[t("div",oe,[s(M,{style:{"margin-top":"120px"}},{default:l(()=>[t("div",ne,[t("div",ie,[i(e).user&&i(e).user.has_image?(k(),z(j,{src:`${i(e).url}/profile-image/${i(e).user.id}?${Date.now()}`,cover:"",class:"profile-image",key:x.value},{placeholder:l(()=>[s(Z,{class:"fill-height ma-0",align:"center",justify:"center"},{default:l(()=>[s(K,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),_:1},8,["src"])):F("",!0),i(e).user&&!i(e).user.has_image?(k(),D("div",re,[s(X,{class:"empty-icon"},{default:l(()=>[C(" mdi-account ")]),_:1})])):F("",!0),t("div",{onClick:a[0]||(a[0]=o=>B()),class:"change-img-text"},"Vaihda kuva")]),t("div",ce,[t("span",ue,R(P.value),1),t("span",de,R($.value),1)])])]),_:1})])]),t("input",{type:"file",ref_key:"fileInput",ref:I,onChange:S,style:{display:"none"},id:"customFileInput"},null,544),s(Q,{modelValue:r.value,"onUpdate:modelValue":a[4]||(a[4]=o=>r.value=o),width:"500"},{default:l(()=>[s(ee,null,{default:l(()=>[fe,s(ae,null,{default:l(()=>[t("div",ge,[t("div",me,[s(j,{src:v.value,alt:"your image",cover:"","aspect-ratio":"1",id:"new-profile-img"},null,8,["src"])]),t("div",{onClick:a[1]||(a[1]=o=>B()),class:"change-img-text"},"Vaihda kuva")])]),_:1}),s(te,null,{default:l(()=>[s(Y,{class:"d-flex justify-space-between"},{default:l(()=>[s(b,{onClick:a[2]||(a[2]=o=>r.value=!1),class:"text-none"},{default:l(()=>[C("Peruuta")]),_:1}),s(b,{color:"primary",onClick:a[3]||(a[3]=o=>N()),class:"text-none"},{default:l(()=>[C("Valmis")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},ke=J(pe,[["__scopeId","data-v-acfc9faf"]]);export{ke as default};