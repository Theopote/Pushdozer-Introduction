#!/usr/bin/env node
/**
 * Pushdozer documentation consistency checker.
 * Run from Pushdozer-Introduction repo root:
 *   node scripts/verify-docs.mjs
 *
 * CI sets MOD_SOURCE after checking out Pushdozer_Mod.
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const DOCS = join(ROOT, 'docs');
const MOD_SOURCE = process.env.MOD_SOURCE || join(ROOT, '..', 'PD', 'pushdozer-fabric');

const errors = [];
const warnings = [];

function walk(dir, ext, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === 'node_modules') continue;
      walk(p, ext, files);
    } else if (p.endsWith(ext)) {
      files.push(p);
    }
  }
  return files;
}

function readModFile(relPath) {
  const full = join(MOD_SOURCE, relPath);
  if (!existsSync(full)) return null;
  return readFileSync(full, 'utf8');
}

function checkStaleLinks() {
  const patterns = [
    /github\.com\/theopote\/pushdozer\b/gi,
    /github\.com\/Theopote\/pushdozer\b(?!_Mod)/gi,
    /repo:\s*['"]theopote\/pushdozer['"]/gi,
  ];
  const files = [
    ...walk(DOCS, '.md'),
    join(DOCS, 'index.html'),
    join(ROOT, 'README.md'),
  ].filter((f) => existsSync(f));

  for (const file of files) {
    const content = readFileSync(file, 'utf8');
    for (const pattern of patterns) {
      if (pattern.test(content)) {
        errors.push(`Stale mod repo link in ${relative(ROOT, file)} (use Theopote/Pushdozer_Mod)`);
        pattern.lastIndex = 0;
      }
    }
  }
}

function checkDefaultHomepage() {
  const html = readFileSync(join(DOCS, 'index.html'), 'utf8');
  if (!/homepage:\s*['"]\/?zh\/README\.md['"]/.test(html)) {
    errors.push('docs/index.html default homepage should be zh/README.md');
  }
  if (!html.includes('Pushdozer-Introduction')) {
    errors.push('docs/index.html should set basePath for GitHub Pages subpath');
  }
  if (!/relativePath:\s*true/.test(html)) {
    errors.push('docs/index.html should set relativePath: true (sidebar links need /zh/ prefix)');
  }
  if (!html.includes('Theopote/Pushdozer_Mod')) {
    errors.push('docs/index.html repo should be Theopote/Pushdozer_Mod');
  }
}

/** Fail if docs still claim K requires main hand only. */
function checkKeyBindingDocs() {
  const badPatterns = [
    /K[^\n]{0,40}(仅主手|需主手|主手.*无效)/,
    /K[^\n]{0,60}main hand only/i,
    /配置界面 K[^\n]*✗/,
    /Config screen K[^\n]*✗/,
    /K cannot open/i,
  ];
  const files = walk(DOCS, '.md');
  for (const file of files) {
    const content = readFileSync(file, 'utf8');
    for (const pattern of badPatterns) {
      if (pattern.test(content)) {
        errors.push(`${relative(ROOT, file)}: K key docs contradict KeyBindings (main or offhand)`);
        break;
      }
    }
  }
}

/** Geometry sub-panels: doc must not list UI controls absent from Java source. */
function checkGeometrySubPanels() {
  const subPanelDir = join(MOD_SOURCE, 'src/main/java/com/pushdozer/ui/panels/brushgeometry');
  if (!existsSync(subPanelDir)) {
    warnings.push('Mod geometry sub-panels not found — skipping UI checks');
    return;
  }

  const expected = {
    TetrahedronSubPanel: { sliders: ['edgeLength'], forbiddenInDoc: /正四面体[^\n]*高度|tetrahedron[^\n]*height/i },
    SphereSubPanel: { sliders: ['radius'] },
    OctahedronSubPanel: { sliders: ['radius'] },
  };

  for (const [panel, rules] of Object.entries(expected)) {
    const src = readModFile(`src/main/java/com/pushdozer/ui/panels/brushgeometry/${panel}.java`);
    if (!src) continue;
    const sliderCount = (src.match(/addSlider\(/g) || []).length;
    if (rules.sliders && sliderCount !== rules.sliders.length) {
      warnings.push(`${panel}: expected ${rules.sliders.length} slider(s), found ${sliderCount} in source`);
    }
  }

  const configUiFiles = [
    join(DOCS, 'zh', 'config-ui.md'),
    join(DOCS, 'en', 'config-ui.md'),
  ];
  for (const file of configUiFiles) {
    if (!existsSync(file)) continue;
    const content = readFileSync(file, 'utf8');
    if (/正四面体[^\n]*边长、高度|Tetrahedron[^\n]*Edge length, height/i.test(content)) {
      errors.push(`${relative(ROOT, file)}: Tetrahedron panel has only edge length slider in UI`);
    }
  }
}

/** Compare numeric constants in source against reference docs (exact match required). */
function checkExactConstants() {
  const modVersion = readModFile('src/main/resources/fabric.mod.json')?.match(/"version":\s*"([^"]+)"/)?.[1];
  const maxBrush = readModFile('src/main/java/com/pushdozer/config/domain/BrushConfig.java')?.match(/MAX_BRUSH_RADIUS = (\d+)/)?.[1];
  const maxDist = readModFile('src/main/java/com/pushdozer/config/PushdozerConfig.java')?.match(/MAX_OPERATION_DISTANCE = (\d+)/)?.[1];
  const undoSteps = readModFile('src/main/java/com/pushdozer/operations/UndoRedoManager.java')?.match(/MAX_UNDO_REDO_STEPS = (\d+)/)?.[1];
  const batchSize = readModFile('src/main/java/com/pushdozer/network/BatchedNetworkManager.java')?.match(/MAX_BATCH_SIZE = (\d+)/)?.[1];
  const batchDelay = readModFile('src/main/java/com/pushdozer/network/BatchedNetworkManager.java')?.match(/BATCH_DELAY_MS = (\d+)/)?.[1];
  const immediateThreshold = readModFile('src/main/java/com/pushdozer/network/NetworkManager.java')?.match(/positions\.size\(\) <= (\d+)/)?.[1];

  if (!modVersion) {
    warnings.push('Mod source unavailable — set MOD_SOURCE or checkout Pushdozer_Mod in CI');
    return;
  }

  const docFiles = walk(DOCS, '.md').filter((f) =>
    /reference|multiplayer|cheatsheet/.test(f)
  );
  const combined = docFiles.map((f) => readFileSync(f, 'utf8')).join('\n');

  const checks = [
    [maxBrush, `1–${maxBrush}`, `brush max ${maxBrush}`],
    [maxDist, `1–${maxDist}`, `operation distance max ${maxDist}`],
    [undoSteps, `${undoSteps}`, `undo steps ${undoSteps}`],
    [batchSize, `${batchSize}`, `batch size ${batchSize}`],
    [batchDelay, `${batchDelay}`, `batch delay ${batchDelay}ms`],
    [immediateThreshold, `${immediateThreshold}`, `immediate sync threshold ${immediateThreshold}`],
  ];

  for (const [value, needle, label] of checks) {
    if (value && !combined.includes(String(needle)) && !combined.includes(String(value))) {
      errors.push(`reference docs missing ${label} (source=${value})`);
    }
  }

  const readmes = [join(DOCS, 'zh', 'README.md'), join(DOCS, 'en', 'README.md')];
  for (const r of readmes) {
    const c = readFileSync(r, 'utf8');
    if (!c.includes(modVersion)) {
      warnings.push(`${relative(ROOT, r)} may not mention mod version ${modVersion}`);
    }
  }
}

/** Surface roughen UI slider ranges must match SurfaceRoughenConfigPanel.java */
function checkSurfaceRoughenPanel() {
  const src = readModFile('src/main/java/com/pushdozer/ui/panels/workmode/SurfaceRoughenConfigPanel.java');
  if (!src) return;

  const persistence = src.match(/createPersistenceSlider[\s\S]*?pMin = ([\d.]+)f, pMax = ([\d.]+)f/);
  if (!persistence) {
    warnings.push('Could not parse noise persistence range from SurfaceRoughenConfigPanel');
    return;
  }
  const [, pMin, pMax] = persistence;
  const uiRange = `${pMin}–${pMax}`;

  const configUiFiles = [
    join(DOCS, 'zh', 'config-ui.md'),
    join(DOCS, 'en', 'config-ui.md'),
  ];
  for (const file of configUiFiles) {
    if (!existsSync(file)) continue;
    const content = readFileSync(file, 'utf8');
    const persistenceRow = content.match(/\|[^\n]*(持久性|Persistence)[^\n]*\|/);
    if (persistenceRow) {
      const cols = persistenceRow[0].split('|').map((c) => c.trim()).filter(Boolean);
      const rangeCol = cols[1] ?? '';
      if (/0\.05[–-]0\.95/.test(rangeCol)) {
        errors.push(`${relative(ROOT, file)}: noise persistence UI range should be ${uiRange}, not 0.05–0.95`);
      }
      if (!rangeCol.includes(uiRange)) {
        warnings.push(`${relative(ROOT, file)}: expected noise persistence UI range ${uiRange} in table row`);
      }
    }
  }

  const tuningFiles = [join(DOCS, 'zh', 'tuning.md'), join(DOCS, 'en', 'tuning.md')];
  for (const file of tuningFiles) {
    if (!existsSync(file)) continue;
    const content = readFileSync(file, 'utf8');
    if (/0\.05[–-]0\.95/.test(content)) {
      errors.push(`${relative(ROOT, file)}: tuning persistence range should match UI (${uiRange})`);
    }
  }
}

function checkKeyBindingsSource() {
  const kb = readModFile('src/main/java/com/pushdozer/client/KeyBindings.java');
  if (!kb) return;
  if (!kb.includes('offHand.getItem() instanceof PushdozerItem')) {
    errors.push('KeyBindings.java no longer checks offhand — update docs and verify-docs');
  }
  if (!kb.includes('openConfigKey.wasPressed() && isHoldingPushdozer(client)')) {
    warnings.push('KeyBindings K gate may have changed');
  }
}

console.log('Pushdozer docs verification');
console.log(`MOD_SOURCE: ${MOD_SOURCE}\n`);

checkStaleLinks();
checkDefaultHomepage();
checkKeyBindingDocs();
checkGeometrySubPanels();
checkSurfaceRoughenPanel();
checkExactConstants();
checkKeyBindingsSource();

if (warnings.length) {
  console.log('Warnings:');
  warnings.forEach((w) => console.log(`  ⚠ ${w}`));
  console.log();
}

if (errors.length) {
  console.error('Errors:');
  errors.forEach((e) => console.error(`  ✗ ${e}`));
  process.exit(1);
}

console.log('✓ All checks passed');
