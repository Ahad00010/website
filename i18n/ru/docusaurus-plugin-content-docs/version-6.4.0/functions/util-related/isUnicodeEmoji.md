---
title: '$isUnicodeEmoji'
description: '$isUnicodeEmoji будет проверять, является ли данный эмодзи юниором эмодзи.'
id: isUnicodeEmoji
---

`$isUnicodeEmoji` проверит, являются ли эти эмодзи единомышленными.

## Использование

```php
$isUnicodeEmoji[emojiResolver]
```

## Параметры

| Название      | Nbg    | Описание       | Нужно |
| ------------- | ------ | -------------- |:-----:|
| emojiResolver | строка | Unicode emoji. |  да   |

## Пример(ы)

Это вернет `истину` как "🤓" верный unicode emoji:

```javascript
bot.command({
    name: 'isUnicodeEmoji',
    code: `
  $isUnicodeEmoji[🤓]
  `
});
```
