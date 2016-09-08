var webdriver = require('selenium-webdriver');

module.exports = function(driver){

	driver.wait(webdriver.until.elementLocated(webdriver.By.name('pile_length'))).then(function(elm) {
		driver.findElement(webdriver.By.xpath("//button[contains(text(),'Add Boundaries')]")).click();	
		driver.findElement(webdriver.By.xpath("//a[contains(text(),'Exclusions')]")).click();	
		setTimeout(function(){
			driver.findElement(webdriver.By.xpath("//button[contains(text(),'Add Exclusions')]")).click();	
			driver.findElement(webdriver.By.xpath("//a[contains(text(),'Point of Common Coupling')]")).click();	
			setTimeout(function(){
				driver.findElement(webdriver.By.xpath("//button[contains(text(),'Add PCC')]")).click();	
				driver.findElement(webdriver.By.name("save_btn")).click();	
			},1000)
		},1000)
	})
}