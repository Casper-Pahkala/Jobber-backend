import{p as R,n as H,c as C,q,t as a,Q as S,z as be,b4 as qe,H as ke,b7 as Qe,r as P,c3 as he,L as K,bE as me,c4 as Ge,K as ie,aj as j,bQ as Ae,O as je,N,b as Ie,o as Xe,_ as Ze,ay as ea,v as aa,m as Ye,aB as ta,w as la,aC as na,aD as sa,x as oa,l as ia,y as ra,E as da,A as $e,B as ua,aH as ca,C as ma,aI as va,aJ as ka,D as ha,aQ as ve,aL as fa,s as ya,Z as z,bB as pa,aN as Z,c5 as ga,a8 as Va,aa as ba,a9 as Pa,ad as T,ah as J,af as m,ax as te,as as _a,ak as y,ae as X,aq as oe,ao as ge,V as xa,aO as Ca,ag as Y,ai as re,a7 as Sa,a5 as Da,al as wa,am as de,c6 as Ma,aP as Ta,aw as Aa,at as ja,au as Ia}from"./index-4808f960.js";import{j as Ve,h as Ya,g as ue,e as ce,i as $a}from"./VWindowItem-e6974e7d.js";import{b as Ua,d as Ba,c as Wa,a as La}from"./VForm-30aff7c6.js";import{V as Na}from"./VSpacer-774b94f9.js";import"./VMenu-74aa5951.js";import"./VDivider-5c3acf2f.js";const Ue=R({active:{type:[String,Array],default:void 0},disabled:{type:[Boolean,String,Array],default:!1},nextIcon:{type:[String],default:"$next"},prevIcon:{type:[String],default:"$prev"},modeIcon:{type:[String],default:"$subgroup"},text:String,viewMode:{type:String,default:"month"}},"VDatePickerControls"),xe=H()({name:"VDatePickerControls",props:Ue(),emits:{"click:year":()=>!0,"click:month":()=>!0,"click:prev":()=>!0,"click:next":()=>!0,"click:text":()=>!0},setup(e,_){let{emit:o}=_;const l=C(()=>Array.isArray(e.disabled)?e.disabled.includes("text"):!!e.disabled),s=C(()=>Array.isArray(e.disabled)?e.disabled.includes("mode"):!!e.disabled),r=C(()=>Array.isArray(e.disabled)?e.disabled.includes("prev"):!!e.disabled),c=C(()=>Array.isArray(e.disabled)?e.disabled.includes("next"):!!e.disabled);function d(){o("click:prev")}function h(){o("click:next")}function g(){o("click:year")}function u(){o("click:month")}return q(()=>a("div",{class:["v-date-picker-controls"]},[a(S,{class:"v-date-picker-controls__month-btn",disabled:l.value,text:e.text,variant:"text",rounded:!0,onClick:u},null),a(S,{key:"mode-btn",class:"v-date-picker-controls__mode-btn",disabled:s.value,density:"comfortable",icon:e.modeIcon,variant:"text",onClick:g},null),a(Na,{key:"mode-spacer"},null),a("div",{key:"month-buttons",class:"v-date-picker-controls__month"},[a(S,{disabled:r.value,icon:e.prevIcon,variant:"text",onClick:d},null),a(S,{disabled:c.value,icon:e.nextIcon,variant:"text",onClick:h},null)])])),{}}});const Ra=R({appendIcon:String,color:String,header:String,transition:String,onClick:Qe()},"VDatePickerHeader"),Ce=H()({name:"VDatePickerHeader",props:Ra(),emits:{click:()=>!0,"click:append":()=>!0},setup(e,_){let{emit:o,slots:l}=_;const{backgroundColorClasses:s,backgroundColorStyles:r}=be(e,"color");function c(){o("click")}function d(){o("click:append")}return q(()=>{const h=!!(l.default||e.header),g=!!(l.append||e.appendIcon);return a("div",{class:["v-date-picker-header",{"v-date-picker-header--clickable":!!e.onClick},s.value],style:r.value,onClick:c},[l.prepend&&a("div",{key:"prepend",class:"v-date-picker-header__prepend"},[l.prepend()]),h&&a(qe,{key:"content",name:e.transition},{default:()=>{var u;return[a("div",{key:e.header,class:"v-date-picker-header__content"},[((u=l.default)==null?void 0:u.call(l))??e.header])]}}),g&&a("div",{class:"v-date-picker-header__append"},[l.append?a(ke,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VBtn:{icon:e.appendIcon,variant:"text"}}},{default:()=>{var u;return[(u=l.append)==null?void 0:u.call(l)]}}):a(S,{key:"append-btn",icon:e.appendIcon,variant:"text",onClick:d},null)])])}),{}}});const Be=R({allowedDates:[Array,Function],disabled:Boolean,color:String,month:[Number,String],hideWeekdays:Boolean,max:null,min:null,modelValue:Array,multiple:Boolean,showAdjacentMonths:Boolean,showWeek:Boolean,year:[Number,String]},"VDatePickerMonth"),Se=H()({name:"VDatePickerMonth",props:Be(),emits:{"update:modelValue":e=>!0,"update:month":e=>!0,"update:year":e=>!0},setup(e,_){let{emit:o,slots:l}=_;const s=P(),r=he(),c=K(e,"modelValue",[],i=>me(i)),d=C(()=>c.value.length>0?r.date(c.value[0]):e.min?r.date(e.min):Array.isArray(e.allowedDates)?r.date(e.allowedDates[0]):r.date()),h=K(e,"year",void 0,i=>{const f=i!=null?Number(i):r.getYear(d.value);return r.startOfYear(r.setYear(r.date(),f))},i=>r.getYear(i)),g=K(e,"month",void 0,i=>{const f=i!=null?Number(i):r.getMonth(d.value),v=r.setYear(r.date(),r.getYear(h.value));return r.setMonth(v,f)},i=>r.getMonth(i)),u=C(()=>{const i=r.getWeekArray(g.value),f=i.flat(),v=6*7;if(f.length<v){const M=f[f.length-1];let $=[];for(let A=1;A<=v-f.length;A++)$.push(r.addDays(M,A)),A%7===0&&(i.push($),$=[])}return i}),V=C(()=>{const i=u.value.flat(),f=r.date();return i.map((v,M)=>{const $=r.toISO(v),A=!r.isSameMonth(v,g.value);return{date:v,isoDate:$,formatted:r.format(v,"keyboardDate"),year:r.getYear(v),month:r.getMonth(v),isDisabled:I(v),isWeekStart:M%7===0,isWeekEnd:M%7===6,isSelected:c.value.some(ee=>r.isSameDay(v,ee)),isToday:r.isSameDay(v,f),isAdjacent:A,isHidden:A&&!e.showAdjacentMonths,isHovered:!1,localized:r.format(v,"dayOfMonth")}})}),B=C(()=>u.value.map(i=>Ge(r,i[0])));function I(i){if(e.disabled)return!0;const f=r.date(i);return e.min&&r.isAfter(r.date(e.min),f)||e.max&&r.isAfter(f,r.date(e.max))?!0:Array.isArray(e.allowedDates)&&e.allowedDates.length>0?!e.allowedDates.some(v=>r.isSameDay(r.date(v),f)):typeof e.allowedDates=="function"?!e.allowedDates(f):!1}function F(i){if(e.multiple){const f=c.value.findIndex(v=>r.isSameDay(v,i));if(f===-1)c.value=[...c.value,i];else{const v=[...c.value];v.splice(f,1),c.value=v}}else c.value=[i]}return ie(d,i=>{g.value=i,h.value=i}),()=>a("div",{class:"v-date-picker-month"},[e.showWeek&&a("div",{key:"weeks",class:"v-date-picker-month__weeks"},[!e.hideWeekdays&&a("div",{key:"hide-week-days",class:"v-date-picker-month__day"},[j(" ")]),B.value.map(i=>a("div",{class:["v-date-picker-month__day","v-date-picker-month__day--adjacent"]},[i]))]),a("div",{ref:s,class:"v-date-picker-month__days"},[!e.hideWeekdays&&r.getWeekdays().map(i=>a("div",{class:["v-date-picker-month__day","v-date-picker-month__weekday"]},[i])),V.value.map((i,f)=>{const v={props:{onClick:()=>F(i.date)},item:i,i:f};return a("div",{class:["v-date-picker-month__day",{"v-date-picker-month__day--adjacent":i.isAdjacent,"v-date-picker-month__day--hide-adjacent":i.isHidden,"v-date-picker-month__day--hovered":i.isHovered,"v-date-picker-month__day--selected":i.isSelected,"v-date-picker-month__day--week-end":i.isWeekEnd,"v-date-picker-month__day--week-start":i.isWeekStart}],"data-v-date":i.isDisabled?void 0:i.isoDate},[(e.showAdjacentMonths||!i.isAdjacent)&&a(ke,{defaults:{VBtn:{color:(i.isSelected||i.isToday)&&!i.isDisabled?e.color:void 0,disabled:i.isDisabled,icon:!0,ripple:!1,text:i.localized,variant:i.isDisabled?"text":i.isToday&&!i.isSelected?"outlined":"flat",onClick:()=>F(i.date)}}},{default:()=>{var M;return[((M=l.day)==null?void 0:M.call(l,v))??a(S,v.props,null)]}})])})])])}});const We=R({color:String,height:[String,Number],modelValue:Number},"VDatePickerMonths"),De=H()({name:"VDatePickerMonths",props:We(),emits:{"update:modelValue":e=>!0},setup(e,_){let{slots:o}=_;const l=he(),s=K(e,"modelValue"),r=C(()=>{let c=l.startOfYear(l.date());return Ae(12).map(d=>{const h=l.format(c,"monthShort");return c=l.getNextMonth(c),{text:h,value:d}})});return je(()=>{s.value=s.value??l.getMonth(l.date())}),q(()=>a("div",{class:"v-date-picker-months",style:{height:Ie(e.height)}},[a("div",{class:"v-date-picker-months__content"},[r.value.map((c,d)=>{var u;const h={active:s.value===d,color:s.value===d?e.color:void 0,rounded:!0,text:c.text,variant:s.value===c.value?"flat":"text",onClick:()=>g(d)};function g(V){s.value=V}return((u=o.month)==null?void 0:u.call(o,{month:c,i:d,props:h}))??a(S,N({key:"month"},h,{onClick:()=>g(d)}),null)})])])),{}}});const Le=R({color:String,height:[String,Number],min:null,max:null,modelValue:Number},"VDatePickerYears"),we=H()({name:"VDatePickerYears",props:Le(),emits:{"update:modelValue":e=>!0},setup(e,_){let{slots:o}=_;const l=he(),s=K(e,"modelValue"),r=C(()=>{const d=l.getYear(l.date());let h=d-100,g=d+52;e.min&&(h=l.getYear(l.date(e.min))),e.max&&(g=l.getYear(l.date(e.max)));let u=l.startOfYear(l.date());return u=l.setYear(u,h),Ae(g-h+1,h).map(V=>{const B=l.format(u,"year");return u=l.setYear(u,l.getYear(u)+1),{text:B,value:V}})});je(()=>{s.value=s.value??l.getYear(l.date())});const c=P();return Xe(async()=>{var d;await Ze(),(d=c.value)==null||d.$el.scrollIntoView({block:"center"})}),q(()=>a("div",{class:"v-date-picker-years",style:{height:Ie(e.height)}},[a("div",{class:"v-date-picker-years__content"},[r.value.map((d,h)=>{var u;const g={ref:s.value===d.value?c:void 0,active:s.value===d.value,color:s.value===d.value?e.color:void 0,rounded:!0,text:d.text,variant:s.value===d.value?"flat":"text",onClick:()=>s.value=d.value};return((u=o.year)==null?void 0:u.call(o,{year:d,i:h,props:g}))??a(S,N({key:"month"},g),null)})])])),{}}});const Ha=ea("v-picker-title");const Ne=R({color:String,...aa(),...Ye(),...ta(),...la(),...na(),...sa(),...oa(),...ia(),...ra()},"VSheet"),Me=H()({name:"VSheet",props:Ne(),setup(e,_){let{slots:o}=_;const{themeClasses:l}=da(e),{backgroundColorClasses:s,backgroundColorStyles:r}=be($e(e,"color")),{borderClasses:c}=ua(e),{dimensionStyles:d}=ca(e),{elevationClasses:h}=ma(e),{locationStyles:g}=va(e),{positionClasses:u}=ka(e),{roundedClasses:V}=ha(e);return q(()=>a(e.tag,{class:["v-sheet",l.value,s.value,c.value,h.value,u.value,V.value,e.class],style:[r.value,d.value,g.value,e.style]},o)),{}}}),Re=R({bgColor:String,landscape:Boolean,title:String,hideHeader:Boolean,...Ne()},"VPicker"),Te=H()({name:"VPicker",props:Re(),setup(e,_){let{slots:o}=_;const{backgroundColorClasses:l,backgroundColorStyles:s}=be($e(e,"color"));return q(()=>{const r=Me.filterProps(e),c=!!(e.title||o.title);return a(Me,N(r,{color:e.bgColor,class:["v-picker",{"v-picker--landscape":e.landscape,"v-picker--with-actions":!!o.actions},e.class],style:e.style}),{default:()=>{var d;return[!e.hideHeader&&a("div",{key:"header",class:[l.value],style:[s.value]},[c&&a(Ha,{key:"picker-title"},{default:()=>{var h;return[((h=o.title)==null?void 0:h.call(o))??e.title]}}),o.header&&a("div",{class:"v-picker__header"},[o.header()])]),a("div",{class:"v-picker__body"},[(d=o.default)==null?void 0:d.call(o)]),o.actions&&a(ke,{defaults:{VBtn:{slim:!0,variant:"text"}}},{default:()=>[a("div",{class:"v-picker__actions"},[o.actions()])]})]}})}),{}}}),Fa=R({calendarIcon:{type:String,default:"$calendar"},keyboardIcon:{type:String,default:"$edit"},inputMode:{type:String,default:"calendar"},inputText:{type:String,default:"$vuetify.datePicker.input.placeholder"},inputPlaceholder:{type:String,default:"dd/mm/yyyy"},header:{type:String,default:"$vuetify.datePicker.header"},...Ue(),...Be(),...ve(We(),["modelValue"]),...ve(Le(),["modelValue"]),...Re({title:"$vuetify.datePicker.title"}),modelValue:null},"VDatePicker"),Oa=H()({name:"VDatePicker",props:Fa(),emits:{"update:modelValue":e=>!0,"update:month":e=>!0,"update:year":e=>!0,"update:inputMode":e=>!0,"update:viewMode":e=>!0},setup(e,_){let{emit:o,slots:l}=_;const s=he(),{t:r}=fa(),c=K(e,"modelValue",void 0,p=>me(p),p=>e.multiple?p:p[0]),d=K(e,"viewMode"),h=K(e,"inputMode"),g=C(()=>{var b;const p=s.date((b=c.value)==null?void 0:b[0]);return p&&s.isValid(p)?p:s.date()}),u=P(Number(e.month??s.getMonth(s.startOfMonth(g.value)))),V=P(Number(e.year??s.getYear(s.startOfYear(s.setMonth(g.value,u.value))))),B=ya(!1),I=C(()=>e.multiple&&c.value.length>1?r("$vuetify.datePicker.itemsSelected",c.value.length):c.value[0]&&s.isValid(c.value[0])?s.format(c.value[0],"normalDateWithWeekday"):r(e.header)),F=C(()=>s.format(s.setYear(s.setMonth(s.date(),u.value),V.value),"monthAndYear")),i=C(()=>`date-picker-header${B.value?"-reverse":""}-transition`),f=C(()=>{const p=s.date(e.min);return e.min&&s.isValid(p)?p:null}),v=C(()=>{const p=s.date(e.max);return e.max&&s.isValid(p)?p:null}),M=C(()=>{if(e.disabled)return!0;const p=[];if(d.value!=="month")p.push("prev","next");else{let b=s.date();if(b=s.setYear(b,V.value),b=s.setMonth(b,u.value),f.value){const W=s.addDays(s.startOfMonth(b),-1);s.isAfter(f.value,W)&&p.push("prev")}if(v.value){const W=s.addDays(s.endOfMonth(b),1);s.isAfter(W,v.value)&&p.push("next")}}return p});function $(){h.value=h.value==="calendar"?"keyboard":"calendar"}function A(){u.value<11?u.value++:(V.value++,u.value=0,o("update:year",V.value)),o("update:month",u.value)}function ee(){u.value>0?u.value--:(V.value--,u.value=11,o("update:year",V.value)),o("update:month",u.value)}function ae(){d.value=d.value==="months"?"month":"months"}function O(){d.value=d.value==="year"?"month":"year"}return ie(u,()=>{d.value==="months"&&ae()}),ie(V,()=>{d.value==="year"&&O()}),ie(c,(p,b)=>{const W=s.date(me(p)[0]),U=s.date(me(b)[0]);B.value=s.isBefore(W,U)}),q(()=>{const p=Te.filterProps(e),b=xe.filterProps(e),W=Ce.filterProps(e),U=Se.filterProps(e),fe=ve(De.filterProps(e),["modelValue"]),ye=ve(we.filterProps(e),["modelValue"]),le={header:I.value,transition:i.value,"onClick:append":$};return a(Te,N(p,{class:["v-date-picker",`v-date-picker--${d.value}`,{"v-date-picker--show-week":e.showWeek},e.class],style:e.style}),{title:()=>{var w;return((w=l.title)==null?void 0:w.call(l))??a("div",{class:"v-date-picker__title"},[r(e.title)])},header:()=>l.header?a(ke,{defaults:{VDatePickerHeader:{...le}}},{default:()=>{var w;return[(w=l.header)==null?void 0:w.call(l,le)]}}):a(Ce,N({key:"header"},W,le),l),default:()=>e.inputMode==="calendar"?a(z,null,[a(xe,N(b,{disabled:M.value,text:F.value,"onClick:next":A,"onClick:prev":ee,"onClick:month":ae,"onClick:year":O}),null),a(pa,{hideOnLeave:!0},{default:()=>[d.value==="months"?a(De,N({key:"date-picker-months"},fe,{modelValue:u.value,"onUpdate:modelValue":w=>u.value=w,min:f.value,max:v.value}),null):d.value==="year"?a(we,N({key:"date-picker-years"},ye,{modelValue:V.value,"onUpdate:modelValue":w=>V.value=w,min:f.value,max:v.value}),null):a(Se,N({key:"date-picker-month"},U,{modelValue:c.value,"onUpdate:modelValue":w=>c.value=w,month:u.value,"onUpdate:month":w=>u.value=w,year:V.value,"onUpdate:year":w=>V.value=w,min:f.value,max:v.value}),null)]})]):a("div",{class:"v-date-picker__input"},[a(Z,{label:r(e.inputText),placeholder:e.inputPlaceholder},null)]),actions:l.actions})}),{}}});const Ea=R({locale:String,fallbackLocale:String,messages:Object,rtl:{type:Boolean,default:void 0},...Ye()},"VLocaleProvider"),Ja=H()({name:"VLocaleProvider",props:Ea(),setup(e,_){let{slots:o}=_;const{rtlClasses:l}=ga(e);return q(()=>{var s;return a("div",{class:["v-locale-provider",l.value,e.class],style:e.style},[(s=o.default)==null?void 0:s.call(o)])}),{}}}),D=e=>(ja("data-v-12df3c16"),e=e(),Ia(),e),za=D(()=>y("h1",{class:"title pb-5"},"Luo listaus",-1)),Ka={class:"content"},qa=D(()=>y("canvas",{id:"imageCanvas",style:{display:"none"}},null,-1)),Qa={style:{display:"flex","flex-direction":"column","align-items":"center",gap:"10px"}},Ga={class:"actions"},Xa=D(()=>y("div",{class:"title"},[y("h2",null,"Tiedot")],-1)),Za={class:"content"},et=D(()=>y("h4",{class:"pl-1"},"Mikä on työn otsikko? *",-1)),at=D(()=>y("span",{class:"pl-1"},"Esim. Lastenhoitaja tai Nurmikonleikkaaja",-1)),tt=D(()=>y("h4",{class:"pl-1"},"Mikä on kohde alueesi? *",-1)),lt=D(()=>y("span",{class:"pl-1"},"Syötä mikä tahansa kaupungin tai alueen nimi",-1)),nt={class:"actions"},st=D(()=>y("div",{class:"title"},[y("h2",null,"Tiedot")],-1)),ot={class:"content"},it=D(()=>y("h4",{class:"pl-1"},"Milloin työt alkavat? *",-1)),rt=D(()=>y("h4",{class:"pl-1"},"Mikä on työsopimuksen tyyppi?",-1)),dt=D(()=>y("h4",{class:"pl-1"},"Mikä on työn kesto?",-1)),ut=D(()=>y("span",{class:"pl-1"},"Jätä tyhjäksi jos ei tiedossa",-1)),ct=D(()=>y("h4",{class:"pl-1"},"Mikä on palkan tyyppi?",-1)),mt=D(()=>y("span",{class:"pl-1"},"Jätä tyhjäksi jos ei tiedossa",-1)),vt=D(()=>y("h4",{class:"pl-1"},"Paljonko tunteja viikossa?",-1)),kt=D(()=>y("span",{class:"pl-1"},"Jätä tyhjäksi jos ei tiedossa",-1)),ht=D(()=>y("h4",{class:"pl-1"},"Mikä on palkan tyyppi?",-1)),ft=D(()=>y("span",{class:"pl-1"},"Jätä tyhjäksi jos ei tiedossa",-1)),yt={class:"actions"},pt={__name:"AddJob",setup(e){const _=ba(),o=Pa(),l=P([]),s=P([]),r=P(null),c=P("one"),d=["Sopimuksen mukaan","Tarkka päivämäärä"],h=["Keikkatyö","Vakituinen","Toistaiseksi voimassa oleva"],g=["Tuntipalkka","Urakkapalkka"],u=["Tuntipalkka","Kuukausipalkka"],V=P(""),B=P([]),I=P(""),F=P(!1),i=P([]),f=["Helsinki, Suomi","Espoo, Suomi","Tampere, Suomi","Vantaa, Suomi","Oulu, Suomi","Turku, Suomi","Jyväskylä, Suomi","Kuopio, Suomi","Lahti, Suomi","Pori, Suomi"],v=P(""),M=P(!1),$=P(0),A=P(null),ee=C(()=>A.value?_a(A.value).format("DD.MM.YYYY"):null),ae=P(null),O=P(0),p=P(null),b=P(0),W=P(null),U=P(null),fe=C(()=>{if(l.value.length===0)return!0;let k=!0;return l.value.forEach(t=>{t.ready||(k=!1)}),k?(console.log("uploaded all"),!0):!1});ie(B,async(k,t)=>{k.length>t.length&&(I.value="")});function ye(){M.value=!1,A.value=ae.value}function le(){r.value.click()}function w(k){l.value=l.value.filter((t,n)=>n!==k),s.value=s.value.filter((t,n)=>n!==k)}function He(k){const t=k.target.files[0];if(t)if(t.type.startsWith("image/")&&!t.type.startsWith("image/gif")){var n=new FileReader;n.onload=function(x){const L=new Image;L.onload=()=>{let Q=L.width,G=L.height;(Q>1920||G>1080)&&(Q/1920>G/1080?(G*=1920/Q,Q=1920):(Q*=1080/G,G=1080));const se=document.getElementById("imageCanvas"),Je=se.getContext("2d");se.width=Q,se.height=G,Je.drawImage(L,0,0,Q,G);const ze=se.toDataURL("image/jpeg",.8);l.value.push({image:ze,progress:10,ready:!1}),se.toBlob(_e=>{const Ke=new File([_e],t.name,{type:"image/jpeg"});s.value.push(Ke),Fe(_e)},"image/jpeg",.8)},L.src=x.target.result},n.readAsDataURL(t)}else o.snackbarText="Valitse kuva tiedostotyyppi",o.snackbarColor="red-darken-2",o.snackbar=!0}function Fe(k){const t=new XMLHttpRequest,n=new FormData;n.append("image",k);let x=l.value.length-1;x<0&&(x=0);const L=l.value[x];t.upload.addEventListener("progress",E=>{if(E.lengthComputable){const pe=E.loaded/E.total*100;L.progress=pe,pe>=100&&setTimeout(()=>{L.ready=!0},1e3)}}),t.open("POST",`${o.url}/api/jobs/upload-image.json`,!0),t.onreadystatechange=function(){if(t.readyState==4&&t.status==200)try{const E=JSON.parse(t.responseText).data;L.id=E.image_id,console.log(L)}catch(E){console.error("Error parsing response:",E)}},t.send(n)}function ne(k){c.value=k}function Oe(){let k=null;i.value=[],setTimeout(()=>{k=I.value},100),setTimeout(()=>{I.value&&I.value.length>0&&k===I.value&&(F.value=!0,o.getAddressSuggestions(I.value).then(t=>{i.value=t.suggestions,F.value=!1}))},500)}function Ee(){o.loading=!0;let k={title:V.value,area:B.value,description:v.value,images:l.value.map(t=>t.id),date:$.value===1?A.value:null,contract_type:O.value,salary_type:b.value,salary:U.value};O.value===0?k.hours=p.value:k.hours=W.value,o.addJob(k).then(t=>{_.replace("/jobs/"+t.job_id)}).catch(()=>{})}function Pe(){var k=parseFloat(U.value);isNaN(k)?U.value="":U.value=k.toFixed(2)}return(k,t)=>(T(),J(te,{class:"add-container"},{default:m(()=>[za,a($a,{modelValue:c.value,"onUpdate:modelValue":t[26]||(t[26]=n=>c.value=n),class:"main-window",disabled:""},{default:m(()=>[a(Ve,{value:"one",class:"window"},{default:m(()=>[y("div",Ka,[a(Ua,{justify:"center",align:"center",class:"images"},{default:m(()=>[(T(!0),X(z,null,oe(l.value,(n,x)=>(T(),J(ge,{key:x,elevation:"8",class:"image-card"},{default:m(()=>[a(xa,{src:n?n.image:"#",alt:"your image",cover:"","aspect-ratio":"1"},null,8,["src"]),n.ready?(T(),J(S,{key:0,class:"close-btn",icon:"mdi-delete",elevation:"8",size:"35",style:Ca(Y(o).lightTheme?"color: rgb(25, 25, 25);":"color: rgb(220, 220, 220);"),onClick:L=>w(x)},null,8,["style","onClick"])):re("",!0),n.ready?re("",!0):(T(),J(Sa,{key:1,class:"progress-bar","model-value":n.progress,color:"primary"},null,8,["model-value"]))]),_:2},1024))),128)),qa,l.value.length<8?(T(),J(ge,{key:0,elevation:"8",class:"image-card"},{default:m(()=>[y("input",{type:"file",ref_key:"fileInput",ref:r,onChange:He,style:{display:"none"},id:"customFileInput"},null,544),a(S,{onClick:le,icon:"mdi-plus",flat:"",id:"add-img-btn",class:"text-none image-card"},{default:m(()=>[y("div",Qa,[a(Da,{style:{"font-size":"35px"}}),j(" Lisää kuva ")])]),_:1})]),_:1})):re("",!0)]),_:1})]),y("div",Ga,[a(S,{color:"primary",class:"text-none","append-icon":"mdi-chevron-right",style:{float:"right"},onClick:t[0]||(t[0]=n=>ne("two")),disabled:!fe.value},{default:m(()=>[j("Seuraava")]),_:1},8,["disabled"])])]),_:1}),a(Ve,{value:"two",class:"window"},{default:m(()=>[Xa,y("div",Za,[a(Ba,{onSubmit:t[6]||(t[6]=wa(n=>ne("three"),["prevent"])),ref:"jobForm"},{default:m(()=>[a(te,null,{default:m(()=>[et,at,a(Z,{modelValue:V.value,"onUpdate:modelValue":t[1]||(t[1]=n=>V.value=n),label:"Työn otsikko",rules:k.jobTitleRules,required:"",theme:Y(o).theme},null,8,["modelValue","rules","theme"])]),_:1}),a(te,null,{default:m(()=>[tt,lt,a(Ya,{label:"Alue",items:I.value.length>0?i.value:f,"onUpdate:search":[t[2]||(t[2]=n=>Oe()),t[3]||(t[3]=n=>I.value=n)],"hide-no-data":"",search:I.value,modelValue:B.value,"onUpdate:modelValue":t[4]||(t[4]=n=>B.value=n),"auto-select-first":"",clearable:"",loading:F.value,multiple:"",chips:"","closable-chips":"","no-data-text":"Aluetta ei löytynyt",theme:Y(o).theme},null,8,["items","search","modelValue","loading","theme"])]),_:1}),a(te,null,{default:m(()=>[a(Wa,{label:"Kuvaus",rules:k.descriptionRules,required:"",modelValue:v.value,"onUpdate:modelValue":t[5]||(t[5]=n=>v.value=n),"no-resize":""},null,8,["rules","modelValue"])]),_:1})]),_:1},512)]),y("div",nt,[a(S,{onClick:t[7]||(t[7]=n=>ne("one")),class:"back-btn text-none",color:Y(o).lightTheme?"grey-lighten-3":"grey-darken-3"},{default:m(()=>[j("Takaisin")]),_:1},8,["color"]),a(S,{color:"primary",type:"submit",class:"text-none",onClick:t[8]||(t[8]=n=>ne("three")),"append-icon":"mdi-chevron-right"},{default:m(()=>[j("Seuraava")]),_:1})])]),_:1}),a(Ve,{value:"three",class:"window"},{default:m(()=>[st,y("div",ot,[a(te,null,{default:m(()=>[it,a(ue,{mandatory:"","selected-class":"text-primary",column:"",modelValue:$.value,"onUpdate:modelValue":t[9]||(t[9]=n=>$.value=n)},{default:m(()=>[(T(),X(z,null,oe(d,(n,x)=>a(ce,{key:x},{default:m(()=>[j(de(n),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),$.value==1?(T(),J(La,{key:0,modelValue:M.value,"onUpdate:modelValue":t[14]||(t[14]=n=>M.value=n),"max-width":"400"},{activator:m(({on:n})=>[a(Z,N({modelValue:ee.value,"onUpdate:modelValue":t[10]||(t[10]=x=>ee.value=x),label:"Päivä",readonly:""},Ma(n),{"onUpdate:focused":t[11]||(t[11]=x=>M.value=!0),rules:k.jobDateRules,required:"",theme:Y(o).theme}),null,16,["modelValue","rules","theme"])]),default:m(()=>[a(ge,{theme:Y(o).theme},{default:m(()=>[a(Ta,null,{default:m(()=>[a(Ja,{locale:"fi"},{default:m(()=>[a(Oa,{modelValue:ae.value,"onUpdate:modelValue":t[12]||(t[12]=n=>ae.value=n),"hide-actions":"",min:k.minDate,title:"Valitse päivämäärä"},null,8,["modelValue","min"])]),_:1})]),_:1}),a(Aa,{style:{direction:"rtl"}},{default:m(()=>[a(S,{flat:"",onClick:ye},{default:m(()=>[j("OK")]),_:1}),a(S,{flat:"",onClick:t[13]||(t[13]=n=>M.value=!1)},{default:m(()=>[j("Peruuta")]),_:1})]),_:1})]),_:1},8,["theme"])]),_:1},8,["modelValue"])):re("",!0)]),_:1}),a(te,null,{default:m(()=>[rt,a(ue,{mandatory:"","selected-class":"text-primary",column:"",modelValue:O.value,"onUpdate:modelValue":t[15]||(t[15]=n=>O.value=n)},{default:m(()=>[(T(),X(z,null,oe(h,(n,x)=>a(ce,{key:x},{default:m(()=>[j(de(n),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),O.value==0?(T(),X(z,{key:0},[dt,ut,a(Z,{label:"kesto",suffix:"h",type:"number",modelValue:p.value,"onUpdate:modelValue":[t[16]||(t[16]=n=>p.value=n),k.estimatedTimeUpdated],min:"0",rules:k.numberRules,theme:Y(o).theme},null,8,["modelValue","onUpdate:modelValue","rules","theme"]),ct,mt,a(ue,{mandatory:"","selected-class":"text-primary",column:"",modelValue:b.value,"onUpdate:modelValue":t[17]||(t[17]=n=>b.value=n)},{default:m(()=>[(T(),X(z,null,oe(g,(n,x)=>a(ce,{key:x},{default:m(()=>[j(de(n),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),a(Z,{label:g[b.value],suffix:b.value==0?"€/h":"€",type:"number",modelValue:U.value,"onUpdate:modelValue":t[18]||(t[18]=n=>U.value=n),min:"0",onChange:t[19]||(t[19]=n=>Pe()),rules:k.numberRules,theme:Y(o).theme},null,8,["label","suffix","modelValue","rules","theme"])],64)):(T(),X(z,{key:1},[vt,kt,a(Z,{label:"Tunteja viikossa",suffix:"h",type:"number",modelValue:W.value,"onUpdate:modelValue":t[20]||(t[20]=n=>W.value=n),min:"0",rules:k.numberRules,theme:Y(o).theme},null,8,["modelValue","rules","theme"]),ht,ft,a(ue,{mandatory:"","selected-class":"text-primary",column:"",modelValue:b.value,"onUpdate:modelValue":t[21]||(t[21]=n=>b.value=n)},{default:m(()=>[(T(),X(z,null,oe(u,(n,x)=>a(ce,{key:x},{default:m(()=>[j(de(n),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),a(Z,{label:u[b.value],suffix:b.value==0?"€/h":"€/kk",type:"number",modelValue:U.value,"onUpdate:modelValue":t[22]||(t[22]=n=>U.value=n),min:"0",rules:k.numberRules,onChange:t[23]||(t[23]=n=>Pe()),theme:Y(o).theme},null,8,["label","suffix","modelValue","rules","theme"])],64))]),_:1})]),y("div",yt,[a(S,{onClick:t[24]||(t[24]=n=>ne("two")),class:"back-btn text-none",color:Y(o).lightTheme?"grey-lighten-3":"grey-darken-3"},{default:m(()=>[j("Takaisin")]),_:1},8,["color"]),Y(o).user?(T(),J(S,{key:0,color:"primary",class:"text-none","append-icon":"mdi-plus",style:{float:"right"},onClick:Ee},{default:m(()=>[j("Luo listaus")]),_:1})):(T(),J(S,{key:1,color:"primary",class:"text-none",style:{float:"right"},onClick:t[25]||(t[25]=n=>Y(o).loginDialogShowing=!0)},{default:m(()=>[j("Kirjaudu sisään")]),_:1}))])]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},Ct=Va(pt,[["__scopeId","data-v-12df3c16"]]);export{Ct as default};
