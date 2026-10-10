# GitHub Pages 部署说明

在线文档地址：https://theopote.github.io/Pushdozer-Introduction/

## 一次性仓库设置（P0）

若 **Deploy GitHub Pages** 工作流在 `Configure GitHub Pages` 步骤失败，请在 GitHub 仓库中完成以下设置：

1. 打开 **Settings → Pages**
2. **Build and deployment → Source** 选择 **GitHub Actions**（不是 “Deploy from a branch”）
3. 确认仓库已启用 GitHub Pages（免费账户的 public 仓库默认可用）
4. 首次部署后，在 **Settings → Environments** 中应出现 `github-pages` 环境

## 工作流

| 工作流 | 触发 | 作用 |
|--------|------|------|
| `Docs Check` | push / PR | 对照 Pushdozer_Mod 源码验证文档 |
| `Deploy GitHub Pages` | push 到 main/master | 先验证，再部署 `docs/` 目录 |

## 本地预览

```bash
cd docs
npx serve .
# 访问 http://localhost:3000 （默认中文首页）
```

## 本地验证

```bash
# 可选：指向本地 Pushdozer_Mod 源码
MOD_SOURCE=../path/to/Pushdozer_Mod node scripts/verify-docs.mjs
node scripts/verify-docs.mjs
```
