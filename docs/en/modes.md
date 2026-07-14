# Work Modes

Pushdozer provides 8 work modes cycled with the `G` key. Each mode has its own configuration panel accessible from the config screen.

## Excavate

Removes blocks within the brush area.

- **Right-click** to excavate
- Configure a block whitelist via **Select blocks to destroy**
- Supports **layered excavation**: dig down layer by layer with configurable depth
- Combine with height modes to restrict vertical range

**Use cases**: Leveling terrain, digging tunnels, clearing specific blocks, creating underground spaces.

## Place

Places surface blocks within the brush area.

- **Adaptive Biome**: Automatically selects natural blocks based on the current biome (e.g., grass in plains, sand in deserts)
- **Natural Block**: Manually specify a single natural block type
- Use **Lock Player Height** to create flat surfaces

**Use cases**: Filling gaps, creating platforms, restoring damaged terrain.

## Smooth

Smooths terrain elevation within the brush area.

Three smooth variants available in the config panel:

| Variant | Description |
|---------|-------------|
| Adaptive Smooth | Automatically raises or lowers based on surrounding terrain |
| Smooth Raise | Smoothly elevates terrain upward |
| Smooth Lower | Smoothly depresses terrain downward |

- **Smooth Strength**: Controls smoothing force per operation (0.0–1.0)
- **Smoothing Intensity**: 0 = preserve original shape, 1 = full reshape

**Use cases**: Softening hillside transitions, refining building foundations, naturalizing artificial terrain.

## Surface Roughen

Adds natural micro-variation to flat surfaces.

- **Roughness Strength**: Controls amplitude of variation
- **Noise parameters**: Frequency, persistence, octaves (texture detail)
- **Auto Scale**: Automatically adjusts noise based on brush radius

**Use cases**: Making flat artificial terrain look more natural, creating subtle elevation variation.

## Surface Convert

Replaces surface blocks within the brush area with a mix of configured blocks by percentage.

- Add multiple blocks with individual percentages
- **Normalize** button evenly distributes percentages
- Defaults to grass block (100%)

**Use cases**: Mixed surfaces (patchy grass and dirt), material transitions.

## Bone Meal

Applies bone meal effects to plants within the brush area.

- No additional configuration needed
- Works on grass, flowers, crops, saplings, etc.

**Use cases**: Quick greening, crop growth, vegetation recovery.

## Batch Plant

Batch-plants vegetation within the brush area.

| Plant Type | Description |
|------------|-------------|
| Trees | Choose species (oak, spruce, birch, etc.) or biome adaptive |
| Flowers | Choose flower group (plains, forest, etc.) or biome adaptive |
| Grass | Plant grass, ferns, and low vegetation |
| Custom | Freely select from the plant list |

Additional parameters:

- **Plant Density**: Controls how many plants per area
- **Cluster Scale**: Controls how clustered or spread out plants are
- **Respect Biomes**: When enabled, only plants in suitable biomes

**Use cases**: Quick afforestation, flower fields, ecosystem restoration.

## Shoreline Process

Creates natural shoreline transitions at water edges.

| Shoreline Type | Description |
|----------------|-------------|
| Beach | Sand shoreline for oceans and lakes |
| Embankment | Dirt/grass transition shoreline |
| Adaptive | Auto-selects by biome (e.g., red sand in deserts, snow in snowy biomes) |
| Muddy | Swamp-style muddy shoreline |
| Rocky | Rocky shoreline |
| Custom | Choose your own blocks and plants |

Additional parameters:

- **Shoreline Width**: Transition zone width; replacement probability decreases with distance from water
- **Plant Vegetation** / **Vegetation Density**: Auto-plant suitable vegetation along the shore
- **Operate Above/Below Height**: Restrict shoreline processing to a height range

**Use cases**: Beaches, riverbanks, lake ecosystems, swamp shorelines.
