"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12641],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},79476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var a=t(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&c(e,t,n[t]);return e},d=(e,n)=>o(e,i(n)),f=(e,n)=>{var t={};for(var a in e)s.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};const m={title:"Advanced Features",description:"All about aoi.panel's advanced features.",id:"aoipanel-advanced"},g=void 0,v={unversionedId:"official/aoi.panel/aoipanel-advanced",id:"official/aoi.panel/aoipanel-advanced",title:"Advanced Features",description:"All about aoi.panel's advanced features.",source:"@site/extensions/official/aoi.panel/advanced.md",sourceDirName:"official/aoi.panel",slug:"/official/aoi.panel/aoipanel-advanced",permalink:"/website-old/fr/extensions/official/aoi.panel/aoipanel-advanced",draft:!1,tags:[],version:"current",frontMatter:{title:"Advanced Features",description:"All about aoi.panel's advanced features.",id:"aoipanel-advanced"},sidebar:"docs",previous:{title:"Introduction",permalink:"/website-old/fr/extensions/official/aoi.panel/aoipanel-introduction"},next:{title:"Events",permalink:"/website-old/fr/extensions/official/aoi.panel/aoipanel-events"}},y={},b=[{value:"Multiple users login",id:"multiple-users-login",level:2},{value:"Custom pages with express",id:"custom-pages-with-express",level:2},{value:"Checking if user is logged in",id:"checking-if-user-is-logged-in",level:3}],h={toc:b},w="wrapper";function O(e){var n=e,{components:t}=n,r=f(n,["components"]);return(0,a.kt)(w,d(u(u({},h),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",u({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This is recommended to be used only by users who have prior knowledge with javascript, HTML and/or express."),(0,a.kt)("p",{parentName:"admonition"},"We will not be providing support for express / HTML / custom javascript support.")),(0,a.kt)("h1",u({},{id:"advanced-usage"}),"Advanced Usage"),(0,a.kt)("h2",u({},{id:"multiple-users-login"}),"Multiple users login"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'const { Panel } = require("@akarui/aoi.panel")\n\nconst panel = new Panel({\n    username: ["your-username-1", "your-username-2", "and so on"],\n    password: ["password-1", "password-2", "and so on"],\n    secret: require(\'crypto\').randomBytes(16).toString("hex"),\n    port: 3000,\n    bot: bot,\n    mainFile: "index.js",\n    commands: "commands"\n});\npanel.loadPanel();\n')),(0,a.kt)("p",null,"While using multiple users, you need the number of usernames equal to the number of passwords."),(0,a.kt)("p",null,"If position of username is one, that user's password position should also be one."),(0,a.kt)("p",null,"The more the number of username passwords inputted, the longer the panel will take to load, so do not use unless\nnecessary."),(0,a.kt)("h2",u({},{id:"custom-pages-with-express"}),"Custom pages with express"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'const app = panel.app;\napp.get("/page_name_which_is_not_already_used", async (req, res) => {\n    res.send("<html><head><title>Aoi.panel</title></head><body>Aoi.panel is cool ngl.</body></html>")\n})\n')),(0,a.kt)("h3",u({},{id:"checking-if-user-is-logged-in"}),"Checking if user is logged in"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'const app = panel.app;\napp.get("/somenewpagename_which_is_not_already_used", (req, res) => {\n    let a = panel.isLoggedIn(req, res);\n    if (a == false) {\n        res.redirect("/")\n    } else {\n        res.send("<html><head><title>Aoi.panel</title></head><body>Aoi.panel is cool ngl.</body></html>")\n    }\n})\n')))}O.isMDXComponent=!0}}]);