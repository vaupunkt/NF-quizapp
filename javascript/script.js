const showAnswerButton = document.querySelectorAll('[data-js="answerButton"]');
const answer = document.querySelectorAll('[data-js="answerBlock"]');

showAnswerButton.forEach((answerButton, index) => {
	answerButton.addEventListener("click", () => {
		answer[index].classList.toggle("answer--hidden");
		if (answerButton.textContent === "Hide Answer") {
			answerButton.textContent = "Show Answer";
		} else {
			answerButton.textContent = "Hide Answer";
		}
	});
});

const bookmarkIcons = document.querySelectorAll('[data-js="bookmarkIcon"]');

bookmarkIcons.forEach((bookmarkIcon, index) => {
	bookmarkIcon.addEventListener("click", () => {
		bookmarkIcon.classList.toggle("bookmark--saved");
	});
});
