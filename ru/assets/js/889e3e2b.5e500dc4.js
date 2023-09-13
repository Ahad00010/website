"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94881],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44541:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>v,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&c(e,a,t[a]);return e},u=(e,t)=>l(e,i(t)),m=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const g={title:"$awaitMessageReactions",description:"$awaitMessageReactions \u043e\u0442\u0432\u0435\u0442\u0438\u0442 \u043f\u0440\u0438 \u0440\u0435\u0430\u043a\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0435 \u044d\u043c\u043e\u0434\u0437\u0438.",id:"awaitMessageReactions"},k=void 0,f={unversionedId:"functions/awaited-related/awaitMessageReactions",id:"version-6.4.0/functions/awaited-related/awaitMessageReactions",title:"$awaitMessageReactions",description:"$awaitMessageReactions \u043e\u0442\u0432\u0435\u0442\u0438\u0442 \u043f\u0440\u0438 \u0440\u0435\u0430\u043a\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0435 \u044d\u043c\u043e\u0434\u0437\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/awaited-related/awaitMessageReactions.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/awaitMessageReactions",permalink:"/website-old/ru/docs/functions/awaited-related/awaitMessageReactions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 \u0441\u0435\u043d\u0442. 2023 \u0433.",frontMatter:{title:"$awaitMessageReactions",description:"$awaitMessageReactions \u043e\u0442\u0432\u0435\u0442\u0438\u0442 \u043f\u0440\u0438 \u0440\u0435\u0430\u043a\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0435 \u044d\u043c\u043e\u0434\u0437\u0438.",id:"awaitMessageReactions"},sidebar:"docs",previous:{title:"$awaitData",permalink:"/website-old/ru/docs/functions/awaited-related/awaitData"},next:{title:"$awaitMessages",permalink:"/website-old/ru/docs/functions/awaited-related/awaitMessages"}},N={},b=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],w={toc:b},y="wrapper";function v(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.kt)(y,u(d(d({},w),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$awaitMessageReactions")," \u043e\u0442\u0432\u0435\u0442\u0438\u0442 \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442 \u0440\u0435\u0430\u043a\u0446\u0438\u044e \u0441\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u044d\u043c\u043e\u0434\u0437\u0438."),(0,n.kt)("h2",d({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$awaitMessageReactions[channelID;messageID;userFilter;time;reactions;commands;errorMessage?;awaitData?]\n")),(0,n.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Nbg"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0430"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0430."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ID \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ID \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u041d\u0430 \u0447\u0442\u043e \u0431\u043e\u0442 \u043e\u0442\u0432\u0435\u0442\u0438\u0442 ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"everyone")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"\u0410\u0439\u0434\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")," - \u043b\u044e\u0431\u043e\u0439 \u0430\u0439\u0434\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0432\u0440\u0435\u043c\u044f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u041a\u0430\u043a \u0434\u043e\u043b\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 / \u043a\u043e\u0433\u0434\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0438\u0441\u0442\u0435\u0447\u0435\u0442."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u0435\u0430\u043a\u0446\u0438\u0438"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e, \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0432 \u0438\u0445 \u0437\u0430\u043f\u044f\u0442\u044b\u043c\u0438 ( ",(0,n.kt)("inlineCode",{parentName:"td"},","),")"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u043a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u041a\u043e\u043c\u0430\u043d\u0434\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u043c\u043e\u0434\u0437\u0438 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 ( ",(0,n.kt)("inlineCode",{parentName:"td"},","),")"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435, \u043a\u043e\u0433\u0434\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0445?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c ",(0,n.kt)("inlineCode",{parentName:"strong"},"GuildMessageReactions")," \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0432 \u0432\u0430\u0448\u0435\u043c \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435.")),(0,n.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,n.kt)("p",null,'\u042d\u0442\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u0442 \u0432\u0430\u043c, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u0435\u0442\u0435 \u0441 \u044d\u043c\u043e\u0434\u0437\u0438 "\u2764\ufe0f" \u043d\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u043e\u0442\u0430:'),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "awaitMessageReactions",\n    code: `\n  React with "\u2764\ufe0f" for a surpris! \n  $awaitMessageReactions[$channelID;$messageID;$authorID;10s;\u2764\ufe0f;awaitedcommandexample;Whoops! \u0412\u044b \u043d\u0435 \u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0432\u043e\u0432\u0440\u0435\u043c\u044f..]\n  `\n});\n\nbot.awaitedCommand({\n    \u0438\u043c\u044f: "awaitedcommandexample",\n    \u043a\u043e\u0434: `\n  Nice, \u0432\u044b \u043e\u0442\u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u2764\ufe0f.\n  \xab\n});\n')))}v.isMDXComponent=!0}}]);