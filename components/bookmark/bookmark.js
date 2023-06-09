import { createNewCard } from "../questioncard/questionCard.js";

export const bookmarkSection = document.querySelector(
	'[data-js="bookmarkSection"]'
);

export function bookmarkFunction(card, data) {
	const bookmarkButton = card.querySelector('[data-js="bookmarkIcon"]');
	bookmarkButton.addEventListener("click", () => {
		bookmarkButton.classList.toggle("bookmark--saved");
		const bookmarkedQuestion = createNewCard(data);
		const bookmarked = bookmarkedQuestion.querySelector(
			'[data-js="bookmarkIcon"]'
		);

		if (bookmarkButton.classList.contains("bookmark--saved")) {
			bookmarked.classList.add("bookmark--saved");
			bookmarkSection.append(bookmarkedQuestion);
		}
		bookmarked.addEventListener("click", () => {
			bookmarkedQuestion.remove();
			bookmarkButton.classList.toggle("bookmark--saved");
		});
		bookmarkButton.addEventListener("click", () => {
			bookmarkedQuestion.remove();
		});
	});
}
