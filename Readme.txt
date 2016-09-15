Selenium Automated Test Cases 

1. init.js - is the starting file for the test cases.
2. selenium-webdrivers contains platform specific web drivers/ - 
3. For safari , below is the url for the safari webdriver extension :
	http://selenium-release.storage.googleapis.com/index.html?path=2.45/
4. Config.js contains the path of web driver folder.
5. For platform specific configuration, just change the path in config.js file.


Test Case : 

1. Flow starts with init.js - node init.js , which ask user to enter browser name for which he wants to run the automated test case.
2. After Signup or Login, user will be prompted to enter the input for the next flow which he needs to run.