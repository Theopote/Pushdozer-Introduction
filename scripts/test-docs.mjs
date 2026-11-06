import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { chromium } from 'playwright';

const docs = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'docs');

test('documentation navigation works at the root and a GitHub Pages subpath', async (t) => {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const pathname = decodeURIComponent(url.pathname).replace(/^\/Pushdozer-Introduction(?=\/)/, '');
    const file = resolve(docs, `.${pathname.endsWith('/') ? `${pathname}index.html` : pathname}`);
    if (!file.startsWith(docs + sep)) {
      res.writeHead(403).end();
      return;
    }
    try {
      const contents = await readFile(file);
      const type = { '.html': 'text/html', '.md': 'text/markdown', '.svg': 'image/svg+xml', '.png': 'image/png' }[extname(file)];
      if (type) res.setHeader('Content-Type', type);
      res.end(contents);
    } catch (error) {
      if (error.code === 'ENOENT' || error.code === 'EISDIR') {
        res.writeHead(404).end('Not found');
      } else {
        res.writeHead(500).end('Server error');
        console.error(error);
      }
    }
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve())));

  const browser = await chromium.launch({
    executablePath: process.env.BROWSER_EXECUTABLE_PATH || undefined,
    headless: true,
  });
  t.after(() => browser.close());
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', (route) => route.abort());
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => {
    const url = new URL(response.url());
    if (url.hostname === '127.0.0.1' && response.status() >= 400 && url.pathname !== '/favicon.ico') {
      errors.push(`${response.status()} ${url.pathname}`);
    }
  });

  for (const prefix of ['', '/Pushdozer-Introduction']) {
    const base = `http://127.0.0.1:${server.address().port}${prefix}/`;
    await page.goto(`${base}#/`, { waitUntil: 'domcontentloaded' });
    await page.locator('.sidebar-nav a', { hasText: '入门指南' }).waitFor();
    assert.equal(new URL(page.url()).hash, '#/zh/');
    assert.equal(await page.locator('html').getAttribute('lang'), 'zh-cn');

    await page.locator('.sidebar-nav a', { hasText: '入门指南' }).click();
    await page.waitForURL('**/#/zh/basic');
    await page.locator('.markdown-section h1', { hasText: '入门指南' }).waitFor();

    await page.locator('.sidebar-nav a', { hasText: '界面视觉指南' }).click();
    await page.waitForURL('**/#/zh/visual-guide');
    await page.locator('.markdown-section img').first().waitFor();
    await page.waitForFunction(() => {
      const images = [...document.querySelectorAll('.markdown-section img')];
      return images.length > 0 && images.every((image) => image.complete && image.naturalWidth > 0);
    });

    await page.locator('.app-nav a', { hasText: 'English' }).click();
    await page.locator('.sidebar-nav a', { hasText: 'Getting Started' }).waitFor();
    await page.locator('.markdown-section h1', { hasText: 'Pushdozer Introduction' }).waitFor();
    assert.equal(new URL(page.url()).hash, '#/en/');
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');

    await page.locator('.markdown-section a', { hasText: 'Get Started' }).click();
    await page.waitForURL('**/#/en/basic');
    await page.locator('.markdown-section h1', { hasText: 'Getting Started' }).waitFor();
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.locator('.sidebar-nav a', { hasText: 'Getting Started' }).waitFor();
    await page.locator('.markdown-section h1', { hasText: 'Getting Started' }).waitFor();
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');

    await page.locator('.app-nav a', { hasText: '中文' }).click();
    await page.locator('.sidebar-nav a', { hasText: '入门指南' }).waitFor();
    assert.equal(new URL(page.url()).hash, '#/zh/');

    for (const route of ['basic', 'basic.md']) {
      await page.goto(`${base}#/${route}`, { waitUntil: 'domcontentloaded' });
      await page.waitForURL(`**/#/zh/${route}`);
      await page.locator('.sidebar-nav a', { hasText: '入门指南' }).waitFor();
      await page.locator('.markdown-section h1', { hasText: '入门指南' }).waitFor();
    }
    await page.goto(`${base}#/en/README.md`, { waitUntil: 'domcontentloaded' });
    await page.locator('.markdown-section h1', { hasText: 'Pushdozer Introduction' }).waitFor();
    await page.locator('.sidebar-nav a', { hasText: 'Getting Started' }).waitFor();
    await page.goto(`${base}#/en`, { waitUntil: 'domcontentloaded' });
    await page.waitForURL('**/#/en/');
    await page.locator('.markdown-section h1', { hasText: 'Pushdozer Introduction' }).waitFor();

    await page.goto(`${base}#/?id=core`, { waitUntil: 'domcontentloaded' });
    await page.waitForURL('**/#/zh/?id=core');
    await page.locator('.sidebar-nav a', { hasText: '入门指南' }).waitFor();

    const mobile = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true,
    });
    try {
      await mobile.route('https://fonts.googleapis.com/**', (route) => route.abort());
      const mobilePage = await mobile.newPage();
      mobilePage.on('pageerror', (error) => errors.push(error.message));
      await mobilePage.goto(`${base}#/zh/basic`, { waitUntil: 'domcontentloaded' });
      await mobilePage.locator('.markdown-section h1', { hasText: '入门指南' }).waitFor();
      await mobilePage.locator('.app-nav a', { hasText: 'English' }).tap();
      await mobilePage.locator('.markdown-section h1', { hasText: 'Pushdozer Introduction' }).waitFor();
      await mobilePage.locator('.sidebar-nav a', { hasText: 'Getting Started' }).waitFor({ state: 'attached' });
      assert.equal(new URL(mobilePage.url()).hash, '#/en/');
      await mobilePage.locator('.app-nav a', { hasText: '中文' }).tap();
      await mobilePage.locator('.markdown-section h1', { hasText: 'Pushdozer 简介' }).waitFor();
      await mobilePage.locator('.sidebar-nav a', { hasText: '入门指南' }).waitFor({ state: 'attached' });
      assert.equal(new URL(mobilePage.url()).hash, '#/zh/');
    } finally {
      await mobile.close();
    }
  }
  assert.deepEqual(errors, []);
});
