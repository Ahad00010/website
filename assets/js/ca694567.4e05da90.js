"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[81446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,b=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(b,o(o({ref:t},m),{},{components:n})):a.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Member count with image",description:"A custom function to show the data of server members.",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png"},tags:["v6","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},o="Code",s={permalink:"/wikis/posts/715852000096419900/5sg6ej",source:"@site/forums/posts/715852000096419900/5sg6ej.md",title:"Member count with image",description:"A custom function to show the data of server members.",date:"2023-07-12T19:07:05.000Z",formattedDate:"July 12, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"Other",permalink:"/wikis/tags/other"}],hasTruncateMarker:!1,authors:[{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png"}],frontMatter:{title:"Member count with image",description:"A custom function to show the data of server members.",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png"},tags:["v6","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Progression bar",permalink:"/wikis/posts/713132410153205802/c6h1efa"},nextItem:{title:"Slot Command",permalink:"/wikis/posts/715852000096419900/7y0d4k"}},c={authorsImageUrls:[void 0]},l=[{value:"Bar",id:"bar",level:3},{value:"horizontalBar",id:"horizontalbar",level:3}],m={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"bot.functionManager.createFunction({\n  name: \"$members\",\n  type: \"djs\",\n  code: async (d) => {\n    const data = d.util.aoiFunc(d);\n    const [type='bar'] = data.inside.splits;\n\n    const Jimp = require('jimp');\n    const { AttachmentBuilder } = require('discord.js')\n\n    async function exc(func) {\n      let p = await d.interpreter(d.client, {}, [], {code: func }, d.client.db, true);\n      return p.code\n    }\n\n    const dataAr = [\n      await exc(`$membersCount[${d.guild.id}]`),\n      await exc(`$membersCount[${d.guild.id};all;false]`),\n      await exc(`$botCount[${d.guild.id}]`),\n      await exc(`$membersCount[${d.guild.id};online]`),\n      await exc(`$membersCount[${d.guild.id};dnd]`),\n      await exc(`$membersCount[${d.guild.id};idle]`),\n      await exc(`$membersCount[${d.guild.id};invisible]`)\n    ]\n\n\nconst chartURL = `https://quickchart.io/chart?c=${encodeURIComponent(\n    JSON.stringify({\n      type: type,\n      data: {\n        labels: ['Total', 'Humans', 'Bots', 'Online', 'DnD', 'Idle', 'Invisible'],\n        datasets: [{\n          label: 'Server Members Count',\n          data: dataAr,\n          datalabels: {\n            align: 'center',\n            anchor: 'center',\n          },\n          backgroundColor: [\n            'rgba(83, 95, 201, 0.4)',\n            'rgba(240, 231, 98, 0.4)',\n            'rgba(192, 192, 192, 0.4)',\n            'rgba(0, 255, 0, 0.4)',\n            'rgba(255, 0, 0, 0.4)',\n            'rgba(238, 150, 69, 0.4)',\n            'rgba(78, 82, 90, 0.4)'\n          ],\n          borderColor: [\n            'rgba(83, 95, 201)',\n            'rgba(240, 231, 98)',\n            'rgba(192, 192, 192)',\n            'rgba(0, 255, 0)',\n            'rgba(255, 0, 0)',\n            'rgba(238, 150, 69)',\n            'rgba(78, 82, 90)'\n          ],\n          borderWidth: 1,\n        }]\n      },\n      options: {\n        plugins: {\n          datalabels: {\n            color: 'black'\n          }\n        }\n      }\n    })\n  )}`\n\n\nconst chart = await Jimp.read(chartURL)\nconst bg = await Jimp.read(`https://media.discordapp.net/attachments/902553397281030208/1127435367193256006/Untitled81_20230709085015.png`)\n\nbg.composite(chart, 0, 0)\n\nconst buffer = await bg.getBufferAsync(Jimp.MIME_PNG);\n\nconst attachment = new AttachmentBuilder(buffer, {name:'members.png'});\n\nd.message.channel.send({\n  files: [attachment]\n})\n\n\n  return { code: d.util.setCode(data)}\n    \n  }\n})\n")),(0,r.kt)("h1",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$members"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"$members[bar]"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"$members[horizontalBar]"),"   "),(0,r.kt)("h1",{id:"example"},"Example"),(0,r.kt)("h3",{id:"bar"},"Bar"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/902553397281030208/1127471713844744322/members.png",alt:"Bar Type"})),(0,r.kt)("h3",{id:"horizontalbar"},"horizontalBar"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/902553397281030208/1127471714159300669/members.png",alt:"horizontalBar Type"})),(0,r.kt)("h1",{id:"ping-for-any-help-"},"Ping for any help \ud83d\ude34"))}u.isMDXComponent=!0}}]);