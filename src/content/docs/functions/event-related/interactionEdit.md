---
title: $interactionEdit
description: $interactionEdit will return edit an interaction.
id: interactionEdit
---

`$interactionEdit` will return edit an interaction.

## Usage

```php
$interactionEdit[content?;embeds?;components?;files?;allowedMentions?]
```

## Parameters

| Field            | Type   | Description                                                                      | Required |
| ---------------- | ------ | -------------------------------------------------------------------------------- | :------: |
| content?         | string | New message content.                                                             |  false   |
| embeds?          | string | Embed parser.                                                                    |  false   |
| components?      | string | Component parser.                                                                |  false   |
| files?           | string | File parser.                                                                     |  false   |
| allowedMentions? | string | Allowed mentions? <br /> 1. **users** <br /> 2. **roles** <br /> 3. **everyone** |  false   |

## Example(s)

```javascript
module.exports = [
  {
    name: "interactionEdit",
    type: "interaction",
    prototype: "slash",
    code: `
  $interactionEdit[Bye, World!;;;;everyone]
  $wait[5s]
  $interactionReply[Hello, World!;;;;everyone;false]
  `,
  },
];
```
