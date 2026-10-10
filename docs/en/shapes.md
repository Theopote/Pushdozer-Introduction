# Brush Geometries

Pushdozer offers 8 brush geometries. Select via the **Brush Shape** button in the config screen, or cycle with `U`.

**Cycle order**: Sphere → Box → Octahedron → Cylinder → Cone → Ellipsoid → Tetrahedron → Triangular Prism

All size sliders range from **1–64 blocks** (size parameters, not final coverage diameter). Click **Config** to open the sub-panel for the current geometry.

## Spatial overview (side view)

```
        Cone                 Cylinder (Y-axis)         Box
          /\                    |===|              +-------+
         /  \                   |   |              |       |
        /    \                  |   |              |       |
       /______\                 |___|              +-------+
   base radius + height      radius + height    L × W × H
```

> **Cylinder orientation**: extends along the **Y axis** and **does not rotate** with your view. Use Box for horizontal passages; use Cylinder for vertical shafts and circular vertical spaces.

---

## Sphere

| Item | Description |
|------|-------------|
| **Parameters** | `sphereRadius` |
| **Shape** | Spherical volume centered on target |
| **Coverage** | Radius R → diameter 2R (R=64 → diameter 128) |
| **Best for** | Hills, caves, smooth transitions, batch planting |

## Box

| Item | Description |
|------|-------------|
| **Parameters** | `length` (X), `width` (Z), `boxHeight` (Y) |
| **Shape** | Axis-aligned rectangular prism (no rotation) |
| **Best for** | Foundations, platforms, **horizontal tunnels**, large-scale leveling |

## Octahedron

| Item | Description |
|------|-------------|
| **Parameters** | Radius |
| **Shape** | Diamond-shaped 3D volume, symmetric top and bottom |
| **Best for** | Peak terrain, special forms |

## Cylinder

| Item | Description |
|------|-------------|
| **Parameters** | `cylinderRadius`, `cylinderHeight` |
| **Shape** | **Y-axis vertical** cylinder (no rotation) |
| **Best for** | Vertical shafts, tower bases, columnar spaces; **not** horizontal round tunnels |

## Cone

| Item | Description |
|------|-------------|
| **Parameters** | Radius (base), height |
| **Shape** | Wide base tapering to a point |
| **Best for** | Volcano cones, pyramid-shaped terrain |

## Ellipsoid

| Item | Description |
|------|-------------|
| **Parameters** | Length (X radius), width (Z radius), height (Y radius) |
| **Shape** | Ellipsoid with independently adjustable axes |
| **Best for** | Flat or tall natural hills |

## Tetrahedron

| Item | Description |
|------|-------------|
| **Parameters** | Edge length |
| **Shape** | Pyramid-shaped tetrahedral volume |
| **Best for** | Pointed terrain, special geometric forms |

## Triangular Prism

| Item | Description |
|------|-------------|
| **Parameters** | Side length (triangle base), height |
| **Shape** | Prism with equilateral triangle cross-section |
| **Best for** | Wedge terrain, triangular bases |

---

## Selection Guide

| Need | Recommended |
|------|-------------|
| Quick large-scale leveling | Box |
| Natural hills/caves | Sphere, Ellipsoid |
| Vertical digging | Cylinder |
| Pointed peaks | Cone, Tetrahedron |
| Regular building bases | Box, Triangular Prism |
| Vegetation planting | Sphere (natural distribution) |
| Shoreline processing | Box or Sphere (move along shore) |

---

## Performance Tips

- Brush volume grows with size — larger brushes affect more blocks per operation
- Start small, verify results, then increase
- Multiplayer servers validate brush **size parameters** (not final coverage diameter): each axis/radius must be 1–64; a sphere with radius 64 can cover up to 128 blocks across
- Use **None** preview mode with large brushes to reduce client load
