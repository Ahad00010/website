"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24318],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||y[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"$stopPlayer",description:"$stopPlayer will destroy the current player.",id:"stopPlayer"},i=void 0,l={unversionedId:"aoi.music/functions/stopPlayer",id:"aoi.music/functions/stopPlayer",title:"$stopPlayer",description:"$stopPlayer will destroy the current player.",source:"@site/extensions/aoi.music/functions/stopPlayer.md",sourceDirName:"aoi.music/functions",slug:"/aoi.music/functions/stopPlayer",permalink:"/extensions/aoi.music/functions/stopPlayer",draft:!1,tags:[],version:"current",frontMatter:{title:"$stopPlayer",description:"$stopPlayer will destroy the current player.",id:"stopPlayer"},sidebar:"docs",previous:{title:"$songInfo",permalink:"/extensions/aoi.music/functions/songInfo"},next:{title:"$stopTrack",permalink:"/extensions/aoi.music/functions/stopTrack"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],p={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$stopPlayer")," will destroy the current player. "),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$stopPlayer\n")),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"This will destroy the current player:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'stopPlayer',\n    code: `\n    $stopPlayer\n  `\n});\n")))}y.isMDXComponent=!0}}]);