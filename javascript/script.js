const showAnswerButton = document.querySelectorAll('[data-js="answerButton"]');
const answer = document.querySelectorAll('[data-js="answerBlock"]');

showAnswerButton.forEach((answerButton, index) => {
	answerButton.addEventListener("click", () => {
		answer[index].classList.toggle("answer--hidden");
	});
});
