# Glossary

A reference of common in-game terms and concepts used in Pushdozer.

---

## Core Concepts

| Term | Description |
|------|-------------|
| **Pushdozer** | The terrain editing tool item from the Creative Tools tab; non-stackable |
| **Brush** | The 3D volume affected by one operation, defined by geometry type and size |
| **Work Mode** | The operation type executed on right-click; 8 modes available |
| **Geometry** | The 3D shape of the brush; 8 types (sphere, box, etc.) |
| **Height** | Vertical reference level for restricting excavate/place/shoreline layers |
| **Operation Distance** | Max raycast reach along your look direction (1–99, default 20) |
| **Preview** | Client-side brush indicator; does not affect actual operations |
| **Block Whitelist** | Blocks allowed to break in Excavate mode; empty by default |
| **Undo / Redo** | Revert or re-apply recent terrain edits; 30 steps per player |

### Interaction requirements

All shortcuts (including `K`) and right-click execution work with the Pushdozer in your main hand or offhand. See [Getting Started · Interaction Requirements](basic.md#interaction-requirements).

---

## Work Modes

| Term | Description |
|------|-------------|
| **Excavate** | Replaces whitelisted blocks inside the brush with air |
| **Place** | Fills the brush with natural terrain blocks |
| **Smooth** | Reshapes terrain elevation; 4 variants available |
| **Standard Smooth** | Gaussian blur leveling; strong per-stroke change |
| **Adaptive Smooth** | Multi-scale bilateral filter; preserves large landforms |
| **Raise / Lower** | Builds a mound or depression at brush center |
| **Surface Roughen** | Adds Perlin noise elevation variation |
| **Surface Convert** | Replaces surface column blocks by percentage; no height change |
| **Bone Meal** | Applies bone meal effects to plants in the brush |
| **Batch Plant** | Batch-generates vegetation in the brush |
| **Shoreline Process** | Blends surface materials at water edges; optional vegetation |

---

## Surface & Noise

| Term | Description |
|------|-------------|
| **Natural Patches (Patchy)** | Surface convert distribution using seeded noise for coherent clusters |
| **Random Scatter** | Surface convert distribution with independent per-column picks |
| **Artificial Surfaces** | Player-placed or non-natural solid blocks; excluded from convert by default |
| **Roughness Strength** | Peak noise amplitude in roughen mode (1.0 ≈ ±5 blocks) |
| **Smoothing Intensity** | How much terrain is reshaped toward a smooth baseline before noise (0–1) |
| **Noise Frequency** | Detail scale of noise texture; high = fine, low = smooth |
| **Noise Persistence** | Relative weight of multi-layer noise |
| **Noise Octaves** | Number of noise layers stacked |
| **Auto Scale** | Automatically adjusts noise parameters based on brush radius |

---

## Planting & Shoreline

| Term | Description |
|------|-------------|
| **Plant Density** | Fraction of area planted in batch plant mode (10–100%) |
| **Cluster Scale** | Plant clustering vs. spread; higher = more scattered |
| **Biome Adaptive** | Auto-selects tree species or flower group by biome |
| **Shoreline Width** | Horizontal transition distance from water (1–10 blocks) |
| **Vegetation Density** | Fraction of shoreline area planted with vegetation |

---

## Height System

| Term | Description |
|------|-------------|
| **No Limit** | No vertical restriction |
| **Follow Player** | Reference Y tracks player foot level in real time |
| **Lock Once** | Captures foot Y when activated; no longer follows movement |
| **Custom Height** | Manually set Y via slider (−64 to 320) |
| **Reference Height** | The Y value used for excavate/place/shoreline height rules |

---

## Display & UI

| Term | Description |
|------|-------------|
| **Wireframe** | Outline of brush bounds; best performance |
| **Point Cloud** | Sampled surface blocks inside the brush |
| **Surface** | Semi-transparent faces showing brush volume |
| **None** | No preview |
| **Config Sub-panel** | Mode/geometry-specific settings opened via the **Config** button |
| **Done** | Sub-panel button that saves settings and closes the panel |

---

## Multiplayer

| Term | Description |
|------|-------------|
| **Server Authoritative** | All block changes execute on the server and sync to clients |
| **Region Busy** | Target chunks locked by another edit; operation rejected |
| **Independent Config** | Each player's mode, brush, and height settings are separate |
| **ConfigSyncPayload** | Network packet syncing client config to the server on save |

---

## Configuration File

| Term | Description |
|------|-------------|
| **pushdozer_config.json** | Path: `.minecraft/config/pushdozer_config.json` |
| **brush** | Config section: geometry, height, breakable blocks |
| **surface** | Config section: place, smooth, roughen, surface convert |
| **planting** | Config section: batch plant parameters |
| **shoreline** | Config section: shoreline process parameters |
| **preview** | Config section: display mode and operation distance |
