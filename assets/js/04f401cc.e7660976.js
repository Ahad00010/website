"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78689],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(a),u=n,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={title:"$replaceTextWithRegex",description:"$replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.",id:"replaceTextWithRegex"},i=void 0,p={unversionedId:"functions/util-related/replaceTextWithRegex",id:"version-6.2.6/functions/util-related/replaceTextWithRegex",title:"$replaceTextWithRegex",description:"$replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.",source:"@site/versioned_docs/version-6.2.6/functions/util-related/replaceTextWithRegex.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/replaceTextWithRegex",permalink:"/docs/functions/util-related/replaceTextWithRegex",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1686857841,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"$replaceTextWithRegex",description:"$replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.",id:"replaceTextWithRegex"},sidebar:"docs",previous:{title:"$replaceText",permalink:"/docs/functions/util-related/replaceText"},next:{title:"$resolveColor",permalink:"/docs/functions/util-related/resolveColor"}},c={},o=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2},{value:"Advanced Example",id:"advanced-example",level:3}],s={toc:o},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$replaceTextWithRegex")," will replace specific segments of text."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$replaceTextWithRegex[text;reg;flags;newText]\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Text you want to modify."),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reg"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The regex that will be replaced."),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"flags"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#flags"},"Flags"),"."),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"newText"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The text that will replace ",(0,n.kt)("inlineCode",{parentName:"td"},"reg"),"."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,n.kt)("details",{open:!0},(0,n.kt)("summary",null,(0,n.kt)("h2",null," Flags ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Flags"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"g"),(0,n.kt)("td",{parentName:"tr",align:null},"Replace all matches (case-sensitive)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"m"),(0,n.kt)("td",{parentName:"tr",align:null},"Multiline matching")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"i"),(0,n.kt)("td",{parentName:"tr",align:null},"Replace all matches (case-insensitive)"))))),(0,n.kt)("h2",{id:"examples"},"Example(s)"),(0,n.kt)("p",null,"This will replace ",(0,n.kt)("inlineCode",{parentName:"p"},"more")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"less"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'replaceTextWithRegex',\n    code: `\n  $replaceTextWithRegex[This function is more complicated than it looks.;more;g;less]\n  `\n});  \n")),(0,n.kt)("h3",{id:"advanced-example"},"Advanced Example"),(0,n.kt)("p",null,"This will replace ",(0,n.kt)("inlineCode",{parentName:"p"},"less")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"more"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'replaceTextWithRegex',\n    code: `\n  $replaceTextWithRegex[This function is more complicated than it looks.;lESs;i;more]\n  `\n});  \n")))}d.isMDXComponent=!0}}]);