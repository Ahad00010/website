"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},53281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const l={title:"$editTextSplitElement",description:"Edits the value from the given index"},o=void 0,a={unversionedId:"functions/edittextsplitelement",id:"version-5.5.5/functions/edittextsplitelement",title:"$editTextSplitElement",description:"Edits the value from the given index",source:"@site/versioned_docs/version-5.5.5/functions/edittextsplitelement.md",sourceDirName:"functions",slug:"/functions/edittextsplitelement",permalink:"/docs/5.5.5/functions/edittextsplitelement",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686857841,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"$editTextSplitElement",description:"Edits the value from the given index"},sidebar:"docs",previous:{title:"$editMessage",permalink:"/docs/5.5.5/functions/editmessage"},next:{title:"$editWebhookMessage",permalink:"/docs/5.5.5/functions/editwebhookmessage"}},s={},p=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function edits a value in $textSplit and replaces it with a new value"),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("p",null,"This function has 2 fields"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Index ","(","Required",")"),(0,i.kt)("li",{parentName:"ol"},"Value ","(","Required",")")),(0,i.kt)("p",null,"Raw Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"$editTextSplitElement[index;value]")),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Index - The position of the element we're editing"),(0,i.kt)("li",{parentName:"ul"},"Value - The new value of the element")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "editTextSplit",\ncode: `\n$joinSplitText[/]\n$editTextSplitElement[1;hello]\n$textSplit[hi/bye/no/yes;/]`\n})\n// Returns: hello/bye/no/yes\n')))}d.isMDXComponent=!0}}]);