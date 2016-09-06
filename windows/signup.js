
 var webdriver = require('selenium-webdriver');

module.exports = function(driver){
	var web_url = require('../mac/config.js').WEB_URL.BASE_HST_URL +"/#/register";
	driver.get(web_url);
	setTimeout(function(){
		driver.findElement(webdriver.By.name("first_name")).sendKeys('Nirav');
		driver.findElement(webdriver.By.name('last_name')).sendKeys('Kapoor');
		driver.findElement(webdriver.By.name('email')).sendKeys('niravkoor27@gmail.com');
	 	driver.findElement(webdriver.By.name('password')).sendKeys('nirav1992');
	 	driver.findElement(webdriver.By.name('confirm_password')).sendKeys('nirav1992');
	 	driver.findElement(webdriver.By.name("accept_terms_of_use")).click();
	 	driver.findElement(webdriver.By.name("accept_privacy_policy")).click();
	 	driver.findElement(webdriver.By.name('signup_btn')).click();
	 	// setTimeout(function(){
	 	// 	driver.findElement(webdriver.By.name('continue_btn')).click();
	 	// },10000);
	},20000);	
}



// driver.wait(function() {
//     return driver.findElement(webdriver.By.name("first_name")).isDisplayed();
// }, timeout);


// WebElement myDynamicElement = (new WebDriverWait(driver, 10))
//   .until(ExpectedConditions.presenceOfElementLocated(By.name("myDynamicElement")));
//driver.manage().timeouts().pageLoadTimeout
//console.log("navigator.platform",navigator.platform);
// driver.wait(function(){
// 	console.log("adasdas");
// driver.findElement(webdriver.By.name("first_name")).sendKeys('Nirav');

// },20000)