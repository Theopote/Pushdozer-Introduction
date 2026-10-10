# Height System

The height system controls vertical restrictions during Pushdozer operations. Configure it in the **Height Config** panel.

## Four Height Modes

### No Limit (NO_LIMIT)

- No vertical restriction
- Can destroy or place blocks at any Y coordinate
- Best for complex 3D terrain editing

### Follow Player (FOLLOW_PLAYER)

- Operation height updates as the player moves
- Always based on the player's current foot-level Y coordinate
- Best for editing while walking

### Lock Player Height (LOCKED_ONCE)

- Locks height to the player's foot level when the mode is activated
- Height no longer follows player movement after locking
- Excavate: Can only break blocks at **locked height + 1 and above**
- Place: Blocks can only be placed at **locked height and below**
- Best for creating precise flat surfaces

### Custom Height (CUSTOM)

- Manually set target Y coordinate via slider
- Precise control over any height
- Best for building projects at specific elevations

## Shoreline Height Restrictions

Shoreline Process mode provides two additional height toggles:

- **Operate Above Height**: Shoreline processing only above the current height
- **Operate Below Height**: Shoreline processing only below the current height

These are mutually exclusive, allowing precise control over which height layer shoreline effects apply to. A reference height mode (Follow Player, Custom, or Lock Once) must be set first — they are disabled while height mode is No Limit.

## Quick Reference

| Scenario | Recommended Mode |
|----------|-----------------|
| Create flat ground | Lock Player Height |
| Dig underground | No Limit |
| Work along a shoreline | Follow Player |
| Build at a specific floor | Custom Height |
| Shoreline near water level only | Shoreline height restriction |
