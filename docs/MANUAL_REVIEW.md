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

## 工作模式 Config 子面板

| 模式 | Java 类 | 验收要点 |
|------|---------|----------|
| 挖掘 | `ExcavateConfigPanel` | 方块选择按钮、标高入口 |
| 铺设 | `PlaceConfigPanel` | 自适应 / 指定方块 |
| 平滑 | `SmoothConfigPanel` | 4 变体单选、强度滑条、tooltip |
| 表面粗糙 | `SurfaceRoughenConfigPanel` | 粗糙/重塑/噪声参数 |
| 表层转换 | `SurfaceConvertConfigPanel` | 最多 5 方块、分布模式 |
| 撒骨粉 | `BoneMealConfigPanel` | 无额外 Config（确认文档未虚构面板） |
| 批量种植 | `BatchPlantConfigPanel` | 类型、密度、团簇 |
| 水岸 | `ShorelineProcessConfigPanel` | 类型、宽度、植被、标高开关 |

## 快捷键

对照 `KeyBindings.java`：`isHoldingPushdozer()` 检查主手 **与** 副手。

## 截图（P2）

见 [visual-guide.md · 截图清单](zh/visual-guide.md#截图清单)。
