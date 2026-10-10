# Pushdozer

Pushdozer 模组使用文档（适用于 v1.1.1+）。涵盖安装入门、配置界面、8 种工作模式、笔刷与标高、实战教程、多人游戏、参数参考与常见问题等主题。

在线文档：[https://theopote.github.io/Pushdozer-Introduction](https://theopote.github.io/Pushdozer-Introduction)

## 链接

- 模组源码：[github.com/Theopote/Pushdozer_Mod](https://github.com/Theopote/Pushdozer_Mod)
- 下载（推荐）：[Modrinth](https://modrinth.com/mod/pushdozer)
- 下载（备选）：[GitHub Releases](https://github.com/Theopote/Pushdozer_Mod/releases)
- Discord：[discord.gg/jjr8WmPZ](https://discord.gg/jjr8WmPZ)

## 下载说明

| 来源 | 说明 |
|------|------|
| **Modrinth** | 官方推荐下载入口，提供稳定发布版 |
| **GitHub Releases**（Pushdozer_Mod） | 模组源码仓库的发布页 |
| 本仓库根目录 `pushdozer-1.0.0.jar` | 旧版示例文件，**不是**当前 v1.1.1 正式安装包，请勿直接使用 |

文档版本与模组 `fabric.mod.json` 中的版本号对齐（当前 **v1.1.1**，Minecraft 1.21.11）。

## 本地预览

文档使用 [Docsify](https://docsify.js.org/) 构建。在 `docs` 目录下启动本地服务器即可预览：

```bash
cd docs
npx serve .
# 或
python -m http.server 3000
```

然后访问 `http://localhost:3000`（默认中文首页）。

## 文档一致性检查

在仓库根目录运行（可选设置 `MOD_SOURCE` 指向 Pushdozer_Mod 源码）：

```bash
node scripts/verify-docs.mjs
```

CI 会在 push/PR 时自动运行 `.github/workflows/docs-check.yml`。

GitHub Pages 部署说明见 [docs/DEPLOY.md](docs/DEPLOY.md)（需在仓库 Settings → Pages 中选择 **GitHub Actions** 作为来源）。
