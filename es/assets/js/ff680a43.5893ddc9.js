"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[61794],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(f,i(i({ref:n},s),{},{components:t})):o.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4845:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var o=t(3905),a=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&s(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&s(e,t,n[t]);return e},u=(e,n)=>r(e,i(n)),m=(e,n)=>{var t={};for(var o in e)p.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&l)for(var o of l(e))n.indexOf(o)<0&&c.call(e,o)&&(t[o]=e[o]);return t};const f={title:"$isAutoComplete",description:"$isAutoComplete devolver\xe1 verdadero o falso dependiendo de que la opci\xf3n de la barra de comandos introducida sea autocompletada o no. (funci\xf3n autoCompleteRespond)",id:"isAutoComplete"},v=void 0,y={unversionedId:"functions/interaction-related/isAutoComplete",id:"version-6.4.0/functions/interaction-related/isAutoComplete",title:"$isAutoComplete",description:"$isAutoComplete devolver\xe1 verdadero o falso dependiendo de que la opci\xf3n de la barra de comandos introducida sea autocompletada o no. (funci\xf3n autoCompleteRespond)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/isAutoComplete.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/isAutoComplete",permalink:"/website-old/es/docs/functions/interaction-related/isAutoComplete",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 sept 2023",frontMatter:{title:"$isAutoComplete",description:"$isAutoComplete devolver\xe1 verdadero o falso dependiendo de que la opci\xf3n de la barra de comandos introducida sea autocompletada o no. (funci\xf3n autoCompleteRespond)",id:"isAutoComplete"},sidebar:"docs",previous:{title:"$interactionModal",permalink:"/website-old/es/docs/functions/interaction-related/interactionModal"},next:{title:"$joinThread",permalink:"/website-old/es/docs/functions/interaction-related/joinThread"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:g},C="wrapper";function h(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,o.kt)(C,u(d(d({},O),a),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$isAutoComplete")," devolver\xe1 verdadero o falso seg\xfan la opci\xf3n de comando de barra inclinada ingresada que se complete autom\xe1ticamente o no. (funci\xf3n autoCompleteRespond)"),(0,o.kt)("h2",d({},{id:"uso"}),"Uso"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$isAutoComplete\n")),(0,o.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,o.kt)("p",null,'Esto crear\xe1 un comando de barra con la funci\xf3n "autocompletar":'),(0,o.kt)("p",null,'Tenga en cuenta que requiere "',(0,o.kt)("strong",{parentName:"p"},"events: ",'["onMessage", "onInteractionCreate"]'),'" en su archivo principal (tambi\xe9n conocido como, en la mayor\xeda de los casos, index.js)'),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'createSlashCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n  "name": "option", \n  "description": "test",\n  "required": false,\n  "type": 3, \n  "autocomplete": true\n}]]`\n});\n')),(0,o.kt)("p",null,"Comprobando si el autocompletado es igual a ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", si es as\xed responder\xe1 con la respuesta dada (adici\xf3n del c\xf3digo anterior):"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "example",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[Primera opci\xf3n;\xa1Seleccionaste la primera opci\xf3n, por lo tanto estoy respondiendo con esto!;Segunda opci\xf3n;\xa1Seleccionaste el primer segundo, por lo tanto, estoy respondiendo con esto!]\n  $else\n  $interactionReply[$slashOption[option];;;;everyone]\n  $endif\n  `\n});\n')),(0,o.kt)("p",null,"Crear los comandos de barra con otra opci\xf3n:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'createSlashCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n  "name": "option",\n  "description": "test",\n  "required": false, \n  "type": 3,\n  "autocomplete": true \n}, {\n  "name": "anotheroption",\n  "description": "test",\n  "required": false,\n  "type": 3\n}]]`\n});\n')),(0,o.kt)("p",null,"Comprobando si el autocompletado es igual a ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", si es as\xed responder\xe1 con la respuesta dada (adici\xf3n del c\xf3digo anterior):"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "test",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[[{ \n    "name" : "Primera opci\xf3n",\n    "value" : "\xa1Seleccionaste la primera opci\xf3n, por lo tanto respondo con esto!"\n  }, {\n    "name" : "Segunda opci\xf3n",\n    "value" : "\xa1Seleccionaste la segunda opci\xf3n, por lo tanto estoy respondiendo con esto!"\n  }]]\n  $else\n  $interactionReply[$slashOption[option] - autocomplete #SEMI# $slashOption[anotheroption] - false autocomplete;;;;everyone]\n  $endif\n  `\n});\n')))}h.isMDXComponent=!0}}]);