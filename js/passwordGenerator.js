// randomized drake password generator 
var words = [];
var password = [];
var randomWord;
var fs = require('fs');
var fileName = "./drake.txt";

fs.readFile(fileName, function (err, buf) {
	if (err) {
		console.log("error reading file: " + err);
	} else {
		//do something with the buf
		words = buf.toString().split("\n");
		//console.log(words);
		var length = words.length;
		console.log("number of words read: " + length);
		
		for (var i = 0; i < 4; i++) {
			randomWord = words[Math.floor(Math.random()*words.length)];
			password.push(randomWord);
		}
		for (var k = 0; k < password.length; k++) {
			console.log(password[k]);
		}
	}
});