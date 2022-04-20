const puppeteer = require('puppeteer');

const fs = require("fs/promises");

async function start() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/Israel");
    await page.screenshot({ path: 'cr7.png', fullpage: true });


    const names = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".mw-headline strong")).map(a => a.textConstent)
    })
    await fs.writeFile("family.txt", names.join("\r\n"))

    // await Promise.all([
    //     page.waitForNavigation(),
    //     page.click(".wM6W7d")
    // ]);

    await browser.close();
}
start()
    //כל כמה זמן אתה בוחר לחזור על הפונקציה
setInterval(start, 4);