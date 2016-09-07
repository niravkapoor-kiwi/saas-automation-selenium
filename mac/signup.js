
 var webdriver = require('selenium-webdriver');

module.exports = function(driver){
	//Nirav Kapoor : web url to which driver will redirected to 
	var web_url = require('../mac/config.js').WEB_URL.BASE_HST_URL +"/#/register";
	driver.get(web_url);
	//Nirav Kapoor : find the element with the name attribute as first_name and then fille the value
	driver.wait(webdriver.until.elementLocated(webdriver.By.name('first_name'))).then(function(elm) {
		elm.sendKeys('Nirav');
		driver.findElement(webdriver.By.name('last_name')).sendKeys('Kapoor');
		driver.findElement(webdriver.By.name('email')).sendKeys('niravkoor27@gmail.com');
	 	driver.findElement(webdriver.By.name('password')).sendKeys('nirav1992');
	 	driver.findElement(webdriver.By.name('confirm_password')).sendKeys('nirav1992');
	 	driver.findElement(webdriver.By.name("accept_terms_of_use")).click();
	 	driver.findElement(webdriver.By.name("accept_privacy_policy")).click();
	 	driver.findElement(webdriver.By.name('signup_btn')).click();
	})
}
