# Configuration Screen Reference

Press `K` to open the **Pushdozer Configuration** screen (**main hand** required; K does nothing with the tool in offhand, but G/U/V shortcuts still work). Also available via **ModMenu** (optional [ModMenu](https://modrinth.com/mod/modmenu) mod).

### ModMenu Entry

1. Main menu → **Mods**
2. Find **Pushdozer** → click config button
3. Same screen as the `K` key

---

## Main Screen Layout

The main panel is fixed on the left side of the screen:

| # | Control | Action | Description |
|---|---------|--------|-------------|
| 1 | **Brush Shape** dropdown | Click to expand | Select one of 8 geometries |
| 2 | **Config** (next to brush) | Click | Open size sub-panel for current geometry |
| 3 | **Work Mode** dropdown | Click to expand | Select one of 8 work modes |
| 4 | **Config** (next to mode) | Click | Open mode-specific settings sub-panel |
| 5 | **Display Mode** button | Click to cycle | Switch preview mode; also bound to `V` |
| 6 | **Max Operation Distance** slider | Drag | 1–99, default 20; also `↑`/`↓` keys |
| 7 | **Height Config** button | Click | Open height mode sub-panel |
| 8 | **Save and Close** button | Click | Save to local file and sync to server |

> Switching work mode or geometry shows a brief action-bar toast.

---

## Brush Shape Selection Panel

Click the **Brush Shape** button to open a centered panel listing all 8 geometries. Click one to select and close.

The `U` key cycles in this order:

**Sphere → Box → Octahedron → Cylinder → Cone → Ellipsoid → Tetrahedron → Triangular Prism**

---

## Geometry Config Sub-panels

Each geometry has its own sub-panel. All sliders range from **1–64**:

| Geometry | Sliders | Config Fields |
|----------|---------|---------------|
| Sphere | Radius | `sphereRadius` |
| Box | Length, width, height | `length`, `width`, `boxHeight` |
| Octahedron | Radius | `octahedronRadius` |
| Cylinder | Radius, height | `cylinderRadius`, `cylinderHeight` |
| Cone | Radius, height | `coneRadius`, `coneHeight` |
| Ellipsoid | Length, width, height | `length`, `width`, `ellipsoidHeight` |
| Tetrahedron | Edge length, height | `tetrahedronEdgeLength`, `tetrahedronHeight` |
| Triangular Prism | Side length, height | `triangularPrismSideLength`, `triangularPrismHeight` |

The **Done** button at the bottom saves and closes.

---

## Work Mode Selection Panel

Click the **Work Mode** button to open a centered panel. The `G` key cycles in this order:

**Excavate → Place → Smooth → Surface Roughen → Surface Convert → Bone Meal → Batch Plant → Shoreline Process**

> Legacy standalone Smooth Raise, Smooth Lower, and Adaptive Smooth are merged into **Smooth** mode variants.

---

## Mode Config Sub-panel Controls

### Excavate

| Control | Description |
|---------|-------------|
| **Select blocks to destroy** | Opens multi-select block screen (see [Selection Screens](selection-screens.md)) |
| **Done** | Save and close |

### Place

| Control | Description |
|---------|-------------|
| **☑ Adaptive Biome** | Single-select: auto-pick blocks by biome |
| **☑ Natural Block: [name]** | Single-select: open terrain block picker |
| **Done** | Save and close |

### Smooth

| Control | Description |
|---------|-------------|
| **☑ Standard Smooth** | Four variant radio buttons (hover for tooltips) |
| **☑ Adaptive Smooth** | |
| **☑ Raise** | |
| **☑ Lower** | |
| **Smooth Strength / Raise-Lower Depth** slider | 0.1–1.0; label changes for Raise/Lower |
| **Done** | Save and close |

### Surface Roughen

| Control | Range | Description |
|---------|-------|-------------|
| **Roughness Strength** slider | 0.1–2.0 | Peak noise amplitude |
| **Smoothing Intensity** slider | 0–1 | Pre-noise smooth baseline |
| **Auto Scale** toggle | On/Off | Default on; hides advanced params when on |
| **Noise Frequency** slider | 0.01–0.15 | Visible only when Auto Scale is off |
| **Noise Persistence** slider | 0.05–0.95 | Same |
| **Noise Octaves** slider | 1–6 | Same |
| **Reset** button | — | Restore all defaults |
| **Done** | — | Save and close |

### Surface Convert

| Control | Description |
|---------|-------------|
| Block rows (up to 5) | Each row: icon + percentage slider + delete; click icon to change block |
| **Distribution** cycle button | Natural Patches / Random Scatter |
| **Allow Artificial Surfaces** toggle | On/Off |
| **Add Block** | Opens terrain block picker (when fewer than 5 blocks) |
| **Normalize** | Evenly distributes percentages (when 2+ blocks) |
| **Done** | Save and close |

### Bone Meal

| Control | Description |
|---------|-------------|
| Info label | "Bone meal mode does not require configuration for now" |
| **Done** | Save and close |

### Batch Plant

| Control | Description |
|---------|-------------|
| **Plant Type** cycle button | Trees / Flowers / Grass / Custom |
| **Tree Species** cycle button | Shown for Trees: Oak, Spruce, Birch, Jungle, Acacia, Dark Oak, Biome Adaptive |
| **Flower Group** cycle button | Shown for Flowers: Plains, Forest, All, Biome Adaptive |
| **Select Plant Types** button | Shown for Custom; opens plant multi-select |
| **Plant Density** slider | 10–100% |
| **Cluster Scale** slider | Higher = more scattered, lower = more clustered |
| **Done** | Save and close |

### Shoreline Process

| Control | Description |
|---------|-------------|
| **Shoreline Type** cycle button | Beach / Embankment / Adaptive / Muddy / Rocky / Custom |
| **Shoreline Width** slider | 1–10 blocks |
| **Enable Plant Vegetation** toggle | Shown for non-Custom types |
| **Select Blocks / Select Plants** buttons | Shown for Custom type only, side by side |
| **Vegetation Density** slider | 0–100%; always shown for Custom; shown when vegetation enabled otherwise |
| **Operate Above Height** checkbox | Requires non–No Limit height mode |
| **Operate Below Height** checkbox | Same; mutually exclusive with Above |
| **Done** | Save and close |

---

## Height Config Sub-panel

| Control | Description |
|---------|-------------|
| **Follow Player Height** | Single-select |
| **Lock to Player Height** | Single-select: captures current foot Y |
| **No Height Limit** | Single-select: default |
| **Custom Height** | Single-select + slider (Y = −64 to 320) |

Switching height mode shows an action-bar toast.

---

## Save Behavior

- **Save and Close** or sub-panel **Done** writes to `pushdozer_config.json`
- In multiplayer, config syncs to the server via `ConfigSyncPayload` (your copy only)
- Config is **not** broadcast to other players
