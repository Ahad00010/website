"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Is file empty function",description:"This function will return `true` or `false` based on whether the file specified is empty or not.",authors:{name:"@artemcurious",title:"Member",url:"https://discord.com/users/591690683509768223",image_url:"https://cdn.discordapp.com/avatars/591690683509768223/e193473ac4cbcdecf90fc00826f1175e.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,c={permalink:"/wikis/posts/is-file-empty-function-d0m8v5",source:"@site/forums/posts/is-file-empty-function-d0m8v5.md",title:"Is file empty function",description:"This function will return `true` or `false` based on whether the file specified is empty or not.",date:"2023-06-22T15:39:01.000Z",formattedDate:"June 22, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@artemcurious",title:"Member",url:"https://discord.com/users/591690683509768223",image_url:"https://cdn.discordapp.com/avatars/591690683509768223/e193473ac4cbcdecf90fc00826f1175e.png",imageURL:"https://cdn.discordapp.com/avatars/591690683509768223/e193473ac4cbcdecf90fc00826f1175e.png"}],frontMatter:{title:"Is file empty function",description:"This function will return `true` or `false` based on whether the file specified is empty or not.",authors:{name:"@artemcurious",title:"Member",url:"https://discord.com/users/591690683509768223",image_url:"https://cdn.discordapp.com/avatars/591690683509768223/e193473ac4cbcdecf90fc00826f1175e.png",imageURL:"https://cdn.discordapp.com/avatars/591690683509768223/e193473ac4cbcdecf90fc00826f1175e.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"HowGamer command",permalink:"/wikis/posts/howgamer-command-ic9vu7"},nextItem:{title:"Long Serverinfo command",permalink:"/wikis/posts/long-serverinfo-command-iiwq2"}},s={authorsImageUrls:[void 0]},l=[{value:"The code",id:"the-code",level:3}],p={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a fairly simple function that will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," based on whether the file specified is empty or not."),(0,o.kt)("h3",{id:"the-code"},"The code"),(0,o.kt)("p",null,"Paste this into your main file, common to be named ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"bot.functionManager.createFunction({\n  name: `$isFileEmpty`,\n  type: \"djs\",\n  code: async d => {\n    const data = d.util.aoiFunc(d);\n    const [filePath] = data.inside.splits;\n\n    const isFileEmpty = filePath => {\n      try {\n        const stats = fs.statSync(filePath);\n        return stats.size === 0;\n      } catch (error) {\n        // Handle file not found or other errors\n        console.error('Error:', error);\n        return false;\n      }\n    }\n\n    data.result = isFileEmpty(filePath);\n\n    return {\n      code: d.util.setCode(data)\n    };\n  }\n});\n")),(0,o.kt)("p",null,"That's it, have fun, bye!"))}f.isMDXComponent=!0}}]);