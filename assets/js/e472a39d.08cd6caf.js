"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[29091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"toToggleCase",description:"A custom d.js function for text modification.",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"},tags:["v6","Other"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,s={permalink:"/wikis/posts/715852000096419900/dmrmlh",source:"@site/forums/posts/715852000096419900/dmrmlh.md",title:"toToggleCase",description:"A custom d.js function for text modification.",date:"2023-06-24T07:21:54.000Z",formattedDate:"June 24, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"Other",permalink:"/wikis/tags/other"}],hasTruncateMarker:!1,authors:[{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png",imageURL:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"}],frontMatter:{title:"toToggleCase",description:"A custom d.js function for text modification.",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png",imageURL:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"},tags:["v6","Other"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"anti swear command",permalink:"/wikis/posts/715852000096419900/cy1ltq"},nextItem:{title:"Colored and styled console logging",permalink:"/wikis/posts/715852000096419900/sof89f"}},c={authorsImageUrls:[void 0]},l=[{value:"Usage",id:"usage",level:2},{value:"Where to use this code?",id:"where-to-use-this-code",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'bot.functionManager.createFunction({\n  name: "$toToggleCase",\n  type: "djs",\n  code: (d) => {\n const data = d.util.aoiFunc(d);\nif (data.err) return d.error(data.err);\n const [ texts ] = data.inside.splits\nconst output = texts\n      .split(" ")\n      .map(\n        (text) =>\n          text.addBrackets().slice(0, 1).toLowerCase() + text.addBrackets().slice(1).toUpperCase(),\n        ).join(" ");\n\ndata.result = output\n    return {\n        code: d.util.setCode(data),\n    };\n}\n})\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$toToggleCase[This Is useless fr]"),(0,a.kt)("br",{parentName:"p"}),"\n","This will result in ",(0,a.kt)("inlineCode",{parentName:"p"},"tHIS iS uSELESS fR")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/902553397281030208/1120917182365306981/image0.jpg",alt:"image"})),(0,a.kt)("h2",{id:"where-to-use-this-code"},"Where to use this code?"),(0,a.kt)("p",null,"Place this in your bottom of main file aka index.js"))}u.isMDXComponent=!0}}]);