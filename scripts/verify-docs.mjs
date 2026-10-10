#!/usr/bin/env node
/**
 * Pushdozer documentation consistency checker.
 * Run from Pushdozer-Introduction repo root:
 *   node scripts/verify-docs.mjs
 * Optional: MOD_SOURCE=/path/to/Pushdozer_Mod node scripts/verify-docs.mjs
 */

import { readFileSync, readdirSync, statSync } from 'fs';
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
  ].filter((f) => {
    try { statSync(f); return true; } catch { return false; }
  });

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

function readModConstant(file, regex, label) {
  try {
    const content = readFileSync(join(MOD_SOURCE, file), 'utf8');
    const m = content.match(regex);
    if (!m) {
      warnings.push(`Could not extract ${label} from ${file}`);
      return null;
    }
    return m[1];
  } catch {
    warnings.push(`Mod source not found at ${MOD_SOURCE} — skipping ${label} check`);
    return null;
  }
}

function checkConstantsInDocs() {
  const checks = [
    { file: 'src/main/resources/fabric.mod.json', regex: /"version":\s*"([^"]+)"/, label: 'mod version', docPattern: /v1\.1\.1/ },
    { file: 'src/main/java/com/pushdozer/config/domain/BrushConfig.java', regex: /MAX_BRUSH_RADIUS = (\d+)/, label: 'max brush', docPattern: /1.?64|64/ },
    { file: 'src/main/java/com/pushdozer/config/PushdozerConfig.java', regex: /MAX_OPERATION_DISTANCE = (\d+)/, label: 'max distance', docPattern: /99/ },
    { file: 'src/main/java/com/pushdozer/operations/UndoRedoManager.java', regex: /MAX_UNDO_REDO_STEPS = (\d+)/, label: 'undo steps', docPattern: /30/ },
    { file: 'src/main/java/com/pushdozer/network/BatchedNetworkManager.java', regex: /MAX_BATCH_SIZE = (\d+)/, label: 'batch size', docPattern: /500/ },
    { file: 'src/main/java/com/pushdozer/network/NetworkManager.java', regex: /positions\.size\(\) <= (\d+)/, label: 'immediate sync threshold', docPattern: /50/ },
  ];

  const refFiles = walk(DOCS, '.md').filter((f) =>
    f.includes('reference') || f.includes('cheatsheet') || f.includes('multiplayer') || f.includes('basic')
  );

  for (const { file, regex, label, docPattern } of checks) {
    const value = readModConstant(file, regex, label);
    if (value == null) continue;
    const found = refFiles.some((df) => docPattern.test(readFileSync(df, 'utf8')));
    if (!found) {
      warnings.push(`Docs may not mention ${label}=${value}`);
    }
  }
}

function checkDefaultHomepage() {
  const html = readFileSync(join(DOCS, 'index.html'), 'utf8');
  if (!html.includes("homepage: '/zh/README.md'")) {
    errors.push('docs/index.html default homepage should be /zh/README.md');
  }
  if (!html.includes("Theopote/Pushdozer_Mod")) {
    errors.push('docs/index.html repo should be Theopote/Pushdozer_Mod');
  }
}

function checkWorkModeOrder() {
  try {
    const kb = readFileSync(join(MOD_SOURCE, 'src/main/java/com/pushdozer/client/KeyBindings.java'), 'utf8');
    const modesMatch = kb.match(/toggleWorkMode[\s\S]*?WorkMode\.(\w+)/g);
    if (modesMatch) {
      const modesMd = readFileSync(join(DOCS, 'zh', 'modes.md'), 'utf8');
      if (!modesMd.includes('挖掘 → 铺设 → 平滑')) {
        warnings.push('zh/modes.md G-cycle order may be outdated');
      }
    }
  } catch {
    /* mod source optional */
  }
}

console.log('Pushdozer docs verification\n');

checkStaleLinks();
checkDefaultHomepage();
checkConstantsInDocs();
checkWorkModeOrder();

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
if (warnings.length) process.exit(0);
