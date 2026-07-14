# Brush Geometries

Pushdozer offers 8 brush geometries, cycled with the `U` key. Each has independent size parameters ranging from **1–64 blocks**.

Click the **Brush Shape** button in the config screen to directly select any geometry and adjust its parameters.

## Sphere

- **Parameters**: Radius
- **Shape**: Uniform spherical area
- **Best for**: Hills, caves, smooth transitions, batch planting

## Box

- **Parameters**: Length, width, height
- **Shape**: Rectangular prism
- **Best for**: Foundations, platforms, flat rectangular areas, tunnels

## Octahedron

- **Parameters**: Radius
- **Shape**: Diamond-shaped 3D area, symmetric top and bottom
- **Best for**: Peak terrain, special architectural forms

## Cylinder

- **Parameters**: Radius, height
- **Shape**: Vertical cylinder
- **Best for**: Vertical shafts, tower bases, columnar spaces

## Cone

- **Parameters**: Radius, height
- **Shape**: Wide base tapering to a point
- **Best for**: Volcano cones, pyramid-shaped terrain

## Ellipsoid

- **Parameters**: Radius, height
- **Shape**: Stretched ellipsoid with different horizontal and vertical proportions
- **Best for**: Flat or tall natural hills

## Tetrahedron

- **Parameters**: Edge length
- **Shape**: Pyramid-shaped tetrahedral area
- **Best for**: Special geometric forms, pointed terrain

## Triangular Prism

- **Parameters**: Side length, height
- **Shape**: Triangular cross-section prism
- **Best for**: Wedge terrain, triangular bases

## Selection Guide

| Need | Recommended |
|------|-------------|
| Quick large-scale leveling | Box |
| Natural hills/caves | Sphere, Ellipsoid |
| Vertical digging | Cylinder |
| Pointed peaks | Cone, Tetrahedron |
| Regular building bases | Box, Triangular Prism |
| Vegetation planting | Sphere (natural distribution) |

> **Performance tip**: Larger brushes affect more blocks per operation. Start small and increase gradually. The server validates brush size and will prompt you if it exceeds the allowed range.
