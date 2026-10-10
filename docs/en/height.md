# Height System

The height system controls vertical restrictions during Pushdozer operations. Configure it in the **Height Config** panel.

---

## Four Height Modes

### No Limit (NO_LIMIT)

- No vertical restriction
- All work modes unrestricted by Y
- Best for complex 3D editing, tunnels, shafts

### Follow Player (FOLLOW_PLAYER)

- Reference Y = player's current foot block level
- Updates in real time as you move
- Best for editing while walking

### Lock Player Height (LOCKED_ONCE)

- Captures foot Y when activated → `lockedHeight`
- No longer follows movement
- Best for fixed horizontal surfaces

### Custom Height (CUSTOM)

- Set Y via slider (−64 to 320)
- Stored in `lockedHeight`
- Best for specific building floors

---

## Height Rules by Mode

### Excavate

| Height Mode | Breakable Y Range |
|-------------|-------------------|
| No Limit | Any |
| Follow Player | Y ≥ player foot Y |
| Lock / Custom | Y ≥ lockedHeight + 1 |

### Place

| Height Mode | Placeable Y Range |
|-------------|-------------------|
| No Limit | Any |
| Follow Player | Y ≤ player foot Y − 1 |
| Lock / Custom | Y ≤ lockedHeight |

### Smooth / Surface Roughen / Surface Convert / Bone Meal / Batch Plant

| Height Mode | Behavior |
|-------------|----------|
| All | **Not restricted by height** |

### Shoreline Process

| Height Mode | Extra Toggles |
|-------------|---------------|
| No Limit | Above/Below toggles **disabled** |
| Follow / Lock / Custom | **Operate Above** or **Below** (mutually exclusive) |

> Out-of-range blocks are **silently skipped** with no chat message.

---

## Shoreline Height Restrictions

| Toggle | Behavior |
|--------|----------|
| **Operate Above Height** | Shoreline only above reference height |
| **Operate Below Height** | Shoreline only below reference height |

- **Mutually exclusive**
- Requires a non–No Limit height mode first
- Tooltip explains when toggles are disabled

---

## Typical Usage

| Scenario | Recommended | With Mode |
|----------|-------------|-----------|
| Flat ground | Lock Player Height | Excavate (cut high) or Place (fill low) |
| Clear above foot only | Follow Player | Excavate |
| Underground digging | No Limit | Excavate |
| Build at Y=64 | Custom Y=64 | Excavate or Place |
| Shoreline near water only | Follow + Below | Shoreline |
| Shoreline exclude underwater | Custom + Above | Shoreline |

---

## Examples

### Precise Horizontal Cut

1. Stand on target level
2. Height → **Lock Player Height**
3. Excavate + Box (height 1–3)
4. Right-click → clears only above locked height

### Fill to Foot Level

1. Height → **Lock Player Height**
2. Place mode
3. Right-click → fills at and below locked height

---

## Related Docs

- [Config Screen — Height sub-panel](config-ui.md#height-config-sub-panel)
- [Reference — Height messages](reference.md#height-mode)
- [Shoreline Presets — Height restrictions](shoreline.md#height-restrictions)
