# Configuration

> **Recommendation**: Use the in-game config screen (`K` key) rather than editing JSON directly.

## Config File

| Item | Value |
|------|-------|
| Path | `.minecraft/config/pushdozer_config.json` |
| Format | JSON, nested structure (`brush` / `surface` / `planting` / `shoreline` / `preview`) |

## Structure

The config file has 5 main sections. The block below is a **structure overview** with placeholders—it is **not valid JSON** and cannot be pasted directly:

```json
{
  "workMode": "EXCAVATE",
  "brush": { "...": "see full example below" },
  "surface": { "...": "see full example below" },
  "planting": { "...": "see full example below" },
  "shoreline": { "...": "see full example below" },
  "preview": { "...": "see full example below" }
}
```

### Full Default Config (copy-paste ready)

All fields below are valid and match the mod's first-run defaults:

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

> `noiseSeed` is generated at runtime; you do not need to set it manually.

### workMode — Work Mode

| Value | Description |
|-------|-------------|
| `EXCAVATE` | Excavate |
| `PLACE` | Place |
| `SMOOTH` | Smooth |
| `SURFACE_ROUGHEN` | Surface Roughen |
| `SURFACE_CONVERT` | Surface Convert |
| `BONE_MEAL` | Bone Meal |
| `BATCH_PLANT` | Batch Plant |
| `SHORELINE_PROCESS` | Shoreline Process |

### brush — Brush & Height

| Field | Description | Default |
|-------|-------------|---------|
| `geometryType` | Geometry type | `BOX` |
| `radius` / `length` / `width` / `height` etc. | Size parameters per geometry | `5` |
| `heightMode` | Height mode | `NO_LIMIT` |
| `lockedHeight` | Locked/custom height value | `0` |
| `breakableBlockIds` | Allowed block IDs | `[]` (**empty = no blocks breakable**; must select manually) |
| `ignoredBlockIds` | Blocks to skip | water, lava, air, etc. |

**geometryType values**: `SPHERE`, `BOX`, `OCTAHEDRON`, `CYLINDER`, `CONE`, `ELLIPSOID`, `TETRAHEDRON`, `TRIANGULAR_PRISM`

**heightMode values**: `NO_LIMIT`, `FOLLOW_PLAYER`, `LOCKED_ONCE`, `CUSTOM`

### surface — Surface Processing

| Field | Description | Default |
|-------|-------------|---------|
| `placeMode` | Placement method | `ADAPTIVE_BIOME` |
| `selectedNaturalBlockId` | Specified natural block ID | `minecraft:stone` |
| `smoothVariant` | Smooth variant | `ADAPTIVE` |
| `smoothStrength` | Smooth strength | `0.5` |
| `smoothingIntensity` | Reshape intensity | `0.5` |
| `roughnessStrength` | Roughness strength | `0.5` |
| `noiseAutoScale` | Noise auto scale | `true` |
| `noiseFrequency` | Noise frequency | `0.02` |
| `noisePersistence` | Noise persistence | `0.5` |
| `noiseOctaves` | Noise octaves | `4` |
| `surfaceConvertBlocks` | Surface convert blocks & percentages | grass block 100% |
| `surfaceConvertDistribution` | Distribution mode | `PATCHY` (natural patches) |
| `convertArtificialSurfaces` | Allow artificial surface conversion | `false` |
| `surfaceConvertMaxBelowSurfaceDepth` | Depth below surface for conversion | `3` |

**placeMode values**: `ADAPTIVE_BIOME`, `NATURAL_BLOCK`

**smoothVariant values**: `STANDARD`, `ADAPTIVE`, `RAISE`, `LOWER`

**surfaceConvertDistribution values**: `PATCHY` (natural patches), `SCATTER` (random scatter)

### planting — Planting

| Field | Description | Default |
|-------|-------------|---------|
| `plantType` | Plant type | `TREES` |
| `plantDensity` | Plant density (0.1–1.0) | `0.3` (30%) |
| `clusterScale` | Cluster scale | `0.05` (5%) |
| `selectedTree` | Tree species | `BIOME_ADAPTIVE` |
| `selectedFlowerGroup` | Flower group | `BIOME_ADAPTIVE` |
| `customPlantBlockIds` | Custom plant ID list | `[]` |
| `respectBiomes` | Respect biome rules | `true` |

**plantType values**: `TREES`, `FLOWERS`, `GRASS`, `CUSTOM`

**selectedTree values**: `OAK`, `SPRUCE`, `BIRCH`, `JUNGLE`, `ACACIA`, `DARK_OAK`, `BIOME_ADAPTIVE`

**selectedFlowerGroup values**: `PLAINS_FLOWERS`, `FOREST_FLOWERS`, `ALL_FLOWERS`, `BIOME_ADAPTIVE`

### shoreline — Shoreline

| Field | Description | Default |
|-------|-------------|---------|
| `shorelineType` | Shoreline type | `ADAPTIVE` |
| `shorelineWidth` | Shoreline width (1–10) | `3` |
| `plantVegetationEnabled` | Enable vegetation | `true` |
| `vegetationDensity` | Vegetation density (0–1) | `0.1` (10%) |
| `customShorelineBlocks` | Custom block ID list | `[]` |
| `customShorelinePlants` | Custom plant ID set | `[]` |
| `shorelineHeightAboveEnabled` | Operate above height only | `false` |
| `shorelineHeightBelowEnabled` | Operate below height only | `false` |

**shorelineType values**: `BEACH`, `EMBANKMENT`, `ADAPTIVE`, `MUDDY`, `ROCKY`, `CUSTOM`

### preview — Preview & Distance

| Field | Description | Default |
|-------|-------------|---------|
| `displayMode` | Display mode | `WIREFRAME` |
| `maxOperationDistance` | Max operation distance | `20` |

**displayMode values**: `WIREFRAME`, `POINT_CLOUD`, `SURFACE`, `NONE`

## Legacy Migration

If you used an older Pushdozer version with a **flat JSON structure** (top-level `radius`, `geometryType`, etc. without nested `brush` sections), the mod auto-detects and migrates it when loading `pushdozer_config.json` — no manual steps needed. The filename is always `pushdozer_config.json`. Field mapping:

| Old Field | New Location |
|-----------|-------------|
| `workMode` | Top-level `workMode` |
| `displayMode` | `preview.displayMode` |
| `shape` / `radius` / `length` etc. | `brush.*` |
| `maxOperationDistance` | `preview.maxOperationDistance` |
| `breakableBlockIds` | `brush.breakableBlockIds` |

## Configuration Examples

### Level Building Site (Excavate)

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

### Hill Adaptive Smooth

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

### Mixed Surface (Surface Convert)

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

### Batch Afforestation

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

### Lake Beach (Shoreline)

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
