# 文档人工验收清单

自动检查（`verify-docs.mjs`）无法覆盖 UI 控件名称、条件显示与保存行为。每次模组 UI 变更后，请逐项对照 Java 源文件验收中英文 `config-ui.md` 与 `modes.md`。

## 几何体 Config 子面板

| 几何体 | Java 类 | UI 滑动条 | 文档位置 |
|--------|---------|-----------|----------|
| 球体 | `SphereSubPanel` | 半径 | config-ui.md |
| 长方体 | `BoxSubPanel` | 长、宽、高 | config-ui.md |
| 正八面体 | `OctahedronSubPanel` | 半径 | config-ui.md |
| 圆柱体 | `CylinderSubPanel` | 半径、高度 | config-ui.md |
| 圆锥体 | `ConeSubPanel` | 半径、高度 | config-ui.md |
| 椭球体 | `EllipsoidSubPanel` | 长、宽、高 | config-ui.md |
| 正四面体 | `TetrahedronSubPanel` | **仅边长** | config-ui.md |
| 三棱柱 | `TriangularPrismSubPanel` | 边长、高度 | config-ui.md |

## 工作模式 Config 子面板（第二轮源码对照）

| 组 | 模式 | Java 类 | 对照结果 | 备注 |
|----|------|---------|----------|------|
| 1 | 挖掘 | `ExcavateConfigPanel` | ✅ | 方块多选按钮 + `persistPanelConfig` |
| 1 | 铺设 | `PlaceConfigPanel` | ✅ | 自适应 / 指定自然方块单选；点选方块按钮自动切换模式 |
| 2 | 平滑 | `SmoothConfigPanel` | ✅ | 4 变体单选；强度 0.1–1.0；提升/降低时滑条标签变化 |
| 2 | 表面粗糙 | `SurfaceRoughenConfigPanel` | ✅ 已修 | UI 持久性 **0.1–0.9**（非 JSON 钳制 0.05–0.95）；自动缩放关才显示高级参数 |
| 3 | 表层转换 | `SurfaceConvertConfigPanel` | ✅ 已补 | 满 5 种时隐藏「添加」；「归一化」与「完成」并排 |
| 3 | 撒骨粉 | `BoneMealConfigPanel` | ✅ | 仅提示文字 |
| 4 | 批量种植 | `BatchPlantConfigPanel` | ✅ 已补 | 草类无额外控件；密度钳制 ≥10%；**完成** 不写文件 |
| 4 | 水岸处理 | `ShorelineProcessConfigPanel` | ✅ | 自定义类型并排选方块/植物；植被密度显示条件与文档一致；**完成** 写文件无 toast |

### 每组五要素检查项

1. **控件是否存在** — 对照 `initializeWidgets()`
2. **名称是否正确** — 对照 `assets/pushdozer/lang/*.json`
3. **数值范围** — 对照各 `CustomSlider` / `SliderWidget` 的 min/max
4. **显示条件** — 对照 `if (config.get…())` 分支与 `show()` 重绘
5. **保存行为** — 对照 `saveConfig()`：`persistPanelConfig()` / `config.save()` / 空实现

## 快捷键

对照 `KeyBindings.java`：`isHoldingPushdozer()` 检查主手 **与** 副手。

## GitHub Pages 发布（P0）

当前工作流使用 `peaceiris/actions-gh-pages@v4` 推送到 **`gh-pages` 分支**。旧日志中的 `actions/configure-pages` 失败 **不适用于** 现方案。

一次性设置：**Settings → Pages → Deploy from a branch → `gh-pages` → / (root)**，然后 Re-run **Deploy documentation to GitHub Pages**。

## 截图（P2）

见 [visual-guide.md · 截图清单](zh/visual-guide.md#截图清单)。
