// 预渲染脚本 - 用于生成静态HTML文件（用于SEO）
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的__dirname（ES模块中没有__dirname全局变量）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 预渲染的页面列表
const pages = [
  { path: '/', output: 'index.html', title: 'POI 情报中心 - 首页' },
  { path: '/characters', output: 'characters.html', title: 'POI 情报中心 - 角色列表' },
  { path: '/timeline', output: 'timeline.html', title: 'POI 情报中心 - 剧情时间线' },
  { path: '/episodes', output: 'episodes.html', title: 'POI 情报中心 - 剧集情节' },
  { path: '/locations', output: 'locations.html', title: 'POI 情报中心 - 纽约打卡地' }
];

// 简单的HTML模板
const htmlTemplate = (title) => `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="《疑犯追踪》(Person of Interest) 粉丝交流平台，提供角色时间线、剧集情节和纽约拍摄地点信息">
    <meta name="keywords" content="疑犯追踪, POI, Person of Interest, 角色, 时间线, 纽约">
    <title>${title}</title>
    <link rel="stylesheet" href="/assets/index.css">
</head>
<body>
    <div id="root"><!-- React App will render here --></div>
    <script type="module" src="/assets/index.js"></script>
    <noscript>
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center; padding: 0 20px;">
            <div>
                <h1>请启用JavaScript以访问完整网站</h1>
                <p>本网站使用React构建，需要JavaScript才能正常工作。</p>
                <p>您可以访问我们的静态HTML版本：</p>
                <ul style="list-style: none; padding: 0; margin: 10px 0;">
                    <li><a href="/index.html">首页</a></li>
                    <li><a href="/characters.html">角色列表</a></li>
                    <li><a href="/timeline.html">剧情时间线</a></li>
                    <li><a href="/episodes.html">剧集情节</a></li>
                    <li><a href="/locations.html">纽约打卡地</a></li>
                </ul>
            </div>
        </div>
    </noscript>
</body>
</html>
`;

// 生成预渲染页面的主函数
async function prerenderPages() {
  // 创建预渲染目录
  const outputDir = path.join(__dirname, '../build/prerendered');
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (error) {
    console.error(`创建目录失败: ${outputDir}`, error);
    process.exit(1);
  }

  // 生成预渲染页面
  for (const page of pages) {
    const htmlContent = htmlTemplate(page.title);
    const outputPath = path.join(outputDir, page.output);
    try {
      await fs.writeFile(outputPath, htmlContent, 'utf8');
      console.log(`✓ 预渲染完成: ${outputPath}`);
    } catch (error) {
      console.error(`预渲染失败: ${outputPath}`, error);
      process.exit(1);
    }
  }

  console.log('\n✅ 所有页面预渲染完成！');
}

// 执行预渲染
prerenderPages();
