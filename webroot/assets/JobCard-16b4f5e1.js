import{a8 as M,aa as S,ab as N,a9 as z,ac as I,ad as o,ah as T,af as l,ak as s,t as r,ag as e,ao as H,N as j,V as P,am as c,b8 as k,aO as w,ae as n,Z as p,aq as V,ai as u,b9 as x,al as g,Q as R,aj as q}from"./index-61dd75c5.js";import{V as A}from"./VSkeletonLoader-0f193a3e.js";import{c as E,V as F,b as C}from"./VForm-00da143e.js";import{a as O}from"./VHover-9e0d4637.js";const Q={style:{position:"relative"},class:"job-wrapper"},U={class:"job-content"},Z={class:"job-main"},$={class:"job-title"},G={class:"job-description"},K={class:"job-info small"},W={class:"job-info-item"},X={class:"job-info-item"},Y={key:0,class:"area-chip"},ee={key:0,style:{"line-height":"25px","letter-spacing":"2px"}},te={class:"job-info"},se={class:"job-info-item"},ae={class:"job-info-item mt-2"},oe={key:0,class:"area-chip"},ie={key:0,style:{"line-height":"25px","letter-spacing":"2px"}},ne={key:0,class:"deleted"},le={key:0,class:"action-btns"},re={__name:"JobCard",props:["job","myListing"],setup(L){const v=L;window.scrollTo(0,0),S(),N();const a=z(),t=v.job,h=v.myListing;function f(i,d){return i.job_images&&i.job_images.length>0?a.url+"/job-image/"+i.job_images[0].name+".jpg":a.url+"/no-img.png"}function D(i){if(window.confirm("Haluatko varmasti poistaa listauksen "+i.title+"?")){const b={job_id:i.hashed_id};a.deleteListing(b).then(y=>{i.is_deleted=!0})}}function J(i){return i.is_deleted?"":a.lightTheme?"grey-lighten-3":"grey-darken-3"}return(i,d)=>{const b=I("router-link");return o(),T(O,null,{default:l(({isHovering:y,props:B})=>[s("div",Q,[r(b,{to:e(t).is_deleted?"":"/jobs/"+e(t).hashed_id,disabled:e(t).is_deleted},{default:l(()=>[r(H,j({class:["job",{deleted:e(t).is_deleted}],elevation:y?6:3},B,{disabled:e(t).is_deleted}),{default:l(()=>[r(P,{src:f(e(t)),"lazy-src":f(e(t),!0),cover:"",class:"job-image"},{placeholder:l(()=>[r(A,{type:"image",round:"",theme:e(a).theme},null,8,["theme"])]),_:1},8,["src","lazy-src"]),s("div",U,[s("div",Z,[s("div",$,c(e(t).title),1),s("div",G,c(e(a).jobShortInfo(e(t))),1),k(s("div",K,[s("div",W,"Julkaistu "+c(e(a).formatDate(e(t).created_at,"DD.MM")),1),s("div",X,[s("div",{class:"area-container",style:w(e(h)?"margin-right: 50px;":"")},[(o(!0),n(p,null,V(e(t).area,(_,m)=>(o(),n(p,{key:m},[m<1?(o(),n("div",Y,c(_),1)):u("",!0)],64))),128)),e(t).area.length>2?(o(),n("div",ee," +"+c(e(t).area.length-2),1)):u("",!0)],4)])],512),[[x,e(a).window.width<1199]])]),k(s("div",te,[s("div",se,"Julkaistu "+c(e(a).formatDate(e(t).created_at,"DD.MM")),1),s("div",ae,[s("div",{class:"area-container",style:w(e(h)?"margin-right: 50px;":"")},[(o(!0),n(p,null,V(e(t).area,(_,m)=>(o(),n(p,{key:m},[m<2?(o(),n("div",oe,c(_),1)):u("",!0)],64))),128)),e(t).area.length>2?(o(),n("div",ie," +"+c(e(t).area.length-2),1)):u("",!0)],4)])],512),[[x,e(a).window.width>=1199]])]),e(h)&&e(t).is_deleted?(o(),n("div",ne)):u("",!0)]),_:2},1040,["class","elevation","disabled"])]),_:2},1032,["to","disabled"]),e(h)?(o(),n("div",le,[r(E,{onClick:d[2]||(d[2]=g(()=>{},["stop"])),theme:e(a).theme,location:"bottom end"},{activator:l(({props:_})=>[r(R,j({onClick:d[0]||(d[0]=g(()=>{},["stop"]))},_,{icon:"mdi-dots-vertical",class:"more-btn",color:J,disabled:e(t).is_deleted}),null,16,["disabled"])]),default:l(()=>[r(F,null,{default:l(()=>[r(C,{onClick:d[1]||(d[1]=g(_=>D(e(t)),["stop"])),class:"menu-action-btn text-red"},{default:l(()=>[r(C,null,{default:l(()=>[q(" Poista listaus ")]),_:1})]),_:1})]),_:1})]),_:2},1032,["theme"])])):u("",!0)])]),_:1})}}},me=M(re,[["__scopeId","data-v-698c8550"]]);export{me as J};
