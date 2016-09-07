var webdriver = require('selenium-webdriver');


module.exports = function(driver){
	driver.wait(webdriver.until.elementIsVisible(webdriver.By.name('help_text'))).then(function(elm) {
		console.log("elm",elm);
		elm.sendKeys('Hi\nTesting Selenium Autmated Test Case\nThanks\nUser');
		driver.findElement(webdriver.By.xpath("//button[contains(text(),'Submit')]")).click();
	})
}