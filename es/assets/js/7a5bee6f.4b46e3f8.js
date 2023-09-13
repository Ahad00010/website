"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74207],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),p=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,m=s["".concat(d,".").concat(f)]||s[f]||u[f]||l;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:n,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>j,frontMatter:()=>m,metadata:()=>v,toc:()=>y});var o=r(3905),n=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>l(e,a(t)),f=(e,t)=>{var r={};for(var o in e)d.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&p.call(e,o)&&(r[o]=e[o]);return r};const m={title:"$getRoleColor",description:"$getRoleColor devolver\xe1 el color del rol dado.",id:"getRoleColor"},g=void 0,v={unversionedId:"functions/info-related/getRoleColor",id:"version-6.4.0/functions/info-related/getRoleColor",title:"$getRoleColor",description:"$getRoleColor devolver\xe1 el color del rol dado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/getRoleColor.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getRoleColor",permalink:"/website-old/es/docs/functions/info-related/getRoleColor",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 sept 2023",frontMatter:{title:"$getRoleColor",description:"$getRoleColor devolver\xe1 el color del rol dado.",id:"getRoleColor"},sidebar:"docs",previous:{title:"$getReactions",permalink:"/website-old/es/docs/functions/info-related/getReactions"},next:{title:"$guildLowestRole",permalink:"/website-old/es/docs/functions/info-related/guildLowestRole"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},O="wrapper";function j(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,o.kt)(O,u(s(s({},k),n),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$getRoleColor")," devolver\xe1 el color del rol dado."),(0,o.kt)("h2",s({},{id:"uso"}),"Uso"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$getRoleColor[rolId;servidorID?]\n")),(0,o.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,o.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,o.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,o.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",s({parentName:"tr"},{align:null}),"rolId"),(0,o.kt)("td",s({parentName:"tr"},{align:null}),"entero"),(0,o.kt)("td",s({parentName:"tr"},{align:null}),"El ID del rol del que quieres que se devuelva el color."),(0,o.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",s({parentName:"tr"},{align:null}),"servidorID?"),(0,o.kt)("td",s({parentName:"tr"},{align:null}),"entero"),(0,o.kt)("td",s({parentName:"tr"},{align:null}),"ID del servidor en el que existe el rol."),(0,o.kt)("td",s({parentName:"tr"},{align:"center"}),"no")))),(0,o.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,o.kt)("p",null,"Esto devolver\xe1 el ID de rol de su rol m\xe1s alto:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getRoleColor',\n    code: `\n  $getRoleColor[$userHighestRole]\n  `\n});\n")))}j.isMDXComponent=!0}}]);