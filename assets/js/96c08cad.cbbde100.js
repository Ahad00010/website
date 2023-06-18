"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[76775],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,b=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"$getLeaderboardInfo"},i=void 0,l={unversionedId:"functions/getleaderboardinfo",id:"version-5.5.5/functions/getleaderboardinfo",title:"$getLeaderboardInfo",description:"This function allows the bot to grab info from any of the leaderboard functions",source:"@site/versioned_docs/version-5.5.5/functions/getleaderboardinfo.md",sourceDirName:"functions",slug:"/functions/getleaderboardinfo",permalink:"/docs/5.5.5/functions/getleaderboardinfo",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687066227,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"$getLeaderboardInfo"},sidebar:"docs",previous:{title:"$getInviteInfo",permalink:"/docs/5.5.5/functions/getinviteinfo"},next:{title:"$getMessage",permalink:"/docs/5.5.5/functions/getmessage"}},s={},u=[],c={toc:u},f="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function allows the bot to grab info from any of the leaderboard functions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$getLeaderboardInfo[variable;id;user/globaluser/server;top/name/value]\n")),(0,a.kt)("p",null,"Property explanations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"variable - The variable where the leaderboard is based off of"),(0,a.kt)("li",{parentName:"ul"},"id - The user the info is based off of"),(0,a.kt)("li",{parentName:"ul"},"user - User variable"),(0,a.kt)("li",{parentName:"ul"},"globaluser - Global user variable"),(0,a.kt)("li",{parentName:"ul"},"server - Server variable"),(0,a.kt)("li",{parentName:"ul"},"top - Leaderboard position"),(0,a.kt)("li",{parentName:"ul"},"name - The username of the user"),(0,a.kt)("li",{parentName:"ul"},"value - Their variable value")),(0,a.kt)("p",null,"Using the function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: 'leaderboard-info',\ncode: `User's Position: $getLeaderboardInfo[money;535566311942651924;user;top]`\n})\n")))}p.isMDXComponent=!0}}]);