"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),v=o,d=f["".concat(i,".").concat(v)]||f[v]||p[v]||s;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},53512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={title:"$serverBoostLevel"},a=void 0,c={unversionedId:"functions/serverboostlevel",id:"version-5.5.5/functions/serverboostlevel",title:"$serverBoostLevel",description:"This function returns the server boost level.",source:"@site/versioned_docs/version-5.5.5/functions/serverboostlevel.md",sourceDirName:"functions",slug:"/functions/serverboostlevel",permalink:"/docs/5.5.5/functions/serverboostlevel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686576749,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{title:"$serverBoostLevel"},sidebar:"docs",previous:{title:"$serverBoostCount",permalink:"/docs/5.5.5/functions/serverboostcount"},next:{title:"$serverChannelExists",permalink:"/docs/5.5.5/functions/serverchannelexists"}},i={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the server boost level."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "boostLevel",\ncode: `\nBoost Level: $serverBoostLevel\n`\n})\n')))}p.isMDXComponent=!0}}]);