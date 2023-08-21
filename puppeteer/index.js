const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({
        //executablePath: '/usr/bin/google-chrome-stable',
        headless: 'new',
        args: [
            '--autoplay-policy=user-gesture-required',
            '--disable-background-networking',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-breakpad',
            '--disable-client-side-phishing-detection',
            '--disable-component-update',
            '--disable-default-apps',
            '--disable-dev-shm-usage',
            '--disable-domain-reliability',
            '--disable-extensions',
            '--disable-features=AudioServiceOutOfProcess',
            '--disable-hang-monitor',
            '--disable-ipc-flooding-protection',
            '--disable-notifications',
            '--disable-offer-store-unmasked-wallet-cards',
            '--disable-popup-blocking',
            '--disable-print-preview',
            '--disable-prompt-on-repost',
            '--disable-renderer-backgrounding',
            '--disable-setuid-sandbox',
            '--disable-speech-api',
            '--disable-sync',
            '--hide-scrollbars',
            '--ignore-gpu-blacklist',
            '--metrics-recording-only',
            '--mute-audio',
            '--no-default-browser-check',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote',
            '--password-store=basic',
            '--use-gl=swiftshader',
            '--use-mock-keychain',
        ]
    });
    const page = await browser.newPage();

    // Set viewport width and height
    await page.setViewport({width: 1920, height: 1080});

    // Open URL in current page
    const site_url = 'http://localhost:3000';
    await page.goto(site_url, {waitUntil: 'networkidle0', timeout: 600000});

    // Capture screenshot
    let screenshotOptions = {
        path: 'images/home.jpg'
    }

    //screenshotOptions.fullPage = true
    const img = await page.screenshot(screenshotOptions);

    // Close the browser instance
    await browser.close();
})()



