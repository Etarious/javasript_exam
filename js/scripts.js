function submit_form(){
	let email = document.getElementById("email_id").value;
	let feedback = document.getElementById("feedback").value;
	let date = new Date();
	let current_time = date.getTime();

		email = email.trim();
		feedback = feedback.trim();

		let feedback_object = {
			"email": email,
			"feedback": feedback,
			"id": current_time
		}

		//console.log(feedback_object);
		if(email.length == 0){
			alert("Please enter your email");
		}else if(feedback.length == 0){
			alert("Please enter your Feedback");
		}else{
			let stored_feedback = localStorage.getItem("stored_feedback");

			//check if any feedback has been stored before...
			let users_feedback = [];
			if(stored_feedback == null || stored_feedback == undefined){
				//No feedback has been submitted before...
				users_feedback.push(feedback_object);
				users_feedback = JSON.stringify(users_feedback);
				localStorage.setItem("stored_feedback", users_feedback);
				alert("Submitted successfully!");
			}else{
				//feedback has been submitted before...
				users_feedback = JSON.parse(stored_feedback);
				users_feedback.push(feedback_object);
				users_feedback = JSON.stringify(users_feedback);
				localStorage.setItem("stored_feedback", users_feedback);
				alert("submitted successfully!");
			}
		}
}


function register(){
	///getting the values
	let firstname = document.getElementById("firstname").value;
	let lastname = document.getElementById("lastname").value;
	let email = document.getElementById("email").value;

		//removing spaces...
		firstname = firstname.trim();
		lastname = lastname.trim();
		email = email.trim();

		//user object...
		let user_object = {
			"firstname": firstname,
			"lastname": lastname,
			"email": email
		}

		//removing empty boxes...
		if(firstname.length == 0){
			alert("Please input your Firstname!");
		}else if(lastname.length == 0){
			alert("Please input your lastname!");
		}else if(email.length == 0){
			alert("Please input your Email Address!");
		}else{
			//checking if any user has been registered before...
			let stored_users = localStorage.getItem("users");
			
			if(stored_users == null || stored_users == undefined){
				//that means no user has been registered before...
				let users_array = [];
				users_array.push(user_object);
				users_array = JSON.stringify(users_array);
				localStorage.setItem("users", users_array);
				alert("Registration successful!");
			}else{
				//no user has registered before...
				stored_users = JSON.parse(stored_users);
				let success = [];
				for(let i = 0; i < stored_users.length; i++){
					if(stored_users[i]["email"] == email){
						success.push(0);
					}else{
						success[0] = user_object;
					}
				}
				if(success.includes(0)){
					//email already used...
					alert("Email already used!");
				}else{
					//email is not yet used...
					let user = success[0];
					stored_users.push(user);
					stored_users = JSON.stringify(stored_users);
					localStorage.setItem("users", stored_users);
					alert("Registration successful!");
				}
			}	
		}
}


function list(){
	let num = 0;
	let even = [];
	for(let i = 1; i <= 99; i++){
		//console.log(i);
		if((i % 2) == 0){
			//console.log(i);
			even.push(i);
			let list = 
			document.getElementById("num_list").append(i+", ");

		}
		
	}
	document.getElementById("num_list").append(100+".");
}
