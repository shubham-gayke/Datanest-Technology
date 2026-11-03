import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function runTests() {
  console.log('🚀 Starting Automated Verification Suite...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  const consoleErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.log('Browser Error:', msg.text());
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', (err) => {
    console.log('Page Unhandled Error:', err.message);
    consoleErrors.push(err.message);
  });

  // 1. Desktop 1440px
  console.log('📸 Testing Desktop (1440x900)...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await page.waitForTimeout ? page.waitForTimeout(1500) : new Promise((r) => setTimeout(r, 1500));
  
  // Scroll down to trigger animations
  await page.evaluate(() => window.scrollTo(0, 800));
  await new Promise((r) => setTimeout(r, 800));
  await page.evaluate(() => window.scrollTo(0, 1600));
  await new Promise((r) => setTimeout(r, 800));
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: 'screenshot-1440.png', fullPage: false });
  console.log('✅ Desktop 1440px screenshot saved.');

  // 2. Tablet 768px
  console.log('📸 Testing Tablet (768x1024)...');
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: 'screenshot-768.png', fullPage: false });
  console.log('✅ Tablet 768px screenshot saved.');

  // 3. Mobile 375px
  console.log('📸 Testing Mobile (375x667)...');
  await page.setViewport({ width: 375, height: 667 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: 'screenshot-375.png', fullPage: false });
  console.log('✅ Mobile 375px screenshot saved.');

  // Test Mobile Navigation Drawer
  console.log('📱 Testing Mobile Drawer...');
  const hamburger = await page.$('button[aria-label*="Navigation Menu"]');
  if (hamburger) {
    await hamburger.click();
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: 'screenshot-375-menu.png', fullPage: false });
    console.log('✅ Mobile menu drawer screenshot saved.');
  }

  // 4. Contact Us Validation and Submission Flow
  console.log('📝 Testing Contact Us form flow (Validation + 1.5s simulated submit + Success Modal)...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4173/contact', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1000));

  // Fill in form fields
  await page.type('input[name="fullName"]', 'Dr. Alexander Wright');
  await page.type('input[name="email"]', 'a.wright@enterprise.com');
  await page.type('input[name="phone"]', '+1 (212) 555-0199');
  await page.type('input[name="company"]', 'Apex Global Corp');
  await page.select('select[name="service"]', 'AI & Machine Learning');
  await page.type('textarea[name="message"]', 'We are planning a multi-node sovereign generative AI deployment and require architectural advisory.');
  await page.click('input[name="consent"]');

  // Click submit
  console.log('Submitting contact form...');
  await page.click('button[type="submit"]');

  // Verify loading and wait for ~1.5s simulated submission delay + modal appearance
  await new Promise((r) => setTimeout(r, 2200));

  await page.screenshot({ path: 'screenshot-contact-success.png', fullPage: false });
  console.log('✅ Contact form success modal screenshot saved.');

  // 5. Careers Apply Modal Flow
  console.log('💼 Testing Careers Apply Modal Flow...');
  await page.goto('http://localhost:4173/careers', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1000));

  const applyBtn = await page.$('button::-p-text(Apply for Position)');
  if (applyBtn) {
    await applyBtn.click();
    await new Promise((r) => setTimeout(r, 600));

    // Fill application form inside modal
    await page.type('dialog input[name="fullName"]', 'Elena Rostova');
    await page.type('dialog input[name="email"]', 'elena@example.com');
    await page.type('dialog input[name="phone"]', '+44 20 7946 0920');
    await page.select('dialog select[name="experience"]', '9-12 years');
    await page.type('dialog input[name="portfolioUrl"]', 'https://github.com/elena');
    await page.type('dialog textarea[name="coverNote"]', 'I have built distributed systems at scale for 10+ years and am excited to contribute.');
    await page.click('dialog input[name="consent"]');

    await page.click('dialog button[type="submit"]');
    await new Promise((r) => setTimeout(r, 2200));
    await page.screenshot({ path: 'screenshot-careers-success.png', fullPage: false });
    console.log('✅ Careers application success modal screenshot saved.');
  }

  await browser.close();

  console.log('🎉 Verification Suite Completed!');
  console.log('Total Console Errors Logged:', consoleErrors.length);
}

runTests().catch((err) => {
  console.error('Test Suite Failed:', err);
  process.exit(1);
});
