import{p as h,aB as f,w as p,y as k,n as x,z as y,A as S,aH as w,C,E as L,aL as B,c as V,bG as T,q as A,t as s}from"./index-20ee4be3.js";const P={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function _(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return s("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[t])}function o(e){const[t,a]=e.split("@");return Array.from({length:a}).map(()=>n(t))}function n(e){let t=[];if(!e)return t;const a=P[e];if(e!==a){if(e.includes(","))return r(e);if(e.includes("@"))return o(e);a.includes(",")?t=r(a):a.includes("@")?t=o(a):a&&t.push(n(a))}return[_(e,t)]}function r(e){return e.replace(/\s/g,"").split(",").map(n)}const E=h({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...f(),...p(),...k()},"VSkeletonLoader"),D=x()({name:"VSkeletonLoader",props:E(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:d,backgroundColorStyles:c}=y(S(e,"color")),{dimensionStyles:u}=w(e),{elevationClasses:g}=C(e),{themeClasses:v}=L(e),{t:m}=B(),b=V(()=>n(T(e.type).join(",")));return A(()=>{var l;const i=!a.default||e.loading;return s("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},v.value,d.value,g.value],style:[c.value,i?u.value:{}],"aria-busy":e.boilerplate?void 0:i,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:m(e.loadingText),role:e.boilerplate?void 0:"alert"},[i?b.value:(l=a.default)==null?void 0:l.call(a)])}),{}}});export{D as V};
