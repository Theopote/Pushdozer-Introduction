# Getting Started

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
3. Download Pushdozer from [GitHub Releases](https://github.com/theopote/pushdozer/releases) or [Modrinth](https://modrinth.com/mod/pushdozer)
4. Place the JAR file in your `.minecraft/mods` folder
5. Launch the game (client or dedicated server)

## First Use

1. Enter Creative mode and find the **Pushdozer** tool in the **Tools** item group
2. Place it in your hotbar and hold it
3. Press `K` to open the configuration screen (rebindable under **Options → Controls → Pushdozer**)
4. Choose a work mode, brush geometry, and parameters
5. **Right-click** the target location to execute

## Default Key Bindings

All shortcuts require holding the Pushdozer tool. Rebind them in Minecraft's control settings.

| Key | Action |
|-----|--------|
| `K` | Open/close configuration screen |
| `G` | Cycle work modes |
| `U` | Cycle brush geometries (8 types) |
| `V` | Cycle display modes (Wireframe → Point Cloud → None) |
| `Ctrl+Z` | Undo last operation |
| `Ctrl+Y` | Redo operation |
| `↑` / `↓` | Increase / decrease max operation distance |

> **Tip**: Right-click is the only way to execute operations. Shortcuts only change settings.

## 5-Minute Quick Start

### Level Ground

1. Select **Excavate** mode
2. Choose **Box** brush and adjust length, width, height
3. Set height mode to **Lock Player Height**
4. Right-click the ground

### Place Surface Blocks

1. Select **Place** mode
2. Choose **Adaptive Biome** (or a specific natural block)
3. Right-click the target area

### Plant a Forest

1. Select **Batch Plant** mode
2. Set plant type to **Trees**, species to **Biome Adaptive**
3. Adjust plant density and cluster scale
4. Right-click the target area

### Create a Beach

1. Select **Shoreline Process** mode
2. Set shoreline type to **Beach**
3. Adjust shoreline width, optionally enable vegetation
4. Right-click the water's edge
