# 💕 我们的珍贵回忆

这是一个完全免费的回忆记录网站，用来记录你和爱人之间的珍贵瞬间。

## 🌐 让网站上线（只需做一次）

### 第一步：创建 GitHub 仓库

1. 打开 https://github.com/new
2. **Repository name** 填：`our-memories`（或任何你喜欢的名字）
3. 选 **Public**（公开）
4. 其他什么都不要动，点绿色的 **Create repository** 按钮

### 第二步：推送代码

把下面的命令一条一条复制到终端（黑色窗口）里执行：

```bash
cd C:/Users/Administrator/our-memories
git init
git add .
git commit -m "初始化回忆网站"
git branch -M main
git remote add origin https://github.com/你的用户名/our-memories.git
git push -u origin main
```

> ⚠️ 把 `你的用户名` 替换成你的 GitHub 用户名

### 第三步：修改配置文件

推送成功后，在 GitHub 网站上打开你的仓库，找到 `astro.config.mjs` 这个文件，点右上角的铅笔图标 ✏️ 编辑：

- 把 `your-username` 改成你的 GitHub 用户名
- 如果仓库名不是 `our-memories`，把 `/our-memories/` 改成你的仓库名

改完后点绿色的 **Commit changes** 按钮。

### 第四步：启用 GitHub Pages

1. 在你的仓库页面上方，点击 **Settings**
2. 左边菜单找到 **Pages**
3. **Source** 选 **GitHub Actions**
4. 等几分钟，部署完成后页面会显示你的网址：`https://你的用户名.github.io/our-memories/`

🎉 网站上线啦！

> **提示：** 如果你把仓库名取为 `你的用户名.github.io`（比如 `zhangsan.github.io`），那网址就是 `https://你的用户名.github.io`，不需要后面的 `/our-memories/`。这种情况下要把 `astro.config.mjs` 里的 `base` 改成 `'/'`。

---

## 📝 如何添加新回忆

### 方法一：在 GitHub 网页上操作（最简单）

1. 打开你的仓库，进入 `src/content/memories/` 文件夹
2. 点击 **Add file** → **Create new file**
3. 文件名格式：`004-描述.md`（比如 `004-我们的婚礼.md`）
4. 内容格式照着 `002-template.md` 这个模板复制粘贴，然后改成你的内容：

```markdown
---
title: "回忆的标题"
date: 2024-12-25
category: "special"
image: "/images/xxx.jpg"
imageAlt: "照片描述"
summary: "简短摘要，显示在卡片上"
---

# 正文标题

在这里写正文...
```

5. 点绿色的 **Commit changes** 按钮
6. 等一两分钟，网站自动更新！

### 📸 如何上传照片

1. 进入 `public/images/` 文件夹
2. 点 **Add file** → **Upload files**
3. 把照片拖进去，点 **Commit changes**
4. 在回忆的 `image` 字段里填 `/images/你的照片名.jpg`

### 🏷️ 回忆分类说明

| 分类 | 用途 |
|------|------|
| `milestone` | 人生节点（相识、求婚、结婚等） |
| `travel` | 一起旅行 |
| `daily` | 日常点滴 |
| `special` | 特别日子（生日、纪念日等） |

---

## 💬 配置留言功能（可选）

1. 打开 https://github.com/apps/giscus 安装 Giscus
2. 只选你的回忆仓库
3. 在仓库 Settings → General 里，勾选 **Discussions** 功能
4. 访问 https://giscus.app/zh-CN 填写你的仓库信息，获取配置代码
5. 把配置代码填到 `src/pages/about.astro` 里（文件里有详细说明）

---

## 💻 在本地电脑预览（可选）

如果你想在本地修改、预览效果再上传：

```bash
cd C:/Users/Administrator/our-memories
npm install
npm run dev
```

然后浏览器打开 `http://localhost:4321` 就能看到了。

---

## 📋 文件结构说明

```
our-memories/
├── src/
│   ├── content/memories/    ← 📝 所有回忆的 Markdown 文件放这里
│   ├── pages/               ← 📄 网站页面
│   ├── components/           ← 🧩 页面组件
│   └── styles/              ← 🎨 样式文件
├── public/images/           ← 📸 所有照片放这里
├── astro.config.mjs         ← ⚙️ 网站配置
└── .github/workflows/       ← 🤖 自动部署配置
```

---

## ❤️

愿这个小小的网站，成为你们爱情故事最美的见证。

有任何问题随时问我！
