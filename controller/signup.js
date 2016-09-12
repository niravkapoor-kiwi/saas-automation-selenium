
 var webdriver = require('selenium-webdriver');
var Helper = require('../controller/config.js');
module.exports = function(driver){
	//Nirav Kapoor : web url to which driver will redirected to 
	var web_url = require('../controller/config.js').WEB_URL.BASE_HST_URL +"/#/register";
	driver.get(web_url);
	//Nirav Kapoor : find the element with the name attribute as first_name and then fille the value
	driver.wait(webdriver.until.elementLocated(webdriver.By.name('first_name'))).then(function(elm) {
		elm.sendKeys(Helper.signup_data.FIRST_NAME);
		driver.findElement(webdriver.By.name('last_name')).sendKeys(Helper.signup_data.LAST_NAME);
		driver.findElement(webdriver.By.name('email')).sendKeys(Helper.signup_data.EMAIL);
	 	driver.findElement(webdriver.By.name('password')).sendKeys(Helper.signup_data.PASSWORD);
	 	driver.findElement(webdriver.By.name('confirm_password')).sendKeys(Helper.signup_data.PASSWORD);
	 	driver.findElement(webdriver.By.name("accept_terms_of_use")).click();
	 	driver.findElement(webdriver.By.name("accept_privacy_policy")).click();
	 	driver.findElement(webdriver.By.name('signup_btn')).click();
	})
}
