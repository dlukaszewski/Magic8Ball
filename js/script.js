const ball = document.querySelector("img");
const question = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answersArr = [
	"Tak!",
	"Nie.",
	"Może.",
	"Ciężko powiedzieć...",
	"Nie chcesz znać odpowiedzi na to pytanie... :/",
];

const checkQuestion = () => {
	if (question.value === "" || question.value === "?") {
		error.textContent = "Musisz zadać jakieś pytanie";
		answer.textContent = "";
	} else if (question.value !== "" && question.value.slice(-1) !== "?") {
		error.textContent = 'Pytanie musi być zakończkone znakiem "?"';
		answer.textContent = "";
	} else if (question.value !== "" && question.value.slice(-1) === "?") {
		error.textContent = "";
		answerQuestion();
	}
	ball.classList.remove("shake-animation");
};

const answerQuestion = () => {
	const number = Math.floor(Math.random() * 5);

	answer.innerHTML = `<span>Odpowiedź: </span> ${answersArr[number]}`;
};

const callAnimation = () => {
	ball.classList.add("shake-animation");
	setTimeout(checkQuestion, 1000);
};

ball.addEventListener("click", callAnimation);
