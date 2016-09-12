'use strict';


var webdriver = require('selenium-webdriver');
var prompt = require('prompt');
prompt.start();
module.exports = function(driver){
	//Nirav Kapoor : user will be ask to enter the flow from your projects page he wants to move to
	var questions  = ["Enter Flow Name...!!!\nFor Your Account : your-account,\nFor New Project : new-project,\nFor User Manual : user-manual,\nFor Quick Support : quick-support"];
	prompt.get(questions, function (err, result) {
		var page_name = result[questions[0]];
		//Nirav Kapoor : as per the entered page_name, redirects to page specific flow
		switch(page_name){
			case "your-account" :
				driver.findElement(webdriver.By.id("edit_account_btn")).click();
				require('../controller/your_account.js')(driver);		
				break;
			case "new-project" :
				driver.findElement(webdriver.By.id("create_project_btn")).click();
				require('../controller/new_project.js')(driver);
				break;
			case "user-manual" :
				driver.findElement(webdriver.By.id("user_manual")).click();
				require('../controller/user_manual.js')(driver);
				break;
			case "quick-support" :
				driver.findElement(webdriver.By.id("help-btn")).click();
				require('../controller/quick_support.js')(driver);
				break;
			default :
				console.log("Enetered Flow is not as per defined semantic");
		}
	})

	// setTimeout(function(){
	// 	driver.findElement(webdriver.By.xpath('//a[contains(@href,"/#/create-project")]')).click();
	// },15000);
}