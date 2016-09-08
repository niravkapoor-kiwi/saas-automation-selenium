var webdriver = require('selenium-webdriver');


module.exports = function(driver){
	driver.wait(webdriver.until.elementLocated(webdriver.By.name('project_name'))).then(function(elm) {
		 elm.sendKeys("Automated Test Project");
		 var location = driver.findElement(webdriver.By.name('location'));
		 location.sendKeys('Delhi, DL, India');
		 //Nirav Kapoor : to select from the Google Geocoding
		 location.sendKeys(webdriver.Key.ARROW_DOWN);	
		 setTimeout(function(){
		 	location.sendKeys(webdriver.Key.ARROW_DOWN);	
		 	setTimeout(function(){
		 		location.sendKeys(webdriver.Key.ENTER);
		 	},1000)
		 },1000)
		 
		 
		// driver.findElement(webdriver.By.xpath("//button[contains(text(),'Create Project')]")).click();
	})
}