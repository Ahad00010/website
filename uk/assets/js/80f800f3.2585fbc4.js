"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[9065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>T,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>a(e,i(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$stopTimeout",description:"$stopTimeout will end/stop a timeout created by $setTimeout.",id:"stopTimeout"},b=void 0,y={unversionedId:"functions/misc-related/stopTimeout",id:"version-6.4.0/functions/misc-related/stopTimeout",title:"$stopTimeout",description:"$stopTimeout will end/stop a timeout created by $setTimeout.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/stopTimeout.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/stopTimeout",permalink:"/website-old/uk/docs/functions/misc-related/stopTimeout",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 \u0432\u0435\u0440. 2023 \u0440.",frontMatter:{title:"$stopTimeout",description:"$stopTimeout will end/stop a timeout created by $setTimeout.",id:"stopTimeout"},sidebar:"docs",previous:{title:"$shutdown",permalink:"/website-old/uk/docs/functions/misc-related/shutdown"},next:{title:"$suppressErrors",permalink:"/website-old/uk/docs/functions/misc-related/suppressErrors"}},g={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:v},O="wrapper";function T(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(O,m(c(c({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$stopTimeout")," will end/stop a timeout created by ",(0,n.kt)("inlineCode",{parentName:"p"},"$setTimeout"),"."),(0,n.kt)("h2",c({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$stopTimeout[id]\n")),(0,n.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Timeout ID."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will end a ",(0,n.kt)("inlineCode",{parentName:"p"},"$setTimeout")," timeout:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "stopTimeout",\n    code: `\n    $stopTimeout[10029]\n    `\n});\n')))}T.isMDXComponent=!0}}]);