"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[6416],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,m=u["".concat(l,".").concat(y)]||u[y]||f[y]||i;return t?n.createElement(m,o(o({ref:r},s),{},{components:t})):n.createElement(m,o({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},93840:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>k,contentTitle:()=>v,default:()=>g,frontMatter:()=>m,metadata:()=>d,toc:()=>b});var n=t(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&s(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&s(e,t,r[t]);return e},f=(e,r)=>i(e,o(r)),y=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$playPreviousTrack",description:"$playPreviousTrack will play the previous track.",id:"playPreviousTrack"},v=void 0,d={unversionedId:"official/aoi.music/functions/playPreviousTrack",id:"official/aoi.music/functions/playPreviousTrack",title:"$playPreviousTrack",description:"$playPreviousTrack will play the previous track.",source:"@site/extensions/official/aoi.music/functions/playPreviousTrack.md",sourceDirName:"official/aoi.music/functions",slug:"/official/aoi.music/functions/playPreviousTrack",permalink:"/website-old/extensions/official/aoi.music/functions/playPreviousTrack",draft:!1,tags:[],version:"current",frontMatter:{title:"$playPreviousTrack",description:"$playPreviousTrack will play the previous track.",id:"playPreviousTrack"},sidebar:"docs",previous:{title:"$pauseTrack",permalink:"/website-old/extensions/official/aoi.music/functions/pauseTrack"},next:{title:"$playTrack",permalink:"/website-old/extensions/official/aoi.music/functions/playTrack"}},k={},b=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:b},P="wrapper";function g(e){var r=e,{components:t}=r,a=y(r,["components"]);return(0,n.kt)(P,f(u(u({},O),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$playPreviousTrack")," will play the previous track."),(0,n.kt)("h2",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$playPreviousTrack\n")),(0,n.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will play the previous track:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'playPreviousTrack',\n    code: `\n    $playPreviousTrack\n  `\n});\n")))}g.isMDXComponent=!0}}]);