"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82539],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),y=n,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||o;return t?a.createElement(m,l(l({ref:r},s),{},{components:t})):a.createElement(m,l({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},52807:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>f,default:()=>N,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&s(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&s(e,t,r[t]);return e},d=(e,r)=>o(e,l(r)),y=(e,r)=>{var t={};for(var a in e)p.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const m={title:"$arraySort",description:"$arraySort will sort a given array.",id:"arraySort"},f=void 0,g={unversionedId:"functions/array-related/arraySort",id:"version-6.4.0/functions/array-related/arraySort",title:"$arraySort",description:"$arraySort will sort a given array.",source:"@site/versioned_docs/version-6.4.0/functions/array-related/arraySort.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arraySort",permalink:"/website-old/docs/functions/array-related/arraySort",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{title:"$arraySort",description:"$arraySort will sort a given array.",id:"arraySort"},sidebar:"docs",previous:{title:"$arraySome",permalink:"/website-old/docs/functions/array-related/arraySome"},next:{title:"$arraySplice",permalink:"/website-old/docs/functions/array-related/arraySplice"}},b={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:v},O="wrapper";function N(e){var r=e,{components:t}=r,n=y(r,["components"]);return(0,a.kt)(O,d(u(u({},k),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arraySort")," will sort a given array."),(0,a.kt)("h2",u({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$arraySort[name;type?]\n")),(0,a.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Array name."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Type to sort after ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"asc")," (ascending) 2. ",(0,a.kt)("strong",{parentName:"td"},"dsc")," (descending)"),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-sort",\n    code: `\n  $arrayJoin[array;, ]\n  $arraySort[array;asc]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n});\n')))}N.isMDXComponent=!0}}]);