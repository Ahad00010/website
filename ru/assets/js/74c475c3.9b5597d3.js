"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[18788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},53855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>P,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>i(e,l(t)),g=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$unPinMessage",description:"$unPinMessage \u043e\u0442\u043a\u0440\u0435\u043f\u0438\u0442 \u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435.",id:"unPinMessage"},f=void 0,b={unversionedId:"functions/message-related/unPinMessage",id:"version-6.4.0/functions/message-related/unPinMessage",title:"$unPinMessage",description:"$unPinMessage \u043e\u0442\u043a\u0440\u0435\u043f\u0438\u0442 \u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/unPinMessage.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/unPinMessage",permalink:"/website-old/ru/docs/functions/message-related/unPinMessage",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 \u0441\u0435\u043d\u0442. 2023 \u0433.",frontMatter:{title:"$unPinMessage",description:"$unPinMessage \u043e\u0442\u043a\u0440\u0435\u043f\u0438\u0442 \u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435.",id:"unPinMessage"},sidebar:"docs",previous:{title:"$sendWebhookMessage",permalink:"/website-old/ru/docs/functions/message-related/sendWebhookMessage"},next:{title:"$addObjectProperty",permalink:"/website-old/ru/docs/functions/misc-related/addObjectProperty"}},y={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],k={toc:v},O="wrapper";function P(e){var t=e,{components:n}=t,a=g(t,["components"]);return(0,r.kt)(O,d(p(p({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$unPinMessage")," \u043e\u0442\u043a\u0440\u0435\u043f\u0438\u0442 \u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435."),(0,r.kt)("h2",p({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$unPinMessage[messageID?;channelID?]\n")),(0,r.kt)("h2",p({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043e\u0442\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u044f."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0430"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")))),(0,r.kt)("h2",p({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u0417\u0430\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u043e\u0442\u0430 \u0438 \u043e\u0442\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0435\u0433\u043e \u0447\u0435\u0440\u0435\u0437 \u0434\u0432\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u044b:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    \u0438\u043c\u044f: 'unPinMessage',\n    \u043a\u043e\u0434: `\n  $unPinMessage[$get[id]]\n  $wait[2s]\n  $pinMessage[$get[id]]\n  $let[id;$sendMessage[Hello!;true]\n  ` // \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f $let & $get \u0434\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f ID \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\n});\n")))}P.isMDXComponent=!0}}]);