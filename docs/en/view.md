# Display Modes

Pushdozer provides 3 brush preview modes, cycled with `V`: **Wireframe → Point Cloud → None**.

Previews are client-side only and do not affect the actual operation area.

## Wireframe

- Shows the brush boundary as a wireframe outline
- Low performance cost, suitable for most scenarios
- Helps with precise alignment and range judgment
- **Recommended as the default mode**

## Point Cloud

- Shows surface blocks within the brush area as a point cloud
- More intuitive preview of the affected area than wireframe
- Slightly higher performance cost
- Best for previewing place, smooth, and other surface operations

## None

- No preview displayed
- Best performance
- For experienced users doing rapid operations
- Reduces visual clutter when recording videos

## Operation Distance

Max operation distance controls how far you can reach (default 20, max 99).

- Press `↑` to increase
- Press `↓` to decrease
- Also adjustable via the slider in the config screen

> **Tip**: Distance affects reach, not brush size. Adjust based on your needs to avoid accidentally modifying distant terrain.
