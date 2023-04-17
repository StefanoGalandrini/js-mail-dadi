let emailArray = [
	"bono@u2.com",
	"the.edge@u2.com",
	"adam.clayton@u2.com",
	"larry.mullen@u2.com",
	"ultraviolet@achtungbaby.com",
	"one@achtungbaby.com",
	"so.cruel@achtungbaby.com",
	"the.fly@achtungbaby.com",
	"acrobat@achtungbaby.com",
];

document.querySelector(".btn-input").addEventListener("click", function () {
	let userEmail = document.querySelector("#email").value;
	document.getElementById(
		"email-div",
	).innerHTML = `L'email inserita è ${userEmail}`;

	for (i = 0; i < emailArray.length; i++) {
		console.log(emailArray[i]);
		if (userEmail === emailArray[i]) {
			document.querySelector(".result").innerHTML =
				"Sei iscritto, puoi giocare!";
		} else {
			document.querySelector(".result").innerHTML =
				"Non puoi giocare perché non sei iscritto!";
		}
	}
});

console.log("L'email inserita è " + userEmail);
