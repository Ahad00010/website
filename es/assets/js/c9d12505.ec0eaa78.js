"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(d,".").concat(m)]||c[m]||s[m]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>v,default:()=>O,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e},s=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$getGuildInvite",description:"$getGuildInvite devolver\xe1 todos los canales de una categor\xeda determinada.",id:"getGuildInvite"},v=void 0,f={unversionedId:"functions/guild-related/getGuildInvite",id:"version-6.4.0/functions/guild-related/getGuildInvite",title:"$getGuildInvite",description:"$getGuildInvite devolver\xe1 todos los canales de una categor\xeda determinada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/getGuildInvite.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/getGuildInvite",permalink:"/website-old/es/docs/functions/guild-related/getGuildInvite",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 sept 2023",frontMatter:{title:"$getGuildInvite",description:"$getGuildInvite devolver\xe1 todos los canales de una categor\xeda determinada.",id:"getGuildInvite"},sidebar:"docs",previous:{title:"$getGuildAutomodNames",permalink:"/website-old/es/docs/functions/guild-related/getGuildAutomodNames"},next:{title:"$giveRole",permalink:"/website-old/es/docs/functions/guild-related/giveRole"}},k={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2},{value:"Ejemplo(s) avanzado",id:"ejemplos-avanzado",level:3}],y={toc:b},N="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(N,s(c(c({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getGuildInvite")," devolver\xe1 todos los canales de una categor\xeda determinada."),(0,r.kt)("h2",c({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$getGuildInvite[servidorID?;...opci\xf3nes]\n")),(0,r.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"servidorID?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"El ID del canal del cual se crear\xe1 la invitaci\xf3n."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"opciones?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Objeto de opci\xf3n de invitaci\xf3n."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",null,"Tipos de destino de invitaci\xf3n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"TIPO"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"VALOR"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"STREAM"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"EMBEDDED_APPLICATION"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"2"))))),(0,r.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto crear\xe1 una invitaci\xf3n del canal donde se ejecuta el comando en:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getGuildInvite',\n    code: `\n  $getGuildInvite[$guildID]\n  `\n});\n")),(0,r.kt)("h3",c({},{id:"ejemplos-avanzado"}),"Ejemplo(s) avanzado"),(0,r.kt)("p",null,"Crear invitaciones temporales con usos limitados:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'getGuildInvite\',\n    code: `\n  $getGuildInvite[$guildID;{\n            "temporary": true,\n            "maxAge": 650,\n            "maxUses": 25,\n            "unique": true\n  }]\n  `\n});\n')))}O.isMDXComponent=!0}}]);