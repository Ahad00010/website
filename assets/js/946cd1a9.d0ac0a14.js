"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[86422],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||c;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=f;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},82970:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const c={title:"$resumeTrack",description:"$resumeTrack will resume the current paused track.",id:"resumeTrack"},i=void 0,o={unversionedId:"aoi.music/functions/resumeTrack",id:"aoi.music/functions/resumeTrack",title:"$resumeTrack",description:"$resumeTrack will resume the current paused track.",source:"@site/extensions/aoi.music/functions/resumeTrack.md",sourceDirName:"aoi.music/functions",slug:"/aoi.music/functions/resumeTrack",permalink:"/extensions/aoi.music/functions/resumeTrack",draft:!1,tags:[],version:"current",frontMatter:{title:"$resumeTrack",description:"$resumeTrack will resume the current paused track.",id:"resumeTrack"},sidebar:"docs",previous:{title:"$resetFilter",permalink:"/extensions/aoi.music/functions/resetFilter"},next:{title:"$seek",permalink:"/extensions/aoi.music/functions/seek"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],l={toc:u},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$resumeTrack")," will resume the current paused track.   "),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$resumeTrack\n")),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will resume the current track:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'resumeTrack',\n    code: `\n    $resumeTrack\n  `\n});\n")))}m.isMDXComponent=!0}}]);