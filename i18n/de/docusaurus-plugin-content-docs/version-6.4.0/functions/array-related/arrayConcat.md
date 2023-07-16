---
title: '$arrayConcat'
description: '$arrayConcat konzert mehrere Arrays.'
id: arrayConcat
---

`$arrayConcat` werden mehrere Arrays konnektieren.

## Verwendung

```php
$arrayConcat[trennzeichen;...arrays]
```

## Parameter

| Feld         | Typ    | Beschreibungen   | Pflichtfeld |
| ------------ | ------ | ---------------- |:-----------:|
| trennzeichen | string | Trennzeichen.    |    wahr     |
| ...arrays    | string | Name des Arrays. |    wahr     |

## Beispiel(e)

Dies wird zurückgeben: `Dies ist ein Test` da er Array 1 und 2 konzert.

```javascript
bot.command({
    name: 'arrayConcat',
    code: `
  $arrayConcat[ ;test1;test2]
  $createArray[array1;Das ist]
  $createArray[array2;ein Test.]
  `
});
```