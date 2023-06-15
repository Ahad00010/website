"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[56894],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},55730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"$isHoisted",description:"$isHoisted will check if a specific role is hoisted.",id:"isHoisted"},l=void 0,o={unversionedId:"functions/util-related/isHoisted",id:"version-6.2.6/functions/util-related/isHoisted",title:"$isHoisted",description:"$isHoisted will check if a specific role is hoisted.",source:"@site/versioned_docs/version-6.2.6/functions/util-related/isHoisted.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isHoisted",permalink:"/docs/functions/util-related/isHoisted",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1686857841,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"$isHoisted",description:"$isHoisted will check if a specific role is hoisted.",id:"isHoisted"},sidebar:"docs",previous:{title:"$isGuildMuted",permalink:"/docs/functions/util-related/isGuildMuted"},next:{title:"$isInteger",permalink:"/docs/functions/util-related/isInteger"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$isHoisted")," will check if a specific role is hoisted."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$isHoisted[roleID;guildID?]\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"roleID"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"ID of the role you want to check if it's hoisted or not."),(0,i.kt)("td",{parentName:"tr",align:"center"},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the guild where you want to check if the role is hoisted or not."),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,i.kt)("h2",{id:"examples"},"Example(s)"),(0,i.kt)("p",null,"This will check if a role called ",(0,i.kt)("inlineCode",{parentName:"p"},"Owner")," is hoisted in your server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'isHoisted',\n    code: `\n  $isHoisted[$findRole[Owner];$guildID]\n  `\n});\n")))}u.isMDXComponent=!0}}]);