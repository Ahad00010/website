"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15038],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=o.createContext({}),l=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return o.createElement(u.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=l(n),h=a,d=c["".concat(u,".").concat(h)]||c[h]||m[h]||r;return n?o.createElement(d,i(i({ref:e},p),{},{components:n})):o.createElement(d,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[c]="string"==typeof t?t:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},45495:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"Author button",description:"A tutorial on how to setup author button with explanation on how it works!",authors:{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png"},tags:["v6","aoi.js"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},i="Author button",s={permalink:"/wikis/posts/632607624742961153/mnfe6",source:"@site/forums/posts/632607624742961153/mnfe6.md",title:"Author button",description:"A tutorial on how to setup author button with explanation on how it works!",date:"2023-07-12T19:07:05.000Z",formattedDate:"July 12, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png"}],frontMatter:{title:"Author button",description:"A tutorial on how to setup author button with explanation on how it works!",authors:{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png"},tags:["v6","aoi.js"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Long Serverinfo command",permalink:"/wikis/posts/632607624742961153/iiwq2"},nextItem:{title:"Kick command",permalink:"/wikis/posts/689364013297041409/3rabq"}},u={authorsImageUrls:[void 0]},l=[],p={toc:l},c="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Author button is a way to allow the person who executed the command to be the only one able to interact with buttons\nrather than everyone. This is useful to prevent interrupting with other people who're using your bot commands, for\nexample such as blackjack game, help command, etc."),(0,a.kt)("h1",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aoi.parser installed (for ephemeral messages) otherwise ephemeral won't work except for the rest of the code"),(0,a.kt)("li",{parentName:"ul"},"Must have the event ",(0,a.kt)("inlineCode",{parentName:"li"},"onInteractionCreate")," for this to work (if it wasn't obvious)")),(0,a.kt)("h1",{id:"example-author-button-code"},"Example author button code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    name: "authorButton",\n    info: {\n        description: "Shows an example of a Author Button"\n      },\n    code: `\n    $title[Author Button]\n    $description[Press the Button!]\n    $color[Random]\n    $addButton[1;Example;primary;customID_$authorID;false]`\n    }, {\n      type: "interaction",\n      prototype: "button",\n      code:`\n    $interactionReply[;{newEmbed:{title:Author Button}{description:First Page.}{color:Random}}]\n    \n    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You\'re not the author of this command! {options:{ephemeral:true}}\n    {extraOptions:{interaction:true}}]\n    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==customID;]`\n    }]\n')),(0,a.kt)("h1",{id:"explanation"},"Explanation"),(0,a.kt)("p",null,"We start by adding the button using the function ",(0,a.kt)("inlineCode",{parentName:"p"},"$addButton"),"."),(0,a.kt)("p",null,"We then make sure that it has ",(0,a.kt)("inlineCode",{parentName:"p"},"_$authorID")," within the custom id like ",(0,a.kt)("inlineCode",{parentName:"p"},"customID_$authorID")," but then we start to create an\nauthor interaction using ",(0,a.kt)("inlineCode",{parentName:"p"},"$interactionData[customId]")," which allows us to return the custom id name of the button we have\njust created below."),(0,a.kt)("p",null,"As a result, we remove the property ",(0,a.kt)("inlineCode",{parentName:"p"},"name:")," from the button command and we start separating the custom id and the author\nid using ",(0,a.kt)("inlineCode",{parentName:"p"},"$advancedTextSplit")," as we have ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," in our custom id which makes it easy to do that!"),(0,a.kt)("p",null,"Finally, we then add our first ",(0,a.kt)("inlineCode",{parentName:"p"},"$onlyIf")," at the bottom of our interaction code to check if the button has been clicked\nby returning it's custom id name and second ",(0,a.kt)("inlineCode",{parentName:"p"},"$onlyif")," to check if the user is the same person who just ran the command\nto prevent other users from interacting with the author who ran the command."),(0,a.kt)("p",null,"Obviously, we respond to the button using ",(0,a.kt)("inlineCode",{parentName:"p"},"$interactionReply")," and we're done after that! Our author button should work\nnow!"))}m.isMDXComponent=!0}}]);