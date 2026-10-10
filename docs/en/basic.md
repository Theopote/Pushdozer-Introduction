# Getting Started

> Quick lookup for keys and defaults: [Quick Reference](cheatsheet.md)

## Requirements

| Component | Version |
|-----------|---------|
| Minecraft | 1.21.11 |
| Fabric Loader | ≥ 0.18.2 |
| Fabric API | Matching 1.21.11 build |
| Java | 21 (required for both development and runtime) |
| Optional | ModMenu (quick links in the mod list) |

### Installation

1. Install the [Fabric mod loader](https://fabricmc.net/use/)
2. Download and install [Fabric API](https://modrinth.com/mod/fabric-api)
3. Download Pushdozer **v1.1.1** from [Modrinth](https://modrinth.com/mod/pushdozer) (recommended) or [GitHub Releases](https://github.com/Theopote/Pushdozer_Mod/releases)
4. Place the JAR file in your `.minecraft/mods` folder
5. Launch the game (client or dedicated server)

> **Note**: Do not use `pushdozer-1.0.0.jar` from this documentation repo—it is an old sample, not the current release.

## First Use

1. Enter Creative mode and find the **Pushdozer** tool in the **Tools** item group
2. Place it in your hotbar and hold it
3. Press `K` to open the configuration screen (rebindable under **Options → Controls → Pushdozer**)
4. Choose a work mode, brush geometry, and parameters
5. **Right-click** the target location to execute

## Config Screen Overview

Press `K` to open the configuration screen. Main areas from top to bottom:

| Area | Description |
|------|-------------|
| **Brush Shape** | Select one of 8 geometries; click **Config** to adjust size (1–64) |
| **Work Mode** | Select one of 8 modes; click **Config** for mode-specific settings |
| **Display Mode** | Switch brush preview (Wireframe / Point Cloud / Surface / None) |
| **Max Operation Distance** | Slider or `↑`/`↓` keys (1–99, default 20) |
| **Height Config** | Set height restriction mode |
| **Save and Close** | Save settings and close the screen |

You can also access the config screen via the Pushdozer button in the ModMenu mod list.

## Interaction Requirements

| Action | Main hand | Offhand |
|--------|-----------|---------|
| Shortcut keys (G/U/V/↑↓/Ctrl+Z/Y) | ✓ | ✓ |
| Open config screen (K) | ✓ | ✗ |
| Right-click to execute | ✓ | ✓ |

> With the Pushdozer in your offhand, G/U/V shortcuts still work, but **K cannot open the config screen** (main hand required). The ModMenu entry is not affected.

## Default Key Bindings

Shortcuts respond when the Pushdozer is in your main hand or offhand. Rebind them in Minecraft's control settings.

| Key | Action |
|-----|--------|
| `K` | Open/close configuration screen (main hand) |
| `G` | Cycle work modes |
| `U` | Cycle brush geometries (8 types) |
| `V` | Cycle display modes (Wireframe → Point Cloud → Surface → None → …) |
| `Ctrl+Z` | Undo last operation |
| `Ctrl+Y` | Redo operation |
| `↑` / `↓` | Increase / decrease max operation distance |

> **Tip**: Right-click is the only way to execute operations. Shortcuts only change settings.

## 5-Minute Quick Start

Follow this single flow for your first terrain edit:

| Step | Action |
|------|--------|
| 1. Get the tool | Creative mode → **Tools** group → **Pushdozer** |
| 2. Open config | Hold in **main hand**, press `K` |
| 3. Choose mode | Select **Excavate** → **Config** → **Select blocks to destroy**, check dirt, stone, etc. |
| 4. Set brush | **Box** brush ~8×8×3; height mode **Lock Player Height** |
| 5. Preview | Press `V` for **Wireframe** (default); move view to see brush bounds |
| 6. Execute | **Right-click** the ground — blocks are cleared |
| 7. Undo | Press `Ctrl+Z` to undo; adjust and retry as needed |

Then explore:

- **Place** mode to fill depressions → [Work Modes · Place](modes.md#place-mode)
- **Batch Plant** for forests → [Workflows](workflows.md)
- **Shoreline Process** for beaches → [Shoreline Presets](shoreline.md)

More scenarios: [Tutorials](workflows.md).
