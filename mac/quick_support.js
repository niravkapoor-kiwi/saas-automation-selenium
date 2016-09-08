'use strict';

var webdriver = require('selenium-webdriver');


module.exports = function(driver){
	console.log("indirver");
	setTimeout(function(){
		driver.findElement(webdriver.By.name("help_text")).sendKeys('Hi\nTesting Selenium Autmated Test Case\nThanks\nUser');
		driver.findElement(webdriver.By.xpath("//button[contains(text(),'Submit')]")).click();
	},10000)
	// driver.wait(webdriver.until.elementIsVisible(webdriver.By.name("help_text"))).then(function(elm){
	// 	elm.sendKeys("ffdsfdsf");
	// })

	// driver.wait(webdriver.until.elementIsVisible(webdriver.By.xpath("//button[contains(text(),'Submit')]"))).then(function(elm) {
	// 	console.log("elm",elm);
	// 	elm.click();
	// 	//elm.sendKeys('Hi\nTesting Selenium Autmated Test Case\nThanks\nUser');
	// 	driver.findElement(webdriver.By.xpath("//button[contains(text(),'Submit')]")).click();
	// })
}