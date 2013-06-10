
/*these are global variables
var password1 = $("#password1").val();
var password2 = $("#password2").val();*/

$(document).ready(function() {

	$('#password1').keyup(function(){
		EvaluatePassword($('#password1').val());
	});

	$("#password_form").submit(function(e) {
		e.preventDefault();
		ConfirmPassword();
	}); 


}); // end document.ready

var min_length = 8;


function EvaluatePassword (pass){
	//var length = PasswordLength(pass);
	var outcome = PasswordStrength(pass);
	var score = outcome[0];
	var errors = outcome[1];
	if(errors.hasOwnProperty('length') == false){
		// display score
		if(score == 3){
			$("#strength_indicator").text("Strong");
		}else if(score == 2){
			$("#strength_indicator").text("Good");
		}else{
			$("#strength_indicator").text("Weak");
		}
	}else{
		
		$("#strength_indicator").text("Too Short");
	}
	
	$("#issues").children().remove();
	for(var e in errors){
		$("#issues").append("<li>" + errors[e] + "</li>");
	}
} 


function PasswordStrength(pass){
	var issues = {};
	var s = 3;
	
	if(pass.length <= min_length){
		issues["length"] = "Password should be at least " + min_length + "." ;
	}

	if(!pass.match(/[A-Z]/g)){
		s -=1;
		issues['capital'] = "Password must have one Capital Letter";
	}
	
	if(!pass.match(/[0-9]/g)){
		s -=1;
		issues['number']="Password must have at least one number.";
	}

	if(!pass.match(/[\*!@#\$%\^&\(\)]/g)){
		s -=1;
		issues['special'] = "Password must have at least one special charector";
	}

	return [s, issues];
	

}//end Passwordstrength function


//ConfirmPassword checks whether the passwords match each other
function ConfirmPassword (){
		var password1 = $('#password1').val();
		var password2 = $('#password2').val();
		if (password1 == password2){
			//if it's a match contiue with default submit
			console.log('match');
		}
		else{
			alert("Your passwords don't match");
		}

}//end ConfirmPassword Function
