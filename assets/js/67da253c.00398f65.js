"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[87170],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),d=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(n),g=a,h=u["".concat(s,".").concat(g)]||u[g]||m[g]||l;return n?r.createElement(h,i(i({ref:e},p),{},{components:n})):r.createElement(h,i({ref:e},p))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},71005:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"Sharding",description:"This Guide will be covering how to integrate Sharding for your Discord Bot.",id:"sharding"},i=void 0,o={unversionedId:"guides/sharding",id:"version-6.2.6/guides/sharding",title:"Sharding",description:"This Guide will be covering how to integrate Sharding for your Discord Bot.",source:"@site/versioned_docs/version-6.2.6/guides/7sharding.md",sourceDirName:"guides",slug:"/guides/sharding",permalink:"/docs/guides/sharding",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687448341,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Sharding",description:"This Guide will be covering how to integrate Sharding for your Discord Bot.",id:"sharding"},sidebar:"docs",previous:{title:"Interaction Commands",permalink:"/docs/guides/interactioncommands"},next:{title:"Custom Functions",permalink:"/docs/guides/customfunctions"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is Sharding",id:"what-is-sharding",level:3},{value:"Using Sharding",id:"using-sharding",level:3},{value:"Usage",id:"usage",level:2},{value:"File Parameters",id:"file-parameters",level:3},{value:"sharderOptions",id:"sharderoptions",level:3},{value:"spawnOptions",id:"spawnoptions",level:3},{value:"Example",id:"example",level:2}],p={toc:d},u="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("h3",{id:"what-is-sharding"},"What is Sharding"),(0,a.kt)("p",null,"As a bot developer, you may have experienced some limitations when scaling up your Discord bot to serve a large number of users. Discord imposes a maximum limit of 2500 guilds per bot, and if your bot exceeds this number, Discord enforces a sharding strategy to split portions of your bot into separate processes."),(0,a.kt)("p",null,"Sharding is an effective way to distribute your bot's workload across multiple servers, which can greatly enhance the bot's performance and reduce the strain on any single server. Once you've reached the 2500-guild limit, Discord requires that you shard your bot in a way that allocates no more than 2500 guilds per shard."),(0,a.kt)("p",null,"To make the sharding process easier for bot developers, aoi.js provides built-in support for sharding. Developers can split their bot's workload into smaller, more manageable parts, each of which runs in its own separate process. The recommended number of guilds per shard is around 1000, but this can vary depending on your bot's functionality and complexity."),(0,a.kt)("p",null,"One advantage of sharding is that it allows you to split your bot's workload across multiple servers, which can reduce the processing load on any one server and make your bot more responsive. Additionally, sharding can be useful in scenarios where you need to run multiple instances of your bot for different users or groups of users."),(0,a.kt)("p",null,"In some cases, you may want some or all of your shards to be in the same process, allowing for a shared state. This is possible with aoi.js, which provides a flexible and powerful built-in handler for managing the sharding process. With the ability to split your bot's workload across multiple processes, you can ensure that your bot runs smoothly, even as its user base grows over time."),(0,a.kt)("h3",{id:"using-sharding"},"Using Sharding"),(0,a.kt)("p",null,"aoi.js has ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientShard")," class to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"Sharding")," for your Discord Bot."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const sharder: ClientShard = new ClientShard(\n    file\n:\nstring,\n    sharderOptions ? : ShardOption,\n    spawnOptions ? : SpawnOption\n)\n")),(0,a.kt)("h3",{id:"file-parameters"},"File Parameters"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Type"),(0,a.kt)("td",null,"string")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Description"),(0,a.kt)("td",null,"Path to bot file")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Required"),(0,a.kt)("td",null,"true")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Default"),(0,a.kt)("td",null,"N/A"))),(0,a.kt)("h3",{id:"sharderoptions"},"sharderOptions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"totalShard"))),(0,a.kt)("td",{parentName:"tr",align:null},"string \\ "),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"number of total Shards"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"shardList"))),(0,a.kt)("td",{parentName:"tr",align:null},"string \\ "),(0,a.kt)("td",{parentName:"tr",align:null},"number[]"),(0,a.kt)("td",{parentName:"tr",align:null},"List of Shards to spawn"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"mode"))),(0,a.kt)("td",{parentName:"tr",align:null},"process \\ "),(0,a.kt)("td",{parentName:"tr",align:null},"worker"),(0,a.kt)("td",{parentName:"tr",align:null},"type of Sharding Mode (child_process \\ "),(0,a.kt)("td",{parentName:"tr",align:null},"worker_threads )")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"respawn"))),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"whether to respawn shards on exiting"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"token to use for shard count"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"none")))),(0,a.kt)("h3",{id:"spawnoptions"},"spawnOptions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"amount"))),(0,a.kt)("td",{parentName:"tr",align:null},"string \\ "),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"number of shards to spawn"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"delay"))),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"delay for spawning each shard ( ",(0,a.kt)("inlineCode",{parentName:"td"},"in ms")," )"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"5500")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"timeout"))),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount in milliseconds to wait until the ",(0,a.kt)("inlineCode",{parentName:"td"},"Bot")," has become ready ( ",(0,a.kt)("inlineCode",{parentName:"td"},"in ms")," )"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"30000")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"This should be a new file, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"shard.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="shard.js"',title:'"shard.js"'},'const { ClientShard } = require("aoi.js");\n\nconst sharder = new ClientShard("./index.js", {\n    token: "DISCORD BOT TOKEN"\n});\n\nsharder.startProcess();\n')),(0,a.kt)("p",null,"This is is your main file which is the source running your Discord Bot, it's typically your ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'const { AoiClient } = require("aoi.js");\nconst bot = new AoiClient({\n    token: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["Guilds", "GuildMessages", "MessageContent"],\n    events: ["onMessage"]\n});\n\nbot.command({\n    name: "ping",\n    code: `\n        Pong!\n        WS -> $ping ms\n        ShardId -> $shardId\n        ShardPing -> $shardPing[$shardId]\n    `,\n});\n')))}m.isMDXComponent=!0}}]);