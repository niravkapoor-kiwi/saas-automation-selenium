'use strict';

var webdriver = require('selenium-webdriver'),
 Condition = webdriver.Condition,
    WebElementCondition = webdriver.WebElementCondition,
    until = webdriver.until;



module.exports = function(driver){
	
	driver.wait(webdriver.until.elementLocated(webdriver.By.name('billing_address_line_1'))).then(function(elm) {
		//Nirav Kapoor : to fille company details
		setTimeout(function(){
			elm.clear();
			elm.sendKeys("Plot 9");
			var billing_address_line_2 = driver.findElement(webdriver.By.name('billing_address_line_2'));
			billing_address_line_2.clear();
			billing_address_line_2.sendKeys('Street 2');
			var billing_city = driver.findElement(webdriver.By.name('billing_city'));
			billing_city.clear();
			billing_city.sendKeys('Noida');
			var billing_zip = driver.findElement(webdriver.By.name('billing_zip'))
			billing_zip.clear();
			billing_zip.sendKeys('201310');
			var billing_state = driver.findElement(webdriver.By.name('billing_state'));
			billing_state.clear();
			billing_state.sendKeys('New Delhi');
			var billing_country = driver.findElement(webdriver.By.name('billing_country'))
			billing_country.clear();
			billing_country.sendKeys('India');
			var business_phone = driver.findElement(webdriver.By.name('business_phone'));
			business_phone.clear();
			business_phone.sendKeys('08080808');
			var corporation = driver.findElement(webdriver.By.name('corporation'));
			corporation.clear();
			corporation.sendKeys('Kiwitech');
			var duns_number = driver.findElement(webdriver.By.name('duns_number'));
			duns_number.clear();
			duns_number.sendKeys('789456');
			driver.findElement(webdriver.By.xpath("//button[contains(text(),'Save')]")).click();
			//Nirav Kapoor : Add project Managers
			driver.findElement(webdriver.By.xpath('//a[contains(@href,"#add-project-managers")]')).click();
			//Nirav Kapoor : check project manager tabs is been displayed
			setTimeout(function(){
				driver.findElement(webdriver.By.name('first_name')).sendKeys("Nirav");
				driver.findElement(webdriver.By.name('last_name')).sendKeys('Selenium Test Run');
				driver.findElement(webdriver.By.name('email')).sendKeys('niravkapoor@kiwitech.com');
				driver.findElement(webdriver.By.xpath("//button[contains(text(),'Add')]")).click();
			},1000)
		 //driver.wait(webdriver.until.elementIsVisible(webdriver.By.name('first_name'),10000)).then(function(elm) {
		 	//elm.sendKeys("Nirav Kiwi");
		//waitForVisibleElement(webdriver.By.name('first_name'), 2000).then(function(elm){
			
		//});
		},2000)
	})
}