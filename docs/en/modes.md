# Work Modes

Pushdozer provides **8 work modes**, cycled with the `G` key. Each mode has its own **Config** sub-panel in the configuration screen.

> **Execution**: Hold the Pushdozer and **right-click** the target location. Shortcuts only change settings — they do not modify terrain directly.

---

## Excavate

Removes blocks within the brush area.

### Basics

- Configure a block whitelist via **Select blocks to destroy**
- Only whitelisted blocks are broken; unbreakable blocks (hardness &lt; 0) are always skipped
- The default whitelist is **empty** — you must select at least one block type before excavate will have any effect

### Height Restrictions

| Height Mode | Excavatable Range |
|-------------|-------------------|
| No Limit | Any Y level |
| Follow Player | Y ≥ player foot level |
| Lock / Custom | Y ≥ locked height + 1 |

Blocks outside the allowed range are **silently skipped** with no chat message.

**Use cases**: Leveling terrain, digging tunnels, clearing specific blocks, creating underground spaces.

---

## Place

Fills the brush area with natural terrain blocks.

### Placement Methods

| Method | Description |
|--------|-------------|
| **Adaptive Biome** | Automatically selects suitable blocks based on biome and ground context (e.g., grass in plains, sand in deserts) |
| **Natural Block** | Manually specify one natural block via the block selection screen |

### Height Restrictions

| Height Mode | Placeable Range |
|-------------|-----------------|
| No Limit | Any Y level |
| Follow Player | Y ≤ player foot level − 1 |
| Lock / Custom | Y ≤ locked height |

Combine with **Lock Player Height** to quickly create flat surfaces.

**Use cases**: Filling gaps, creating platforms, restoring damaged terrain.

---

## Smooth

Reshapes terrain elevation within the brush area. The config panel offers **4 smooth variants** (single-select):

| Variant | Description |
|---------|-------------|
| **Standard Smooth** | Spatial Gaussian blur that flattens bumps and fills depressions. Strong per-stroke change; best for general terrain leveling |
| **Adaptive Smooth** | Multi-scale bilateral filter that removes fine noise while preserving hills and large landforms |
| **Raise** | Builds a Gaussian mound at the brush center and blends with surroundings |
| **Lower** | Creates a depression at the brush center and blends with surroundings |

### Strength Parameters

- **Smooth Strength** (Standard / Adaptive): 0.1–1.0, controls smoothing force per operation
- **Raise/Lower Depth** (Raise / Lower): 0.1–1.0, scales max height change per stroke

Hover over each variant button for detailed tooltips.

**Use cases**: Leveling foundations, softening hillside transitions, local raise/lower, naturalizing artificial terrain.

---

## Surface Roughen

Adds natural elevation variation to overly flat surfaces (changes height).

### Parameters

| Parameter | Description |
|-----------|-------------|
| **Roughness Strength** | Controls peak noise height (strength 1.0 ≈ ±5 blocks before material modifiers) |
| **Smoothing Intensity** | Reshapes terrain toward a smoothed baseline before noise (0 = keep shape, 1 = full smooth reshape) |
| **Auto Scale** | On by default; automatically adjusts noise based on brush radius |

When **Auto Scale** is off, manual controls appear:

- **Noise Frequency** — high values create fine variation, low values create smooth variation
- **Noise Persistence** — relative strength of multi-layer noise
- **Noise Octaves** — number of noise layers; more layers add complexity but may impact performance

A **Reset** button at the bottom restores defaults.

**Use cases**: Making flat artificial terrain look more natural, creating subtle elevation variation.

---

## Surface Convert

Replaces surface column blocks within the brush area with a mix of configured materials (**does not change elevation**).

### Block Configuration

- Up to **5 block types** with individual percentages
- **Add Block** / **Normalize** buttons manage proportions
- Default: grass block 100%

### Distribution Modes

| Mode | Description |
|------|-------------|
| **Natural Patches** | Uses seeded noise for coherent material clusters — more natural-looking |
| **Random Scatter** | Independent random pick per column — more uniform distribution |

### Other Options

- **Allow Artificial Surfaces**: Off by default. When on, non-natural solid blocks may convert; containers and block entities stay protected
- If no valid target blocks are configured, the operation is skipped with a chat message

**Use cases**: Mixed surfaces (patchy grass and dirt), material transitions, blending paths with surroundings.

---

## Bone Meal

Applies bone meal effects to plants within the brush area.

- No additional configuration
- Works on grass, flowers, crops, saplings, etc.
- Changes are tracked for undo/redo

**Use cases**: Quick greening, crop growth, vegetation recovery.

---

## Batch Plant

Batch-plants vegetation within the brush area.

### Plant Types

| Type | Description |
|------|-------------|
| **Trees** | Choose species (oak, spruce, birch, etc.) or **Biome Adaptive** |
| **Flowers** | Choose flower group (plains, forest, etc.) or **Biome Adaptive** |
| **Grass** | Plant grass, ferns, and low vegetation |
| **Custom** | Freely select from the plant list |

### Additional Parameters

- **Plant Density** — controls how many plants per area (10–100%)
- **Cluster Scale** — controls clustering vs. spread (higher = more scattered)

**Use cases**: Quick afforestation, flower fields, ecosystem restoration.

---

## Shoreline Process

Creates natural shoreline material transitions at water edges (**replaces surface blocks only — does not reshape elevation**).

### Shoreline Types

| Type | Description |
|------|-------------|
| **Beach** | Sand shoreline for oceans and lakes |
| **Embankment** | Dirt/grass transition shoreline |
| **Adaptive** | Auto-selects by biome (e.g., red sand in deserts, snow in snowy biomes) |
| **Muddy** | Swamp-style muddy shoreline |
| **Rocky** | Rocky shoreline |
| **Custom** | Choose your own blocks and plants |

### Additional Parameters

- **Shoreline Width** — horizontal transition distance from water (1–10 blocks)
- **Plant Vegetation** / **Vegetation Density** — auto-plant suitable vegetation (not available for Custom type)
- **Operate Above/Below Height** — requires a non–No Limit height mode first; the two toggles are mutually exclusive

**Use cases**: Beaches, riverbanks, lake ecosystems, swamp shorelines.

> Biome-specific material rules: [Shoreline Presets](shoreline.md). Step-by-step guides: [Tutorials](workflows.md).
