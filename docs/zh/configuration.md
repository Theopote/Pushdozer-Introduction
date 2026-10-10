# 配置说明

> **建议**：优先使用游戏内配置界面（`K` 键）修改设置。直接编辑 JSON 文件可能导致格式错误。

## 配置文件

| 项目 | 值 |
|------|-----|
| 路径 | `.minecraft/config/pushdozer_config.json` |
| 格式 | JSON，嵌套结构（`brush` / `surface` / `planting` / `shoreline` / `preview`） |

## 配置结构

配置文件分为 5 个主要部分。以下为 **结构示意**（含 `{ ... }` 占位符），**不可直接复制粘贴**：

```json
{
  "workMode": "EXCAVATE",
  "brush": { "...": "见下方完整示例" },
  "surface": { "...": "见下方完整示例" },
  "planting": { "...": "见下方完整示例" },
  "shoreline": { "...": "见下方完整示例" },
  "preview": { "...": "见下方完整示例" }
}
```

### 完整默认配置（可直接复制）

以下为模组首次运行时的默认配置结构，所有字段均合法，可直接保存为 `pushdozer_config.json`：

```json
{
  "workMode": "EXCAVATE",
  "brush": {
    "breakableBlockIds": [],
    "ignoredBlockIds": [],
    "shape": "Box",
    "geometryType": "BOX",
    "radius": 5,
    "length": 5,
    "width": 5,
    "height": 5,
    "sphereRadius": 5,
    "cylinderRadius": 5,
    "coneRadius": 5,
    "octahedronRadius": 5,
    "tetrahedronEdgeLength": 5,
    "triangularPrismSideLength": 5,
    "boxHeight": 5,
    "cylinderHeight": 5,
    "coneHeight": 5,
    "sphereHeight": 5,
    "octahedronHeight": 5,
    "tetrahedronHeight": 5,
    "triangularPrismHeight": 5,
    "ellipsoidHeight": 5,
    "lockedHeight": 0,
    "heightMode": "NO_LIMIT",
    "isLockedOnceMode": false
  },
  "surface": {
    "placeMode": "ADAPTIVE_BIOME",
    "selectedNaturalBlockId": "minecraft:stone",
    "smoothStrength": 0.5,
    "directionalSmoothBlend": 0.65,
    "smoothVariant": "ADAPTIVE",
    "roughnessStrength": 0.5,
    "smoothingIntensity": 0.5,
    "noiseAutoScale": true,
    "noiseFrequency": 0.02,
    "noisePersistence": 0.5,
    "noiseOctaves": 4,
    "surfaceConvertBlocks": [
      { "blockId": "minecraft:grass_block", "percentage": 100.0 }
    ],
    "convertArtificialSurfaces": false,
    "surfaceConvertDistribution": "PATCHY",
    "surfaceConvertMaxBelowSurfaceDepth": 3
  },
  "planting": {
    "plantType": "TREES",
    "customPlantBlockIds": [],
    "plantDensity": 0.3,
    "selectedTree": "BIOME_ADAPTIVE",
    "selectedFlowerGroup": "BIOME_ADAPTIVE",
    "respectBiomes": true,
    "clusterScale": 0.05
  },
  "shoreline": {
    "shorelineType": "ADAPTIVE",
    "shorelineWidth": 3,
    "plantVegetationEnabled": true,
    "vegetationDensity": 0.1,
    "customShorelineBlocks": [],
    "customShorelinePlants": [],
    "shorelineHeightAboveEnabled": false,
    "shorelineHeightBelowEnabled": false
  },
  "preview": {
    "displayMode": "WIREFRAME",
    "maxOperationDistance": 20
  }
}
```

> `noiseSeed` 由模组在运行时自动生成，无需手动填写。

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
| `breakableBlockIds` | 允许破坏的方块 ID 列表 | `[]`（**空=不可破坏任何方块**，需手动选择） |
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
| `surfaceConvertDistribution` | 分布模式 | `PATCHY`（自然斑块） |
| `convertArtificialSurfaces` | 允许转换人工方块 | `false` |
| `surfaceConvertMaxBelowSurfaceDepth` | 地表以下转换深度 | `3` |

**placeMode 可选值**：`ADAPTIVE_BIOME`、`NATURAL_BLOCK`

**smoothVariant 可选值**：`STANDARD`、`ADAPTIVE`、`RAISE`、`LOWER`

**surfaceConvertDistribution 可选值**：`PATCHY`（自然斑块）、`SCATTER`（随机散布）

### planting — 种植

| 字段 | 说明 | 默认值 |
|------|------|--------|
| `plantType` | 种植类型 | `TREES` |
| `plantDensity` | 种植密度（0.1–1.0） | `0.3`（30%） |
| `clusterScale` | 团簇大小 | `0.05`（5%） |
| `selectedTree` | 树种 | `BIOME_ADAPTIVE` |
| `selectedFlowerGroup` | 花组 | `BIOME_ADAPTIVE` |
| `customPlantBlockIds` | 自定义植物 ID 列表 | `[]` |
| `respectBiomes` | 遵守生物群系规则 | `true` |

**plantType 可选值**：`TREES`、`FLOWERS`、`GRASS`、`CUSTOM`

**selectedTree 可选值**：`OAK`、`SPRUCE`、`BIRCH`、`JUNGLE`、`ACACIA`、`DARK_OAK`、`BIOME_ADAPTIVE`

**selectedFlowerGroup 可选值**：`PLAINS_FLOWERS`、`FOREST_FLOWERS`、`ALL_FLOWERS`、`BIOME_ADAPTIVE`

### shoreline — 水岸

| 字段 | 说明 | 默认值 |
|------|------|--------|
| `shorelineType` | 水岸类型 | `ADAPTIVE` |
| `shorelineWidth` | 水岸宽度（1–10） | `3` |
| `plantVegetationEnabled` | 启用植被种植 | `true` |
| `vegetationDensity` | 植被密度（0–1） | `0.1`（10%） |
| `customShorelineBlocks` | 自定义方块 ID 列表 | `[]` |
| `customShorelinePlants` | 自定义植物 ID 集合 | `[]` |
| `shorelineHeightAboveEnabled` | 仅在标高以上操作 | `false` |
| `shorelineHeightBelowEnabled` | 仅在标高以下操作 | `false` |

**shorelineType 可选值**：`BEACH`、`EMBANKMENT`、`ADAPTIVE`、`MUDDY`、`ROCKY`、`CUSTOM`

### preview — 预览与距离

| 字段 | 说明 | 默认值 |
|------|------|--------|
| `displayMode` | 显示模式 | `WIREFRAME` |
| `maxOperationDistance` | 最大操作距离 | `20` |

**displayMode 可选值**：`WIREFRAME`、`POINT_CLOUD`、`SURFACE`、`NONE`

## 旧版配置迁移

如果你之前使用过旧版 Pushdozer 的**扁平 JSON 结构**（顶层直接放 `radius`、`geometryType` 等字段，没有 `brush` 等嵌套节），模组会在加载 `pushdozer_config.json` 时自动识别并迁移到当前的嵌套格式，**无需手动处理**。文件名始终是 `pushdozer_config.json`。旧字段对应关系：

| 旧字段 | 新位置 |
|--------|--------|
| `workMode` | 顶层 `workMode` |
| `displayMode` | `preview.displayMode` |
| `shape` / `radius` / `length` 等 | `brush.*` |
| `maxOperationDistance` | `preview.maxOperationDistance` |
| `breakableBlockIds` | `brush.breakableBlockIds` |

## 配置示例

### 平整建筑用地（挖掘）

```json
{
  "workMode": "EXCAVATE",
  "brush": {
    "geometryType": "BOX",
    "length": 20,
    "width": 20,
    "height": 4,
    "heightMode": "LOCKED_ONCE",
    "lockedHeight": 64,
    "breakableBlockIds": [
      "minecraft:dirt",
      "minecraft:grass_block",
      "minecraft:stone",
      "minecraft:gravel"
    ]
  },
  "preview": {
    "displayMode": "WIREFRAME",
    "maxOperationDistance": 25
  }
}
```

### 山体自适应平滑

```json
{
  "workMode": "SMOOTH",
  "brush": {
    "geometryType": "SPHERE",
    "sphereRadius": 12,
    "heightMode": "NO_LIMIT"
  },
  "surface": {
    "smoothVariant": "ADAPTIVE",
    "smoothStrength": 0.4
  }
}
```

### 混合地表（表层转换）

```json
{
  "workMode": "SURFACE_CONVERT",
  "brush": {
    "geometryType": "SPHERE",
    "sphereRadius": 8
  },
  "surface": {
    "surfaceConvertBlocks": [
      { "blockId": "minecraft:grass_block", "percentage": 60.0 },
      { "blockId": "minecraft:dirt", "percentage": 25.0 },
      { "blockId": "minecraft:coarse_dirt", "percentage": 15.0 }
    ],
    "surfaceConvertDistribution": "PATCHY",
    "convertArtificialSurfaces": false
  }
}
```

### 批量造林

```json
{
  "workMode": "BATCH_PLANT",
  "brush": {
    "geometryType": "SPHERE",
    "sphereRadius": 15
  },
  "planting": {
    "plantType": "TREES",
    "selectedTree": "BIOME_ADAPTIVE",
    "plantDensity": 0.35,
    "clusterScale": 0.08,
    "respectBiomes": true
  }
}
```

### 湖泊沙滩（水岸）

```json
{
  "workMode": "SHORELINE_PROCESS",
  "brush": {
    "geometryType": "BOX",
    "length": 16,
    "width": 3,
    "height": 2
  },
  "shoreline": {
    "shorelineType": "BEACH",
    "shorelineWidth": 4,
    "plantVegetationEnabled": true,
    "vegetationDensity": 0.15
  }
}
```
