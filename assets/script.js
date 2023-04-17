// document.querySelector(".btn-input").addEventListener("click", function () {
// 	const userEmail = document.querySelector("#email").value;
// 	return userEmail;
// });

let userEmail;

document.querySelector(".btn-input").addEventListener("click", function () {
	userEmail = document.querySelector("#email").value;
	alert(userEmail);
	document.getElementById("email-div").innerHTML =
		"L'email inserita è " + userEmail;
	return userEmail;
});

console.log("L'email inserita è " + userEmail);
