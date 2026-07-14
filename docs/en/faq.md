# FAQ

## Installation

### Game won't start after installing

Check:

1. Fabric API is installed and matches 1.21.11
2. Fabric Loader version is ≥ 0.18.2
3. Java version is 21
4. No mod conflicts

### Tool doesn't appear in the item list

Confirm:

1. You're in Creative mode
2. Look in the **Tools** item group
3. The mod loaded correctly (check the mod list)
4. No other mod is overriding item groups

## Usage

### Operations have no effect

Possible causes:

1. Not holding the Pushdozer tool (main hand or offhand)
2. Incorrect work mode or brush configuration
3. Target is beyond max operation distance
4. Brush size exceeds allowed range (1–64)
5. Height restriction blocking the operation (e.g., can't break below locked height)

### Key bindings don't work

1. Confirm you're holding the Pushdozer tool
2. Check **Options → Controls → Pushdozer** for conflicts
3. Undo/redo requires holding `Ctrl`

### Brush size rejected

The server validates brush size within 1–64. If you see an out-of-range message, reduce brush parameters in the config screen.

### Planting/tree generation fails

1. Check if **Respect Biomes** is enabled — the current biome may not support the selected plant
2. Try switching to **Biome Adaptive** species/flower group
3. Empty custom plant lists fall back to defaults

## Performance

### Game stutters

1. Reduce brush size
2. Switch to **None** display mode
3. Lower max operation distance
4. Execute large operations in batches

### Multiplayer server lag

1. Avoid multiple players doing large operations simultaneously
2. Keep brush sizes reasonable
3. Discuss server performance with the admin

## Configuration

### Where is the config file?

`config/pushdozer_config.json` (filename is always this; legacy flat JSON structures are auto-migrated on load)

### Can I edit the JSON directly?

Yes, but not recommended. Use the in-game config screen to avoid format errors. The mod auto-migrates from the legacy flat JSON format.

## Multiplayer

### Other players can't see my changes?

1. Check network connection
2. Try relogging
3. Check server logs for network errors

### Does config sync to other players?

No. Your config is synced to the **server** for your own operations, but is **not broadcast to other players** and is not written to anyone else's local file. Each player's work mode, brush shape, and other settings remain independent.

### Can everyone use the Pushdozer?

Yes, Pushdozer is open to all players by default. Server admins can restrict areas via protection plugins.
