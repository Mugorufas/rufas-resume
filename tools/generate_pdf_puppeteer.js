const path = require('path');
const fs = require('fs');
const http = require('http');
const url = require('url');
const puppeteer = require('puppeteer');

function startStaticServer(folder, port = 5000) {
  const mime = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
  };

  const server = http.createServer((req, res) => {
    const parsed = url.parse(req.url);
    let pathname = `${folder}${parsed.pathname}`;
    if (pathname.endsWith('/')) pathname += 'index.html';
    fs.readFile(pathname, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('Not found');
        return;
      }
      const ext = path.extname(pathname);
      res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
      res.end(data);
    });
  });

  return new Promise((resolve, reject) => {
    server.listen(port, (err) => {
      if (err) return reject(err);
      resolve(server);
    });
  });
}

async function run() {
  const buildDir = path.resolve(__dirname, '..', 'build');
  const buildIndex = path.join(buildDir, 'index.html');
  if (!fs.existsSync(buildIndex)) {
    console.error('Build not found. Run `npm run build` first.');
    process.exit(1);
  }

  const port = 5000;
  const server = await startStaticServer(buildDir, port);
  const siteUrl = `http://localhost:${port}`;
  console.log('Serving', buildDir, 'at', siteUrl);

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600 });
  await page.goto(siteUrl, { waitUntil: 'networkidle2' });

  // wait for the app root element
  await page.waitForSelector('#root', { timeout: 5000 }).catch(() => {});
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 600)));

  // Save a full-page screenshot and the rendered HTML for diagnosis
  try {
    const screenshotPath = path.resolve(__dirname, '..', 'diagnostic_render.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log('Saved screenshot to', screenshotPath);

    const htmlOut = path.resolve(__dirname, '..', 'diagnostic_render.html');
    const content = await page.content();
    fs.writeFileSync(htmlOut, content, 'utf8');
    console.log('Saved rendered HTML to', htmlOut);
  } catch (err) {
    console.warn('Could not capture screenshot/html:', err.message);
  }

  const outPath = path.resolve(__dirname, '..', 'automated_resume.pdf');
  await page.pdf({ path: outPath, format: 'A4', printBackground: true, margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' } });

  console.log('Saved PDF to', outPath);
  await browser.close();
  server.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
