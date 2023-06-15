"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[49916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,v=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(v,l(l({ref:t},s),{},{components:n})):o.createElement(v,l({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"bot.loopCommand",description:"A command that gets executed in an interval as a loop."},l=void 0,i={unversionedId:"events/bot.loopcommand",id:"version-5.5.5/events/bot.loopcommand",title:"bot.loopCommand",description:"A command that gets executed in an interval as a loop.",source:"@site/versioned_docs/version-5.5.5/events/bot.loopcommand.md",sourceDirName:"events",slug:"/events/bot.loopcommand",permalink:"/docs/5.5.5/events/bot.loopcommand",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686857841,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"bot.loopCommand",description:"A command that gets executed in an interval as a loop."},sidebar:"docs",previous:{title:"How to use events",permalink:"/docs/5.5.5/events/"},next:{title:"bot.onBanAdd",permalink:"/docs/5.5.5/events/bot.onbanadd"}},p={},c=[{value:"Usage:",id:"usage",level:4},{value:"Example command:",id:"example-command",level:4}],s={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This command loops a code to run every x ",(0,r.kt)("strong",{parentName:"p"},"milliseconds.")),(0,r.kt)("p",null,"Properties are ",(0,r.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"every"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"executeOnStartup")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," ."),(0,r.kt)("p",null,"The properties ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"executeOnStartup")," are optional. "),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.loopCommand({\ncode: `\n...\n`,\nchannel: "channel id",\nexecuteOnStartup: true/false,\nevery: ms\n})\n')),(0,r.kt)("h4",{id:"example-command"},"Example command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.loopCommand({\ncode: `\nhi\n`,\nchannel: \"804505461076131840\",\nexecuteOnStartup: true,\nevery: 500000\n})\n\n/*\nThis command will send 'hi' to the given channel id every 5 minutes. \nExecuteOnStartup means when the bot starts/comes online, the loop will start\n*/\n")),(0,r.kt)("p",null,"Keep in mind that ",(0,r.kt)("inlineCode",{parentName:"p"},"every")," property is in ms! Watch out not to rate limit your bot!"))}d.isMDXComponent=!0}}]);