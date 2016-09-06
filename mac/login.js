var webdriver = require('selenium-webdriver');

module.exports = function(driver){
	var web_url = require('../mac/config.js').WEB_URL.BASE_HST_URL+"/#/login";
	driver.get(web_url);

	setTimeout(function(){
		driver.findElement(webdriver.By.name('login_email')).sendKeys('niravkoor27@gmail.com');
	 	driver.findElement(webdriver.By.name('login_password')).sendKeys('nirav1992');
	 	driver.findElement(webdriver.By.name('login_btn')).click();
	},15000);
}