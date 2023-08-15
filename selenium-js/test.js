const {Builder} = require('selenium-webdriver');

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('http://localhost:8081/');

    takeScreenshot(driver)

    await driver.quit();
})();

function takeScreenshot(driver) {
    driver.takeScreenshot().then(
        function(image, err) {
            require('fs').writeFile('images/out.png', image, 'base64', function(err) {
                console.log(err);
            });
        }
    );
}