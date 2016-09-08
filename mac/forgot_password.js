var webdriver = require('selenium-webdriver');

module.exports = function(driver){
	var web_url = require('../mac/config.js').WEB_URL.BASE_HST_URL+"/#/login";
	driver.get(web_url);
	setTimeout(function(){
		driver.findElement(webdriver.By.xpath("//label[contains(text(),'Forgot Password?')]")).click();	
		setTimeout(function(){
			driver.findElement(webdriver.By.name('email')).sendKeys('niravkapoor27@gmail.com');
			driver.findElement(webdriver.By.name("forgot_btn")).click();
		},10000)
	},15000)
	
	// driver.wait(webdriver.until.elementLocated(webdriver.By.name('forgot_password'))).then(function(elm) {
	// 	driver.findElement(webdriver.By.name('forgot_password')).click();

	// })

	// driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//label[contains(text(),'Forgot Password?')]"))).then(function(elm) {
	// 	//console.log(elm.click());
	// 	elm.click();
	// 	//driver.findElement(webdriver.By.xpath("//label[contains(text(),'Forgot Password?')]")).click();	
	// 	//console.log("webdriver.until",webdriver.until);
	// 	// driver.wait(webdriver.until.elementIsVisible(webdriver.By.name('email'))).then(function(elm) {
	// 	// 	elm.sendKeys('niravkapoor27@gmail.com');
	// 	// 	driver.findElement(webdriver.By.name("forgot_btn")).click();
	// 	// })
	// })
}