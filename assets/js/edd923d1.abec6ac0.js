"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"$emoji"},a=void 0,l={unversionedId:"functions/emoji",id:"version-5.5.5/functions/emoji",title:"$emoji",description:"This function returns the specified property from the given emojiID",source:"@site/versioned_docs/version-5.5.5/functions/emoji.md",sourceDirName:"functions",slug:"/functions/emoji",permalink:"/docs/5.5.5/functions/emoji",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687448341,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"$emoji"},sidebar:"docs",previous:{title:"$editWebhookMessage",permalink:"/docs/5.5.5/functions/editwebhookmessage"},next:{title:"$emojiCount",permalink:"/docs/5.5.5/functions/emojicount"}},s={},p=[{value:"This function has2 fields",id:"this-function-has2-fields",level:4},{value:"Options",id:"options",level:4},{value:"Available Properties",id:"available-properties",level:4}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the specified property from the given emojiID"),(0,o.kt)("h4",{id:"this-function-has2-fields"},"This function has2 fields"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Emoji ID ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Property ","(","Required",")")),(0,o.kt)("p",null,"Raw Usage:  ",(0,o.kt)("inlineCode",{parentName:"p"},"$emoji[emojiID;property]")),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Emoji ID - The emoji from what ","<","property",">"," is  based off of"),(0,o.kt)("li",{parentName:"ul"},"Property - The property of the ","<","emoji",">")),(0,o.kt)("h4",{id:"available-properties"},"Available Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"name - Emoji's name"),(0,o.kt)("li",{parentName:"ul"},"id - Emoji's id"),(0,o.kt)("li",{parentName:"ul"},"created - Emoji's date and time of creation"),(0,o.kt)("li",{parentName:"ul"},"url - Emoji's URL"),(0,o.kt)("li",{parentName:"ul"},"identifier - Emoji's name:id"),(0,o.kt)("li",{parentName:"ul"},"isanimated - Whether or not the emoji is animated, Returns Boolean"),(0,o.kt)("li",{parentName:"ul"},"isdeleted - Whether or not the emoji is deleted, Returns Boolean"),(0,o.kt)("li",{parentName:"ul"},"guildid - Emoji's guild of origin"),(0,o.kt)("li",{parentName:"ul"},"ismanaged - Whether or not the emoji is a custom or discord default emoji, Returns Boolean")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emoji",\ncode: `\n$emoji[815215293353426944;name]\n`\n})\n\n//Or the specified emoji\n\nbot.command({\nname: "emoji",\ncode: `\n$emoji[$message;name]\n`\n})\n')))}c.isMDXComponent=!0}}]);