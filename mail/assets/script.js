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

let resultDiv = document.createElement("div");
resultDiv.innerHTML = "";
resultDiv.classList.remove("result", "ok", "ko");

document.querySelector(".btn-input").addEventListener("click", function () {
	const userEmail = document.querySelector("#email").value;
	let result = false;

	// check if the user email is present in the Array
	for (let i = 0; i < emailArray.length; i++) {
		if (userEmail === emailArray[i]) {
			result = true;
		}
	}

	const mainContainer = document.querySelector(".container");
	mainContainer.appendChild(resultDiv);

	// print the answer after checking
	if (result) {
		resultDiv.innerHTML = "Sei iscritto, puoi giocare!";
		resultDiv.classList.add("result", "ok");
	} else {
		resultDiv.innerHTML = "Non puoi giocare perché non sei iscritto!";
		resultDiv.classList.add("result", "ko");
	}
});
