## Vite

Vite 是前端的构建工具。

相比webpack, Vite采用了不同的运行方式：

    - 开发时，并不对代码打包，而是直接采用ESM的方式来运行项目
    - 在项目部署时，在对项目进行打包。

速度相对快一些。

## 基本使用

1. `npm init -y` 初始化package.json

2. `npm install -D vite`安装vite，执行失败，所以先执行了一下`npm config set registry https://registry.npmjs.org/`

3. `<script type="module" src="./index.js"></script>` 需要添加`type="module"`

4. `npm vite` 启动开发服务器

5. `npm vite build` 打包代码

6. `npm vite preview` 预览打包后的代码

## 使用命令构建项目

`npm create vite@latest`  

`npm create vite@3` 

## 配置文件`vite.config.js`

`npm add -D @vitejs/plugin-legacy`相当于babel，转换es6

```
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
})
```