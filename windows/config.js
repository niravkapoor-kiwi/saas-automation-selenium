var webdriver = require('selenium-webdriver');

module.exports = {
	set_PathValue : function(){
		process.env['PATH']= process.env['PATH'] + ":/Users/kiwitech/Downloads/selenium-webdrivers/mac";
		return;
	},
	//Nirav Kapoor : function to create a browser specific driver
	create_BrowserDriver : function(browser){
		//Nirav Kapoor : set the path of drivers folder to Environement Path variable
		this.set_PathValue();
		var driver ;
		switch(browser){
			case "chrome" : 
				driver = new webdriver.Builder().
   				withCapabilities(webdriver.Capabilities.chrome()).
   				build();
   				break;
   			case "firefox" : 
   				driver = new webdriver.Builder().
   				withCapabilities(webdriver.Capabilities.firefox()).
   				build();
   				break;
   			case "safari" : 
   				driver = new webdriver.Builder().
   				withCapabilities(webdriver.Capabilities.safari()).
   				build();
   				break;	
   			default :
   				driver = false;
		}
		console.log("process.env['PATH']",process.env['PATH']);
		return driver;
	},
	WEB_URL : {
		BASE_HST_URL : "http://dev.hstsolar.com"
	},
	signup_data : {
		FIRST_NAME : "NIRAV",
		LAST_NAME : "KAPOOR",
		EMAIL : "niravkapoor27@gmail.com",
		PASSWORD : "nirav1992",
		CONFIRM_PASSWORD : "nirav1992"
	},
	login_data : {
		EMAIL : "niravkapoor27@gmail.com",
		PASSWORD : "nirav1992"
	},
	new_project_data : {
		PROJECT_NAME :  "Automated Test Project",
		LOCATION : 'Delhi, DL, India'
	}
}