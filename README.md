# Mojibakashi

`Mojibakashi`は文字化けしたテキストを生成できるライブラリです。

## Install

```shell
npm i mojibakashi
```

## Usage

### Generate one garbled

```ts
const garbled = generateGarbled("火花", "UTF-8_SHIFT-JIS");
console.log(garbled); // => 轣ｫ闃ｱ
```

### Generate all garbled

```ts
const allGarbled = generateAllGarbled("火花");
console.log(allGarbled["UTF-8_SHIFT-JIS"]); // => 轣ｫ闃ｱ
console.log(allGarbled["EUC-JP_SHIFT-JIS"]); // => ｲﾐｲﾖ
```
