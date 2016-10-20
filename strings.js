var string = " ";
var array = [];
var submit = document.getElementById("submit");
var output = document.getElementById("output");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");

submit.addEventListener("click" , function() {
	var input = document.getElementById("input").value;
	string = input;
	array = string.split('')
	console.log(array);
	reversal(input);
	alphabits(input);
	palindrome(input);

});

function reversal(){
	var input = document.getElementById("input").value;
	string = input;
	array = string.split('').reverse().join('');
	console.log(array);
	output.innerHTML = "<h1>" + "Your name Backwards is: " + array + "</h1>"
}


function alphabits() {
	var input = document.getElementById("input").value;
	string = input;
	array = string.split('');
	array = array.sort().join('')
	console.log(array);
	output2.innerHTML =  '<h1>'+ "Your name Alphabitized is: " + array +'</h1>'
};

function palindrome() {
	var input = document.getElementById("input").value;
	string = input;

    if(string == string.split('').reverse().join('')){
    	alert("Your name is a Palindrome");
    	output3.innerHTML = "<h1>" + "Your name is Palindrome!!" + "</h2>"
    }
}


document.getElementById('input').onkeypress=function(e){
 if(("abcdefghijklmnopqrstuvwxyz " + "ABCDEFGHIJKLMNOPQRSTUVWXYZ").indexOf(String.fromCharCode(e.keyCode))===-1){
        e.preventDefault();
        return false;
    }
}

document.getElementById("input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("submit").click();
    }
});
// reversal(testString);
// alphabits(testString);
// palindrome(testString);