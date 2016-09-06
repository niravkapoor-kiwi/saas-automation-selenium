var webdriver = require('selenium-webdriver');

module.exports = {
	set_PathValue : function(){
		process.env['PATH']= process.env['PATH'] + ":/Users/kiwitech/Downloads/selenium-webdrivers";
		return;
	},
	create_BrowserDriver : function(browser){
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
   			default :
   				driver = false;
		}
		console.log("process.env['PATH']",process.env['PATH']);
		return driver;
	},
	WEB_URL : {
		BASE_HST_URL : "http://dev.hstsolar.com"
	}
}