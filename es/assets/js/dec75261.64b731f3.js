"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[20606],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>O,frontMatter:()=>g,metadata:()=>f,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))d.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const g={title:"$editWebhookMessage",description:"$editWebhookMessage editar\xe1 un mensaje dado.",id:"editWebhookMessage"},b=void 0,f={unversionedId:"functions/message-related/editWebhookMessage",id:"version-6.4.0/functions/message-related/editWebhookMessage",title:"$editWebhookMessage",description:"$editWebhookMessage editar\xe1 un mensaje dado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/editWebhookMessage.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/editWebhookMessage",permalink:"/website-old/es/docs/functions/message-related/editWebhookMessage",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 sept 2023",frontMatter:{title:"$editWebhookMessage",description:"$editWebhookMessage editar\xe1 un mensaje dado.",id:"editWebhookMessage"},sidebar:"docs",previous:{title:"$editMessage",permalink:"/website-old/es/docs/functions/message-related/editMessage"},next:{title:"$message",permalink:"/website-old/es/docs/functions/message-related/message"}},k={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2}],h={toc:y},v="wrapper";function O(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(v,u(c(c({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$editWebhookMessage")," editar\xe1 un mensaje dado."),(0,n.kt)("h2",c({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$editWebhookMessage[webhookID;webhookToken;mensajeID;contenido]\n")),(0,n.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"webhookID"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ID del webhook."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Token de webhook"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Token del webhook."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ID de mensaje"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"El ID del mensaje a editar."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"contenido"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Nuevo contenido del mensaje."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadera")))))}O.isMDXComponent=!0}}]);