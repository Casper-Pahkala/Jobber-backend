import{a8 as Ce,a9 as je,r as i,c as w,as as ve,ad as y,ah as W,af as s,t,aP as ye,al as be,ax as H,ae as I,aq as le,ao as oe,V as Ye,Q as b,Z as E,ak as p,a5 as ke,aj as x,ai as q,aw as fe,aN as B,am as ce,N as Y,bO as Ke,at as we,au as Ie,bP as Oe,p as Ge,az as ie,v as Qe,m as Xe,aA as Ze,w as ea,x as aa,bQ as ta,l as la,y as sa,aE as na,n as oa,L as ia,aL as ua,F as ra,E as da,T as va,s as fa,G as Ve,u as ca,bR as ue,A as J,q as ma,bS as _e,_ as he,aa as pa,ab as ga,ag as re}from"./index-857362eb.js";import{V as ya,a as xe,b as me,c as pe}from"./VWindowItem-4d37bf72.js";import{h as Pe,g as Se,f as Le}from"./VForm-b7fd9833.js";import{V as N}from"./VHover-26988e5b.js";import{V as ba,a as ka,b as Va}from"./VLocaleProvider-91b26684.js";import{b as _a}from"./VTextarea-142029fa.js";import{J as ha}from"./JobCard-eb765a96.js";import"./VDivider-c01f904d.js";import"./VSkeletonLoader-6ae1cf95.js";const L=e=>(we("data-v-7d730705"),e=e(),Ie(),e),xa=L(()=>p("canvas",{id:"imageCanvas",style:{display:"none"}},null,-1)),Pa={style:{display:"flex","flex-direction":"column","align-items":"center",gap:"10px"}},Sa=L(()=>p("h4",{class:"pl-1"},"Mikä on työn otsikko? *",-1)),La=L(()=>p("span",{class:"pl-1"},"Esim. Lastenhoitaja tai Nurmikonleikkaaja",-1)),Ca=L(()=>p("h4",{class:"pl-1"},"Milloin työt alkavat? *",-1)),ja=L(()=>p("h4",{class:"pl-1"},"Mikä on kohde alueesi? *",-1)),wa=L(()=>p("span",{class:"pl-1"},"Esim. Suomi tai Helsinki, Suomi",-1)),Ia=L(()=>p("h4",{class:"pl-1"},"Mikä on työsopimuksen tyyppi?",-1)),Ta=L(()=>p("h4",{class:"pl-1"},"Mikä on työn kesto?",-1)),$a=L(()=>p("span",{class:"pl-1"},"Jätä tyhjäksi jos ei tiedossa",-1)),Aa=L(()=>p("h4",{class:"pl-1"},"Mikä on palkan tyyppi?",-1)),Da=L(()=>p("span",{class:"pl-1"},"Jätä määrä tyhjäksi jos ei tiedossa",-1)),Fa={__name:"AddJob",emits:["close"],setup(e,{emit:A}){const c=je(),P=i(!1),o=i(null),g=w(()=>o.value?ve(o.value).format("DD.MM.YYYY"):null),C=i(null),D=i(new Date().toISOString().substr(0,10)),j=i(null),T=i(null),F=i(null),$=i(null),m=i(null),u=i(null),r=i("one"),K=i(null),O=i(null),_=i(null),G=i([]),Q=i(!1),X=i(0),S=i(0),se=["Sopimuksen mukaan","Tarkka päivämäärä"],de=["Keikkatyö","Vakituinen","Toistaiseksi voimassa oleva"],n=["Tuntipalkka","Urakkapalkka"],d=i(40),f=i(2e3),k=i(3e3),V=i(0),M=i(n[0]),$e=w(()=>[...G.value]),Ae=[v=>v?!0:"Syötä otsikko"],De=[v=>v?!0:"Syötä päivämäärä"],Z=[v=>{let a="Syötä arvo",l=!1;return l=!0,v&&(l=!0),parseFloat(v)<=0&&(l=!1,a="Anna arvo isompi kuin 0"),l?!0:a}],Fe=[v=>{let a="Kuvauksen täytyy olla vähintään 20 merkkiä",l=!1;return v&&(l=!0),v&&v.replace(/\s/g,"").length<20&&(l=!1),l?!0:a}],ee=i([]),ae=i([]);function Me(v){const a=v.target.files[0];if(a)if(a.type.startsWith("image/")&&!a.type.startsWith("image/gif")){var l=new FileReader;l.onload=function(h){const z=new Image;z.onload=()=>{let R=z.width,U=z.height;(R>1920||U>1080)&&(R/1920>U/1080?(U*=1920/R,R=1920):(R*=1080/U,U=1080));const te=document.getElementById("imageCanvas"),Ee=te.getContext("2d");te.width=R,te.height=U,Ee.drawImage(z,0,0,R,U);const qe=te.toDataURL("image/jpeg",.8);ae.value.push(qe),te.toBlob(ze=>{const He=new File([ze],a.name,{type:a.type});ee.value.push(He)},a.type,.8)},z.src=h.target.result},l.readAsDataURL(a)}else c.snackbarText="Valitse kuva tiedostotyyppi",c.snackbarColor="red-darken-2",c.snackbar=!0}function Re(){m.value.validate().then(v=>{if(v.valid){const a={title:j.value,description:u.value,address:O.value,image_count:ee.value.length,images:ee.value};T.value&&(a.duration=T.value),ve(o.value).isValid()&&(a.date=ve(o.value).format("YYYY-MM-DD HH:mm:ss")),$.value&&(a.full_salary=$.value),c.loading=!0,c.addJob(a).then(l=>{ne()}).catch(()=>{})}})}function Ue(){P.value=!1,o.value=C.value}function Be(v){F.value&&($.value=v*F.value)}function ge(v){r.value=v}function ne(){A("close")}function Je(){K.value.click()}function Ne(v){ae.value=ae.value.filter((a,l)=>l!==v),ee.value=ee.value.filter((a,l)=>l!==v)}function We(){let v=null;G.value=[],setTimeout(()=>{v=_.value},100),setTimeout(()=>{_.value&&_.value.length>2&&v===_.value&&(Q.value=!0,c.getAddressSuggestions(_.value).then(a=>{G.value=a.suggestions,Q.value=!1}))},500)}return(v,a)=>(y(),W(Le,{"max-width":"700px",persistent:""},{default:s(()=>[t(oe,null,{default:s(()=>[t(ye,null,{default:s(()=>[t(ya,{modelValue:r.value,"onUpdate:modelValue":a[22]||(a[22]=l=>r.value=l)},{default:s(()=>[t(xe,{value:"one"},{default:s(()=>[t(Pe,{onSubmit:a[1]||(a[1]=be(l=>ge("two"),["prevent"]))},{default:s(()=>[t(H,null,{default:s(()=>[t(Se,{style:{height:"440px"},justify:"center",align:"center"},{default:s(()=>[(y(!0),I(E,null,le(ae.value,(l,h)=>(y(),W(N,{key:h,class:"d-flex child-flex",cols:"4"},{default:s(()=>[t(oe,{elevation:"8",width:"180"},{default:s(()=>[t(Ye,{src:l||"#",alt:"your image",cover:"","aspect-ratio":"1"},null,8,["src"]),t(b,{class:"close-btn",icon:"mdi-delete",elevation:"8",size:"35",onClick:z=>Ne(h)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128)),xa,ae.value.length<=5?(y(),W(N,{key:0,class:"d-flex child-flex",cols:"4"},{default:s(()=>[t(oe,{elevation:"8",width:"180",height:"180"},{default:s(()=>[p("input",{type:"file",ref_key:"fileInput",ref:K,onChange:Me,style:{display:"none"},id:"customFileInput"},null,544),t(b,{onClick:Je,icon:"mdi-plus",flat:"",id:"add-img-btn",class:"text-none"},{default:s(()=>[p("div",Pa,[t(ke,{style:{"font-size":"35px"}}),x(" Lisää kuva ")])]),_:1})]),_:1})]),_:1})):q("",!0)]),_:1})]),_:1}),t(fe,null,{default:s(()=>[t(N,{class:"d-flex justify-space-between"},{default:s(()=>[t(b,{onClick:a[0]||(a[0]=l=>ne()),class:"text-none"},{default:s(()=>[x("Peruuta")]),_:1}),t(b,{color:"primary",type:"submit",class:"text-none"},{default:s(()=>[x("Seuraava")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(xe,{value:"two"},{default:s(()=>[t(Pe,{onSubmit:be(Re,["prevent"]),ref_key:"jobForm",ref:m},{default:s(()=>[t(H,null,{default:s(()=>[Sa,La,t(B,{modelValue:j.value,"onUpdate:modelValue":a[2]||(a[2]=l=>j.value=l),label:"Työn otsikko",rules:Ae,required:""},null,8,["modelValue"])]),_:1}),t(H,null,{default:s(()=>[Ca,t(me,{mandatory:"","selected-class":"text-primary",column:"",modelValue:X.value,"onUpdate:modelValue":a[3]||(a[3]=l=>X.value=l)},{default:s(()=>[(y(),I(E,null,le(se,(l,h)=>t(pe,{key:h},{default:s(()=>[x(ce(l),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),X.value==1?(y(),W(Le,{key:0,modelValue:P.value,"onUpdate:modelValue":a[8]||(a[8]=l=>P.value=l),"max-width":"400"},{activator:s(({on:l})=>[t(B,Y({modelValue:g.value,"onUpdate:modelValue":a[4]||(a[4]=h=>g.value=h),label:"Päivä",readonly:""},Ke(l),{"onUpdate:focused":a[5]||(a[5]=h=>P.value=!0),rules:De,required:""}),null,16,["modelValue"])]),default:s(()=>[t(oe,null,{default:s(()=>[t(ye,null,{default:s(()=>[t(ba,{locale:"fi"},{default:s(()=>[t(ka,{modelValue:C.value,"onUpdate:modelValue":a[6]||(a[6]=l=>C.value=l),"hide-actions":"",min:D.value,title:"Valitse päivämäärä"},null,8,["modelValue","min"])]),_:1})]),_:1}),t(fe,{style:{direction:"rtl"}},{default:s(()=>[t(b,{flat:"",onClick:Ue},{default:s(()=>[x("OK")]),_:1}),t(b,{flat:"",onClick:a[7]||(a[7]=l=>P.value=!1)},{default:s(()=>[x("Peruuta")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):q("",!0)]),_:1}),t(H,null,{default:s(()=>[ja,wa,t(Va,{label:"Alue",items:$e.value,"onUpdate:search":[a[9]||(a[9]=l=>We()),a[10]||(a[10]=l=>_.value=l)],"hide-no-data":"",search:_.value,modelValue:O.value,"onUpdate:modelValue":a[11]||(a[11]=l=>O.value=l),"auto-select-first":"",clearable:"",loading:Q.value,multiple:"",chips:""},null,8,["items","search","modelValue","loading"])]),_:1}),t(H,null,{default:s(()=>[Ia,t(me,{mandatory:"","selected-class":"text-primary",column:"",modelValue:S.value,"onUpdate:modelValue":a[12]||(a[12]=l=>S.value=l)},{default:s(()=>[(y(),I(E,null,le(de,(l,h)=>t(pe,{key:h},{default:s(()=>[x(ce(l),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),S.value==0?(y(),I(E,{key:0},[Ta,$a,t(B,{label:"kesto",suffix:"h",type:"number",modelValue:T.value,"onUpdate:modelValue":[a[13]||(a[13]=l=>T.value=l),Be],min:"0",rules:Z},null,8,["modelValue"]),Aa,Da,t(me,{mandatory:"","selected-class":"text-primary",column:"",modelValue:V.value,"onUpdate:modelValue":a[14]||(a[14]=l=>V.value=l)},{default:s(()=>[(y(),I(E,null,le(n,(l,h)=>t(pe,{key:h},{default:s(()=>[x(ce(l),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),t(B,{label:n[V.value],suffix:V.value==0?"€/h":"€",type:"number",modelValue:M.value,"onUpdate:modelValue":a[15]||(a[15]=l=>M.value=l),min:"0",rules:Z},null,8,["label","suffix","modelValue"])],64)):(y(),W(Se,{key:1},{default:s(()=>[t(N,{cols:"4"},{default:s(()=>[t(B,{label:"Tunteja viikossa",suffix:"h",type:"number",modelValue:d.value,"onUpdate:modelValue":a[16]||(a[16]=l=>d.value=l),min:"0",rules:Z},null,8,["modelValue"])]),_:1}),t(N,{cols:"4"},{default:s(()=>[t(B,{label:"Palkan alaraja / kk",suffix:"€",type:"number",modelValue:f.value,"onUpdate:modelValue":a[17]||(a[17]=l=>f.value=l),min:"0",rules:Z},null,8,["modelValue"])]),_:1}),t(N,{cols:"4"},{default:s(()=>[t(B,{label:"Palkan yläraja / kk",suffix:"€",type:"number",modelValue:k.value,"onUpdate:modelValue":a[18]||(a[18]=l=>k.value=l),min:"0",rules:Z},null,8,["modelValue"])]),_:1})]),_:1}))]),_:1}),t(H,null,{default:s(()=>[t(_a,{label:"Kuvaus",rules:Fe,required:"",modelValue:u.value,"onUpdate:modelValue":a[19]||(a[19]=l=>u.value=l)},null,8,["modelValue"])]),_:1}),t(fe,null,{default:s(()=>[t(N,{class:"d-flex justify-space-between"},{default:s(()=>[t(b,{onClick:a[20]||(a[20]=l=>ne()),class:"text-none"},{default:s(()=>[x("Peruuta")]),_:1}),p("div",null,[t(b,{onClick:a[21]||(a[21]=l=>ge("one")),class:"text-none"},{default:s(()=>[x("Takaisin")]),_:1}),t(b,{color:"primary",type:"submit",class:"text-none"},{default:s(()=>[x("Luo ilmoitus")]),_:1})])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(b,{icon:"",onClick:a[23]||(a[23]=l=>ne()),class:"dialog-close-btn",flat:""},{default:s(()=>[t(ke,null,{default:s(()=>[x("mdi-close")]),_:1})]),_:1})]),_:1})]),_:1}))}},Ma=Ce(Fa,[["__scopeId","data-v-7d730705"]]);function Ra(){const e=i([]);Oe(()=>e.value=[]);function A(c,P){e.value[P]=c}return{refs:e,updateRef:A}}const Ua=Ge({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:ie,default:"$first"},prevIcon:{type:ie,default:"$prev"},nextIcon:{type:ie,default:"$next"},lastIcon:{type:ie,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Qe(),...Xe(),...Ze(),...ea(),...aa(),...ta(),...la({tag:"nav"}),...sa(),...na({variant:"text"})},"VPagination"),Ba=oa()({name:"VPagination",props:Ua(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,A){let{slots:c,emit:P}=A;const o=ia(e,"modelValue"),{t:g,n:C}=ua(),{isRtl:D}=ra(),{themeClasses:j}=da(e),{width:T}=va(),F=fa(-1);Ve(void 0,{scoped:!0});const{resizeRef:$}=ca(n=>{if(!n.length)return;const{target:d,contentRect:f}=n[0],k=d.querySelector(".v-pagination__list > *");if(!k)return;const V=f.width,M=k.offsetWidth+parseFloat(getComputedStyle(k).marginRight)*2;F.value=K(V,M)}),m=w(()=>parseInt(e.length,10)),u=w(()=>parseInt(e.start,10)),r=w(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):F.value>=0?F.value:K(T.value,58));function K(n,d){const f=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((n-d*f)/d).toFixed(2)))}const O=w(()=>{if(m.value<=0||isNaN(m.value)||m.value>Number.MAX_SAFE_INTEGER)return[];if(r.value<=0)return[];if(r.value===1)return[o.value];if(m.value<=r.value)return ue(m.value,u.value);const n=r.value%2===0,d=n?r.value/2:Math.floor(r.value/2),f=n?d:d+1,k=m.value-d;if(f-o.value>=0)return[...ue(Math.max(1,r.value-1),u.value),e.ellipsis,m.value];if(o.value-k>=(n?1:0)){const V=r.value-1,M=m.value-V+u.value;return[u.value,e.ellipsis,...ue(V,M)]}else{const V=Math.max(1,r.value-3),M=V===1?o.value:o.value-Math.ceil(V/2)+u.value;return[u.value,e.ellipsis,...ue(V,M),e.ellipsis,m.value]}});function _(n,d,f){n.preventDefault(),o.value=d,f&&P(f,d)}const{refs:G,updateRef:Q}=Ra();Ve({VPaginationBtn:{color:J(e,"color"),border:J(e,"border"),density:J(e,"density"),size:J(e,"size"),variant:J(e,"variant"),rounded:J(e,"rounded"),elevation:J(e,"elevation")}});const X=w(()=>O.value.map((n,d)=>{const f=k=>Q(k,d);if(typeof n=="string")return{isActive:!1,key:`ellipsis-${d}`,page:n,props:{ref:f,ellipsis:!0,icon:!0,disabled:!0}};{const k=n===o.value;return{isActive:k,key:n,page:C(n),props:{ref:f,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:k?e.activeColor:e.color,ariaCurrent:k,ariaLabel:g(k?e.currentPageAriaLabel:e.pageAriaLabel,n),onClick:V=>_(V,n)}}}})),S=w(()=>{const n=!!e.disabled||o.value<=u.value,d=!!e.disabled||o.value>=u.value+m.value-1;return{first:e.showFirstLastPage?{icon:D.value?e.lastIcon:e.firstIcon,onClick:f=>_(f,u.value,"first"),disabled:n,ariaLabel:g(e.firstAriaLabel),ariaDisabled:n}:void 0,prev:{icon:D.value?e.nextIcon:e.prevIcon,onClick:f=>_(f,o.value-1,"prev"),disabled:n,ariaLabel:g(e.previousAriaLabel),ariaDisabled:n},next:{icon:D.value?e.prevIcon:e.nextIcon,onClick:f=>_(f,o.value+1,"next"),disabled:d,ariaLabel:g(e.nextAriaLabel),ariaDisabled:d},last:e.showFirstLastPage?{icon:D.value?e.firstIcon:e.lastIcon,onClick:f=>_(f,u.value+m.value-1,"last"),disabled:d,ariaLabel:g(e.lastAriaLabel),ariaDisabled:d}:void 0}});function se(){var d;const n=o.value-u.value;(d=G.value[n])==null||d.$el.focus()}function de(n){n.key===_e.left&&!e.disabled&&o.value>+e.start?(o.value=o.value-1,he(se)):n.key===_e.right&&!e.disabled&&o.value<u.value+m.value-1&&(o.value=o.value+1,he(se))}return ma(()=>t(e.tag,{ref:$,class:["v-pagination",j.value,e.class],style:e.style,role:"navigation","aria-label":g(e.ariaLabel),onKeydown:de,"data-test":"v-pagination-root"},{default:()=>[t("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&t("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[c.first?c.first(S.value.first):t(b,Y({_as:"VPaginationBtn"},S.value.first),null)]),t("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[c.prev?c.prev(S.value.prev):t(b,Y({_as:"VPaginationBtn"},S.value.prev),null)]),X.value.map((n,d)=>t("li",{key:n.key,class:["v-pagination__item",{"v-pagination__item--is-active":n.isActive}],"data-test":"v-pagination-item"},[c.item?c.item(n):t(b,Y({_as:"VPaginationBtn"},n.props),{default:()=>[n.page]})])),t("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[c.next?c.next(S.value.next):t(b,Y({_as:"VPaginationBtn"},S.value.next),null)]),e.showFirstLastPage&&t("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[c.last?c.last(S.value.last):t(b,Y({_as:"VPaginationBtn"},S.value.last),null)])])]})),{}}}),Te=e=>(we("data-v-00dd0184"),e=e(),Ie(),e),Ja={class:"content"},Na=Te(()=>p("div",{class:"top-layout"},null,-1)),Wa={key:0,class:"loading-container"},Ea={key:0,class:"error-container"},qa=Te(()=>p("span",null,"Töiden haussa tapahtui virhe",-1)),za={id:"jobs-container"},Ha={key:1,class:"pagination-container"},Ya={__name:"Jobs",setup(e){window.scrollTo(0,0);const A=pa(),P=ga().query,o=je(),g=i(!1),C=i(!1);g.value=!0,o.jobParams.page=P.p??1,o.jobParams.limit=P.l??10;const D=w(()=>Math.ceil(o.jobParams.totalCount/o.jobParams.limit)),j=i(!1);i(!1);const T=w(()=>({p:o.jobParams.page,l:o.jobParams.limit}));i(null),A.replace({query:T.value});function F(){window.scrollTo(0,0),A.replace({query:T.value}),$()}function $(){C.value=!1,g.value=!0;const m=300;let u=!1,r=!1;setTimeout(()=>{u=!0,r&&(g.value=!1)},m),o.fetchJobs().then(()=>{r=!0,u&&(g.value=!1)}).catch(()=>{o.errorToast("Töiden haussa tapahtui virhe"),g.value=!1,C.value=!0})}return $(),(m,u)=>(y(),I(E,null,[p("div",Ja,[Na,C.value?(y(),I("div",Wa,[C.value?(y(),I("div",Ea,[qa,t(b,{"prepend-icon":"mdi-refresh",onClick:u[0]||(u[0]=r=>$())},{default:s(()=>[x(" Päivitä työt ")]),_:1})])):q("",!0)])):q("",!0),p("div",za,[!g.value||re(o).jobs.length>0?(y(!0),I(E,{key:0},le(re(o).jobs,r=>(y(),W(ha,{key:r.id,job:r},null,8,["job"]))),128)):q("",!0)]),g.value?q("",!0):(y(),I("div",Ha,[t(Ba,{modelValue:re(o).jobParams.page,"onUpdate:modelValue":[u[1]||(u[1]=r=>re(o).jobParams.page=r),u[2]||(u[2]=r=>F())],length:D.value,"total-visible":7},null,8,["modelValue","length"])]))]),j.value?(y(),W(Ma,{key:0,modelValue:j.value,"onUpdate:modelValue":u[3]||(u[3]=r=>j.value=r),onClose:u[4]||(u[4]=r=>j.value=!1)},null,8,["modelValue"])):q("",!0)],64))}},nt=Ce(Ya,[["__scopeId","data-v-00dd0184"]]);export{nt as default};
