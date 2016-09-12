//Nirav Kapoor : it the starting point for the test case
var prompt = require('prompt');

 prompt.start();
 
 //Nirav Kapoor : ask user for which browser they want to run.
  var questions  = ["Enter Browser Name...!!!\nFor Google-chrome : chrome,\nFor firefox : firefox,\nFor Safari : safari,\nFor Internet Explorer : explorer",
  "Enter File Name...!!!\nFor Signup : signup,\nFor Login : login\nFor Forgot Password : forgotpassword"]
 prompt.get(questions, function (err, result) {
	var browser = result[questions[0]];
	var browser_array = ["chrome","firefox","safari","explorer"];
	//Nirav Kapoor : entered browser name is not in the list of browser_array then message will be shown to user
	if(browser_array.indexOf(browser) == -1){
		console.log("Entered Browser name is not as per defined semantic");
	}
	else{   

		var driver = require('../controller/config.js').create_BrowserDriver(browser);	
		var file = result[questions[1]];
		//Nirav Kapoor : arrray of all those pages through which we can start our process in HST solar
		var file_array = ["signup","login","forgotpassword"];
		if(file_array.indexOf(file) == -1){
			console.log("Entered File name is not as per defined semantic");
		}
		else{
			//Nirav Kapoor : calling the page specific script file to execute the flow
			switch(file){
				case "signup" :
					require('../controller/signup.js')(driver);
					break;
				case "login" : 
					require('../controller/login.js')(driver)                                                                                                                                                                                                                                                                       ;
					break;
				case "forgotpassword" :
					require('../controller/forgot_password.js')(driver);
					break;
				default : 
					console.log("Entered File name is not as per defined semantic");
			}
		}
	}
  });
