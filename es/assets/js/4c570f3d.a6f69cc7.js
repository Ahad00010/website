"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[68214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=d(n),f=o,g=c["".concat(u,".").concat(f)]||c[f]||p[f]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>C,frontMatter:()=>g,metadata:()=>v,toc:()=>y});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))d.call(t,n)&&s(e,n,t[n]);return e},p=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$guildCount",description:"$guildCount devolver\xe1 la cantidad de gremios de donde se encuentra tu bot.",id:"guildCount"},m=void 0,v={unversionedId:"functions/guild-related/guildCount",id:"version-6.4.0/functions/guild-related/guildCount",title:"$guildCount",description:"$guildCount devolver\xe1 la cantidad de gremios de donde se encuentra tu bot.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildCount.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildCount",permalink:"/website-old/es/docs/functions/guild-related/guildCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 sept 2023",frontMatter:{title:"$guildCount",description:"$guildCount devolver\xe1 la cantidad de gremios de donde se encuentra tu bot.",id:"guildCount"},sidebar:"docs",previous:{title:"$guildContentFilter",permalink:"/website-old/es/docs/functions/guild-related/guildContentFilter"},next:{title:"$guildDefaultMessageNotifications",permalink:"/website-old/es/docs/functions/guild-related/guildDefaultMessageNotifications"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:y},j="wrapper";function C(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(j,p(c(c({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildCount")," devolver\xe1 la cantidad de Bots en su servidor."),(0,r.kt)("h2",c({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$guildCount\n")),(0,r.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 la cantidad de servidores en los que se encuentra tu bot:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildCount',\n    code: `\n\xa1Estoy en los gremios de $guildCount!\n\n  `\n});\n")))}C.isMDXComponent=!0}}]);