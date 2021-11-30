# Next.js bug when importing ESM libraries that imports CJS.

## Problem

If you import an ESM library (`"type": "module"`), and that library imports a CJS module, then Next.js v12 will break.

## Minimal example

```
packages/
  /app           -> Next.js app, which imports 'design-system'
  /design-system -> ESM library, which imports 'next/link', which is a CJS module
```

## Repro

1. Run the app
```
yarn
yarn build
yarn start
```

2. Open http://localhost:3000
3. Watch it break with:
```
Warning: React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object.
    at Link (webpack-internal:///../design-system/build/esm/index.js:21:5)
```

## The fix

1. To fix this, open `packages/design-system/src/index.js`.
2. Change `<NextLink>` for `<NextLink.default>`.
3. Run `yarn build` again.

It will fix the issue, but it's not ideal. In a big library there will be hundreds of CJS imports until the whole ecossystem updates.
