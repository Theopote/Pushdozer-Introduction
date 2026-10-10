# Block & Plant Selection Screens

Pushdozer provides 4 selection screens for configuring excavate whitelists, place/surface-convert blocks, custom plants, and shoreline blocks.

---

## Common Operations

All selection screens share these interactions:

| Action | Description |
|--------|-------------|
| **Search field** | Filter blocks by name |
| **Category tabs** | Switch block categories at the top |
| **Pagination** | Previous / Next page for large lists |
| **Click block** | Toggle selection (multi-select) or select (single-select) |
| **Confirm** | Save selection and return to config |

---

## 1. Block Selection (Excavate Whitelist)

**Entry**: Excavate Config → **Select blocks to destroy**

**Title**: Select Blocks to Destroy

**Selection**: Multi-select

**Footer buttons**:

| Button | Function |
|--------|----------|
| Select All | Select all visible blocks |
| Deselect All | Clear all selections |
| Confirm | Save whitelist and return |

**Categories** (27):

| Category | Examples |
|----------|----------|
| Terrain Blocks | Stone, dirt, gravel, deepslate |
| Ores | All ore types and deepslate variants |
| Wood | All log types, stripped logs |
| Doors and Trapdoors | Wood/iron doors, trapdoors |
| Leaves | All leaf types |
| Plants and Flowers | Grass, flowers, vines |
| Crops | Wheat, carrots, melons |
| Fungi | Mushrooms, mycelium |
| Coral | Coral blocks and fans |
| Nether Blocks | Netherrack, soul sand, nether wart |
| Stairs and Slabs | All stair and slab types |
| Fences and Walls | Fences, walls |
| Buttons and Pressure Plates | All button/plate types |
| Copper | Copper blocks and oxidation variants |
| Amethyst | Amethyst blocks, buds |
| Valuable Blocks | Gold, diamond, beacon |
| Redstone | Dust, repeaters, pistons |
| Decorative | Bookshelves, paintings, banners |
| Dyed Blocks | Stained glass, terracotta, concrete |
| Functional Blocks | Crafting table, furnace, chest |
| Heads | Mob heads |
| Rails | All rail types |
| Cave Decorations | Dripstone, spore blossoms |
| Fluids | Water, lava (usually in ignore list) |
| Bricks and Tiles | Bricks, quartz blocks |
| Technical Blocks | Command blocks, structure blocks |
| Miscellaneous | Uncategorized blocks |

> **Important**: The default whitelist is empty. You must select at least one block type before excavate works.

---

## 2. Terrain Block Selection (Place / Surface Convert)

**Entry**:

- Place Config → **Natural Block**
- Surface Convert Config → click block icon / **Add Block**

**Title**: Select Terrain Blocks

**Selection**: Single-select

**Footer**: OK / Cancel

**Categories** (15):

| Category | Description |
|----------|-------------|
| Fluids | Water, lava |
| Terrain Blocks | Natural terrain blocks |
| Ice and Snow | Ice, snow blocks, powder snow |
| Ores | Ore blocks |
| Copper | Copper-related |
| Wood | Log types |
| Leaves | Leaf types |
| Biological Blocks | Grass, mycelium, soul sand |
| Stairs and Slabs | Natural/semi-natural materials |
| Dyed Blocks | Dyed variants |
| Functional Blocks | Some surface-suitable blocks |
| Glowing Blocks | Glowstone, sea lantern |
| Decorative | Decorative natural blocks |
| Redstone | Redstone-related |
| Miscellaneous | Other |

> Only blocks suitable as terrain/surface materials are listed.

---

## 3. Entity Block Selection (Custom Shoreline)

**Entry**: Shoreline Config → type **Custom** → **Select Blocks**

**Title**: Entity Block Selection

**Selection**: Multi-select

**Footer**: Select All / Deselect All / Confirm

**Categories** (15): Fluids, Terrain, Ice & Snow, Ores, Copper, Wood, Leaves, Biological, Stairs & Slabs, Dyed, Functional, Glowing, Decorative, Redstone, Miscellaneous.

> Emphasizes functional/entity blocks for custom shoreline material mixes.

---

## 4. Plant Selection (Batch Plant / Shoreline)

**Entry**:

- Batch Plant Config → type **Custom** → **Select Plant Types**
- Shoreline Config → Custom → **Select Plants**

**Title**: Select Plants

**Selection**: Multi-select

**Categories** (16):

| Category | Contents |
|----------|----------|
| All Plants | Every selectable plant |
| Saplings | Tree saplings |
| Small Flowers | Dandelion, poppy, etc. |
| Large Plants | Sunflower, lilac, etc. |
| Grass & Ferns | Grass, fern, tall grass |
| Mushrooms | Mushroom types |
| Crops | Wheat, carrots, etc. |
| Aquatic Plants | Seagrass, kelp |
| Coral | Coral types |
| Nether Plants | Nether wart, weeping vines |
| Cave Plants | Spore blossom, hanging roots |
| Vines | Vines, glow berries |
| End Plants | Chorus-related |
| Potted | Potted plants |
| Special Plants | Special varieties |
| Other | Uncategorized |

**Operations**: Search field, category tabs, click to toggle, confirm to return.

---

## Selection Tips

1. **Excavate**: Start with Terrain + Ores + Wood, add as needed
2. **Surface Convert**: Test with one block first, then add more and **Normalize**
3. **Custom plants**: Test in target biomes to avoid ungrowable selections
4. **Search**: Works with block IDs or localized names depending on game language
