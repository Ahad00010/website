---
title: $addButton
description: $addButton allows you to add a button to the bot.
id: addbutton
---

This function will add a button to bot's message.

## Usage 

```php
$addButton[index;label;style;customID;disable?;emoji?]
```

## Parameters

| Field | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| index | The button to show up on the given embed | number | yes |
| label | Text on the button | string | no |
| style | Button's style | str & num | yes |
| customID | A custom ID for the button (changes for link __style*__) | string | yes |
| disable | Disabling the button | boolean | no |
| emoji | The emoji that will show up next to the label. | string | no |

## Button Styles

* `primary` ─ Blue button
* `secondary` ─ Gray button
* `success` ─ Green button
* `danger` ─ Red button
* `link` ─ Redirect button

> *__Note__: Using link style will make customID property as a link.*

### Notice

Interaction commands needs this event on main file (or handler):

```javascript
events: ["onMessage", "onInteractionCreate"]
```

## Examples

### For Normal Button:

```javascript
bot.command({
  name: "add-button",
  code: `
  Hello, World!
  
  $addButton[1;Welcome;primary;helloButton;no;👋]
  `
});

bot.interactionCommand({
  name: "helloButton",
  prototype: 'button',
  code: `
  $interactionReply[Bye, bye!]
  `
});
```

### For Redirected Button (link style):

```javascript
bot.command({
  name: "add-button",
  code: `
  Tap below to join Akarui Development!
  
  $addButton[1;Let's go!;link;https://discord.gg/eTBF9N5sy2;no]
  `
});
```

