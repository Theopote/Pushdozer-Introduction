# GitHub Pages 部署说明

在线文档：https://theopote.github.io/Pushdozer-Introduction/

## 一次性仓库设置（必须）

工作流会将 `docs/` 目录推送到 **`gh-pages` 分支**。首次使用前，在 GitHub 仓库完成以下设置：

1. 打开 **Settings → Pages**
2. **Build and deployment → Source** 选择 **Deploy from a branch**
3. **Branch** 选择 **`gh-pages`**，文件夹 **`/ (root)`**
4. 点击 **Save**

> 若此前选择了 **GitHub Actions** 作为来源但从未成功部署，可改回 **Deploy from a branch → gh-pages**，与本仓库当前工作流一致。

## 工作流说明

| 工作流 | 作用 |
|--------|------|
| **Docs Check** | push/PR 时对照 Pushdozer_Mod 验证文档 |
| **Deploy documentation to GitHub Pages** | 验证通过后，将 `docs/` 推送到 `gh-pages` 分支 |

推送 `main`/`master` 后，Actions 会自动运行。首次需在 **Settings → Pages** 中按上文选好 `gh-pages` 分支，网站才会对外可见。

## 常见错误

### `Get Pages site failed … Not Found`

表示仓库尚未启用 Pages，或来源仍设为 **GitHub Actions** 但从未成功创建 Pages 站点。

**解决**：按上文改为 **Deploy from a branch → gh-pages → / (root)**，然后 **Re-run** 部署工作流。

### 部署成功但网站 404

- 确认 Pages 分支为 `gh-pages`（不是 `main`）
- 等待 1–2 分钟让 CDN 刷新
- 确认 `docs/index.html` 存在（Docsify 入口）

## 本地预览

```bash
cd docs
npx serve .
# http://localhost:3000 （默认中文首页）
```

## 本地验证

```bash
MOD_SOURCE=../path/to/Pushdozer_Mod node scripts/verify-docs.mjs
```
