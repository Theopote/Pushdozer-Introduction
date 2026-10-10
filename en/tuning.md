# Parameter Tuning Guide

Effects, recommended ranges, and combo tips for each work mode. Defaults: [Reference Manual](reference.md).

---

## General Principles

| Principle | Description |
|-----------|-------------|
| Start small | Increase brush size and strength gradually |
| Preview first | Use wireframe to confirm range before executing |
| Layer strokes | Large areas in multiple right-clicks for easier undo |
| Mode pipeline | Rough → Smooth → Roughen → Surface/Plant |

---

## Excavate

| Parameter | Range | Tips |
|-----------|-------|------|
| Brush size | 1–64 | Large box for leveling; small for precision |
| Whitelist | — | Only select blocks you intend to break |
| Height | — | **Lock** for horizontal cuts; **No Limit** for tunnels |
| Distance | 1–99 | Increase to 30–40 for far work |

**Common combo**: Lock height + Box (L×W×H 3) + dirt/stone whitelist

---

## Place

| Parameter | Effect |
|-----------|--------|
| **Adaptive Biome** | Picks blocks by ground below and biome (grass/dirt/sand/netherrack) |
| **Natural Block** | Always uses one specified block |

| Scenario | Recommendation |
|----------|----------------|
| Natural repair | Adaptive Biome |
| Artificial platform (stone) | Specify stone |
| Fill to flat | Lock height + Adaptive |

**Adaptive logic summary**:
- Dirt below + air above → grass block; else → dirt
- Sand/stone below → same type
- Nether → netherrack
- Other → biome default top block

---

## Smooth

### Variant Selection

| Variant | Strength | Brush | Use |
|---------|----------|-------|-----|
| Standard | 0.5–0.8 | Medium–large sphere/box | Large-scale leveling |
| Adaptive | 0.3–0.5 | Medium | Preserve ridges and valleys |
| Raise | 0.3–0.6 | Small–medium sphere | Local raise; stack strokes |
| Lower | 0.3–0.6 | Small–medium sphere | Local depression |

### Smooth Strength (0.1–1.0)

| Value | Effect |
|-------|--------|
| 0.1–0.3 | Subtle, barely visible |
| 0.4–0.6 | Normal editing; good starting point |
| 0.7–0.9 | Strong change; may over-smooth |
| 1.0 | Maximum per-stroke change |

**Tip**: Standard changes more per stroke than Adaptive; use lower strength or smaller brush for fine work.

---

## Surface Roughen

| Parameter | Range | Effect |
|-----------|-------|--------|
| Roughness | 0.1–2.0 | 1.0 ≈ ±5 block peaks (before material modifiers) |
| Smoothing Intensity | 0–1 | 0=keep shape, 1=full smooth baseline reshape |
| Auto Scale | On/Off | Auto-adjusts noise to brush radius when on |

### Manual Noise (Auto Scale off)

| Parameter | Range | Higher | Lower |
|-----------|-------|--------|-------|
| Frequency | 0.01–0.15 | Finer detail | Broader waves |
| Persistence | 0.1–0.9 | More complex layers | Simpler |
| Octaves | 1–6 | More detail (slight perf cost) | Simpler |

### Recommended Combos

| Goal | Roughness | Reshape | Auto Scale |
|------|-----------|---------|------------|
| Subtle naturalize | 0.3–0.5 | 0.2–0.4 | On |
| Noticeable variation | 0.8–1.2 | 0.3–0.5 | On |
| Fine control | 0.5 | 0.5 | Off, manual frequency |

---

## Surface Convert

| Parameter | Tips |
|-----------|------|
| Block count | 2–3 most natural; 5 for complex mixes |
| Percentages | Primary 50–70%, secondary 15–30%, accent 5–10% |
| Distribution | **Patches** for natural; **Scatter** for even mix |
| Artificial | Off by default; enable for built areas |
| Brush | Medium size, overlapping strokes |

**Example mixes**:
- Meadow: grass 60% + dirt 25% + coarse dirt 15%
- Desert edge: sand 70% + red sand 20% + sandstone 10%
- Snow blend: snow 50% + ice 30% + stone 20%

---

## Batch Plant

| Parameter | Range | Effect |
|-----------|-------|--------|
| Plant Density | 10–100% | Higher = denser |
| Cluster Scale | Low–High | Higher = more scattered; lower = clumped |

| Scenario | Density | Cluster | Type |
|----------|---------|---------|------|
| Sparse forest | 20–30% | Medium | Trees · Biome Adaptive |
| Dense forest | 50–70% | Low | Trees · specific species |
| Flower field | 40–60% | High | Flowers · Plains |
| Grass cover | 30–50% | Medium | Grass |

---

## Shoreline Process

| Parameter | Tips |
|-----------|------|
| Type | **Adaptive** when unsure |
| Width | Small water 2–3; ocean 4–6; swamp 5–7 |
| Vegetation | Beach 10–15%; river 20%; swamp 25–30% |
| Brush height | 1–2 to avoid affecting high ground |

See [Shoreline Presets](shoreline.md).

---

## Display & Distance

| Parameter | Tips |
|-----------|------|
| Wireframe | Daily default; best performance |
| Point Cloud | Preview surface operations |
| Surface | When you need volume clarity |
| None | Experienced users or recording |
| Distance | Close work 10–15; far work 30–50 |

---

## Height

| Task | Mode |
|------|------|
| Horizontal cut/fill | Lock Player Height |
| Multi-floor build | Custom Y |
| Walk-and-edit | Follow Player |
| Free 3D editing | No Limit |

See [Height System](height.md).

---

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| Excavate no effect | Empty whitelist | Select breakable blocks |
| Over-smoothed | Strength too high | Drop to 0.3–0.5 or use Adaptive |
| Too rough | Roughness > 1 | Drop to 0.3–0.6 |
| Visible convert edges | Brush too large, one pass | Smaller brush, overlap strokes |
| Trees won't grow | Bad ground | Place fill first |
| Shoreline no change | Brush misses water edge | Lower height, stay near water |
