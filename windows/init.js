
var prompt = require('prompt');

 prompt.start();

  var questions  = ["Enter Browser Name...!!!\nFor Google-chrome : chrome,\nFor firefox : firefox,\nFor Safari : safari",
  "Enter File Name...!!!\nFor Signup : signup,\nFor Login : login\nFor Forgot Password : forgotpassword"]
 prompt.get(questions, function (err, result) {
	var browser = result[questions[0]];
	var browser_array = ["chrome","firefox","safari"];
	if(browser_array.indexOf(browser) == -1){
		console.log("Entered Browser name is not as per defined semantic");
	}
	else{   
		var driver = require('../mac/config.js').create_BrowserDriver(browser);	
		var file = result[questions[1]];
		var file_array = ["signup","login","forgotpassword"];
		if(file_array.indexOf(file) == -1){
			console.log("Entered File name is not as per defined semantic");
		}
		else{
			switch(file){
				case "signup" :
					require('../mac/signup.js')(driver);
					break;
				case "login" : 
					require('../mac/login.js')(driver)                                                                                                                                                                                                                                                                       ;
					break;
				case "forgotpassword" :
					require('../mac/forgot_password.js')(driver);
					break;
				default : 
					console.log("Entered File name is not as per defined semantic");
			}
		}
	}
  });
