let resultDiv = document.createElement("div");

document.querySelector(".dice-btn").addEventListener("click", function () {
	resultDiv.innerHTML = "";
	resultDiv.classList.remove("ok", "ko", "meh");
	console.log(resultDiv.className);

	const ComputerDice = Math.floor(Math.random() * 6) + 1;
	const UserDice = Math.floor(Math.random() * 6) + 1;

	if (ComputerDice > UserDice) {
		resultDiv.innerHTML = `Il Computer ha ottenuto ${ComputerDice} e tu ${UserDice}:<br>vince il Computer...`;
		resultDiv.classList.add("result", "ko");
		console.log(resultDiv.className);
	} else if (UserDice > ComputerDice) {
		resultDiv.innerHTML = `Il Computer ha ottenuto ${ComputerDice} e tu ${UserDice}:<br>Hai vinto tu!`;
		resultDiv.classList.add("result", "ok");
		console.log(resultDiv.className);
	} else {
		resultDiv.innerHTML = `Il Computer ha ottenuto ${ComputerDice} e tu ${UserDice}:<br>Pareggio.`;
		resultDiv.classList.add("result", "meh");
		console.log(resultDiv.className);
	}

	const mainContainer = document.querySelector(".container");
	mainContainer.appendChild(resultDiv);
});
