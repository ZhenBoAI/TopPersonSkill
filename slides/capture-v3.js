const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const SLIDES_HTML = path.join(__dirname, 'video-slides-v3.html');
const OUTPUT_DIR = path.join(__dirname, 'frames-v3');

function findChrome() {
  const locations = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    process.env.CHROME_PATH
  ].filter(Boolean);

  for (const loc of locations) {
    if (fs.existsSync(loc)) return loc;
  }
  
  const { execSync } = require('child_process');
  try {
    const chromePath = execSync('mdfind "kMDItemDisplayName == *Chrome*.app"', { encoding: 'utf8' }).split('\n')[0];
    if (chromePath) {
      return path.join(chromePath, 'Contents/MacOS', chromePath.includes('Chromium') ? 'Chromium' : 'Google Chrome');
    }
  } catch (e) {}
  
  return null;
}

async function captureSlides() {
  const chromePath = findChrome();
  if (!chromePath) {
    console.error('Chrome not found');
    process.exit(1);
  }
  
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  await page.goto(`file://${SLIDES_HTML}`, { waitUntil: 'networkidle0' });
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  const slideCount = await page.$$eval('.slide', slides => slides.length);
  console.log(`Found ${slideCount} slides`);
  
  for (let i = 0; i < slideCount; i++) {
    const dots = await page.$$('.nav-dot');
    if (dots[i]) {
      await dots[i].click();
      await new Promise(r => setTimeout(r, 800));
    }
    
    const outputPath = path.join(OUTPUT_DIR, `slide-${String(i + 1).padStart(2, '0')}.png`);
    await page.screenshot({
      path: outputPath,
      type: 'png',
      omitBackground: false
    });
    console.log(`Captured slide ${i + 1}/${slideCount}`);
  }
  
  await browser.close();
  console.log(`\n✅ All slides captured to ${OUTPUT_DIR}/`);
}

captureSlides().catch(console.error);
