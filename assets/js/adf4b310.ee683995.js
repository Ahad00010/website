"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[77047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"$textSplitMap",description:"Creates a loop over all the indexes of $textSplit"},i=void 0,l={unversionedId:"functions/textsplitmap",id:"version-5.5.5/functions/textsplitmap",title:"$textSplitMap",description:"Creates a loop over all the indexes of $textSplit",source:"@site/versioned_docs/version-5.5.5/functions/textsplitmap.md",sourceDirName:"functions",slug:"/functions/textsplitmap",permalink:"/docs/5.5.5/functions/textsplitmap",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687591314,formattedLastUpdatedAt:"Jun 24, 2023",frontMatter:{title:"$textSplitMap",description:"Creates a loop over all the indexes of $textSplit"},sidebar:"docs",previous:{title:"$textSplit",permalink:"/docs/5.5.5/functions/textsplit"},next:{title:"$textTrim",permalink:"/docs/5.5.5/functions/texttrim"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function creates a loop over all the values in $textSplit"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$textSplitMap[awaitedCommand]\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "loop",\ncode: `\n$textSplitMap[example]\n$textSplit[hi/hello/bye/goodbye;/]\n`\n})\n//TIP: To get the textSplit value itself, use $message[1]\n\nbot.awaitedCommand({\nname: "example",\ncode: `\nValue => $message[1]\n`\n})\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3586).Z,width:"403",height:"228"})))}m.isMDXComponent=!0},3586:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (65)-6ebe3d6fa3eb3cfeec9ea13e8508f8b2.png"}}]);