import { test, expect } from '@playwright/test';

// GBC Homepage
test('homepage', async ({ page }) => {

  await page.goto('https://www.georgebrown.ca/');

  await page.screenshot({
    path: page.viewportSize()?.width+"_home.png"
  });
  
  await page.screenshot({
    path: page.viewportSize()?.width+"_full_home.png",
    fullPage: true
  });

});

// GBC G418
test('g418', async ({ page, isMobile }) => {

  if (isMobile == true) {
    test.skip();
  }

  await page.goto('https://www.georgebrown.ca/programs/web-development-front-end-design-program-postgraduate-g418');

  await page.screenshot({
    path: page.viewportSize()?.width+"_g418_home.png"
  });
  
  await page.screenshot({
    path: page.viewportSize()?.width+"_g418_full.png",
    fullPage: true
  });

  await page.locator("#tab-courses-2024").click();

  await page.screenshot({
    path: page.viewportSize()?.width+"_g418_courses_full.png",
    fullPage: true
  });

});

// GBC G301
test('g301', async ({ page, isMobile }) => {

  if (isMobile == true) {
    test.skip();
  }

  await page.goto('https://www.georgebrown.ca/programs/honours-bachelor-of-digital-experience-design-program-g301');

  await page.screenshot({
    path: page.viewportSize()?.width+"_g301_home.png"
  });
  
  await page.screenshot({
    path: page.viewportSize()?.width+"_g301_full_home.png",
    fullPage: true
  });

  await page.locator("#tab-courses-2024").click();

  await page.screenshot({
    path: page.viewportSize()?.width+"_g301_courses_full.png",
    fullPage: true
  });

});

// GBC G113
test('g113', async ({ page, isMobile }) => {

  if (isMobile == true) {
    test.skip();
  }

  await page.goto('https://www.georgebrown.ca/programs/interaction-design-program-g113');

  await page.screenshot({
    path: page.viewportSize()?.width+"_g113_home.png"
  });
  
  await page.screenshot({
    path: page.viewportSize()?.width+"_g113_full_home.png",
    fullPage: true
  });

  await page.locator("#tab-courses-2024").click();

  await page.screenshot({
    path: page.viewportSize()?.width+"_g113_courses_full.png",
    fullPage: true
  });

});