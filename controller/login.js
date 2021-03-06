var webdriver = require('selenium-webdriver');
var Helper = require('../controller/config.js');
module.exports = function(driver){
	var web_url = require('../controller/config.js').WEB_URL.BASE_HST_URL+"/#/login";
	driver.get(web_url);

driver.wait(webdriver.until.elementLocated(webdriver.By.name('login_email'))).then(function(elm) {
    elm.sendKeys(Helper.login_data.EMAIL);
    driver.findElement(webdriver.By.name('login_password')).sendKeys(Helper.login_data.PASSWORD);
    driver.findElement(webdriver.By.name('login_btn')).click();
    require('../controller/your_projects.js')(driver);
});
}