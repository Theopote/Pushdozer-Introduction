# Work Modes

Pushdozer provides **8** player-facing work modes. Press `G` to cycle. Each mode has its own **Config** sub-panel in the configuration screen.

> **Execution**: Hold the Pushdozer in your main hand or offhand, **right-click** the target. Shortcuts only change settings—they do not modify terrain directly.

## Player overview

| Mode | Changes height | Changes materials | Spawns vegetation | Typical use |
|------|:--------------:|:-----------------:|:-----------------:|-------------|
| Excavate | — | Removes blocks | — | Clear, dig, level |
| Place | Optional fill | Yes | — | Fill holes, surface |
| Smooth (4 variants) | Yes | May rebuild surface | — | Level, raise/lower |
| Surface Roughen | Yes | May rebuild surface | — | Naturalize flat terrain |
| Surface Convert | No | Yes | — | Mix grass/sand/stone |
| Bone Meal | Depends on growth | Depends on result | Can promote | Fertilize crops/plants |
| Batch Plant | — | — | Yes | Forests, vegetation |
| Shoreline Process | Usually no | Yes | Optional | Naturalize shores |

**G cycle order**: Excavate → Place → Smooth → Surface Roughen → Surface Convert → Bone Meal → Batch Plant → Shoreline Process

---

## Excavate

**What it does**: Removes blocks in the brush volume, replacing them with air.

### How to use

1. Select **Excavate**
2. Click **Select blocks to destroy** and check at least one block type
3. Choose brush shape and size; set height mode (optional)
4. Right-click the target

### Height limits

| Height mode | Excavation range |
|-------------|------------------|
| No Limit | Any Y |
| Follow Player | Y ≥ foot level |
| Lock / Custom | Y ≥ lockedHeight + 1 |

Blocks outside the range are **silently skipped**—no chat message.

### Common mistakes

- **Whitelist defaults to empty**—nothing breaks until you select breakable blocks
- Unbreakable blocks (hardness &lt; 0, e.g. bedrock) are always skipped
- Blocks on the **ignore list** are never broken
- Air is not "excavated"

### Recommended settings

| Scenario | Brush | Height |
|----------|-------|--------|
| Level foundation | Box 10×10×3 | Lock Player Height |
| Horizontal tunnel | Box 4×4×4 | No Limit |
| Clear surface vegetation | Small sphere | Follow Player |

---

## Place

**What it does**: Fills air and replaceable soft blocks with natural blocks in the brush volume.

### How to use

1. Select **Place**
2. Choose **Adaptive Biome** or **Select natural block**
3. Right-click the target area

### Place modes

| Mode | Description |
|------|-------------|
| **Adaptive Biome** | Auto-selects blocks from biome/context (e.g. stone near lava, sandstone near sand) |
| **Natural Block** | Manually specified natural block |

### Height limits

| Height mode | Placement range |
|-------------|-----------------|
| No Limit | Any Y |
| Follow Player | Y ≤ foot level − 1 |
| Lock / Custom | Y ≤ lockedHeight |

### Common mistakes

- Place does not replace solid blocks (except blocks in replacement rules, e.g. decorative plants)
- Height limits are opposite to Excavate: place **below**, excavate **above**

### Recommended settings

| Scenario | Mode | Height |
|----------|------|--------|
| Quick surface | Adaptive Biome | Lock Player Height |
| Artificial platform | Specific natural block | Lock / Custom |

---

## Smooth

**What it does**: Reshapes terrain height in the brush; surface blocks may rebuild as height changes.

### How to use

1. Select **Smooth**, click **Config**
2. Choose one of 4 variants
3. Adjust strength
4. Right-click; repeat to refine

### Four variants

| Variant | Algorithm | Best for |
|---------|-----------|----------|
| **Standard** | Spatial Gaussian blur, larger per-pass change | Large-scale leveling |
| **Adaptive** | Multi-scale bilateral filter, preserves large contours | Mountain softening, denoising |
| **Raise** | Gaussian bump at brush center | Local elevation, small hills |
| **Lower** | Depression at brush center | Local lowering, hollows |

Hover variant buttons for detailed tooltips.

### Strength parameters

| Parameter | Range | Variants |
|-----------|-------|----------|
| Smooth strength | 0.1–1.0 | Standard, Adaptive |
| Raise/Lower depth | 0.1–1.0 | Raise, Lower |

### Height limits

Follows general height filtering (see [Height System](height.md)).

### Common mistakes

- Standard smooth changes more per pass than Adaptive—large areas may alter overall shape
- Raise/Lower are directional, not uniform elevation across the whole brush

### Recommended settings

| Scenario | Variant | Strength |
|----------|---------|----------|
| Building site leveling | Standard | 0.5–0.8 |
| Denoise while preserving mountains | Adaptive | 0.3–0.5 |
| Small hill | Raise | 0.3–0.6 |
| Small hollow | Lower | 0.3–0.6 |

---

## Surface Roughen

**What it does**: Reshapes toward a smooth baseline, then adds Perlin noise for natural micro-relief.

### How to use

1. Select **Surface Roughen**, click **Config**
2. Adjust roughness and reshape strength
3. Right-click

### Parameters

| Parameter | Range | Description |
|-----------|-------|-------------|
| **Roughness strength** | 0.1–2.0 | Noise peak; 1.0 ≈ ±5 blocks (material modifiers apply) |
| **Smoothing intensity** | 0.1–1.0 | How much to reshape toward smooth baseline before noise |
| **Auto scale** | On/Off | Default on; scales noise to brush radius |

When **Auto scale** is off, adjust noise frequency, persistence, and octaves manually. **Reset** restores defaults.

### Height limits

Follows general height filtering.

### Common mistakes

- Unlike Smooth: Surface Roughen **adds** noise intentionally
- High roughness on large brushes can produce dramatic terrain

### Recommended settings

| Scenario | Roughness | Reshape |
|----------|-----------|---------|
| Subtle naturalization | 0.3–0.5 | 0.3 |
| Pronounced relief | 0.7–1.0 | 0.5 |

---

## Surface Convert

**What it does**: Replaces surface column blocks by configured percentages—**no Y change**.

### How to use

1. Select **Surface Convert**, click **Config**
2. Add up to 5 blocks with percentages
3. Choose distribution mode
4. Right-click

### Blocks and distribution

| Option | Description |
|--------|-------------|
| Block list | Up to 5 types with percentages; default grass 100% |
| **Natural Patches** | Fixed-seed Perlin noise for coherent patches |
| **Scatter** | Independent random per column |
| **Allow artificial** | Off by default; containers and block entities always protected |

### Height limits

Follows general height filtering; only surface columns are replaced.

### Common mistakes

- Skipped with message if no valid target blocks configured
- Does not excavate or fill—only swaps materials

### Recommended settings

| Scenario | Blocks | Distribution |
|----------|--------|--------------|
| Patchy grass | Grass 60% + dirt 40% | Natural Patches |
| Even mix | Multiple blocks equal share | Scatter |

---

## Bone Meal

**What it does**: Applies bone meal to eligible plants in the brush volume.

### How to use

1. Select **Bone Meal** (no Config panel)
2. Right-click

### Targets

- Vegetation on grass, dirt, farmland, sand
- Grass, flowers, crops, saplings, etc.
- Large operations process ~48 positions per tick

### Height limits

Follows general height filtering.

### Common mistakes

- No effect on non-plants or non-fertilizable blocks
- Tree growth may extend beyond brush bounds (undo records actual changes)

### Recommended settings

| Scenario | Brush |
|----------|-------|
| Fertilize crops | Box over farmland |
| Quick greening | Medium sphere |

---

## Batch Plant

**What it does**: Spawns plants in the brush by density and cluster settings.

### How to use

1. Select **Batch Plant**, click **Config**
2. Choose plant type and parameters
3. Right-click

### Plant types

| Type | Description |
|------|-------------|
| **Trees** | Species or **Biome Adaptive**; uses Minecraft tree generator |
| **Flowers** | Flower group or **Biome Adaptive** |
| **Grass** | Grass, ferns, low vegetation |
| **Custom** | Free selection; defaults used if list empty |

### Other parameters

| Parameter | Range | Description |
|-----------|-------|-------------|
| Plant density | 10–100% | Spawn probability per area |
| Cluster scale | Adjustable | Spatial clustering (different algorithms for trees vs flowers) |

Config file **respectBiomes** defaults on but is not exposed in UI.

### Height limits

Follows general height filtering; plants need valid ground.

### Common mistakes

- Low density may spawn almost nothing
- Trees need vertical clearance

### Recommended settings

| Scenario | Type | Density | Cluster |
|----------|------|---------|---------|
| Sparse forest | Trees, Biome Adaptive | 30–40% | Default |
| Flower field | Flowers, Plains | 50–70% | Medium |
| Meadow | Grass | 40–60% | Default |

---

## Shoreline Process

**What it does**: Detects water edges in the brush and blends surface materials inland by horizontal distance; optional vegetation. **Does not change terrain height.**

### How to use

1. Select **Shoreline Process**, click **Config**
2. Choose shoreline type and width
3. Right-click water's edge

### Shoreline types

| Type | Description |
|------|-------------|
| **Beach** | Sand transition for oceans and lakes |
| **Embankment** | Dirt/grass transition |
| **Adaptive** | Biome-based (e.g. red sand in desert, snow in snowy biomes) |
| **Muddy** | Swamp style |
| **Rocky** | Rocky shore |
| **Custom** | Custom blocks and plants |

### Other parameters

| Parameter | Range | Description |
|-----------|-------|-------------|
| Shoreline width | 1–10 blocks | Horizontal transition from water |
| Vegetation | On/Off | Disabled for Custom type |
| Vegetation density | 0–100% | Plant density on shore |
| Above/Below height | Mutually exclusive | Requires non–No Limit height mode |

### Common mistakes

- Brush must cover the **water–land boundary**—clicking deep water alone may have no effect
- Does not reshape shore slope—only replaces surface blocks

### Recommended settings

| Scenario | Type | Width |
|----------|------|-------|
| Lake beach | Beach | 3–4 |
| Natural riverbank | Adaptive | 3–5 |
| Swamp | Muddy | 4–6 |

> Material and biome rules: [Shoreline Presets](shoreline.md). Step-by-step: [Workflows](workflows.md).
