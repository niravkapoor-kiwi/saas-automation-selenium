var webdriver = require('selenium-webdriver');

module.exports = function(driver){
	var web_url = require('../mac/config.js').WEB_URL.BASE_HST_URL+"/#/login";
	driver.get(web_url);

	setTimeout(function(){
		driver.findElement(webdriver.By.xpath("//*[@data-target='#forgetPassword']")).click();
		console.log(driver.findElement(webdriver.By.xpath("//*[@data-target='#forgetPassword']")))
		setTimeout(function(){
			driver.findElement(webdriver.By.name("email")).sendKeys('niravkapoor27@gmail.com');
			driver.findElement(webdriver.By.name("forgot_btn")).click();
		},8000)
	},12000);
}