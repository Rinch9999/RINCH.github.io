# 实现静态HTML与React+Vite双模式项目结构

## 1. 项目现状分析

当前项目同时存在两种开发模式：

* **静态HTML模式**：包含index.html、beat\_nolan.html、nyc\_locations.html、timeline\_summary.html等静态页面

* **React+Vite模式**：包含src/目录、package.json、vite.config.js等React应用文件

* **保留目录**：characters/、characters\_timeline/、season/目录需要保持不变

## 2. 目标结构实现

### 2.1 创建public目录结构

```
├── public/                    # 静态公共资源（不经过构建）
│   ├── images/               # 图片资源
│   │   ├── characters/       # 角色图片
│   │   ├── episodes/         # 剧集图片
│   │   └── locations/        # 地点图片
│   ├── documents/            # PDF、文档等
│   ├── downloads/            # 下载资源
│   └── favicon.ico           # 网站图标
```

### 2.2 配置Vite构建输出

```
├── build/                    # 构建输出目录（重命名自dist）
│   ├── index.html           # SPA主入口文件
│   ├── assets/              # 构建生成的资源
│   ├── prerendered/         # 预渲染的静态页面（用于SEO）
│   └── _redirects           # 重定向规则
```

### 2.3 保留React源码结构

```
├── src/                     # React源代码
│   ├── components/          # 复用组件
│   ├── pages/               # 页面组件
│   ├── hooks/               # 自定义Hook
│   ├── utils/               # 工具函数
│   ├── data/                # 静态数据（JSON格式）
│   ├── styles/              # 样式文件
│   ├── App.jsx              # 应用主组件
│   └── main.jsx             # 应用入口
```

### 2.4 创建辅助目录

```
├── scripts/                 # 构建脚本
│   ├── prerender.js         # 预渲染脚本
│   └── sitemap-generator.js # 站点地图生成
├── server/                  # 服务端文件（可选）
│   ├── api/                 # API路由
│   └── middleware/          # 中间件
```

## 3. 实施步骤

### 3.1 步骤一：创建public目录并迁移资源

* 创建public目录结构

* 将images/目录内容迁移到public/images/，保持原有子目录结构

* 确保静态HTML文件引用的图片路径正确更新

### 3.2 步骤二：配置Vite

* 修改vite.config.js，设置publicDir为"public"，outDir为"build"

* 配置构建选项，生成期望的输出结构

* 确保Vite开发服务器能够正确处理静态资源

### 3.3 步骤三：创建构建脚本

* 创建scripts/目录

* 编写prerender.js脚本，用于预渲染静态页面

* 编写sitemap-generator.js脚本，用于生成站点地图

### 3.4 步骤四：更新package.json

* 添加新的脚本命令，如prerender、generate-sitemap等

* 确保现有脚本命令正常工作

### 3.5 步骤五：配置环境变量

* 创建.env和.env.production文件

* 配置必要的环境变量

### 3.6 步骤六：测试两种模式

* 测试静态HTML模式：直接打开index.html等文件

* 测试React+Vite开发模式：运行npm run dev

* 测试React构建模式：运行npm run build

## 4. 注意事项

* 保持characters/、characters\_timeline/、season/目录内容不变

* 确保静态HTML文件和React应用能够共同作用

* 配置正确的路由规则，避免冲突

* 确保图片、CSS、JavaScript等资源路径正确

## 5. 预期效果

* 项目支持两种开发模式：静态HTML模式和React+Vite模式

* 静态HTML文件可以直接打开使用

* React应用可以通过开发服务器运行，或构建后部署

* 两种模式共享公共资源

* 保留目录内容不变

## 6. 技术栈

* **静态HTML模式**：HTML5、CSS3、JavaScript (ES6+)

* **React+Vite模式**：React 18、Vite 5、React Router DOM 6

* **构建工具**：Node.js、npm

* \*\*脚本语言

