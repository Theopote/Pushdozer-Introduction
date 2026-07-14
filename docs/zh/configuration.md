# 配置说明

> **建议**：优先使用游戏内配置界面（`K` 键）修改设置。直接编辑 JSON 文件可能导致格式错误。

## 配置文件

| 项目 | 值 |
|------|-----|
| 路径 | `.minecraft/config/pushdozer_config.json` |
| 旧版路径 | `.minecraft/config/pushdozer.json`（自动迁移） |
| 格式 | JSON，嵌套结构 |

## 配置结构

配置文件分为 5 个主要部分：

```json
{
  "workMode": "EXCAVATE",
  "brush": { ... },
  "surface": { ... },
  "planting": { ... },
  "shoreline": { ... },
  "preview": { ... }
}
```

### workMode — 工作模式

| 值 | 说明 |
|----|------|
| `EXCAVATE` | 挖掘模式 |
| `PLACE` | 铺设模式 |
| `SMOOTH` | 平滑模式 |
| `SURFACE_ROUGHEN` | 表面粗糙 |
| `SURFACE_CONVERT` | 表层转换 |
| `BONE_MEAL` | 撒骨粉 |
| `BATCH_PLANT` | 批量种植 |
| `SHORELINE_PROCESS` | 水岸处理 |

### brush — 笔刷与标高

| 字段 | 说明 | 默认值 |
|------|------|--------|
| `geometryType` | 几何体类型 | `BOX` |
| `radius` / `length` / `width` / `height` 等 | 各几何体尺寸参数 | `5` |
| `heightMode` | 标高模式 | `NO_LIMIT` |
| `lockedHeight` | 锁定/自定义标高值 | `0` |
| `breakableBlockIds` | 允许破坏的方块 ID 列表 | `[]`（空=全部） |
| `ignoredBlockIds` | 忽略不破坏的方块 ID 列表 | 水、岩浆、空气等 |

**geometryType 可选值**：`SPHERE`、`BOX`、`OCTAHEDRON`、`CYLINDER`、`CONE`、`ELLIPSOID`、`TETRAHEDRON`、`TRIANGULAR_PRISM`

**heightMode 可选值**：`NO_LIMIT`、`FOLLOW_PLAYER`、`LOCKED_ONCE`、`CUSTOM`

### surface — 表面处理

| 字段 | 说明 | 默认值 |
|------|------|--------|
| `placeMode` | 铺设方式 | `ADAPTIVE_BIOME` |
| `selectedNaturalBlockId` | 指定的自然方块 ID | `minecraft:stone` |
| `smoothVariant` | 平滑变体 | `ADAPTIVE` |
| `smoothStrength` | 平滑强度 | `0.5` |
| `smoothingIntensity` | 重塑强度 | `0.5` |
| `roughnessStrength` | 粗糙强度 | `0.5` |
| `noiseAutoScale` | 噪声自动缩放 | `true` |
| `noiseFrequency` | 噪声频率 | `0.02` |
| `noisePersistence` | 噪声持久性 | `0.5` |
| `noiseOctaves` | 噪声八度数 | `4` |
| `surfaceConvertBlocks` | 表层转换方块列表及占比 | 草方块 100% |

**placeMode 可选值**：`ADAPTIVE_BIOME`、`NATURAL_BLOCK`

**smoothVariant 可选值**：`ADAPTIVE`、`RAISE`、`LOWER`

### planting — 种植

| 字段 | 说明 | 默认值 |
|------|------|--------|
| `plantType` | 种植类型 | `TREES` |
| `plantDensity` | 种植密度 | - |
| `clusterScale` | 团簇大小 | - |
| `selectedTree` | 树种 | `BIOME_ADAPTIVE` |
| `selectedFlowerGroup` | 花组 | `BIOME_ADAPTIVE` |
| `respectBiomes` | 遵守生物群系规则 | `true` |

**plantType 可选值**：`TREES`、`FLOWERS`、`GRASS`、`CUSTOM`

### shoreline — 水岸

| 字段 | 说明 | 默认值 |
|------|------|--------|
| `shorelineType` | 水岸类型 | `BEACH` |
| `shorelineWidth` | 水岸宽度 | - |
| `plantVegetationEnabled` | 启用植被种植 | - |
| `vegetationDensity` | 植被密度 | - |

**shorelineType 可选值**：`BEACH`、`EMBANKMENT`、`ADAPTIVE`、`MUDDY`、`ROCKY`、`CUSTOM`

### preview — 预览与距离

| 字段 | 说明 | 默认值 |
|------|------|--------|
| `displayMode` | 显示模式 | `WIREFRAME` |
| `maxOperationDistance` | 最大操作距离 | `20` |

**displayMode 可选值**：`WIREFRAME`、`POINT_CLOUD`、`NONE`

## 旧版配置迁移

如果你之前使用过旧版 Pushdozer（`pushdozer.json` 扁平格式），模组会在首次加载时自动将旧配置迁移到新格式。旧字段对应关系：

| 旧字段 | 新位置 |
|--------|--------|
| `workMode` | 顶层 `workMode` |
| `displayMode` | `preview.displayMode` |
| `shape` / `radius` / `length` 等 | `brush.*` |
| `maxOperationDistance` | `preview.maxOperationDistance` |
| `breakableBlockIds` | `brush.breakableBlockIds` |

## 配置示例

```json
{
  "workMode": "EXCAVATE",
  "brush": {
    "geometryType": "BOX",
    "length": 10,
    "width": 10,
    "height": 5,
    "heightMode": "LOCKED_ONCE",
    "lockedHeight": 64,
    "breakableBlockIds": [],
    "ignoredBlockIds": ["minecraft:water", "minecraft:lava", "minecraft:air"]
  },
  "surface": {
    "placeMode": "ADAPTIVE_BIOME",
    "smoothVariant": "ADAPTIVE",
    "smoothStrength": 0.5
  },
  "planting": {
    "plantType": "TREES",
    "selectedTree": "BIOME_ADAPTIVE"
  },
  "shoreline": {
    "shorelineType": "BEACH"
  },
  "preview": {
    "displayMode": "WIREFRAME",
    "maxOperationDistance": 30
  }
}
```
