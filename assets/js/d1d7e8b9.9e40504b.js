"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[85770],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"$ram",description:"returns the memory usage in MB"},i=void 0,l={unversionedId:"functions/ram",id:"version-5.5.5/functions/ram",title:"$ram",description:"returns the memory usage in MB",source:"@site/versioned_docs/version-5.5.5/functions/ram.md",sourceDirName:"functions",slug:"/functions/ram",permalink:"/docs/5.5.5/functions/ram",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686576749,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{title:"$ram",description:"returns the memory usage in MB"},sidebar:"docs",previous:{title:"$queueStatus",permalink:"/docs/5.5.5/functions/queuestatus"},next:{title:"$random",permalink:"/docs/5.5.5/functions/random"}},s={},u=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns the memory usage in Megabyte. "),(0,a.kt)("h4",{id:"fields"},"Fields"),(0,a.kt)("p",null,"This function has 1 field"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Type ","(","Optional",")")),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$ram[type (optional)]")),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Type - The ram usage type")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rss - Process memory usage (default)"),(0,a.kt)("li",{parentName:"ul"},"heapTotal - Memory allocated to javascript"),(0,a.kt)("li",{parentName:"ul"},"heapUsed - Amount of memory used by javascript"),(0,a.kt)("li",{parentName:"ul"},"external - Amount of memory used by nodejs (only) including arrayBuffers"),(0,a.kt)("li",{parentName:"ul"},"arrayBuffers - Amount of memory used by ArrayBuffer, TypedArray, and Buffer")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "memory", \ncode: `\nMemory usage: $ram` //Ex: Returns 64.83941650390625\n})\n')))}c.isMDXComponent=!0}}]);