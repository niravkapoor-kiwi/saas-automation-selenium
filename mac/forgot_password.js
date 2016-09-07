var webdriver = require('selenium-webdriver');

module.exports = function(driver){
	var web_url = require('../mac/config.js').WEB_URL.BASE_HST_URL+"/#/login";
	driver.get(web_url);
	driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//label[contains(text(),'Forgot Password?')]"))).then(function(elm) {
		elm.click();
		console.log("webdriver.until",webdriver.until);
		driver.wait(webdriver.until.elementIsVisible(webdriver.By.name('email'))).then(function(elm) {
			elm.sendKeys('niravkapoor27@gmail.com');
			driver.findElement(webdriver.By.name("forgot_btn")).click();
		})
	})
}