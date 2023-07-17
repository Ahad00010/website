---
title: '$addClientReactions'
description: '$addClientReactions добавит реакцию к сообщению бота.'
id: addClientReactions
---

`$addClientReactions` добавит реакцию на сообщение бота.

## Использование

```php
$addClientReactions[...reactions]
```

## Параметры

| Название | Nbg    | Описание                  | Нужно |
| -------- | ------ | ------------------------- |:-----:|
| реакции  | строка | Комментарии к добавлению. |  да   |

## Пример(ы)

Это добавит данные эмодзи в ответ бота ("Привет!"):

```javascript
bot.command({
    name: 'addClientReactions',
    code: `
    Hello!
    $addClientReactions[🧡;❤]
  `
});
```