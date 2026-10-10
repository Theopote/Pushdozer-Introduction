# Changelog

This documentation corresponds to Pushdozer mod version **v1.1.2** (Minecraft 1.21.11).

Full developer changelog: [GitHub CHANGELOG](https://github.com/Theopote/Pushdozer_Mod/blob/main/CHANGELOG.md).

---

## v1.1.2 (2026-10-10)

### Changed

- Smooth panel: raise/lower variants show separate slider labels (Raise Depth / Lower Depth)
- Surface convert toggle label clarified (Allow converting artificial blocks)
- Release and documentation updated to 1.1.2

---

## v1.1.1 (2026-07-14)

### Added

- **Surface** display mode: semi-transparent white faces showing brush volume
- Centralized **HandlerRegistry** for terrain tool handlers
- Unit tests for handler registry and undo/redo concurrency

### Changed

- Preview cycle order: **Wireframe → Point Cloud → Surface → None**
- Surface preview uses greedy mesh merging for better performance on large brushes
- Handler registration refactored from static fields to registry pattern

### Fixed

- Invalid Unicode characters in undo manager causing compile errors
- Missing handler interface references

---

## v1.1.0 (2026)

### Added

- **Minecraft 1.21.11** support
- Nested config structure (`brush` / `surface` / `planting` / `shoreline` / `preview`)
- Auto-migration from legacy flat JSON config
- GameTest coverage for undo sync behavior
- Cross-tick scheduling for large batch block operations

### Changed

- Requires **Java 21**
- Requires **Fabric Loader ≥ 0.18.2**

---

## Documentation Versions

| Doc Version | Mod Version | Notes |
|-------------|-------------|-------|
| v1.1.2 | Pushdozer 1.1.2 | Current docs; dynamic smooth slider labels, surface convert wording |
| v1.1.1 | Pushdozer 1.1.1 | 8 UI modes, 4 smooth variants, full selection screen docs |

If the mod updates after this documentation, in-game behavior takes precedence. Check GitHub releases for changes.
