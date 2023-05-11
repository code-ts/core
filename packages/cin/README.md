# @code-ts/cin

> Utils about citizen identification number | 公民身份证号码工具方法.

## Install

```bash
npm i @code-ts/cin
```

```bash
yarn add @code-ts/cin
```

```bash
pnpm add @code-ts/cin
```

## Usage

```js
import { validateCIN } from '@code-ts/cin'

validateCIN('110101199003076878') // true
```

## API

### validateCIN

Check if the given code match the CIN pattern.

Type definition:

```ts
function validateCIN(code: string): boolean
```

## Credits

- [GB 11643-1999 公民身份号码 - 维基百科](https://zh.wikipedia.org/wiki/%E5%85%AC%E6%B0%91%E8%BA%AB%E4%BB%BD%E5%8F%B7%E7%A0%81)

## License

[MIT](./LICENSE) License © 2023-PRESENT [ntnyq](https://github.com/ntnyq)
