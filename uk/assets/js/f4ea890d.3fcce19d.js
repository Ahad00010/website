"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[69603],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>N,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$parseDate",description:"$parseDate will return the date/time for the given milliseconds",id:"parseDate"},y=void 0,g={unversionedId:"functions/util-related/parseDate",id:"version-6.4.0/functions/util-related/parseDate",title:"$parseDate",description:"$parseDate will return the date/time for the given milliseconds",source:"@site/versioned_docs/version-6.4.0/functions/util-related/parseDate.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/parseDate",permalink:"/website-old/uk/docs/functions/util-related/parseDate",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 \u0432\u0435\u0440. 2023 \u0440.",frontMatter:{title:"$parseDate",description:"$parseDate will return the date/time for the given milliseconds",id:"parseDate"},sidebar:"docs",previous:{title:"$onlyPerms",permalink:"/website-old/uk/docs/functions/util-related/onlyPerms"},next:{title:"$parseTime",permalink:"/website-old/uk/docs/functions/util-related/parseTime"}},k={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Types",id:"types",level:3},{value:"Example(s)",id:"examples",level:2}],v={toc:b},h="wrapper";function N(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(h,c(d(d({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$parseDate")," $parseDate will return the date/time for the given milliseconds"),(0,a.kt)("h2",d({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$parseDate[ms;type?]\n")),(0,a.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ms"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Time in ms you want to parse."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"type?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The type in which the parsed date will be returned in."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("h3",d({},{id:"types"}),"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Format"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"time"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"1 years, 1 week, 6 days, 8 hours, 16 minutes, 20 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"date"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"1/1/2023, 8:16:20 AM")))),(0,a.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will return your current date in the ",(0,a.kt)("inlineCode",{parentName:"p"},"date")," ",(0,a.kt)("a",d({parentName:"p"},{href:"#types"}),"format"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'parseDate',\n    code: `\n  $parseDate[$dateStamp;date]\n  `\n});\n")))}N.isMDXComponent=!0}}]);