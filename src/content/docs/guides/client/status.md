---
title: Client Status
description: This guide will be covering the functionality and usage of client statuses.
id: status
---

<!-- omit from toc -->
## Table of Contents
- [Bot Status](#bot-status)
  - [Customizing Bot Status](#customizing-bot-status)
- [Client Presence](#client-presence)


---

### Bot Status

#### Customizing Bot Status

First of all we have to add the following piece of code to our main file:

```javascript
bot.status({
    text: string,
    type: string,
    time: number,
    URL?: string,
    afk?: boolean
});
```

When you use sharding you can individually change the status of each shard:

```javascript
bot.status({
    text: string,
    type: string,
    time: number,
    shard: number
});
```

---

This will display the text "Example Text!" as bot status, of course you can modify it.

If you want to have multiple statuses just add multiple `bot.status({...})`, simple do the following:

```javascript title="index.js"
bot.status({
    text: "Example Text one!",
    type: "PLAYING",
    time: 12
});

bot.status({
    text: "Example Text two!",
    type: "STREAMING",
    time: 25,
    URL: "some URL"
});

bot.status({
    text: "Doing nothing..", // normal status as any other Discord User without any state
    time: 50,
    type: "CUSTOM",
});
```

There are various types of statuses (not case-sensitive):

* **PLAYING**
* **WATCHING**
* **STREAMING**
* **LISTENING**
* **COMPETING**
* **CUSTOM** 

### Client Presence

You can also set the bot's presence, by adding the `status` property, for example:

```javascript title="index.js"
bot.status({
    text: "Example Text!",
    type: "PLAYING",
    status: "dnd",
    time: 12
});
```

There are multiple types of presences:

> * **online**
> * **idle**
> * **dnd** 
> * **invisible**