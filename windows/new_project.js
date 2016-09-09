var webdriver = require('selenium-webdriver');
var Helper = require('../mac/config.js');

module.exports = function(driver){
	driver.wait(webdriver.until.elementLocated(webdriver.By.name('project_name'))).then(function(elm) {
		 elm.sendKeys(Helper.new_project_data.PROJECT_NAME);
		 var location = driver.findElement(webdriver.By.name('location'));
		 location.sendKeys(Helper.new_project_data.LOCATION);
		 //Nirav Kapoor : to select from the Google Geocoding
		 location.sendKeys(webdriver.Key.ARROW_DOWN);	
		 setTimeout(function(){
		 	location.sendKeys(webdriver.Key.ARROW_DOWN);	
		 	setTimeout(function(){
		 		location.sendKeys(webdriver.Key.ENTER);
		 		require('../mac/edit_project.js')(driver);
		 	},1000)
		 },1000)
		 
		 
		// driver.findElement(webdriver.By.xpath("//button[contains(text(),'Create Project')]")).click();
	})
}