# Step-by-Step Tutorials

Typical terrain editing tasks with recommended settings. Adjust to your needs.

---

## 1. Level a Building Site

**Goal**: Clear blocks above a target height for a flat base.

| Step | Action |
|------|--------|
| 1 | Work mode → **Excavate** |
| 2 | Config → **Select blocks to destroy** — check dirt, stone, grass, gravel, etc. |
| 3 | Brush → **Box**, L×W cover the site, height 3–5 |
| 4 | Height → **Lock Player Height** (stand on target level when switching) |
| 5 | Display → **Wireframe** to confirm range |
| 6 | Right-click section by section |

**Tip**: For surface-only removal, reduce height and select only grass/dirt.

---

## 2. Dig a Tunnel

**Goal**: A horizontal or slightly descending passage.

| Step | Action |
|------|--------|
| 1 | Work mode → **Excavate** |
| 2 | Select breakable: stone, deepslate, dirt, etc. |
| 3 | Brush → **Box** (length 3–5, width 3–5, height 3) |
| 4 | Height → **No Limit** |
| 5 | Operation distance → 30–40 |
| 6 | Face tunnel direction, walk and right-click |

**Tip**: Use **Box** for horizontal passages. The cylinder extends along the Y axis and does not rotate with your view—repeated horizontal clicks create overlapping vertical columns. Cylinders suit **vertical shafts and circular vertical spaces**, not standard horizontal round tunnels.

---

## 3. Fill Depressions / Create Platform

**Goal**: Fill holes or create artificial ground.

| Step | Action |
|------|--------|
| 1 | Work mode → **Place** |
| 2 | **Adaptive Biome** or specific block (e.g., stone) |
| 3 | Brush → **Box**, height 1–3 |
| 4 | Height → **Lock Player Height** |
| 5 | Right-click to fill |

---

## 4. Hill Shaping & Naturalization

**Goal**: Smooth rough hills and add natural micro-variation.

| Phase | Mode | Settings |
|-------|------|----------|
| Rough | Excavate + Place | Large sphere/box, No Limit |
| Level | Smooth → **Standard** | Strength 0.6–0.8, medium sphere |
| Preserve | Smooth → **Adaptive** | Strength 0.3–0.5 |
| Naturalize | Surface Roughen | Roughness 0.4, reshape 0.3, Auto Scale on |
| Green | Batch Plant / Bone Meal | Trees or grass, 30% density |

---

## 5. Mixed Material Surface (Surface Convert)

**Goal**: Patchy grass/dirt/coarse dirt like a natural meadow.

| Step | Action |
|------|--------|
| 1 | Work mode → **Surface Convert** |
| 2 | Add: grass 60%, dirt 30%, coarse dirt 10% |
| 3 | Click **Normalize** |
| 4 | Distribution → **Natural Patches** |
| 5 | Medium sphere or box |
| 6 | Multiple strokes with overlapping edges |

---

## 6. Create a Beach

**Goal**: Sand transition at lake or ocean edges.

| Step | Action |
|------|--------|
| 1 | Work mode → **Shoreline Process** |
| 2 | Type → **Beach** |
| 3 | Width → 3–5 |
| 4 | Enable vegetation, density 10–20% |
| 5 | Box brush (wide along shore, height 1–2) |
| 6 | Move along water edge and right-click |

See [Shoreline Presets](shoreline.md) for biome-specific behavior.

---

## 7. Riverbank (Embankment)

| Step | Action |
|------|--------|
| 1 | Type → **Embankment** |
| 2 | Width 4–6 |
| 3 | Box brush along the river |

---

## 8. Adaptive Shoreline (Recommended Default)

| Step | Action |
|------|--------|
| 1 | Type → **Adaptive** (default) |
| 2 | Auto-selects beach/embankment/muddy style by biome |

---

## 9. Custom Shoreline

| Step | Action |
|------|--------|
| 1 | Type → **Custom** |
| 2 | **Select Blocks** — multi-select (sand, gravel, stone) |
| 3 | **Select Plants** — multi-select (dead bush, seagrass, grass) |
| 4 | Set vegetation density |
| 5 | Right-click along water |

---

## 10. Quick Afforestation

| Step | Action |
|------|--------|
| 1 | **Batch Plant** → Trees → Biome Adaptive |
| 2 | Density 30–50%, moderate cluster |
| 3 | Sphere brush, multiple strokes |

Ensure ground is grass/dirt or other growable surface.

---

## 11. Flower Field

| Step | Action |
|------|--------|
| 1 | Plant type → **Flowers** |
| 2 | Group → **Plains Flowers** or Biome Adaptive |
| 3 | Density 40–60%, lower cluster (more spread) |
| 4 | Flat box (height 1–2), right-click |

---

## 12. Local Raise

| Step | Action |
|------|--------|
| 1 | Smooth → **Raise** |
| 2 | Depth 0.4–0.6 |
| 3 | Small sphere, multiple strokes at target point |

---

## 13. Quick Greening (Bone Meal)

| Step | Action |
|------|--------|
| 1 | **Bone Meal** mode (no config needed) |
| 2 | Brush over grass area |
| 3 | Right-click to grow grass, flowers, crops |

---

## 14. Undo a Mistake

| Step | Action |
|------|--------|
| 1 | Hold Pushdozer |
| 2 | `Ctrl+Z` (up to 30 steps) |
| 3 | If conflict message, wait for region to finish |

---

## Combo Tips

- **Lock height + Box + Excavate**: Precise horizontal cut
- **Surface Convert patches + small brush + overlap**: Seamless material borders
- **Adaptive smooth → Surface roughen**: Level first, then add detail
- **Place fill → Surface convert**: Unified base, then swap materials
