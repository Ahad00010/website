"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[10],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,c=u["".concat(s,".").concat(g)]||u[g]||m[g]||l;return n?r.createElement(c,i(i({ref:t},p),{},{components:n})):r.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>v,frontMatter:()=>c,metadata:()=>k,toc:()=>N});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>l(e,i(t)),g=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const c={title:"Client Sharding",description:"This Guide will be covering how to integrate Sharding for your Discord Bot.",id:"sharding"},h=void 0,k={unversionedId:"guides/client/sharding",id:"version-6.4.0/guides/client/sharding",title:"Client Sharding",description:"This Guide will be covering how to integrate Sharding for your Discord Bot.",source:"@site/versioned_docs/version-6.4.0/guides/client/6sharding.md",sourceDirName:"guides/client",slug:"/guides/client/sharding",permalink:"/website-old/fr/docs/guides/client/sharding",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 sept. 2023",frontMatter:{title:"Client Sharding",description:"This Guide will be covering how to integrate Sharding for your Discord Bot.",id:"sharding"},sidebar:"docs",previous:{title:"Client Status",permalink:"/website-old/fr/docs/guides/client/status"},next:{title:"Interaction Commands",permalink:"/website-old/fr/docs/guides/application-cmds/interactioncommands"}},f={},N=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Introduction",id:"introduction",level:2},{value:"What is Sharding",id:"what-is-sharding",level:3},{value:"Using Sharding",id:"using-sharding",level:3},{value:"Usage",id:"usage",level:2},{value:"File Parameters",id:"file-parameters",level:3},{value:"sharderOptions",id:"sharderoptions",level:3},{value:"spawnOptions",id:"spawnoptions",level:3},{value:"Example",id:"example",level:2}],b={toc:N},y="wrapper";function v(e){var t=e,{components:n}=t,a=g(t,["components"]);return(0,r.kt)(y,m(u(u({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",u({},{id:"table-of-contents"}),"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#introduction"}),"Introduction"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#what-is-sharding"}),"What is Sharding")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#using-sharding"}),"Using Sharding")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#usage"}),"Usage"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#file-parameters"}),"File Parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#sharderoptions"}),"sharderOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#spawnoptions"}),"spawnOptions")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#example"}),"Example"))),(0,r.kt)("hr",null),(0,r.kt)("h2",u({},{id:"introduction"}),"Introduction"),(0,r.kt)("h3",u({},{id:"what-is-sharding"}),"What is Sharding"),(0,r.kt)("p",null,"As a bot developer, you may have experienced some limitations when scaling up your Discord bot to serve a large number of users. Discord imposes a maximum limit of 2500 guilds per bot, and if your bot exceeds this number, Discord enforces a sharding strategy to split portions of your bot into separate processes."),(0,r.kt)("p",null,"Sharding is an effective way to distribute your bot's workload across multiple servers, which can greatly enhance the bot's performance and reduce the strain on any single server. Once you've reached the 2500-guild limit, Discord requires that you shard your bot in a way that allocates no more than 2500 guilds per shard."),(0,r.kt)("p",null,"To make the sharding process easier for bot developers, aoi.js provides built-in support for sharding. Developers can split their bot's workload into smaller, more manageable parts, each of which runs in its own separate process. The recommended number of guilds per shard is around 1000, but this can vary depending on your bot's functionality and complexity."),(0,r.kt)("p",null,"One advantage of sharding is that it allows you to split your bot's workload across multiple servers, which can reduce the processing load on any one server and make your bot more responsive. Additionally, sharding can be useful in scenarios where you need to run multiple instances of your bot for different users or groups of users."),(0,r.kt)("p",null,"In some cases, you may want some or all of your shards to be in the same process, allowing for a shared state. This is possible with aoi.js, which provides a flexible and powerful built-in handler for managing the sharding process. With the ability to split your bot's workload across multiple processes, you can ensure that your bot runs smoothly, even as its user base grows over time."),(0,r.kt)("h3",u({},{id:"using-sharding"}),"Using Sharding"),(0,r.kt)("p",null,"aoi.js has ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientShard")," class to handle ",(0,r.kt)("inlineCode",{parentName:"p"},"Sharding")," for your Discord Bot."),(0,r.kt)("h2",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const sharder: ClientShard = new ClientShard(\n    file\n:\nstring,\n    sharderOptions ? : ShardOption,\n    spawnOptions ? : SpawnOption\n)\n")),(0,r.kt)("h3",u({},{id:"file-parameters"}),"File Parameters"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Type"),(0,r.kt)("td",null,"string")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,"Path to bot file")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Required"),(0,r.kt)("td",null,"true")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Default"),(0,r.kt)("td",null,"N/A"))),(0,r.kt)("h3",u({},{id:"sharderoptions"}),"sharderOptions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"totalShard"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string \\ "),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"number of total Shards"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"shardList"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string \\ "),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"number[]"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"List of Shards to spawn"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"mode"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"process \\ "),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"worker"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"type of Sharding Mode (child_process \\ "),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"worker_threads )")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"respawn"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"whether to respawn shards on exiting"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"false"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"token"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"token to use for shard count"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"false"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"none")))),(0,r.kt)("h3",u({},{id:"spawnoptions"}),"spawnOptions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"amount"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string \\ "),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"number of shards to spawn"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"delay"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"delay for spawning each shard ( ",(0,r.kt)("inlineCode",{parentName:"td"},"in ms")," )"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"false"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"5500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"timeout"))),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The amount in milliseconds to wait until the ",(0,r.kt)("inlineCode",{parentName:"td"},"Bot")," has become ready ( ",(0,r.kt)("inlineCode",{parentName:"td"},"in ms")," )"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"false"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"30000")))),(0,r.kt)("h2",u({},{id:"example"}),"Example"),(0,r.kt)("p",null,"This should be a new file, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"shard.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="shard.js"',title:'"shard.js"'}),'const { ClientShard } = require("aoi.js");\n\nconst sharder = new ClientShard("./index.js", {\n    token: "DISCORD BOT TOKEN"\n});\n\nsharder.startProcess();\n')),(0,r.kt)("p",null,"This is is your main file which is the source running your Discord Bot, it's typically your ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="index.js"',title:'"index.js"'}),'const { AoiClient } = require("aoi.js");\nconst bot = new AoiClient({\n    token: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["Guilds", "GuildMessages", "MessageContent"],\n    events: ["onMessage", "onInteractionCreate"]\n});\n\nbot.command({\n    name: "ping",\n    code: `\n        Pong!\n        WS -> $ping ms\n        ShardId -> $shardId\n        ShardPing -> $shardPing[$shardId]\n    `,\n});\n')))}v.isMDXComponent=!0}}]);