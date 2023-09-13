"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[14008],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return r?o.createElement(f,a(a({ref:t},u),{},{components:r})):o.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<l;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>j,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var o=r(3905),n=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>l(e,a(t)),m=(e,t)=>{var r={};for(var o in e)i.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&c.call(e,o)&&(r[o]=e[o]);return r};const f={title:"$onlyForRoles",description:"$onlyForRoles comprobar\xe1 si el usuario que ejecut\xf3 el comando tiene alguno de los roles listados y devolver\xe1 un mensaje de error si no lo hace.",id:"onlyForRoles"},y=void 0,b={unversionedId:"functions/util-related/onlyForRoles",id:"version-6.4.0/functions/util-related/onlyForRoles",title:"$onlyForRoles",description:"$onlyForRoles comprobar\xe1 si el usuario que ejecut\xf3 el comando tiene alguno de los roles listados y devolver\xe1 un mensaje de error si no lo hace.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/onlyForRoles.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/onlyForRoles",permalink:"/website-old/es/docs/functions/util-related/onlyForRoles",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 sept 2023",frontMatter:{title:"$onlyForRoles",description:"$onlyForRoles comprobar\xe1 si el usuario que ejecut\xf3 el comando tiene alguno de los roles listados y devolver\xe1 un mensaje de error si no lo hace.",id:"onlyForRoles"},sidebar:"docs",previous:{title:"$onlyForIDs",permalink:"/website-old/es/docs/functions/util-related/onlyForIDs"},next:{title:"$onlyIf",permalink:"/website-old/es/docs/functions/util-related/onlyIf"}},v={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:g},O="wrapper";function j(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,o.kt)(O,d(p(p({},k),n),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$onlyForRoles")," comprobar\xe1 si el usuario que ejecut\xf3 el comando tiene alguno de los roles listados y devolver\xe1 un mensaje de error si no lo hace."),(0,o.kt)("h2",p({},{id:"uso"}),"Uso"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$onlyForRoles[...roleIds;error]\n")),(0,o.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,o.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,o.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,o.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",p({parentName:"tr"},{align:null}),"...roleIds"),(0,o.kt)("td",p({parentName:"tr"},{align:null}),"string, integer"),(0,o.kt)("td",p({parentName:"tr"},{align:null}),"Los roles a los que desea limitar el comando."),(0,o.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",p({parentName:"tr"},{align:null}),"error"),(0,o.kt)("td",p({parentName:"tr"},{align:null}),"consulta"),(0,o.kt)("td",p({parentName:"tr"},{align:null}),"Error a devolver cuando el comando no fue ejecutado por ning\xfan usuario con los roles listados."),(0,o.kt)("td",p({parentName:"tr"},{align:"center"}),"no")))),(0,o.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,o.kt)("p",null,"Esto limitar\xe1 el comando s\xf3lo a los canales listados:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "onlyForRoles",\n    code: `\n    Ok.\n    $onlyForRoles[roleID;roleID;You can\'t use that command!]\n    `\n});\n')))}j.isMDXComponent=!0}}]);