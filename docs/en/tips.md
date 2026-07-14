# Tips & Best Practices

## Basic Workflow

1. Select a work mode
2. Choose brush geometry and adjust size
3. Set height mode
4. Adjust mode-specific parameters (smooth strength, plant density, etc.)
5. Confirm display mode and operation distance
6. Right-click to execute

### Undo & Redo

- Each player has up to **30 steps** of independent history
- `Ctrl+Z` to undo, `Ctrl+Y` to redo
- Undo/redo syncs to all clients in multiplayer
- Test on a small area before large operations

## Terrain Shaping Workflow

1. **Rough shaping**: Large box or sphere for quick form
2. **Refinement**: Smaller brush with smooth mode for details
3. **Naturalization**: Surface roughen for micro-variation
4. **Ecology**: Batch plant or shoreline process for vegetation

## Building Assistance

- **Lock height + Box**: Perfect flat foundations
- **Surface Convert**: Mixed material surfaces (e.g., stone path meeting grass)
- **Layered excavation**: Dig down layer by layer to avoid breaking too many blocks at once

## Performance

- Brush sizes range from 1–64; start small
- Prefer **Wireframe** display mode; use **Surface** when you need a clearer volume preview
- Execute large operations in batches
- Notify other players before large operations on multiplayer servers

## Multiplayer Collaboration

- Each player's config is independent
- Terrain changes sync to all online players in real time
- Undo only affects your own operation history
- Communicate with teammates before large operations

## Configuration

- Config is saved at `config/pushdozer_config.json` and synced to the server for your operations
- Prefer the in-game config screen over manual JSON editing
- Legacy flat JSON structures (without nested `brush` sections) are auto-migrated on load
