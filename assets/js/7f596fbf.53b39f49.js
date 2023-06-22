"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[75374],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"$giveRole",description:"Give a role to an user."},l=void 0,i={unversionedId:"functions/giverole",id:"version-5.5.5/functions/giverole",title:"$giveRole",description:"Give a role to an user.",source:"@site/versioned_docs/version-5.5.5/functions/giverole.md",sourceDirName:"functions",slug:"/functions/giverole",permalink:"/docs/5.5.5/functions/giverole",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687448341,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"$giveRole",description:"Give a role to an user."},sidebar:"docs",previous:{title:"$getVar",permalink:"/docs/5.5.5/functions/getvar"},next:{title:"$giveRoles",permalink:"/docs/5.5.5/functions/giveroles"}},p={},s=[{value:"Fields",id:"fields",level:4},{value:"Footnote",id:"footnote",level:6}],c={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function gives a role to the specified user. This is generally faster than ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/giveroles"},"$giveRoles"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$giveRole[guildID;userID;roleID]\n")),(0,a.kt)("h4",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"guildID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The server ID of the role"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"userID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The user ID, which will be taking the role"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"roleID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The ID of the role will be given to user"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,a.kt)("h6",{id:"footnote"},"Footnote"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Be sure bot's role higher than the role it will give!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "give-role",\n  code: `\n  $giveRole[$guildID;$authorID;797332449314734141]\n  `\n});\n')))}f.isMDXComponent=!0}}]);