"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[63453],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||g[d]||l;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>N,frontMatter:()=>m,metadata:()=>b,toc:()=>y});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&c(e,r,t[r]);return e},g=(e,t)=>l(e,i(t)),d=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const m={title:"$getMessageVar",description:"$getMessageVar will return the value of a given message variable.",id:"getMessageVar"},f=void 0,b={unversionedId:"functions/variables-related/getMessageVar",id:"version-6.4.0/functions/variables-related/getMessageVar",title:"$getMessageVar",description:"$getMessageVar will return the value of a given message variable.",source:"@site/versioned_docs/version-6.4.0/functions/variables-related/getMessageVar.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/getMessageVar",permalink:"/website-old/fr/docs/functions/variables-related/getMessageVar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 sept. 2023",frontMatter:{title:"$getMessageVar",description:"$getMessageVar will return the value of a given message variable.",id:"getMessageVar"},sidebar:"docs",previous:{title:"$getLeaderboardInfo",permalink:"/website-old/fr/docs/functions/variables-related/getLeaderboardInfo"},next:{title:"$getUserVar",permalink:"/website-old/fr/docs/functions/variables-related/getUserVar"}},v={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:y},O="wrapper";function N(e){var t=e,{components:r}=t,n=d(t,["components"]);return(0,a.kt)(O,g(u(u({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$getMessageVar")," will return the value of a given message variable."),(0,a.kt)("h2",u({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$getMessageVar[varname;guildID?;table?]\n")),(0,a.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"varname"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Variable name."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"messageID?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"message ID"),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"table?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Variable table."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,'This will return the value of a variable called "Example":'),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "getMessageVar",\n    code: `\n    $getMessageVar[Example;$messageID;main]\n    `\n});\n')))}N.isMDXComponent=!0}}]);