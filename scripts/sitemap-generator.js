// 站点地图生成脚本
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的__dirname（ES模块中没有__dirname全局变量）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 网站域名
const baseUrl = 'https://www.poi-info-center.com';

// 静态HTML页面
const staticPages = [
  { path: '/index.html', priority: '1.0', changeFreq: 'daily' },
  { path: '/beat_nolan.html', priority: '0.8', changeFreq: 'weekly' },
  { path: '/nyc_locations.html', priority: '0.9', changeFreq: 'weekly' },
  { path: '/timeline_summary.html', priority: '0.9', changeFreq: 'weekly' }
];

// React路由页面
const reactPages = [
  { path: '/', priority: '1.0', changeFreq: 'daily' },
  { path: '/characters', priority: '0.9', changeFreq: 'weekly' },
  { path: '/timeline', priority: '0.9', changeFreq: 'weekly' },
  { path: '/episodes', priority: '0.9', changeFreq: 'weekly' },
  { path: '/locations', priority: '0.8', changeFreq: 'weekly' },
  { path: '/beat-nolan', priority: '0.8', changeFreq: 'weekly' }
];

// 保留目录页面
const preservedPages = [
  { path: '/characters/finch.html', priority: '0.8', changeFreq: 'monthly' },
  { path: '/characters/reese.html', priority: '0.8', changeFreq: 'monthly' },
  { path: '/characters/root.html', priority: '0.8', changeFreq: 'monthly' },
  { path: '/characters/shaw.html', priority: '0.8', changeFreq: 'monthly' },
  { path: '/characters_timeline/finch_timeline.html', priority: '0.7', changeFreq: 'monthly' },
  { path: '/characters_timeline/reese_timeline.html', priority: '0.7', changeFreq: 'monthly' },
  { path: '/characters_timeline/root_timeline.html', priority: '0.7', changeFreq: 'monthly' },
  { path: '/characters_timeline/shaw_timeline.html', priority: '0.7', changeFreq: 'monthly' }
];

// 合并所有页面
const allPages = [...staticPages, ...reactPages, ...preservedPages];

// XML模板
const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  allPages.forEach(page => {
    sitemap += `  <url>
`;
    sitemap += `    <loc>${baseUrl}${page.path}</loc>
`;
    sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
`;
    sitemap += `    <changefreq>${page.changeFreq}</changefreq>
`;
    sitemap += `    <priority>${page.priority}</priority>
`;
    sitemap += `  </url>
`;
  });

  sitemap += `</urlset>`;
  return sitemap;
};

// 生成并保存站点地图的主函数
async function generateAndSaveSitemap() {
  const sitemap = generateSitemap();
  const outputPath = path.join(__dirname, '../build/sitemap.xml');

  // 确保build目录存在
  try {
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
  } catch (error) {
    console.error(`创建目录失败: ${path.dirname(outputPath)}`, error);
    process.exit(1);
  }

  try {
    await fs.writeFile(outputPath, sitemap, 'utf8');
    console.log(`✅ 站点地图已生成: ${outputPath}`);
  } catch (error) {
    console.error(`生成站点地图失败: ${outputPath}`, error);
    process.exit(1);
  }
}

// 执行生成站点地图
generateAndSaveSitemap();
