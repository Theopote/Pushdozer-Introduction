# Quick Reference

One-page cheat sheet for Pushdozer. Full parameters, in-game messages, and mechanics: [Reference Manual](reference.md).

---

## Interaction Requirements

All shortcuts (including `K`) work when the Pushdozer is in your main hand or offhand.

## Key Bindings

| Key | Action |
|-----|--------|
| `K` | Config screen |
| `G` | Cycle work mode |
| `U` | Cycle brush shape |
| `V` | Cycle display mode |
| `↑`/`↓` | Distance ±1 |
| `Ctrl+Z` | Undo (30 steps) |
| `Ctrl+Y` | Redo |
| **Right-click** | Execute (main or offhand) |

---

## Work Modes (G cycle)

| # | Mode | One-liner |
|---|------|-----------|
| 1 | Excavate | Clear whitelisted blocks |
| 2 | Place | Fill natural blocks |
| 3 | Smooth | 4 variants reshape height |
| 4 | Surface Roughen | Add noise variation |
| 5 | Surface Convert | Mix materials by % |
| 6 | Bone Meal | Grow plants |
| 7 | Batch Plant | Batch vegetation |
| 8 | Shoreline | Water-edge material blend |

---

## Brush Shapes (U cycle)

Sphere → Box → Octahedron → Cylinder → Cone → Ellipsoid → Tetrahedron → Triangular Prism

Size: **1–64**

---

## Display Modes (V cycle)

Wireframe → Point Cloud → Surface → None

---

## Height Quick Reference

| Mode | Excavate | Place |
|------|----------|-------|
| No Limit | Any | Any |
| Follow Player | Y ≥ foot Y | Y ≤ foot Y−1 |
| Lock/Custom | Y ≥ lock+1 | Y ≤ lock |

---

## Smooth Variants

| Variant | Use | Strength |
|---------|-----|----------|
| Standard | Large leveling | 0.5–0.8 |
| Adaptive | Preserve landforms | 0.3–0.5 |
| Raise | Local bump | 0.3–0.6 |
| Lower | Local dip | 0.3–0.6 |

---

## Key Defaults

| Item | Value |
|------|-------|
| Mode | Excavate |
| Geometry | Box 5³ |
| Display | Wireframe |
| Distance | 20 |
| Height | No Limit |
| Excavate whitelist | **Empty** |
| Smooth | Adaptive 0.5 |
| Shoreline | Adaptive, width 3 |

---

## Quick Troubleshooting

| Issue | Fix |
|-------|-----|
| Excavate no effect | Select breakable blocks |
| No preview | Display ≠ None, hold tool |
| Undo fails | Wait 300ms; check region busy |
| Multiplayer blocked | Brush ≤64; read action bar |

---

## Doc Index

| Need | Doc |
|------|-----|
| Getting started | [basic.md](basic.md) |
| Tutorials | [workflows.md](workflows.md) |
| Tuning | [tuning.md](tuning.md) |
| UI layout | [visual-guide.md](visual-guide.md) |
| Terms | [glossary.md](glossary.md) |
| Full reference | [reference.md](reference.md) |
