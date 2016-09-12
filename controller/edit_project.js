var webdriver = require('selenium-webdriver');

module.exports = function(driver){

	driver.wait(webdriver.until.elementLocated(webdriver.By.name('pile_length'))).then(function(elm) {
		//Nirav Kapoor : Add Boundaries
		driver.findElement(webdriver.By.xpath("//button[contains(text(),'Add Boundaries')]")).click();	
		driver.findElement(webdriver.By.xpath("//a[contains(text(),'Exclusions')]")).click();	
		setTimeout(function(){
			//Nirav Kapoor : Add exclusions
			driver.findElement(webdriver.By.xpath("//button[contains(text(),'Add Exclusions')]")).click();	
			driver.findElement(webdriver.By.xpath("//a[contains(text(),'Point of Common Coupling')]")).click();	
			setTimeout(function(){
				driver.findElement(webdriver.By.xpath("//button[contains(text(),'Add PCC')]")).click();	
				driver.findElement(webdriver.By.name("save_btn")).click();
				//Nirav Kapoor : Open the KML tab and close other
				driver.findElement(webdriver.By.xpath("//a[contains(text(),'KML')]")).click();	
				//Nirav Kapoor : Generate KML	
				setTimeout(function(){
					driver.findElement(webdriver.By.xpath("//button[contains(text(),'Generate KML')]")).click();	
					setTimeout(function(){
						//Nirav Kapoor : download the generated KML
						driver.findElement(webdriver.By.xpath("//a[contains(text(),'Download KML')]")).click();	
						//driver.findElement(webdriver.By.id("file")).sendKeys("/Users/kiwitech/Documents/mising_site_Boundaries_kml.kml");
					},5000)
					
				},1000)
			},1000)
		},1000)
	})
}