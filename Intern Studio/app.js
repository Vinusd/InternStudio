// //Get the button
// let mybutton = document.getElementById("backtop");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
// 	scrollFunction();
// };

// function scrollFunction() {
// 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// 		mybutton.style.display = "block";
// 	} else {
// 		mybutton.style.display = "none";
// 	}
// }
// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

// function backToTop() {
// 	document.body.scrollTop = 0;
// 	document.documentElement.scrollTop = 0;
// }

//Form Validation

function formValidation() {
	//Get Value
	var name = document.getElementById("name").value.trim();
	var email = document.getElementById("email").value.trim();
	var msg = document.getElementById("msg").value.trim();
	var phone = document.getElementById("form18").value.trim();

	var isValidForm = true;

	//Validation Conditions here
	if (name.length < 1) {
		alert("Name is Required!");
		var isValidForm = false;
	} else if (email.length < 1) {
		alert("Email is Required!");
		var isValidForm = false;
	} else if (msg.length < 1) {
		alert("Message is Required!");
		var isValidForm = false;
	} else if (phone.length < 10) {
		alert("Phone Number not Valid!");
		var isValidForm = false;
	} else {
		isValidForm = true;
	}

	if (isValidForm) {
		alert("Form submitted!!");
		return isValidForm;
	} else {
		alert("Form not submitted");
	}

	//if isValidForm is true then form submits else submission is stopped
}
