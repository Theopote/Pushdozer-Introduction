# Shoreline Presets

Shoreline Process replaces **surface blocks only** — no elevation change. Effects fade from water toward land, controlled by **Shoreline Width**.

---

## General Mechanics

1. Detect surface columns near water inside the brush
2. Blend materials by distance from water (0 to width value)
3. Closer to water = higher primary material probability
4. Optional vegetation by **Vegetation Density**
5. Blocks outside the brush are untouched

> Only blocks inside the brush can be modified; width controls how far from water blending occurs.

---

## Beach

**Best for**: Oceans, lakes, sandy shorelines.

| Biome | Primary → Secondary |
|-------|---------------------|
| Default (temperate, etc.) | Sand → Dirt |
| Badlands | Red Sand → Red Sandstone |
| Snowy | Snow Block → Ice |

**Vegetation**: Seagrass, dead bush, etc. (depends on ground type and density).

---

## Embankment

**Best for**: Rivers, canals, structural banks.

| Biome | Primary → Secondary |
|-------|---------------------|
| Default | Cobblestone → Gravel |
| Mountain | Stone → Cobblestone |
| Badlands | Sandstone → Smooth Sandstone |
| Snowy | Snow Block → Packed Ice |

**Vegetation**: Grass, ferns, etc.

---

## Adaptive

**Best for**: Default choice when unsure.

Auto-picks beach, embankment, muddy, or rocky logic by biome, e.g.:

- Ocean/beach biomes → beach style
- Mountains → rocky/embankment
- Swamps → muddy
- Deserts → red sand materials

---

## Muddy

**Best for**: Swamps, wetlands, slow rivers.

| Feature | Description |
|---------|-------------|
| Primary | Dirt, podzol |
| Secondary | Coarse dirt, clay |
| Vegetation | Swamp plants (grass, lily pad vicinity) |

---

## Rocky

**Best for**: Mountain lakes, canyon rivers.

| Feature | Description |
|---------|-------------|
| Primary | Stone, deepslate |
| Secondary | Cobblestone, gravel |
| Vegetation | Sparse — dead bush, ferns |

---

## Custom

Fully player-defined:

| Control | Description |
|---------|-------------|
| **Select Blocks** | Multi-select blend materials |
| **Select Plants** | Multi-select vegetation |
| **Vegetation Density** | Always available |

No effect if no blocks are selected.

---

## Height Restrictions

| Toggle | Behavior |
|--------|----------|
| **Operate Above Height** | Only process blocks above reference height |
| **Operate Below Height** | Only process blocks below reference height |

**Requires**: A reference height mode (not No Limit) — Follow Player, Lock Once, or Custom.

Mutually exclusive.

---

## Recommended Settings

| Scenario | Type | Width | Vegetation |
|----------|------|-------|------------|
| Ocean beach | Beach / Adaptive | 4–6 | On, 10–15% |
| Inland lake | Beach | 3–4 | On, 15% |
| River | Embankment | 4–5 | On, 20% |
| Swamp | Muddy | 5–7 | On, 25–30% |
| Mountain lake | Rocky | 3–4 | Off or low |
| Full custom | Custom | As needed | As needed |

---

## Tips

1. Keep brush **height low** (1–2) to avoid affecting high ground far from water
2. Use **Wireframe** preview before executing
3. Work in overlapping sections along long shorelines
4. Run shoreline for materials first, then **Batch Plant** for large trees if needed
