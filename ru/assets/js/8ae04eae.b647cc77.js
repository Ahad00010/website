"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[13445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>v,frontMatter:()=>g,metadata:()=>y,toc:()=>k});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>i(e,l(t)),m=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n};const g={title:"Introduction of aoi.js-library",description:"What aoi.js-library is and how to use it.",id:"introduction"},f=void 0,y={unversionedId:"community/aoi.js-library/introduction",id:"community/aoi.js-library/introduction",title:"Introduction of aoi.js-library",description:"What aoi.js-library is and how to use it.",source:"@site/extensions/community/aoi.js-library/introduction.md",sourceDirName:"community/aoi.js-library",slug:"/community/aoi.js-library/introduction",permalink:"/website-old/ru/extensions/community/aoi.js-library/introduction",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction of aoi.js-library",description:"What aoi.js-library is and how to use it.",id:"introduction"},sidebar:"docs",previous:{title:"Introduction of aoi.canvas",permalink:"/website-old/ru/extensions/community/aoi.canvas/introduction"}},b={},k=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Installation",id:"installation",level:3},{value:"Adding your Plugins",id:"adding-your-plugins",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Loading Plugins:",id:"loading-plugins",level:3},{value:"Available Plugins:",id:"available-plugins",level:3},{value:"User Plugins",id:"user-plugins",level:2},{value:"User Plugin Structure",id:"user-plugin-structure",level:3},{value:"Example User Plugin (aoi.js)",id:"example-user-plugin-aoijs",level:3}],h={toc:k},j="wrapper";function v(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(j,d(c(c({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",c({},{id:"table-of-contents"}),"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#introduction"}),"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#setup"}),"Setup"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#installation"}),"Installation")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#adding-your-plugins"}),"Adding your Plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#plugins"}),"Plugins"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#loading-plugins"}),"Loading Plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#available-plugins"}),"Available Plugins")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#user-plugins"}),"User Plugins"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#user-plugin-structure"}),"User Plugin Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#example-user-plugin-aoijs"}),"Example User Plugin (aoi.js)"))))),(0,a.kt)("hr",null),(0,a.kt)("h2",c({},{id:"introduction"}),"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",c({parentName:"p"},{href:"https://www.npmjs.com/package/aoi.js-library?activeTab=readme"}),"aoi.js-library@1.0.1")," is a NPM package created by ",(0,a.kt)("a",c({parentName:"p"},{href:"https://discord.com/users/608358453580136499"}),"leref")," which adds the ability to load & create plugins to aoi.js."),(0,a.kt)("p",null,"aoi.js-library is a community powered NPM package which allows users to load specific plugins which add more functionality to aoi.js"),(0,a.kt)("h2",c({},{id:"setup"}),"Setup"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NPM Package"),": ",(0,a.kt)("a",c({parentName:"p"},{href:"https://www.npmjs.com/package/aoi.js-library"}),"https://www.npmjs.com/package/aoi.js-library"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Creator"),": ",(0,a.kt)("a",c({parentName:"p"},{href:"https://discord.com/users/608358453580136499"}),"leref")),(0,a.kt)("h3",c({},{id:"installation"}),"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"npm install aoi.js-library\n")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="index.js"',title:'"index.js"'}),'const { AoiClient } = require("aoi.js");\nconst { Plugins } = require("aoi.js-library");\n\nconst bot = new AoiClient({\n    token: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["MessageContent", "Guilds", "GuildMessages"],\n    events: ["onMessage"],\n    database: {\n        type: "aoi.db",\n        db: require("@akarui/aoi.db"),\n        tables: ["main"],\n        path: "./database/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    }\n});\n\n// Ping Command\nbot.command({\n    name: "ping",\n    code: `Pong! $pingms`\n});\n\nnew Plugins({ bot }).loadPlugins([\n    \'default/comment\',\n]); // Load Plugins Functions from aoi.js-library \n')),(0,a.kt)("h2",c({},{id:"adding-your-plugins"}),"Adding your Plugins"),(0,a.kt)("p",null,"You can even add your own plugins to this package and make it available for anyone to use!"),(0,a.kt)("p",null,"Visit the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/Leref/aoi.js-library/pulls"}),"Github Repository")," and submit a Pull Request!"),(0,a.kt)("p",null,"Wait for feedback and for it to get accept, and done! That's it."),(0,a.kt)("h2",c({},{id:"plugins"}),"Plugins"),(0,a.kt)("p",null,"The Plugins class provides a way to load and manage plugins for your Discord bot."),(0,a.kt)("h3",c({},{id:"loading-plugins"}),"Loading Plugins:"),(0,a.kt)("p",null,"The Plugins class provides a way to load and manage plugins for your Discord bot."),(0,a.kt)("p",null,"To load an available plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),'new Plugins({ bot }).loadPlugins([\n    "author/pluginName"\n]);\n')),(0,a.kt)("p",null,"Example which loads the comment plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"new Plugins({ bot }).loadPlugins([\n    'default/comment',\n]);\n")),(0,a.kt)("p",null,"By adding this function in the field, it'll only enable $comment, it supports an multiple array if provided otherwise ignored."),(0,a.kt)("h3",c({},{id:"available-plugins"}),"Available Plugins:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$os\n$comment\n")),(0,a.kt)("h2",c({},{id:"user-plugins"}),"User Plugins"),(0,a.kt)("p",null,"The UserPlugins class allows you to load user-specific plugins for your Discord bot from a directory of your choice."),(0,a.kt)("p",null,"To load user plugins:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"new UserPlugins({ bot }).loadUserPlugins('path');\n")),(0,a.kt)("p",null,"Replace path with the actual path to the directory where your user plugins are located."),(0,a.kt)("h3",c({},{id:"user-plugin-structure"}),"User Plugin Structure"),(0,a.kt)("p",null,"User plugins must be in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="path/plugins.js"',title:'"path/plugins.js"'}),'module.exports = {\n    name: "Plugin Name", //$pluginName\n    type: "Plugin Type", //aoi.js or djs\n    code: `Plugin Code` //pluginCode\n}\n')),(0,a.kt)("h3",c({},{id:"example-user-plugin-aoijs"}),"Example User Plugin (aoi.js)"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="path/plugins.js"',title:'"path/plugins.js"'}),'module.exports = {\n    name: "$lerefIcon", //$pluginName\n    type: "aoi.js", //aoi.js or djs\n    params: [], //aoi.js params\n    code: `$lerefAvatar` //pluginCode\n}\n')))}v.isMDXComponent=!0}}]);