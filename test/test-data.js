// global, for html page
call_log_func = require("../call-log-func.js");

module.exports = {

	"call_log_func()": function (done) {
		var a = [];		//to save result

		var func1 = function (message) { a.push(message); console.log("log1: " + message); };
		call_log_func(func1, "abc1");	//a call back function
		//log1: abc1

		call_log_func("log2", "abc2");  //a string as logFunc
		//log2, abc2
		call_log_func("", "abc3");  //an empty string
		//abc3

		var obj4 = {
			log: function (message) { a.push(message); console.log("log4: " + message); },
		}
		call_log_func(obj4, "abc4");  //an object with '.log()' method
		//log4: abc4
		call_log_func(console, "abc5");  //an object with '.log()' method
		//abc5

		call_log_func(null, "abc");
		//do nothing		

		var expect = "abc1,abc4";
		done(!(a.join(",") === expect));

		showResult("Note: open console to check the output.", 3);

		/*
		console output should like:
		log1: abc1
		log2, abc2
		abc3
		log4: abc4
		abc5
		*/
	},
};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
