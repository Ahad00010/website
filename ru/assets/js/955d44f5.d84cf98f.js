"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1160],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),k=n,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},14801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>v,default:()=>y,frontMatter:()=>d,metadata:()=>g,toc:()=>h});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(l)for(var a of l(t))u.call(t,a)&&p(e,a,t[a]);return e},c=(e,t)=>i(e,o(t)),k=(e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a};const d={title:"Introduction",description:"Each official extension explained.",id:"introduction"},v=void 0,g={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Each official extension explained.",source:"@site/extensions/1introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/website-old/ru/extensions/introduction",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction",description:"Each official extension explained.",id:"introduction"},sidebar:"docs",next:{title:"Introduction",permalink:"/website-old/ru/extensions/official/aoi.music/aoimusic-introduction"}},f={},h=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"@akarui/aoi.music",id:"akaruiaoimusic",level:2},{value:"Overview",id:"overview",level:3},{value:"Features",id:"features",level:3},{value:"Music Playback",id:"music-playback",level:4},{value:"Song Information",id:"song-information",level:4},{value:"User Interaction",id:"user-interaction",level:4},{value:"Event Handling",id:"event-handling",level:4},{value:"@akarui/aoi.parser",id:"akaruiaoiparser",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Features",id:"features-1",level:3},{value:"Embed Parser",id:"embed-parser",level:4},{value:"Component Parser",id:"component-parser",level:4},{value:"File Parser",id:"file-parser",level:4},{value:"Options Parser",id:"options-parser",level:4},{value:"@akarui/aoi.db",id:"akaruiaoidb",level:2},{value:"Overview",id:"overview-2",level:3},{value:"Features",id:"features-2",level:3},{value:"KeyValue",id:"keyvalue",level:4},{value:"WideColumn",id:"widecolumn",level:4},{value:"Remote",id:"remote",level:4},{value:"@akarui/aoi.panel",id:"akaruiaoipanel",level:2},{value:"Overview",id:"overview-3",level:3},{value:"Features",id:"features-3",level:3},{value:"Real-time Monitoring",id:"real-time-monitoring",level:4},{value:"Command Management",id:"command-management",level:4},{value:"Server Configuration",id:"server-configuration",level:4},{value:"Error Tracking",id:"error-tracking",level:4}],N={toc:h},b="wrapper";function y(e){var t=e,{components:a}=t,n=k(t,["components"]);return(0,r.kt)(b,c(m(m({},N),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",m({},{id:"table-of-contents"}),"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#akaruiaoimusic"}),"@akarui/aoi.music")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#overview"}),"Overview"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#features"}),"Features")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#music-playback"}),"Music Playback"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#song-information"}),"Song Information"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#user-interaction"}),"User Interaction"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#event-handling"}),"Event Handling"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#akaruiaoiparser"}),"@akarui/aoi.parser")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#overview-1"}),"Overview"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#features-1"}),"Features")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#embed-parser"}),"Embed Parser"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#component-parser"}),"Component Parser"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#file-parser"}),"File Parser"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#options-parser"}),"Options Parser"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#akaruiaoidb"}),"@akarui/aoi.db")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#overview-2"}),"Overview"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#features-2"}),"Features")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#keyvalue"}),"KeyValue"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#widecolumn"}),"WideColumn"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#remote"}),"Remote"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#akaruiaoipanel"}),"@akarui/aoi.panel")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#overview-3"}),"Overview"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#features-3"}),"Features")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#real-time-monitoring"}),"Real-time Monitoring"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#command-management"}),"Command Management"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#server-configuration"}),"Server Configuration"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",m({parentName:"strong"},{href:"#error-tracking"}),"Error Tracking")))))))),(0,r.kt)("hr",null),(0,r.kt)("h2",m({},{id:"akaruiaoimusic"}),"@akarui/aoi.music"),(0,r.kt)("p",null,"Package URL: ",(0,r.kt)("a",m({parentName:"p"},{href:"https://www.npmjs.com/package/@akarui/aoi.music"}),"npm")),(0,r.kt)("p",null,"Documentation: ",(0,r.kt)("a",m({parentName:"p"},{href:"/website-old/ru/extensions/official/aoi.music/aoimusic-introduction"}),"aoi.music")),(0,r.kt)("h3",m({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@akarui/aoi.music")," is an extension package designed for Discord bots. It provides a convenient and powerful solution to incorporate music functionality into your bot, allowing you to create a rich audio experience in your Discord server."),(0,r.kt)("h3",m({},{id:"features"}),"Features"),(0,r.kt)("h4",m({},{id:"music-playback"}),"Music Playback"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Play music from various sources such as YouTube, SoundCloud, and direct URLs."),(0,r.kt)("li",{parentName:"ul"},"Control music playback with commands like play, pause, resume, and skip."),(0,r.kt)("li",{parentName:"ul"},"Adjust the volume level and manage other audio settings.")),(0,r.kt)("h4",m({},{id:"song-information"}),"Song Information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Retrieve detailed information about the currently playing song, including title, artist, duration, and thumbnail.")),(0,r.kt)("h4",m({},{id:"user-interaction"}),"User Interaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow users to request and search for songs within your Discord server.")),(0,r.kt)("h4",m({},{id:"event-handling"}),"Event Handling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Utilize event handlers to perform custom actions based on music-related events, such as track ended or queue started.")),(0,r.kt)("hr",null),(0,r.kt)("h2",m({},{id:"akaruiaoiparser"}),"@akarui/aoi.parser"),(0,r.kt)("p",null,"Package URL: ",(0,r.kt)("a",m({parentName:"p"},{href:"https://www.npmjs.com/package/@akarui/aoi.parser"}),"npm")),(0,r.kt)("p",null,"Documentation: ",(0,r.kt)("a",m({parentName:"p"},{href:"https://aoi-parser.vercel.app/"}),"aoi.parser")),(0,r.kt)("h3",m({},{id:"overview-1"}),"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@akarui/aoi.parser")," is a custom message parser designed for the ",(0,r.kt)("strong",{parentName:"p"},"aoi.js")," message system. It provides powerful functionality to parse and manipulate message content, allowing you to create dynamic and interactive responses in your Discord bots."),(0,r.kt)("h3",m({},{id:"features-1"}),"Features"),(0,r.kt)("h4",m({},{id:"embed-parser"}),"Embed Parser"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create and customize embed messages with titles, descriptions, URLs, timestamps, colors, footers, images, thumbnails, authors, and fields.")),(0,r.kt)("h4",m({},{id:"component-parser"}),"Component Parser"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parse and handle interactive components such as buttons, dropdowns, and select menus in your messages.")),(0,r.kt)("h4",m({},{id:"file-parser"}),"File Parser"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Convert text into attachable files and attach files from URLs to your messages.")),(0,r.kt)("h4",m({},{id:"options-parser"}),"Options Parser"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure options for your messages, including text-to-speech (TTS), allowed mentions, replies, ephemeral messages, and fetching interaction responses.")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"@akarui/aoi.parser")," package enhances the capabilities of ",(0,r.kt)("strong",{parentName:"p"},"aoi.js")," by providing convenient parsing functions and expanding the possibilities of message manipulation in Discord bots."),(0,r.kt)("hr",null),(0,r.kt)("h2",m({},{id:"akaruiaoidb"}),"@akarui/aoi.db"),(0,r.kt)("p",null,"Package URL: ",(0,r.kt)("a",m({parentName:"p"},{href:"https://www.npmjs.com/package/aoi.db"}),"npm")),(0,r.kt)("p",null,"Documentation: ",(0,r.kt)("a",m({parentName:"p"},{href:"https://akaruidevelopment.github.io/aoi.db/"}),"aoi.db")),(0,r.kt)("h3",m({},{id:"overview-2"}),"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"aoi.db")," is a collection of various database types designed to handle different data requirements. It provides a flexible and efficient solution for managing data in your Discord bots or other projects."),(0,r.kt)("h3",m({},{id:"features-2"}),"Features"),(0,r.kt)("h4",m({},{id:"keyvalue"}),"KeyValue"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A simple database that stores key-value pairs."),(0,r.kt)("li",{parentName:"ul"},"Suitable for general-purpose data storage and retrieval.")),(0,r.kt)("h4",m({},{id:"widecolumn"}),"WideColumn"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A database that stores data in a column format."),(0,r.kt)("li",{parentName:"ul"},"Ideal for organizing and accessing separate columns related to a primary column.")),(0,r.kt)("h4",m({},{id:"remote"}),"Remote"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A database that stores data on a remote server."),(0,r.kt)("li",{parentName:"ul"},"Allows for separating database-intensive operations from your main project or process.")),(0,r.kt)("hr",null),(0,r.kt)("h2",m({},{id:"akaruiaoipanel"}),"@akarui/aoi.panel"),(0,r.kt)("p",null,(0,r.kt)("img",m({parentName:"p"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/aoipanel-banner.png",alt:"aoi.panel"}))),(0,r.kt)("p",null,"Package URL: ",(0,r.kt)("a",m({parentName:"p"},{href:"https://www.npmjs.com/package/@akarui/aoi.panel"}),"npm")),(0,r.kt)("p",null,"Documentation: ",(0,r.kt)("a",m({parentName:"p"},{href:"/website-old/ru/extensions/official/aoi.panel/aoipanel-introduction"}),"aoi.panel")),(0,r.kt)("h3",m({},{id:"overview-3"}),"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@akarui/aoi.panel")," is an extension package specifically designed for developers working on Discord bots. It provides a comprehensive developer dashboard that offers a user-friendly interface to manage, monitor, and configure your bot's activities."),(0,r.kt)("h3",m({},{id:"features-3"}),"Features"),(0,r.kt)("h4",m({},{id:"real-time-monitoring"}),"Real-time Monitoring"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Monitor your bot's activities and performance in real-time."),(0,r.kt)("li",{parentName:"ul"},"View information such as server count, user count, and command usage statistics.")),(0,r.kt)("h4",m({},{id:"command-management"}),"Command Management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create and manage your bot's commands through the dashboard.")),(0,r.kt)("h4",m({},{id:"server-configuration"}),"Server Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Customize your bot's behavior and settings for individual servers."),(0,r.kt)("li",{parentName:"ul"},"Set up welcome messages, moderation rules, and automatic role assignments.")),(0,r.kt)("h4",m({},{id:"error-tracking"}),"Error Tracking"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Track and analyze errors and exceptions occurring within your bot."),(0,r.kt)("li",{parentName:"ul"},"Receive notifications and insights to help you identify and resolve issues.")))}y.isMDXComponent=!0}}]);