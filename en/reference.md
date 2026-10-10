# Reference Manual

Defaults, system limits, in-game messages, and operation mechanics for Pushdozer. For daily lookup, see [Quick Reference](cheatsheet.md).

---

## Default Configuration

| Setting | Default |
|---------|---------|
| Work Mode | Excavate |
| Brush Geometry | Box 5×5×5 |
| Display Mode | Wireframe |
| Max Operation Distance | 20 |
| Height Mode | No Limit |
| Breakable Block Whitelist | **Empty** (must select manually) |
| Smooth Variant | Adaptive |
| Smooth Strength | 0.5 |
| Roughness Strength | 0.5 |
| Smoothing Intensity | 0.5 |
| Noise Auto Scale | On |
| Surface Convert | Grass block 100%, Natural Patches, artificial surfaces off |
| Place Mode | Adaptive Biome |
| Plant Type | Trees, Biome Adaptive |
| Plant Density | 30% |
| Cluster Scale | 5% |
| Respect Biomes | On (config file; not exposed in UI) |
| Shoreline Type | Adaptive |
| Shoreline Width | 3 blocks |
| Shoreline Vegetation | On, density 10% |

---

## System Limits

| Item | Limit |
|------|-------|
| Brush size | 1–64 per axis/radius |
| Operation distance | 1–99 |
| Undo history | 30 steps / player / dimension |
| Undo cooldown | 300 ms |
| Surface convert blocks | Max 5 types |
| Shoreline width | 1–10 blocks |
| Custom height range | Y = −64 to 320 |
| Smooth / directional depth | 0.1–1.0 |
| Roughness strength | 0.1–2.0 |
| Plant density | 10–100% |
| Config screen (K) | Main hand or offhand |

---

## Targeting

Pushdozer determines the operation center from your look direction:

1. Raycast from player eye position along look vector
2. Max range = current **Max Operation Distance**
3. **Block hit**: use that block position as brush center
4. **No hit or out of range**: use the farthest reachable point (floored to block coords)

The brush geometry is built around this center, then height filters apply.

---

## Undo & Redo

| Item | Description |
|------|-------------|
| Keys | `Ctrl+Z` undo, `Ctrl+Y` redo |
| History depth | 30 steps per player per dimension |
| Cooldown | Minimum 300 ms between undo/redo |
| New operation | Clears redo stack |
| Validation | Skips positions where current block ≠ recorded state |
| Failure | Shows conflict message if region busy or all positions invalid |
| Multiplayer | Server-side; changes sync to all clients |

---

## In-Game Messages

### Shortcuts & Switching

| Message | Trigger |
|---------|---------|
| Please hold the pushdozer tool to switch modes | `G` without holding tool |
| Working mode changed to: %s | `G` key or UI mode switch |
| Display mode changed to: %s | `V` key or UI display switch |
| Brush shape switched to: %s | `U` key geometry switch |
| Maximum operation distance: %d | `↑`/`↓` distance adjust |

### Height Mode

| Message | Trigger |
|---------|---------|
| Height mode switched to: Follow Player Height | Select Follow Player |
| Height mode switched to: No Height Limit | Select No Limit |
| Height mode switched to: Custom Height (Y=%d) | Select Custom |
| Height mode switched to: Lock to Player Height (Y=%d) | Select Lock Once |

### Operation Denied

| Message | Trigger |
|---------|---------|
| Brush size %d is out of range (%d–%d) | Brush > 64 on multiplayer server |
| Target area is busy. Wait for the current edit to finish | Target chunks locked |
| Undo/redo could not apply: area busy or blocks changed | Undo/redo conflict |
| Surface convert skipped: no valid target blocks | No valid surface convert config |

### Config Save

| Message | Trigger |
|---------|---------|
| Configuration saved | Save succeeded |
| Failed to save configuration | Write failed |

---

## Mode Behavior Summary

### Excavate

- Only breaks whitelisted blocks
- Skips: air, unbreakable blocks (hardness < 0), ignored blocks (water, lava, air by default)
- Height filter: see [Height System](height.md)

### Place

- Replaces air and soft replaceable blocks
- Adaptive mode picks blocks by biome (e.g., stone near lava, sandstone near sand)
- Height filter: see [Height System](height.md)

### Smooth

- Dispatches by variant (Gaussian / bilateral / directional mound or depression)
- Modifies elevation only; surface block types may change with height

### Surface Roughen

- Reshapes toward smooth baseline first, then adds noise
- Strength 1.0 ≈ ±5 block peaks (before material modifiers)

### Surface Convert

- Replaces surface column blocks only; no Y change
- Patchy: seeded Perlin noise for material clusters
- Scatter: independent random per column
- Containers and block entities always protected

### Bone Meal

- Applies bone meal to eligible plants in brush
- Changes tracked for undo

### Batch Plant

- Generates plants by density and cluster parameters
- Tree mode uses Minecraft tree generator
- Empty custom list falls back to defaults

### Shoreline Process

- Detects water edges in brush, blends materials inland
- **No elevation change** — surface blocks only
- Presets adapt to biome (e.g., red sand in deserts, snow in snowy biomes)
- Adaptive type auto-selects best preset

---

## Interaction Requirements

All shortcuts and right-click execution work when the Pushdozer is in your main hand or offhand.

## Complete Key Bindings

| Key | Action | Hold requirement |
|-----|--------|------------------|
| `K` | Open/close config screen | Main or offhand |
| `G` | Cycle work modes | Main or offhand |
| `U` | Cycle brush geometries | Main or offhand |
| `V` | Cycle display modes | Main or offhand |
| `↑` | Increase operation distance | Main or offhand |
| `↓` | Decrease operation distance | Main or offhand |
| `Ctrl+Z` | Undo | Main or offhand |
| `Ctrl+Y` | Redo | Main or offhand |
| **Right-click** | Execute current mode | Main or offhand |

> Rebind under **Options → Controls → Pushdozer**.

---

## Obtaining the Tool

1. Enter **Creative mode**
2. Open inventory, switch to **Tools** tab
3. Find the **Pushdozer** item
4. Non-stackable

ModMenu provides quick access to mod info and the config screen.

---

## Related Docs

| Topic | Document |
|-------|----------|
| One-page cheat sheet | [Quick Reference](cheatsheet.md) |
| How to tune parameters | [Parameter Tuning](tuning.md) |
| UI layout | [Visual UI Guide](visual-guide.md) |
| JSON examples | [Configuration](configuration.md) |
