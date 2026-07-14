# Configuration

> **Recommendation**: Use the in-game config screen (`K` key) rather than editing JSON directly.

## Config File

| Item | Value |
|------|-------|
| Path | `.minecraft/config/pushdozer_config.json` |
| Legacy path | `.minecraft/config/pushdozer.json` (auto-migrated) |
| Format | JSON, nested structure |

## Structure

The config file has 5 main sections:

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
| `breakableBlockIds` | Allowed block IDs | `[]` (empty = all) |
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

**placeMode values**: `ADAPTIVE_BIOME`, `NATURAL_BLOCK`

**smoothVariant values**: `ADAPTIVE`, `RAISE`, `LOWER`

### planting — Planting

| Field | Description | Default |
|-------|-------------|---------|
| `plantType` | Plant type | `TREES` |
| `plantDensity` | Plant density | - |
| `clusterScale` | Cluster scale | - |
| `selectedTree` | Tree species | `BIOME_ADAPTIVE` |
| `selectedFlowerGroup` | Flower group | `BIOME_ADAPTIVE` |
| `respectBiomes` | Respect biome rules | `true` |

**plantType values**: `TREES`, `FLOWERS`, `GRASS`, `CUSTOM`

### shoreline — Shoreline

| Field | Description | Default |
|-------|-------------|---------|
| `shorelineType` | Shoreline type | `BEACH` |
| `shorelineWidth` | Shoreline width | - |
| `plantVegetationEnabled` | Enable vegetation | - |
| `vegetationDensity` | Vegetation density | - |

**shorelineType values**: `BEACH`, `EMBANKMENT`, `ADAPTIVE`, `MUDDY`, `ROCKY`, `CUSTOM`

### preview — Preview & Distance

| Field | Description | Default |
|-------|-------------|---------|
| `displayMode` | Display mode | `WIREFRAME` |
| `maxOperationDistance` | Max operation distance | `20` |

**displayMode values**: `WIREFRAME`, `POINT_CLOUD`, `NONE`

## Legacy Migration

If you used an older Pushdozer version (`pushdozer.json` flat format), the mod auto-migrates on first load:

| Old Field | New Location |
|-----------|-------------|
| `workMode` | Top-level `workMode` |
| `displayMode` | `preview.displayMode` |
| `shape` / `radius` / `length` etc. | `brush.*` |
| `maxOperationDistance` | `preview.maxOperationDistance` |
| `breakableBlockIds` | `brush.breakableBlockIds` |

## Example

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
