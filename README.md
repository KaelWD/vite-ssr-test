Install dependencies with `yarn`

```
$ node -v
v16.2.0

$ yarn -v
1.22.5
```

`yarn dev` -> works

`yarn dev:ssr`:

```
[vite] Error when evaluating SSR module /TsxComponent.tsx:
ReferenceError: __default__ is not defined
    at eval (/TsxComponent.tsx:18:41)
    at instantiateModule (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:69982:166)
ReferenceError: __default__ is not defined
    at eval (/TsxComponent.tsx:18:41)
    at instantiateModule (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:69982:166)
6:58:16 pm [vite] Internal server error: __default__ is not defined
      at eval (/TsxComponent.tsx:18:41)
      at instantiateModule (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:69982:166)
```

`yarn dev:ssr` without the TSX component:

```
[vite] Error when evaluating SSR module /home/kael/Documents/vuetifyjs/test-projects/vite-ssr/src/index.js:
Error: Cannot find module 'vite-ssr' from '/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/src'
    at Function.resolveSync [as sync] (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/resolve/lib/sync.js:102:15)
    at resolveFrom$6 (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:4066:29)
    at resolve (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:70017:22)
    at nodeRequire (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:69996:25)
    at ssrImport (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:69949:20)
    at eval (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/src/index.js:3:135)
    at instantiateModule (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:69982:166)
Error: Cannot find module 'vite-ssr' from '/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/src'
    at Function.resolveSync [as sync] (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/resolve/lib/sync.js:102:15)
    at resolveFrom$6 (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:4066:29)
    at resolve (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:70017:22)
    at nodeRequire (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:69996:25)
    at ssrImport (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:69949:20)
    at eval (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/src/index.js:3:135)
    at instantiateModule (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:69982:166)
[vite] Internal server error: Cannot find module 'vite-ssr' from '/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/src'
      at Function.resolveSync [as sync] (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/resolve/lib/sync.js:102:15)
      at resolveFrom$6 (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:4066:29)
      at resolve (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:70017:22)
      at nodeRequire (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:69996:25)
      at ssrImport (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:69949:20)
      at eval (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/src/index.js:3:135)
      at instantiateModule (/home/kael/Documents/vuetifyjs/test-projects/vite-ssr/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:69982:166)
```
