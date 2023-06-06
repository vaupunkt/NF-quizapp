export const showAnswerButton = document.querySelectorAll(
	'[data-js="answerButton"]'
);
const answer = document.querySelectorAll('[data-js="answerBlock"]');

export function showAnswerToggle(answerButton, index) {
	answerButton.addEventListener("click", () => {
		answer[index].classList.toggle("answer--hidden");
		if (answerButton.textContent === "Hide Answer") {
			answerButton.textContent = "Show Answer";
		} else {
			answerButton.textContent = "Hide Answer";
		}
	});
}
