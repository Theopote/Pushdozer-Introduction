# Visual UI Guide

Layout reference to help you find features quickly. In-game screenshots live under `docs/assets/`; below are layout diagrams and a capture checklist.

## Screenshot checklist

Each major feature needs **before → brush preview → after** shots with key parameters labeled:

| Priority | Feature | Suggested settings | Asset path |
|----------|---------|-------------------|------------|
| 1 | Excavate + Box leveling | Excavate, Box 8×8×3, Lock height | `assets/workflows/excavate-*.png` |
| 2 | Smooth variant comparison | Same terrain, 4 variants | `assets/modes/smooth-*.png` |
| 3 | Brush select & preview | Sphere wireframe → result | `assets/shapes/sphere-*.png` |
| 4 | Shoreline presets | Beach/Embankment/Muddy/Rocky | `assets/modes/shoreline-*.png` |
| 5 | Batch plant | Trees, 30% density | `assets/modes/plant-*.png` |

Placeholder (replace with in-game captures):

![Excavate workflow placeholder](../assets/workflows/excavate-placeholder.svg)

| Feature | Placeholder |
|---------|-------------|
| Smooth variants | ![](../assets/modes/smooth-placeholder.svg) |
| Sphere brush | ![](../assets/shapes/sphere-placeholder.svg) |
| Shoreline presets | ![](../assets/modes/shoreline-placeholder.svg) |
| Batch plant | ![](../assets/modes/plant-placeholder.svg) |

---

## 1. Obtaining the Pushdozer

```
Creative mode → Inventory → Tools tab → Pushdozer
```

| Detail | Value |
|--------|-------|
| Stack size | 1 (non-stackable) |
| Holding | Main hand or offhand for config (K) and operations (right-click) |

<!-- Screenshot placeholder: Pushdozer in Creative Tools tab -->

---

## 2. Main Config Screen (K key)

```
┌─────────────────────────────────┐
│     Pushdozer Configuration     │
├─────────────────────────────────┤
│ [Brush Shape: Box        ▼] [Config] │
│ [Work Mode: Excavate     ▼] [Config] │
│ [Display Mode: Wireframe      ]      │
│ Max Distance: ████████░░ 20          │
│ [Height Config]                      │
│ [Save and Close]                     │
└─────────────────────────────────┘
```

| Area | Shortcut | Description |
|------|----------|-------------|
| Brush Shape ▼ | `U` | Expand 8 geometry list |
| Config (brush) | — | Size slider sub-panel |
| Work Mode ▼ | `G` | Expand 8 mode list |
| Config (mode) | — | Mode-specific settings |
| Display Mode | `V` | Cycle preview |
| Distance slider | `↑`/`↓` | 1–99 |
| Height Config | — | Four height modes |
| Save and Close | — | Save and sync |

<!-- Screenshot placeholder: full main config screen -->

---

## 3. Work Mode Selection Panel

Click **Work Mode ▼** for centered panel:

```
┌──────────────────────┐
│  Select Work Mode    │
├──────────────────────┤
│  ☑ Excavate          │  ← selected highlight
│    Place             │
│    Smooth            │
│    Surface Roughen   │
│    Surface Convert   │
│    Bone Meal         │
│    Batch Plant       │
│    Shoreline Process │
└──────────────────────┘
```

<!-- Screenshot placeholder: work mode panel -->

---

## 4. Smooth Config Sub-panel

```
┌─────────────────────────────┐
│   Smooth Configuration    │
├─────────────────────────────┤
│ ☑ Standard Smooth         │
│   Adaptive Smooth         │
│   Raise                   │
│   Lower                   │
│ Smooth Strength: ███░ 0.50│
│ [Done]                    │
└─────────────────────────────┘
```

- Selected variant marked with ☑
- Hover buttons for tooltips
- Raise/Lower relabels slider to depth

<!-- Screenshot placeholder: smooth config panel -->

---

## 5. Surface Convert Sub-panel

```
┌─────────────────────────────┐
│   Surface Convert           │
├─────────────────────────────┤
│ [🌿] ████████░░ 60%  [×]   │  ← row: icon + % + delete
│ [🟫] ████░░░░░░ 40%  [×]   │
│ Distribution: Natural patches│
│ Allow artificial: Off        │
│ [Add Block] [Normalize]      │
│ [Done]                       │
└─────────────────────────────┘
```

<!-- Screenshot placeholder: surface convert panel at max blocks -->

---

## 6. Block Selection Screen (Excavate)

```
┌──────────────────────────────────────────┐
│  Select Blocks to Destroy                │
│  [Search blocks...                    ]  │
│  [Terrain][Ores][Wood][Leaves]...        │
├──────────────────────────────────────────┤
│  □ □ ■ □ □ □ □ □                        │
│  □ ■ □ □ □ □ □ □                        │  ■ = selected
│  ...                                     │
├──────────────────────────────────────────┤
│  Selected: 12 / Total: 847               │
│  [Select All] [Deselect All] [Confirm]   │
└──────────────────────────────────────────┘
```

<!-- Screenshot placeholder: block selection screen -->

---

## 7. Height Config Panel

```
┌─────────────────────────────┐
│   Height Configuration    │
├─────────────────────────────┤
│ [Follow Player] [Lock Once]│
│ [No Limit]    [Custom]     │
│ Height: ████████░░ Y=64    │  ← custom only
└─────────────────────────────┘
```

<!-- Screenshot placeholder: height config panel -->

---

## 8. In-Game Preview

| Mode | Visual |
|------|--------|
| Wireframe | White outline |
| Point Cloud | Sampled surface points |
| Surface | Semi-transparent white faces |
| None | No preview |

Preview is client-only, shown when holding Pushdozer and mode ≠ None.

<!-- Screenshot placeholder: four preview modes side by side -->

---

## 9. Operation Feedback

| Type | Location | Example |
|------|----------|---------|
| Mode switch | Action bar | "Working mode changed to: Smooth" |
| Height switch | Action bar | "Height mode switched to: Lock (Y=64)" |
| Denied | Action bar | "Target area is busy..." |
| Brush preview | In world | Wireframe/point cloud/surface at target |

---

## 10. Control Settings

```
Options → Controls → Pushdozer
```

| Default | Action |
|---------|--------|
| K | Open config |
| G | Cycle work mode |
| U | Cycle brush shape |
| V | Cycle display mode |
| Ctrl+Z | Undo |
| Ctrl+Y | Redo |
| ↑ / ↓ | Operation distance |

<!-- Screenshot placeholder: Pushdozer keybindings in controls -->

---

## Related Docs

- [Config Screen Reference](config-ui.md)
- [Selection Screens](selection-screens.md)
- [Tutorials](workflows.md)
