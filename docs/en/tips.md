# Tips & Best Practices

## Standard Workflow

1. Hold the Pushdozer (main or offhand for shortcuts and right-click execution)
2. Press `K` to open the config screen
3. Select **Work Mode** → click **Config** for mode settings
4. Select **Brush Shape** → click **Config** for size
5. Set **Height Mode** (if you need flat surfaces or layered work)
6. Confirm **Display Mode** and **Operation Distance**
7. Click **Save and Close**
8. Aim and **right-click** to execute

---

## Undo & Redo

- Up to **30 steps** of independent history per player
- `Ctrl+Z` undo, `Ctrl+Y` redo
- Minimum 300 ms between undo/redo actions
- Undo only affects your own history; syncs to all clients in multiplayer
- **Tip**: Test on a small area before large operations

---

## Scenario Workflows

### Level Building Site

1. Excavate → select breakable blocks (dirt, stone, grass, etc.)
2. Box brush with appropriate L×W, small height
3. **Lock Player Height**
4. Right-click section by section

### Fill Depressions / Create Platform

1. Place → **Adaptive Biome** or specific block
2. Box brush
3. **Lock Player Height**
4. Right-click to fill

### Hill Shaping

1. **Rough**: Large sphere or box + excavate/place
2. **Level**: Standard smooth, strength 0.5–0.8
3. **Preserve forms**: Adaptive smooth, strength 0.3–0.5
4. **Naturalize**: Surface roughen, low strength (0.3–0.5) + Auto Scale on
5. **Green**: Batch plant or bone meal

### Mixed Material Surface

1. Surface Convert → add 2–3 blocks (grass, dirt, coarse dirt)
2. Adjust percentages → **Normalize**
3. Distribution: **Natural Patches**
4. Use small brush, multiple strokes for natural edges

### Riverbank Slope

1. Shoreline → **Embankment** or **Adaptive**
2. Width 3–5, enable vegetation
3. Box brush, move along river right-clicking
4. To limit height: set **Follow Player** or **Custom** height mode

### Quick Afforestation

1. Batch Plant → Trees → Biome Adaptive
2. Sphere brush, density 30–50%, moderate cluster
3. Right-click multiple times to cover area

### Local Raise / Lower

1. Smooth → **Raise** or **Lower**
2. Small sphere brush
3. Depth 0.3–0.6, multiple strokes to build effect

---

## Building Assistance

- **Lock height + Box**: Perfect flat foundations
- **Surface Convert + Patchy**: Natural stone path / grass transitions
- **Smooth variants**: Standard for large areas, Adaptive to preserve landforms, Raise/Lower for local tweaks
- **No Limit + Cylinder**: Precise vertical shafts

---

## Performance

- Start brush size at 1 and increase gradually
- Prefer **Wireframe** preview; use **Surface** when you need volume clarity
- Execute large operations in batches
- Notify teammates before large ops on multiplayer servers
- If stuttering: reduce brush → switch to **None** → lower operation distance

---

## Multiplayer Collaboration

- Each player's config is independent
- Terrain changes sync in real time
- Avoid overlapping operations in the same area
- Undo only reverts your own history

---

## Configuration Management

- Path: `config/pushdozer_config.json`
- Prefer the in-game config screen
- Legacy flat JSON auto-migrates on load
- Back up the config file to reuse settings across worlds
