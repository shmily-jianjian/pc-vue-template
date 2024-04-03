### 创建项目
```js
pnpm create vite project
```

### 引入element-plus
```js
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// main.ts
import 'element-plus/dist/index.css'

export default defineConfig({
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

### 引入tailwindcss
```js

// vite.config.ts
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  // ...
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ],
    }
  }
});

// styles.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// main.ts
import './style.css'

// tailwind.config.ts
import { Config } from 'tailwindcss'

const tailwindcssConfig: Config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default tailwindcssConfig

// 解决报错 style.css中警告
// https://duncanleung.com/tailwind-css-unknown-at-rule/
![alt text](image.png)
```

### 引入eslint
```js
pnpm i eslint @antfu/eslint-config -D

// eslint.config.js
// https://gitee.com/mirrors_antfu/eslint-config
import antfu from '@antfu/eslint-config'

export default antfu({
  // Enable stylistic formatting rules
  // stylistic: true,

  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    '**/fixtures',
    // ...globs
  ],
})

// package.json
"scripts": {
  "dev": "vite",
  "build": "vue-tsc && vite build",
  "preview": "vite preview",
  "lint": "eslint .",
  "lint:fix": "eslint . --cache --fix"
},

```

### commit时候格式化代码
```js
pnpm i simple-git-hooks lint-staged -D

// 初始化 git hook
npx simple-git-hooks

// package.json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "**/*.{vue,js,ts,tsx}": [
      "eslint --cache --fix"
    ]
  }
}
```
