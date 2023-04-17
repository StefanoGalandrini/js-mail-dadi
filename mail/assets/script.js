const emailArray = [
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
	const userEmail = document.querySelector("#email").value;
	let result = false;

	for (let i = 0; i < emailArray.length; i++) {
		console.log(i, emailArray[i]);

		console.log(userEmail === emailArray[i]);
		if (userEmail === emailArray[i]) {
			result = true;
		}
	}

	if (result) {
		document.querySelector(".result").innerHTML =
			"Sei iscritto, puoi giocare!";
	} else {
		document.querySelector(".result").innerHTML =
			"Non puoi giocare perché non sei iscritto!";
	}
});
