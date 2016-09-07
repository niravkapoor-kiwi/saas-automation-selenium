var webdriver = require('selenium-webdriver');


module.exports = function(driver){
	driver.wait(webdriver.until.elementLocated(webdriver.By.name('project_name'))).then(function(elm) {
		 elm.sendKeys("Automated Test Project");
		 driver.findElement(webdriver.By.name('location')).sendKeys('New Delhi, Delhi');
		 driver.findElement(webdriver.By.xpath("//button[contains(text(),'Create Project')]")).click();
	})
}