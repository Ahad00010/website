"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[41980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>w,frontMatter:()=>m,metadata:()=>v,toc:()=>y});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>i(e,a(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$ping",description:"$ping devolver\xe1 la latencia del bot.",id:"ping"},b=void 0,v={unversionedId:"functions/info-related/ping",id:"version-6.4.0/functions/info-related/ping",title:"$ping",description:"$ping devolver\xe1 la latencia del bot.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/ping.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/ping",permalink:"/website-old/es/docs/functions/info-related/ping",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 sept 2023",frontMatter:{title:"$ping",description:"$ping devolver\xe1 la latencia del bot.",id:"ping"},sidebar:"docs",previous:{title:"$maximumMembers",permalink:"/website-old/es/docs/functions/info-related/maximumMembers"},next:{title:"$reactionCount",permalink:"/website-old/es/docs/functions/info-related/reactionCount"}},g={},y=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:y},j="wrapper";function w(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(j,d(u(u({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$ping")," devolver\xe1 la latencia del bot."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$ping\n")),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 la latencia de su bot en MS:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'ping',\n    code: `\n  Mi ping es: $pingMS\n  `\n});\n")))}w.isMDXComponent=!0}}]);