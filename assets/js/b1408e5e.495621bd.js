"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12987],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||u;return t?n.createElement(d,c(c({ref:r},s),{},{components:t})):n.createElement(d,c({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var u=t.length,c=new Array(u);c[0]=f;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<u;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81920:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>u,metadata:()=>o,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const u={title:"$clearQueue",description:"$clearQueue will clear the current player's queue.",id:"clearQueue"},c=void 0,o={unversionedId:"aoi.music/functions/clearQueue",id:"aoi.music/functions/clearQueue",title:"$clearQueue",description:"$clearQueue will clear the current player's queue.",source:"@site/extensions/aoi.music/functions/clearQueue.md",sourceDirName:"aoi.music/functions",slug:"/aoi.music/functions/clearQueue",permalink:"/extensions/aoi.music/functions/clearQueue",draft:!1,tags:[],version:"current",frontMatter:{title:"$clearQueue",description:"$clearQueue will clear the current player's queue.",id:"clearQueue"},sidebar:"docs",previous:{title:"$autoPlay",permalink:"/extensions/aoi.music/functions/autoPlay"},next:{title:"$getCurrentTrackDuration",permalink:"/extensions/aoi.music/functions/getCurrentTrackDuration"}},i={},l=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:l},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$clearQueue")," will clear the current player's queue. "),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$clearQueue\n")),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will clear the current queue:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'clearQueue',\n    code: `\n    $clearQueue\n  `\n});\n")))}m.isMDXComponent=!0}}]);