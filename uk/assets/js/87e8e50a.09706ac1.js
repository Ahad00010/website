"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>D,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>a(e,l(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$onlyForIDs",description:"$onlyForIDs \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044c, \u0447\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0437 \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440\u0456\u0432 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u043f\u043e\u043c\u0438\u043b\u043a\u0443, \u044f\u043a\u0449\u043e \u043d\u0456.",id:"onlyForIDs"},y=void 0,b={unversionedId:"functions/util-related/onlyForIDs",id:"version-6.4.0/functions/util-related/onlyForIDs",title:"$onlyForIDs",description:"$onlyForIDs \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044c, \u0447\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0437 \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440\u0456\u0432 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u043f\u043e\u043c\u0438\u043b\u043a\u0443, \u044f\u043a\u0449\u043e \u043d\u0456.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/onlyForIDs.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/onlyForIDs",permalink:"/website-old/uk/docs/functions/util-related/onlyForIDs",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 \u0432\u0435\u0440. 2023 \u0440.",frontMatter:{title:"$onlyForIDs",description:"$onlyForIDs \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044c, \u0447\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0437 \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440\u0456\u0432 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u043f\u043e\u043c\u0438\u043b\u043a\u0443, \u044f\u043a\u0449\u043e \u043d\u0456.",id:"onlyForIDs"},sidebar:"docs",previous:{title:"$onlyForGuilds",permalink:"/website-old/uk/docs/functions/util-related/onlyForGuilds"},next:{title:"$onlyForRoles",permalink:"/website-old/uk/docs/functions/util-related/onlyForRoles"}},k={},g=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],v={toc:g},O="wrapper";function D(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(O,d(s(s({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$onlyForIDs")," \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044c \u0447\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0437 \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440\u0456\u0432 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u043f\u043e\u043c\u0438\u043b\u043a\u0443, \u044f\u043a\u0449\u043e \u043d\u0456."),(0,n.kt)("h2",s({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$onlyForIDs[...userIds;error]\n")),(0,n.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"... \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a, \u0446\u0456\u043b\u0435"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456, \u044f\u043a\u0438\u043c \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u043e\u0431\u043c\u0435\u0436\u0438\u0442\u0438 \u0446\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u043f\u043e\u043c\u0438\u043b\u043a\u0430"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u043d\u044f, \u043a\u043e\u043b\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0430 \u0456 \u043f\u0435\u0440\u0435\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0445 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,n.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,n.kt)("p",null,"\u0426\u0435 \u043e\u0431\u043c\u0435\u0436\u0443\u0454 \u043b\u0438\u0448\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0440\u043e\u0437\u0440\u043e\u0431\u043d\u0438\u043a\u0430\u043c \u0431\u043e\u0442\u0430:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "\u0422\u0456\u043b\u044c\u043a\u0438 ForID",\n    \u043a\u043e\u0434: `\n    Ok.\n    $onlyForIDs[$botOwnerID;You can\'t use that command!]\n    `\n});\n')))}D.isMDXComponent=!0}}]);